# Mavan Services — website

Static marketing site for **Mavan Services Ltd** (mavanservices.co.uk).

Internal software, workflow automation, system integrations, AI agents and data & reporting for UK service businesses.

## Stack

- Plain HTML + CSS + JS. No build step.
- Google Fonts: Space Grotesk (headings) + Inter (body).
- Hosted on GitHub Pages with custom domain.

## Editing contact details

All site-wide contact info lives in **one place**: the `MAVAN` object at the top of [js/site.js](js/site.js).

```js
const MAVAN = {
  email:       "info@mavanservices.co.uk",
  phone:       "",            // leave empty to hide
  phoneHref:   "",            // tel: digits, e.g. "+442012345678"
  addressLine1: "",
  addressLine2: "",
  addressLine3: "",
  ...
};
```

Any HTML element with `data-mavan="phone"` (etc.) is auto-populated. **Empty values are hidden** so blank lines never appear in the UI. To enable phone / address later, just fill in those strings.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home |
| `about.html` | Company & values |
| `solutions.html` | Capabilities (5 areas with anchor nav) |
| `pricing.html` | Engagement models, process, FAQ |
| `contact.html` | Direct contact info (no form) |
| `terms.html` | Terms of service (English law) |
| `privacy.html` | Privacy + cookies (UK GDPR, ICO) |

## Local preview

Just open `index.html` in a browser, or serve the folder:

```powershell
python -m http.server 8000
```

## Deployment

Pushed to https://github.com/sites-lmt/mavanservices.co.uk-site and served via GitHub Pages on the `main` branch (root). Custom domain `mavanservices.co.uk` configured via DNS (see project notes).
