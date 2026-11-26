<?php
/*
 * Contact form handler for ivoniz.com (Hostinger shared hosting, Apache + PHP).
 * The site is a static export, so this is the only server-side code: it emails
 * an enquiry from /contact to info@ivoniz.com and answers with JSON.
 *
 * Spam protection: same-site check, hidden honeypot field, minimum fill time,
 * and a per-IP limit of 5 sends per hour. Header values are stripped of line
 * breaks so they can't inject extra mail headers.
 * If this script fails, the page falls back to a pre-filled WhatsApp message.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

const TO      = 'info@ivoniz.com';
const FROM    = 'no-reply@ivoniz.com';
const HOSTS   = ['ivoniz.com', 'www.ivoniz.com', 'localhost', '127.0.0.1'];
const PER_HOUR = 5;

if (!function_exists('mb_substr')) {
    function mb_substr($s, $start, $len = null) { return substr($s, $start, $len); }
    function mb_strlen($s) { return strlen($s); }
}

function reply(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}
function clean_line(string $s, int $max): string {
    $s = trim(preg_replace('/[\r\n\t]+/', ' ', $s));
    return mb_substr($s, 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') reply(405, ['ok' => false, 'error' => 'method']);

// Same-site only (browsers always send Origin on a fetch POST).
$origin = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
$host = parse_url($origin, PHP_URL_HOST) ?: '';
if (!in_array(strtolower($host), HOSTS, true)) reply(403, ['ok' => false, 'error' => 'origin']);

// Honeypot: a hidden field real visitors never fill. Pretend success to bots.
if (!empty($_POST['website'])) reply(200, ['ok' => true]);

// Minimum fill time: the page sends the time the form was shown (ms).
$started = (int)($_POST['t'] ?? 0);
if ($started > 0 && (microtime(true) * 1000 - $started) < 3000) reply(200, ['ok' => true]);

// reCAPTCHA v3. On only when the secret file exists OUTSIDE public_html, e.g.
// /home/<user>/domains/ivoniz.com/recaptcha-secret.php containing:
//   <?php return 'YOUR_SECRET_KEY';
// (the site key goes in src/lib/recaptcha.js). Low scores and failed checks are
// rejected; the page then offers its WhatsApp / email fallback.
$secretFile = dirname(__DIR__) . '/recaptcha-secret.php';
if (is_file($secretFile)) {
    $secret = trim((string)(include $secretFile));
    if ($secret !== '') {
        $token = (string)($_POST['recaptcha'] ?? '');
        if ($token === '') reply(403, ['ok' => false, 'error' => 'captcha']);
        $payload = http_build_query(['secret' => $secret, 'response' => $token, 'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '']);
        $raw = false;
        if (function_exists('curl_init')) {
            $ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
            curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $payload, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 8]);
            $raw = curl_exec($ch);
            curl_close($ch);
        } else {
            $raw = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, stream_context_create(['http' => [
                'method' => 'POST', 'header' => "Content-Type: application/x-www-form-urlencoded\r\n", 'content' => $payload, 'timeout' => 8,
            ]]));
        }
        $v = $raw ? json_decode($raw, true) : null;
        $ok = is_array($v)
            && !empty($v['success'])
            && ($v['action'] ?? '') === 'contact'
            && (float)($v['score'] ?? 0) >= 0.5
            && in_array(strtolower((string)($v['hostname'] ?? '')), HOSTS, true);
        if (!$ok) reply(403, ['ok' => false, 'error' => 'captcha']);
    }
}

$name    = clean_line((string)($_POST['name'] ?? ''), 100);
$phone   = clean_line((string)($_POST['phone'] ?? ''), 25);
$email   = clean_line((string)($_POST['email'] ?? ''), 150);
$service = clean_line((string)($_POST['service'] ?? ''), 100);
$message = mb_substr(trim((string)($_POST['message'] ?? '')), 0, 3000);
$page    = clean_line((string)($_POST['page'] ?? ''), 200);
$location = clean_line((string)($_POST['location'] ?? ''), 100);
// Which form sent it: "contact" (contact page) or "popup" (timed lead popup).
$source  = ($_POST['source'] ?? '') === 'popup' ? 'popup' : 'contact';

if (mb_strlen($name) < 2) reply(422, ['ok' => false, 'error' => 'name']);
if (!preg_match('/^\+?[0-9 ()\-]{6,25}$/', $phone)) reply(422, ['ok' => false, 'error' => 'phone']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) reply(422, ['ok' => false, 'error' => 'email']);

// Per-IP rate limit, stored in the system temp folder.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$file = sys_get_temp_dir() . '/ivoniz_contact_' . md5($ip);
$now = time();
$hits = array_filter(
    is_file($file) ? (array)json_decode((string)file_get_contents($file), true) : [],
    fn($t) => is_int($t) && $t > $now - 3600
);
if (count($hits) >= PER_HOUR) reply(429, ['ok' => false, 'error' => 'rate']);
$hits[] = $now;
@file_put_contents($file, json_encode(array_values($hits)), LOCK_EX);

$subject = 'New website enquiry from ' . $name . ($service ? " ({$service})" : '');
$body = "New enquiry from the ivoniz.com " . ($source === 'popup' ? 'pop-up form' : 'contact form') . "\n\n"
      . "Name:    {$name}\n"
      . "Phone:   {$phone}\n"
      . "Email:   {$email}\n"
      . ($location !== '' ? "Location: {$location}\n" : '')
      . "Service: " . ($service ?: 'Not specified') . "\n"
      . "Page:    " . ($page ?: '/contact') . "\n\n"
      . "Message:\n" . ($message !== '' ? $message : '(none)') . "\n\n"
      . "Reply to this email to answer {$name} directly.\n";

$headers = implode("\r\n", [
    'From: Ivoniz Website <' . FROM . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$sent = @mail(TO, $encodedSubject, $body, $headers, '-f' . FROM);
if (!$sent) reply(502, ['ok' => false, 'error' => 'mail']);

reply(200, ['ok' => true]);
