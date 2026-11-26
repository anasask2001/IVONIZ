/*
 * Google reCAPTCHA v3 (invisible: no puzzle, a score checked on the server).
 *
 * To switch it on:
 *  1. Create a v3 key for ivoniz.com at https://www.google.com/recaptcha/admin
 *  2. Paste the SITE key below (it is public, safe to commit).
 *  3. Put the SECRET key in recaptcha-secret.php OUTSIDE public_html on
 *     Hostinger (see public/contact-mail.php). Never commit the secret.
 * While RECAPTCHA_SITE_KEY is empty, forms work exactly as before.
 *
 * The script loads only when a form is actually sent, so it costs nothing
 * on page load.
 */
export const RECAPTCHA_SITE_KEY = "";

let loading = null;

function loadScript() {
  if (loading) return loading;
  loading = new Promise((resolve, reject) => {
    if (window.grecaptcha?.execute) return resolve(window.grecaptcha);
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
    s.async = true;
    s.onload = () => window.grecaptcha.ready(() => resolve(window.grecaptcha));
    s.onerror = () => { loading = null; reject(new Error("recaptcha failed to load")); };
    document.head.appendChild(s);
  });
  return loading;
}

/* Returns a token for this action, or "" when reCAPTCHA is off or can't load
   (the server then decides: with a secret configured it rejects, so the form
   shows its WhatsApp / email fallback and the lead is still not lost). */
export async function getRecaptchaToken(action) {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") return "";
  try {
    const g = await loadScript();
    return await g.execute(RECAPTCHA_SITE_KEY, { action });
  } catch {
    return "";
  }
}

export const recaptchaEnabled = () => Boolean(RECAPTCHA_SITE_KEY);
