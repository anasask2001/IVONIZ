# Ivoniz backlink system

Free-only, manual, verified. Files in this folder:

| File | What it is |
|---|---|
| `backlinks-master.csv` | The master database. Import into Google Sheets (File → Import → Upload). One row per opportunity. |
| `excluded.csv` | Sites checked and rejected, with the reason, so nobody re-adds them. |

| Batch | Checked | Rows | Focus |
|---|---|---|---|
| 1 | 26 Nov 2026 | 52 | Client sites (8 live), foundation profiles, India and agency directories, startup platforms, tech |
| 2 | 26 Nov 2026 | 17 | Kozhikode/Kerala ecosystem: CAFIT, KTX, GDG Kozhikode, WordCamp Kerala, incubators, colleges, Kerala/India media, Indian tech communities |

| 3 | 26 Nov 2026 | 21 | UAE/GCC: Shopify Partner Directory (invite-only), Kompass, expert-source platforms (Qwoted, SourceBottle), Gulf business and tech media |

| 4 | 26 Nov 2026 | 3 new + gap notes on 7 | Competitor gap (see `competitor-gap.csv`) |

Total: 93 opportunities, 18 exclusions.

**Competitor gap finding (batch 4):** for "web design company Kozhikode", "web development Kerala" and "web development Dubai", page 1 is mostly *directory category pages* (GoodFirms Kozhikode, IndiaMART Kozhikode, TechBehemoths Kozhikode, DesignRush Kochi, Clutch UAE). Competitors (Acodez, Wosag Tech, Mentegoz, Tryloop…) are listed on them; Ivoniz is on none. So the fastest free win is completing those profiles with the right city and service categories, and getting client reviews on them. UAE/GCC finding: almost every UAE directory needs a UAE address, so Gulf links come from **client sites, expert quotes in Gulf media, and partner directories**, not listings. Batch 2 is mostly **earned** links (talks, workshops, real news, association membership). These take effort but are the most relevant local links available.

---

## 1. Honest outlook on "500 backlinks"

500 links from **different, relevant websites** is not realistic for a 13-client agency in 90 days using only free methods. What is realistic:

| Source | Realistic count | Notes |
|---|---|---|
| Client sites (credit + case-study mentions) | 13–26 | Grows by one or two with every new project. The most relevant links you can get. |
| Foundation profiles (maps, LinkedIn, GitHub, Behance…) | 15–25 | Mostly nofollow or citations; they build trust and brand searches, not rankings on their own. |
| Agency directories (Clutch, GoodFirms, Sortlist…) | 8–15 | High relevance. Reviews matter more than the link. |
| India / Kerala directories | 10–20 | Only the real ones. Hundreds of "free directories" exist; most are spam and are excluded. |
| UAE / GCC directories | 3–8 | Most UAE directories need a UAE address. Ivoniz has none, so many are excluded on purpose. |
| Tech communities and articles (DEV, Hashnode, GitHub repos) | 10–30 | Comes from publishing useful things, over months. |
| Editorial (guest articles, founder stories, showcases, local press) | 5–20 | Slow, not guaranteed, worth the most. |

**Expected after 90 days of steady work: roughly 60–120 live links from about 50–90 sites.** 500 is a multi-year total, reached mainly through content and new client work. This file counts each link only once it's verified live.

---

## 2. Fix first (found during batch 1)

