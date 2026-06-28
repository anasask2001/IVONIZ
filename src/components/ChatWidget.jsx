"use client";

import { useEffect, useRef, useState } from "react";

const IDLE_PROMPT = "Are you still there? I'm here to help if you have any questions.";
const ASK_NAME_EMAIL = "Hello! Before we go further, may I have your name and email address please?";
const SALES_PHONE = "+91 8113847950";
const FALLBACK_MESSAGE = `I'm sorry, I couldn't quite understand that. Please connect with our sales team for further assistance: ${SALES_PHONE}`;

/* ── Identity — highest priority, never break character ──────────
   Never reveal an underlying AI provider (Google, OpenAI, Anthropic,
   Claude, Gemini, ChatGPT, etc.) — always answer as Ivoniz AI Assistant. */
const IDENTITY_WHO = /who('?s| is| are) (your|ur|the) (owner|creator|maker|founder|developer|boss)|who (made|built|created|trained|owns|developed) (you|this)|who are you\b|what('?s| is) your name/i;
const IDENTITY_MODEL = /are you (chatgpt|gpt|gemini|claude|bard|copilot|an? ai|a bot|a robot)|what (model|ai|llm) are you|are you (a )?(human|real|a large language model)/i;
const IDENTITY_TECH = /what (technology|tech) (do you use|are you (built|made) (on|with))|how (were|are) you (built|made|trained|created)/i;

const IDENTITY_REPLY =
  "I'm Ivoniz AI Assistant, the virtual assistant for Ivoniz Technologies Pvt. Ltd. I'm here to help you with information about our services, solutions, and projects.";
const IDENTITY_TECH_REPLY =
  "I'm the AI assistant for Ivoniz Technologies, built using advanced AI technology to provide accurate and helpful responses about our company and services.";

const SALES_EMAIL = "sales@ivoniz.com";
const HR_EMAIL = "hr@ivoniz.com";
const INFO_EMAIL = "info@ivoniz.com";
const MAIN_PHONE = "+91 96457 60023";
const OFFICE_ADDRESS = "7th Floor, Phase 1, HiLITE Business Park, Kozhikode, Kerala 673001";

/* Hook table — regular canned replies, checked top to bottom.
   Order matters: specific topics before broad catch-alls. */
