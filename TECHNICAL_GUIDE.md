# Smooth Sports Gear — Technical Guide

**For:** Developers taking over or maintaining this project
**Account owner / billing contact:** Craig Sakuma — craig.sakuma@gmail.com

---

## Stack Overview

| Layer | Technology | Notes |
|---|---|---|
| Site | Plain HTML / CSS / JS | No framework, no build step |
| Hosting | Vercel | Static deployment |
| Domain | Porkbun | `smoothsportsgear.com` |
| Contact form | Formspree | Free tier |
| Repo | GitHub | See below |

---

## GitHub Repository

**URL:** https://github.com/craigsakuma/smooth-sports-gear
**Branch:** `main` (only branch — direct deploys from here)

Clone:
```bash
git clone https://github.com/craigsakuma/smooth-sports-gear.git
```

No build step required. The repo contains raw static files served directly by Vercel.

---

## Vercel

**Account holder:** Craig Sakuma (craig.sakuma@gmail.com)
**Project:** `smooth-sports-gear` under Craig's personal account
**Live URL:** https://www.smoothsportsgear.com

### Deployment

Currently deployed manually via the Vercel CLI:

```bash
vercel --prod
```

### Auto-deploy ✅

Connected to GitHub. Every `git push origin main` triggers a production deploy automatically. The `vercel --prod` CLI command is no longer needed.

### Vercel config

`vercel.json` in the repo root:
```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

---

## Domain — Porkbun

**Registrar:** [Porkbun](https://porkbun.com)
**Domain:** `smoothsportsgear.com`
**Registered:** February 25, 2026
**Renewal due:** February 25, 2027 (annual — do not let this lapse)
**Account holder:** Craig Sakuma (craig.sakuma@gmail.com)

### DNS is pointed to Vercel

Porkbun DNS records are configured to point to Vercel's servers. If the domain ever stops working, check:

1. Porkbun → DNS settings — A record should point to `76.76.21.21` (Vercel)
2. Vercel → Project → Settings → Domains — `smoothsportsgear.com` should show as **Valid Configuration**

### Re-adding the domain (if needed)

In Vercel dashboard: Project → Settings → Domains → Add `smoothsportsgear.com`
Vercel will provide the DNS values to enter at Porkbun.

---

## Contact Form — Formspree

**Service:** [Formspree](https://formspree.io)
**Status:** ⚠️ Not yet configured — `YOUR_FORM_ID` placeholder still in `index.html`

### Setup

1. Create a Formspree account (recommend using Tom's email so he receives submissions directly)
2. Create a new form — copy the form ID (e.g. `xpwzrjkq`)
3. In `index.html`, find and replace:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

### Free tier limitations

The Formspree free plan allows **50 submissions per month**. This is sufficient for a local business at current volume. Limitations to be aware of:

| Feature | Free | Paid ($10/mo) |
|---|---|---|
| Submissions/month | 50 | 1,000+ |
| Spam filtering | Basic | reCAPTCHA / hCaptcha |
| Email notifications | ✅ | ✅ |
| File uploads | ❌ | ✅ |
| Custom redirect after submit | ❌ | ✅ |
| Data export | ❌ | ✅ |

The form currently handles submission entirely client-side via `fetch()` in `script.js` — no server required. On success it shows a success message in-page without a redirect. This works on the free plan.

If volume exceeds 50/month or spam becomes an issue, upgrade to paid or migrate to a self-hosted alternative (e.g. [web3forms.com](https://web3forms.com), which offers 250 free/month).

---

## Email

**There is no email server.** Tom does not have a `@smoothsportsgear.com` email address.

Form submissions are forwarded by Formspree to whatever personal email is registered with the Formspree account.

### If a branded email is wanted

Options in order of simplicity:

| Option | Cost | Notes |
|---|---|---|
| **Google Workspace** | $6/user/mo | `tom@smoothsportsgear.com` — most reliable, full Gmail UI |
| **Porkbun email forwarding** | Free | Forwards `@smoothsportsgear.com` to any inbox — no sending from branded address |
| **Zoho Mail** | Free (1 user) | Free branded email with webmail interface |

Porkbun email forwarding is the easiest zero-cost option if Tom just wants emails to arrive in his existing inbox.

---

## Photo Management

Photos are managed through two files:

| File | Purpose |
|---|---|
| `photos.js` | Maps photo slots to filenames — the only file to edit when swapping photos |
| `images/gallery/` | All gallery, story, and hero photos live here |
| `images/products/` | Product card photos go here |

`script.js` reads `photos.js` on page load and applies filenames to the DOM. No build step — just edit `photos.js` and deploy.

---

## File Structure

```
smooth-sports-gear/
├── index.html          # Single-page site — all content
├── style.css           # All styles
├── script.js           # Interactivity + photo config loader
├── photos.js           # Photo slot config — edit to swap images
├── vercel.json         # Vercel routing config
├── CHECKLIST.md        # Remaining setup tasks
├── TECHNICAL_GUIDE.md  # This file
├── BRAND.md            # Brand identity, voice, color palette
└── images/
    ├── gallery/        # All photos used on the site
    └── products/       # Product card photos (placeholders until added)
```

---

## Contacts

| Role | Name | Email |
|---|---|---|
| Account owner / billing | Craig Sakuma | craig.sakuma@gmail.com |
| Business owner | Tom Iliffe | *(to be added)* |