1. **docviewbs.com is down**. It shows "Website Temporarily Unavailable", but /works still lists it. Ask the client, or hide it from the portfolio until it's back.
2. **Rivaura Hospital** calls you "Ivoniz Pvt Ltd" in its footer aria-label and schema. Change both to "Ivoniz LLP".
3. **Opiz Global** shows "Developed by" + your logo with no link. With permission, wrap the logo in `<a href="https://ivoniz.com/">`.
4. **LinkedIn**: `linkedin.com/company/ivoniz-llp/` (in the site's schema `sameAs`) returned 404 to a logged-out request. Open it in a private window; if the slug is different, fix `src/lib/schema.js`.
5. **6 client sites have no credit** (EduGems, Feraro, Technical Trade, CapitalCore, Gaming Qatar, Docview). Ask each client first (template A below).

---

## 3. Quality scoring (1–10)

Add points, cap at 10:

| Factor | Points |
|---|---|
| Industry relevance (web/IT/marketing/business) | 0–3 |
| Market relevance (Kerala, India, UAE/GCC) | 0–2 |
| Real site: real audience, maintained, not a link farm | 0–2 |
| Editorial control (a human reviews what's listed) | 0–1 |
| Link placement visible to real users | 0–1 |
| Brings leads or trust on its own (reviews, buyers browse it) | 0–1 |

**9–10** do first · **7–8** high · **5–6** acceptable · **3–4** only if time · **1–2** reject.

**Reject automatically:** sites that sell links or "DA packages", directories with no editorial check and thousands of unrelated outbound links, scraped content, PBNs, anything asking for payment to list, anything needing a UAE address you don't have, and anything needing false information.

---

## 4. Anchor text

Let links look like what a real person would write. Target mix across all links:

| Type | Share | Examples |
|---|---|---|
| Brand | ~50% | Ivoniz · Ivoniz LLP · Website by Ivoniz |
| URL | ~25% | ivoniz.com · https://ivoniz.com/ |
| Natural / descriptive | ~20% | "the team that built our website" · "this guide on website costs in Dubai" · "a web design team in Kozhikode" |
| Partial keyword | ≤5% | "web development in Calicut" · "Shopify store development for UAE businesses" (only in editorial articles, where it fits the sentence) |

Client footer credits: always brand ("Website by Ivoniz"). Never put keyword phrases in footers; links repeated in templates across many sites with keyword anchors are something Google's spam policies specifically call out.

Market-appropriate natural examples:
- Kerala: "Ivoniz, a web team at HiLITE Business Park, Kozhikode"
- India: "Ivoniz LLP (ivoniz.com)"
- UAE/GCC: "our site was built by Ivoniz, a team in India that works in Gulf hours"

---

## 5. Free tools

| Tool | Use | Free? |
|---|---|---|
| Google Sheets | Master database, status, weekly counts (`=COUNTIF(P:P,"Live")`) | Free |
| Google Search | Prospecting with operators (section 8) | Free |
| Google Search Console → Links | Confirms which linking sites Google has found. The final check that a link "counts" | Free; data lags by days/weeks |
| Google Alerts | Alerts for "Ivoniz" mentions without links (ask for a link) | Free |
| Google Analytics 4 → Referrals | Shows which links send visitors and leads | Free |
| Google Business Profile | Local citations and posts | Free |
| Bing Webmaster Tools → Backlinks | Second backlink view, including competitor domains | Free (account needed) |
| Ubersuggest (your account) | Competitor backlink lists for the gap analysis | Free tier: about 3 reports a day |
| Browser "View source" / DevTools | Checks `rel="nofollow"`, `rel="sponsored"`, `noindex` on the page with your link | Free |
| Claude | Drafting descriptions and outreach, checking pages, updating the CSV | Free to you here |

No paid tool is needed.

---

## 6. Workflow (one opportunity, start to finish)

1. **Find** with search operators, competitor gap or client list → add a row, status `Not Started`.
2. **Verify**: open the site. Is it live, maintained and relevant? Is there a free option, and where exactly? Can a site outside the UAE list there? Anything uncertain gets `UNVERIFIED - MANUAL CHECK REQUIRED`.
3. **Score** (section 3). Below 5: move to `excluded.csv` with the reason.
4. **Prepare**: use the same business details everywhere (name, address, phone, website, description; section 9).
5. **Submit or send outreach**, one at a time, following each site's rules → status `Submitted`, fill in `Date Submitted`.
6. **Verify the link** (section 7) → status `Live` + `Backlink URL` + `Anchor Text` + `Backlink Type`, or `Rejected` + reason.
7. **Re-check every 90 days**; links disappear.
8. **Weekly report**: new rows, submitted, live, rejected, referral visits (GA4), leads that came from referrals.

Automation is only for research, drafting and tracking. Submissions and emails are sent by a person, one by one.

---

## 7. Verification method

A link counts as **Live** only when all of these are true:

1. You open the exact page in a private window and see the link.
2. View source: the `<a href>` points to `ivoniz.com` (or `www.ivoniz.com`, which 301-redirects correctly; checked 26 Nov 2026).
3. Note `rel`: none = followed; `nofollow` / `ugc` / `sponsored` = record as such.
4. The page isn't `noindex` (look for `<meta name="robots" content="noindex">`).
5. Later: the domain appears in Search Console → Links → Top linking sites.

Record the date checked. Never mark a link Live from a confirmation email alone.

---

## 8. Finding more (free search operators)

```
"web design" Kozhikode -site:ivoniz.com
intitle:"submit" "agency" directory India
"list your agency" free
"write for us" "web development" India
"write for us" (marketing OR "small business") UAE
"top web development companies in Kerala"   (lists you can ask to be added to, after checking they're editorial, not paid)
inurl:resources "small business" Kerala
"Ivoniz" -site:ivoniz.com                     (unlinked mentions)
```

---

## 9. Standard business details (copy exactly)

- **Name:** Ivoniz LLP
- **Address:** 7th Floor, Phase 1, HiLITE Business Park, Kozhikode, Kerala 673014, India
- **Phone:** +91 96457 60023
- **Email:** info@ivoniz.com
- **Website:** https://ivoniz.com/
- **Short description (160 chars):** Web design, app development and digital marketing team in Kozhikode, Kerala, building websites and online stores for businesses in Kerala and the Gulf.
- **Long description:** Ivoniz LLP designs and builds websites, online stores, web portals and mobile apps, and runs SEO and social media for businesses. The team works from HiLITE Business Park in Kozhikode, Kerala, with clients across Kerala and, remotely, in the UAE, Saudi Arabia and Qatar. Live client work is listed at ivoniz.com/works.

Never add a UAE address, invented years, staff counts or awards.

---

## 10. Outreach templates

**A. Client credit (WhatsApp or email, to existing clients)**
> Hi [name], hope [business] is doing well. A small request: could we add a "Website by Ivoniz" line in your site's footer, linking to our site? It helps new clients find our work. It's one line, we'll do it, and we can remove it any time you like. Happy to skip it if you'd rather not.

**B. Review request (Clutch / GoodFirms / Google)**
> Hi [name], we're building our profile on Clutch, which checks reviews by phone or form. Would you be willing to share a short review of the [website/store] project? It takes about 10 minutes. Here's the link: [link]. Honest feedback is welcome, including what we could do better.

**C. Guest article pitch (only sites that publish contributor articles for free)**
> Subject: Article idea for [site]: [specific title]
> Hi [editor name], I read your piece on [their article] and noticed you cover [topic]. I run a web team in Kozhikode that builds sites for Kerala and Gulf businesses. I'd like to write "[title]" for your readers. Outline: [3 bullets]. It would be original, with no promotional content; a short author bio is all I'd ask for. Would that fit your plans?
> Muhammed Anas, Founder, Ivoniz LLP

**D. Unlinked mention**
> Hi [name], thanks for mentioning Ivoniz in [article]. Would you mind linking the name to ivoniz.com so readers can find us? Thanks either way.

**E. Founder story (YourStory / local press)**
> Subject: Kozhikode team building websites for Gulf businesses, remotely
> Hi [name], a story idea: [2–3 true sentences on what's different: a Kerala team, Gulf clients, how the remote work runs]. I can share client sites you can verify and answer questions on a call. No sponsored placement; editorial only.

Personalise every message. No mass mail-merge.

---

## 11. 90-day plan (realistic weekly targets)

| Week | Focus | Research | Submissions | Outreach | Expected live by week end (cumulative) |
|---|---|---|---|---|---|
| 1 | Fix section 2 items; Bing Places, Apple, Foursquare, LinkedIn check | 10 | 4 | 6 client requests | 9–10 |
| 2 | Clutch, GoodFirms, Sortlist, DesignRush profiles; client review requests | 10 | 4 | 5 review requests | 11–13 |
| 3 | Justdial, IndiaMART, ExportersIndia, TradeIndia; Crunchbase, Behance, Dribbble | 15 | 7 | – | 15–19 |
| 4 | GitHub org + first useful repo; KSUM / Startup India eligibility | 15 | 3 | – | 17–22 |
| 5 | Batch 2 research: Kerala and India (associations, events, local media) | 25 | 3 | 3 | 19–25 |
| 6 | Batch 3 research: UAE/GCC options that accept non-UAE companies | 25 | 3 | 3 | 21–28 |
| 7 | Cross-post 2 blog guides to DEV/Hashnode (canonical to ivoniz.com) | 10 | 2 | – | 23–31 |
| 8 | Competitor gap (section 12) for 3 competitors | 30 | 3 | 5 | 25–34 |
| 9 | Guest article pitches (3–5 sites) | 10 | – | 5 | 26–36 |
| 10 | Showcase submissions (Next.js showcase if open, galleries) | 5 | 3 | – | 27–38 |
| 11 | Founder story pitches; unlinked mentions | 10 | – | 5 | 28–40 |
| 12 | Re-verify all Live links; follow up on everything pending | – | – | follow-ups | 30–45 |
| 13 | Report; plan the next quarter around content assets | – | – | – | – |

**KPIs each week:** rows added · submitted · live (verified) · rejected · referral sessions (GA4) · leads from referrals · new linking domains in Search Console.
**Quality control:** no row goes Live without section 7; no listing has details different from section 9; nothing paid.

Rankings: no promises. Links help over months, alongside content and technical work already done.

---

## 12. Competitor backlink gap (method; data in a later batch)

Pick 3–5 competitors that actually rank for "web design company Kozhikode", "website development company in Dubai" etc. (search in a private window). Then:

1. Ubersuggest → Backlinks for each competitor (free tier, ~3 reports a day).
2. Bing Webmaster Tools → Backlinks → compare domains.
3. Keep only sites where Ivoniz has a legitimate free route: directories, associations, communities, articles. Skip anything that was paid, sponsored or a footer credit on a competitor's client site.
4. Add them as rows with `Source: competitor gap (name)`.

This needs your Ubersuggest daily limit, so it runs as its own batch.

---

## 13. Content that earns links

| Asset | Exists? | Who links to it | Outreach |
|---|---|---|---|
| Website development cost in Kerala | Yes | Kerala business blogs, startup forums, college/incubator resource pages | Offer it to KSUM incubators and Kerala business groups as a free reference |
| Website development cost in Dubai & UAE | Yes (blog) | UAE SME blogs, business-setup consultants' resource pages | Business-setup firms often keep "launching your company" resource lists |
| How to choose a web design company in Dubai | Yes (blog) | Same as above | Same |
| App development cost in Kerala | Yes | Startup communities | KSUM, Startup India community |
| UAE business website launch checklist (domain, VAT, Arabic, payments, PDPL) | Planned (blog B-series) | Business-setup consultancies, free zones' SME blogs | Strongest UAE link asset; build it carefully from official sources |
| Free website audit checklist (downloadable) | Not yet | Small-business groups | Share in communities where self-promotion is allowed |
| Open-source Next.js static-export + Apache starter (GitHub) | Not yet | Developers | DEV/Hashnode write-up |
| Client case studies | Yes (/works) | The clients themselves | Ask clients to link their case study from their About page |

Each asset links internally to its matching service page (already done for the cost guides), so links it earns pass value to the pages that bring leads.