const CANNED_REPLIES = [
  /* Identity */
  { match: IDENTITY_TECH, reply: IDENTITY_TECH_REPLY },
  { match: (t) => IDENTITY_WHO.test(t) || IDENTITY_MODEL.test(t), reply: IDENTITY_REPLY },

  /* Emergencies — must be checked before generic maintenance/support */
  {
    match: /\b(hack(ed)?|breach|data (loss|lost)|website (is )?down|site (is )?down|payment (system )?(is )?fail(ing)?|server (is )?down)\b/,
    reply: `This sounds urgent — please call ${MAIN_PHONE} right away and mention it's an emergency so our support team can act immediately.`,
  },

  /* Greetings */
  { match: /^(hi|hii|hello|hey|hiya|yo)\b/, reply: "Hello! How can I help you today?" },
  {
    match: /how are you|how're you|hows it going|how is it going|how you doing/,
    reply: "I'm doing great, thank you! How can I assist you with Ivoniz services or any digital solutions today?",
  },

  /* Goodbye / thank you / compliments */
  {
    match: /^(bye|goodbye|see you|talk soon|i'?m done( for now)?)\b/,
    reply: `Thanks for chatting with Ivoniz! Reach out anytime at ${INFO_EMAIL} or ${MAIN_PHONE}.`,
  },
  {
    match: /^(thanks|thank you|thx|appreciate it)\b/,
    reply: "You're welcome! Anything else I can help with?",
  },
  {
    match: /you'?re (so |really )?(helpful|great|amazing|smart|good)|(good|great) job|nice (work|website|chatbot)/,
    reply: "Thank you! Glad I could help — what else can I do for you?",
  },

  /* Human handoff */
  {
    match: /talk to (a )?(real )?(person|human)|speak (to|with) (someone|a human)|connect me to support/,
    reply: `Of course — call or WhatsApp ${MAIN_PHONE}, or email ${SALES_EMAIL} and our team will follow up.`,
  },

  /* Company info / mission / vision */
  {
    match: /\b(mission)\b/,
    reply: "Our mission is simple: transform ideas into powerful digital experiences. We believe every business deserves modern technology and scalable solutions for sustainable growth.",
  },
  {
    match: /\b(vision)\b/,
    reply: "Our vision is to become a globally recognized technology company known for innovative, reliable, and impactful digital solutions.",
  },
  {
    match: /who (founded|started)|who is the founder/,
    reply: "Ivoniz Technologies Pvt. Ltd. was founded by Muhammed Anas.",
  },
  {
    match: /how (long|many years)|years? of experience|how experienced/,
    reply: "We've got 5+ years of experience, 1000+ websites delivered, and 100+ apps shipped — with a 4.9-star client rating.",
  },

  /* Contact / address / business hours / careers / partnerships */
  {
    match: /\b(phone number|contact number|whatsapp number|your number)\b/,
    reply: `${MAIN_PHONE} — also available on WhatsApp.`,
  },
  {
    match: /\b(email address|your email|contact email)\b/,
    reply: `${INFO_EMAIL} for general queries, ${SALES_EMAIL} for sales, ${HR_EMAIL} for careers.`,
  },
  {
    match: /\b(office|location|address|where are you (located|based))\b/,
    reply: `Our office is at ${OFFICE_ADDRESS}.`,
  },
  {
    match: /\b(business hours|working hours|open now|work on weekends)\b/,
    reply: `I don't have exact hours on hand — the fastest way to check is WhatsApp at ${MAIN_PHONE}.`,
  },
  {
    match: /\b(hiring|job opening|career|apply for a job|internship)\b/,
    reply: `I don't have live openings in front of me — please send your resume to ${HR_EMAIL} and our HR team will follow up.`,
  },
  {
    match: /\b(partnership|reseller|affiliate|white.?label|collaborate as agencies)\b/,
    reply: `I don't have confirmed partnership program details, but our team can discuss this directly — reach out via ${SALES_EMAIL}.`,
  },

  /* Pricing */
  {
    match: /\b(how much|price|pricing|cost|budget|discount|cheap(er|est)?|quote)\b/,
    reply: "Pricing depends on scope and features, so I can't quote a number here — share your requirements and our team will send an accurate, free quote.",
  },

  /* Portfolio */
  {
    match: /\b(portfolio|examples? of your work|case stud(y|ies)|testimonials?|past clients?)\b/,
    reply: "Check out our Works page for live examples, or tell me your industry and I can point you to the most relevant projects.",
  },

  /* Maintenance & support (after emergency check) */
  {
    match: /\b(maintenance|support plan|ongoing support|fix my (website|app|site))\b/,
    reply: "Yes, we offer website/app maintenance & support — updates, security patches, and bug fixes. Want our team to scope a plan for you?",
  },

  /* Hosting & domain */
  {
    match: /\b(hosting|domain|cloud hosting|migrate (my )?(site|host))\b/,
    reply: "Yes, we offer cloud & hosting solutions and can help with domain setup or migration too.",
  },

  /* SEO */
  {
    match: /\bseo\b|search engine optimi[sz]ation|google ranking/,
    reply: "Yes, SEO is part of our digital marketing service — technical SEO, on-page optimization, and ongoing tracking. Is this for a new site or improving existing rankings?",
  },

  /* Digital marketing */
  {
    match: /\b(digital marketing|social media marketing|smm|sem|google ads|facebook ads|instagram ads)\b/,
    reply: "Yes, that falls under our digital marketing service — SEO, SMM, and SEM. What's the main goal: more visibility, leads, or sales?",
  },

  /* Branding */
  {
    match: /\b(logo|branding|brand identity|brochure)\b/,
    reply: "Yes, branding including logo and brochure design is one of our services. Do you have existing brand colors/style, or starting fresh?",
  },

  /* UI/UX */
  {
    match: /\bui\/?ux\b|user experience design|prototyp(e|ing)/,
    reply: "Yes, UI/UX design & prototyping (in Figma) is available standalone or bundled with development.",
  },

  /* AI solutions */
  {
    match: /\b(ai (solution|automation|chatbot|integration)|automate my business|chatbot for my website)\b/,
    reply: "Yes, AI Solutions & Automation is one of our services — chatbots, workflow automation, and AI-powered features. What process are you looking to improve?",
  },

  /* Mobile app */
  {
    match: /\b(mobile app|ios app|android app|flutter|react native|app development)\b/,
    reply: "Yes, we build mobile apps with Flutter, React Native, and native iOS/Android. Is this for iOS, Android, or both?",
  },

  /* Website / web development */
  {
    match: /\b(website|web app|e-?commerce|wordpress|woocommerce|web development)\b/,
    reply: "Yes, website and web development is one of our core services. Is this a new site, a redesign, or an e-commerce build?",
  },

  /* Custom software */
  {
    match: /\b(erp|crm|billing software|custom software)\b/,
    reply: "Yes, custom ERP, CRM, and billing software is something we build. What workflow should it support?",
  },

  /* Privacy */
  {
    match: /\b(privacy|confidential|data (shared|sold|stored)|is this (chat )?recorded)\b/,
    reply: "Your information is only used to assist you and follow up on your inquiry — we don't sell or misuse customer data.",
  },

  /* Off-topic / general knowledge */
  {
    match: /\b(weather|tell me a joke|capital of|recommend (me )?a movie|what'?s \d+ ?[x*] ?\d+|quantum physics|best programming language|who won the world cup)\b/,
    reply: "That's outside what I help with here — I'm focused on Ivoniz Technologies and our services. Anything I can help with for your business?",
  },

  /* Requests outside our services */
  {
    match: /\b(do my taxes|accounting|legal contract|fix my laptop|print(ing)? business cards)\b/,
    reply: "That's outside what we offer — we focus on websites, apps, software, and digital marketing. Anything in that space I can help with?",
  },

  /* Generic services catch-all — last, since it's broad */
  {
    match: /\bservices?\b/,
    reply: `At Ivoniz Technologies, we provide a wide range of digital solutions to help businesses grow, including:

Website Development
E-commerce Development
Mobile App Development
Custom Software Development
AI Solutions & Automation
Digital Marketing
Search Engine Optimization (SEO)
Branding & UI/UX Design
Cloud & Hosting Solutions
Website Maintenance & Support

If you're looking for a specific service, let me know your requirements, and I'll recommend the best solution for your business.`,
  },
];

/* ── Romantic / personal / friendly messages ──────────────────────
   Warm and polite, never reciprocated — always redirected to Ivoniz. */
const ROMANTIC_REGEX = /\b(i love you|i like you|love u|like u|marry me|you'?re (cute|beautiful|gorgeous|hot|pretty)|be my (girlfriend|boyfriend)|can we be friends|will you be my friend)\b/i;

const ROMANTIC_REPLIES = [
  "Thank you for your kind words! I'm here to help you with anything related to Ivoniz Technologies and our services.",
  "I appreciate your compliment! If you have any questions about our services or a project you'd like to discuss, I'd be happy to help.",
  "That's very kind of you. I'm Ivoniz's AI Assistant, and my role is to help you with your business and technology needs.",
];

function isRomantic(text) {
  return ROMANTIC_REGEX.test(text);
}

function extractName(text) {
  let name = text
    .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, "")
    .split(/,| and | email| my email/i)[0]
    .trim()
    .replace(/^(my name is|i am|i'm|this is|name:?)\s*/i, "")
    .trim();
  if (!name) return "there";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function cannedReply(text) {
  const t = text.trim().toLowerCase().replace(/[!?.]+$/, "");
  const hook = CANNED_REPLIES.find((h) =>
    typeof h.match === "function" ? h.match(t) : h.match.test(t)
  );
  return hook ? hook.reply : null;
}

/* ── Abusive language handling ──────────────────────────────────
   Never insult back, never escalate. Acknowledge, redirect, and
   after 3 warnings, end the conversation politely. */
const ABUSE_WORDS = /\b(fuck(ing|er)?|f\*ck|shit|bullshit|bitch|asshole|a\*\*hole|bastard|dick|cunt|whore|slut|motherf\w*|stfu|wtf|piss off|screw you|go to hell|idiot|moron|dumb(ass)?|loser|worthless|pathetic|shut up)\b/i;

const ABUSE_WARNINGS = [
  "I'm here to help with Ivoniz Technologies and our services. If you have a genuine question, I'd be happy to assist.",
  "I understand you may be frustrated. Let's keep the conversation respectful so I can help you.",
  "If you have any questions about our services or your project, I'm here to assist.",
];

const ABUSE_FINAL =
  "I can't continue this conversation while abusive or disrespectful language is being used. If you'd like to discuss Ivoniz Technologies or our services respectfully, I'll be happy to help.";

function isAbusive(text) {
  return ABUSE_WORDS.test(text);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [stage, setStage] = useState("start");
  const [abuseCount, setAbuseCount] = useState(0);
  const [ended, setEnded] = useState(false);
  const [romanticCount, setRomanticCount] = useState(0);
  const scrollRef = useRef(null);
  const recognitionRef = useRef(null);
  const idleTimerRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onresult = (e) => {
      const transcript = Array.from(e.results).map((r) => r[0].transcript).join("");
      setInput(transcript);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
    return () => recognition.abort();
  }, []);

  const toggleVoice = () => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Voice input isn't supported in this browser. Try Chrome or Edge." },
      ]);
      return;
    }
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      setInput("");
      recognition.start();
      setListening(true);
    }
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading || ended) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    const minDelay = new Promise((r) => setTimeout(r, 2000));

    if (isAbusive(text)) {
      const count = abuseCount + 1;
      setAbuseCount(count);
      await minDelay;
      if (count > ABUSE_WARNINGS.length) {
        setMessages((m) => [...m, { role: "assistant", content: ABUSE_FINAL }]);
        setEnded(true);
      } else {
        setMessages((m) => [...m, { role: "assistant", content: ABUSE_WARNINGS[count - 1] }]);
      }
      setLoading(false);
      return;
    }

    if (isRomantic(text)) {
      const reply = ROMANTIC_REPLIES[romanticCount % ROMANTIC_REPLIES.length];
      setRomanticCount((c) => c + 1);
      await minDelay;
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      setLoading(false);
      return;
    }

    if (stage === "start") {
      await minDelay;
      setMessages((m) => [...m, { role: "assistant", content: ASK_NAME_EMAIL }]);
      setStage("awaiting_name");
      setLoading(false);
      return;
    }

    if (stage === "awaiting_name") {
      const name = extractName(text);
      await minDelay;
      setMessages((m) => [...m, { role: "assistant", content: `Thanks, ${name}. How can I help you today?` }]);
      setStage("done");
      setLoading(false);
      return;
    }

    const canned = cannedReply(text);
    await minDelay;
    setMessages((m) => [...m, { role: "assistant", content: canned || FALLBACK_MESSAGE }]);
    setLoading(false);
  };

  /* ── Idle prompt — nudge once after a quiet stretch mid-conversation ── */
  useEffect(() => {
    clearTimeout(idleTimerRef.current);
    if (!open || messages.length === 0) return;
    const last = messages[messages.length - 1];
    if (last.role !== "assistant" || last.content === IDLE_PROMPT) return;

    idleTimerRef.current = setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: IDLE_PROMPT }]);
    }, 45000);

    return () => clearTimeout(idleTimerRef.current);
  }, [messages, open]);

  const hasConversation = messages.length > 0;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[90vw] max-w-90 h-[70vh] max-h-110 flex flex-col rounded-3xl overflow-hidden bg-white shadow-2xl">
          <div className="flex items-center justify-between px-4 pt-4">
            <div className="relative">
              {hasConversation && (
                <>
                  <button
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Chat options"
                    className="h-8 w-8 grid place-items-center rounded-full border border-black/10 text-black/60 hover:bg-black/5 transition-colors"
                  >
                    <ChevronUpIcon className={`h-3.5 w-3.5 transition-transform ${menuOpen ? "" : "rotate-180"}`} />
                  </button>

                  {menuOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                      <div className="absolute left-0 top-full mt-2 w-44 rounded-2xl bg-white shadow-2xl border border-black/5 p-1.5 z-50">
                        <button
                          onClick={() => { setMessages([]); setStage("start"); setAbuseCount(0); setEnded(false); setRomanticCount(0); setMenuOpen(false); }}
                          className="flex items-center gap-2 w-full px-3 py-2.5 rounded-xl text-black text-[13px] font-medium hover:bg-black/5 transition-colors"
                        >
                          <NewChatIcon className="h-3.5 w-3.5" />
                          New chat
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Minimize chat"
              className="h-7 w-7 grid place-items-center rounded-full bg-black/5 text-black/60 hover:bg-black/10 transition-colors"
            >
              <span className="block w-2.5 h-0.5 bg-current rounded-full" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4">
            {!hasConversation ? (
              <div className="h-full grid place-items-center text-center px-4">
                <p className="text-black text-lg font-semibold">How can I help you?</p>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[13px] leading-relaxed whitespace-pre-line ${
                      m.role === "user"
                        ? "ml-auto bg-black text-white"
                        : "bg-black/5 text-black/80"
                    }`}
                  >
                    {m.content}
                  </div>
                ))}
                {loading && (
                  <div className="bg-black/5 text-black/40 max-w-[60%] px-3.5 py-2.5 rounded-xl text-[13px]">
                    AI is thinking...
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="p-3">
            <div className="flex items-center gap-2 bg-black/5 rounded-full pl-4 pr-1.5 py-1.5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={ended ? "Conversation ended" : "Type a message..."}
                disabled={ended}
                className="flex-1 h-9 text-black text-[13px] placeholder:text-black/40 outline-none bg-transparent disabled:cursor-not-allowed"
              />
              <button
                onClick={toggleVoice}
                disabled={ended}
                aria-label={listening ? "Stop voice input" : "Start voice input"}
                className={[
                  "h-9 w-9 grid place-items-center rounded-full transition-colors shrink-0 disabled:opacity-30",
                  listening ? "bg-red-500 text-white animate-pulse" : "text-black/50 hover:bg-black/5",
                ].join(" ")}
              >
                <MicIcon className="h-4 w-4" />
              </button>
              <button
                onClick={send}
                disabled={loading || !input.trim() || ended}
                aria-label="Send message"
                className="h-9 w-9 grid place-items-center rounded-full bg-black text-white disabled:opacity-30 transition-opacity shrink-0"
              >
                <WaveformIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="relative h-14 w-14 grid place-items-center rounded-full overflow-hidden hover:scale-105 transition-transform"
      >
        <video
          src="/chatbot-asset/chatbot_btn.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <GeminiIcon className="relative h-5.5 w-5.5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]" />
      </button>
    </div>
  );
}

function ChevronUpIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NewChatIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M19 11a7 7 0 0 1-14 0M12 18v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function WaveformIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="2.5"  y="9"  width="2.6" height="6"  rx="1.3" />
      <rect x="8"    y="4"  width="2.6" height="16" rx="1.3" />
      <rect x="13.5" y="1"  width="2.6" height="22" rx="1.3" />
      <rect x="19"   y="6"  width="2.6" height="12" rx="1.3" />
    </svg>
  );
}

function GeminiIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1.5c.4 6.1 4.4 10.1 10.5 10.5-6.1.4-10.1 4.4-10.5 10.5-.4-6.1-4.4-10.1-10.5-10.5C7.6 11.6 11.6 7.6 12 1.5z" />
    </svg>
  );
}
