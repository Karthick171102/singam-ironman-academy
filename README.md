# Singam Ironman Academy — website

A bilingual (English / தமிழ்), light-and-dark single-page website for **Singam Ironman
Academy**, the founder-led endurance running academy and marathon village in Sivagangai,
Tamil Nadu. Built with **React 19 + Vite + TypeScript + Tailwind CSS v4**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## What's on the page

| Section | Anchor | Purpose |
| --- | --- | --- |
| Hero | `#top` | Positioning, primary CTAs, key stats |
| The Founder | `#about` | Siva Balan's story, credentials, social proof |
| The Marathon Village | `#village` | 400 m track vision with honest development status |
| Programmes | `#programmes` | Six offerings, based on public evidence |
| Why Join | `#why` | Benefit-led reasons and a beginner CTA |
| Ground Updates | `#updates` | Visual timeline linked to real Instagram posts |
| Follow the Journey | `#follow` | Instagram / YouTube / Threads + video feature |
| FAQ | `#faq` | Beginners, timings, fees, track status, Ironman clarification |
| Contact / Join | `#contact` | Enquiry form with goal, timing and message |

There is also a fixed nav with a mobile menu, a scroll-progress bar, a floating
Instagram/WhatsApp button (hidden while the contact form is on screen), and a footer
with an Ironman trademark clarification.

## Languages and themes

- **Language:** English (default) and Tamil. Every string lives in `src/data/site.ts`
  as two parallel objects, `en` and `ta: typeof en`, so TypeScript fails the build if a
  key is missing from the Tamil copy. The switcher updates `<html lang>`.
- **Theme:** light and dark. Colours are semantic CSS variables in `src/index.css`
  (`surface`, `surface-2`, `card`, `fg`, `line`, `accent`, `inverse`, `inverse-fg`,
  `inverse-accent`). Only the brand colours (`ink`, `bone`, `ember`) stay fixed.
- **Persistence:** `src/lib/preferences.tsx` stores the choice in `localStorage`
  (`sia-lang`, `sia-theme`) and reflects the theme on `<html data-theme>`. With no saved
  value the theme follows the operating system. An inline script in `index.html` applies
  both before first paint, so there is no flash of the wrong theme or language.
- **Typography:** Manrope for Latin text and Anek Tamil for Tamil copy (body, headings
  and microlabels). Tamil headings use looser leading and no uppercase transform, and wide
  Latin letter-spacing is relaxed for Tamil microlabels.

Toggle components live in `src/components/Toggles.tsx` (`LangToggle`, `CompactLangToggle`,
`ThemeToggle`, `ThemeSwitch`). They are used in the footer preferences row.

- **Splash:** `src/components/Splash.tsx` renders on first paint with the language-aware
  lockup, a 1.9 s progress rail and the React Bits `Aurora` canvas
  (`src/components/Aurora.tsx`). Its colour stops and `lightMode` flag follow the current
  theme so the wash stays brick/vermilion over ink or bone. It fades out after load,
  respects `prefers-reduced-motion`, and locks scroll only while visible.

> **Note:** The Tamil copy is hand-written, not machine-translated. Have a native speaker
> review it before launch, especially the programme names, FAQ answers and legal
> disclaimer.

## Editing content

Almost everything lives in **`src/data/site.ts`** — nav links, stats, programmes,
gallery timeline, benefits, FAQs, contact copy and form labels. Edit that file; components
don't need changes. Keep the English and Tamil objects in sync (TypeScript enforces the
shape).

### 1. Contact details (required before launch)

```ts
export const contact = {
  phone: null,          // e.g. "+91 98765 43210"
  whatsapp: null,       // digits only, e.g. "919876543210"
  email: null,          // e.g. "hello@..."
  mapsUrl: null,        // Google Maps share link
  hoursVerified: false, // turns off the "to be confirmed" caveat
};
```

The display address and hours are bilingual and live in `content.en.contact.address` /
`contact.hours` (and the `ta` equivalents).

When `phone`, `whatsapp` and `mapsUrl` are filled in:

- the floating button switches from **Instagram DM** to **WhatsApp**;
- the phone and map links render automatically;
- the "Official phone, WhatsApp and maps pin are added once confirmed" note disappears;
- the form success screen offers a real "Send on WhatsApp" link with the enquiry
  pre-filled.

### 2. The enquiry form

The form is **front-end only** — it validates input and shows a confirmation screen, but
it does not transmit data. Before launch, connect one of:

- **WhatsApp** (simplest): setting `contact.whatsapp` already enables the prefilled
  WhatsApp link on the success screen. You can skip the form-as-email flow entirely.
- **A form service** such as Formspree / Basin: `POST` to their endpoint in `onSubmit`
  in `src/components/Contact.tsx` and keep the same success state.
- **Your own API / serverless function**: replace the `setSubmitted(true)` line with a
  `fetch` call and handle loading/error states.

The current success state explicitly tells reviewers it is a demo; remove that line
(`Demo form: no data is submitted or stored…` in both languages) once a backend is
connected.

### 3. Replace the placeholder photography

The gallery and video section use temporary Unsplash images so the layout can be reviewed.
They are labelled as illustrative in the UI and in the timeline data. Replace them with
real academy/ground photos and reel stills:

1. Add images to `public/ground/` (e.g. `public/ground/ground-work-2026.jpg`).
2. In `src/data/site.ts`, change each `gallery.items[].image` (in both languages) to
   `/ground/...`.
3. Update `src/components/Social.tsx` (video card image) the same way.
4. Swap the founder-card caption in `about.caption` for the approved portrait, and remove
   that caption.

Only publish photography and reels with Siva Balan's written permission.

### 4. Brand assets

The official `Frame 4` (English) and `Frame 5` (Tamil) lockups live in
`src/components/ui.tsx` (`BrandLogo`, via `TamilLogo`) with the standalone mark in
`BrandMark`. The wordmark inherits `currentColor`, so the logo adapts to dark, light and
inverse surfaces while the orange mark stays `#FF5900`. Matching icons are in
`public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`,
`icon-512.png` and `public/site.webmanifest`.

## Content integrity decisions

These are deliberate, based on the research brief:

- The academy is presented as an **independent** running and fitness academy.
  "Ironman" is treated as part of the brand name, **not** as evidence of Ironman
  certification or affiliation. This is clarified in the FAQ and footer in both languages.
- The 400 m track and marathon village are consistently labelled **planned / under
  development**, including a "concept, not to scale" label on the track diagram.
- Programme copy is limited to what is publicly supported (running, marathon prep,
  strength, cardio, yoga, community runs). The site says batch timings and pricing are
  confirmed directly with the academy rather than inventing numbers.
- The 6:00 AM – 10:00 PM hours are attributed to the public directory listing and marked
  as pending confirmation for batch sessions.

## Pre-launch checklist

- [ ] Confirm official phone, WhatsApp, email, street address and Google Maps pin; fill
      them into `src/data/site.ts` and set `hoursVerified` once timings are confirmed.
- [ ] Confirm programmes, batch timings, coach names and pricing; update copy in **both**
      languages and remove "to be confirmed" caveats where appropriate.
- [ ] Have the Tamil copy reviewed by a native speaker.
- [ ] Check both themes and both languages on a real phone (nav, menu, form, toggles).
- [ ] Confirm the current state of the 400 m track and update the status labels/date.
- [ ] Confirm whether ground rental, tournaments and memberships are open.
- [ ] Get permission to use Siva Balan's name, photos, reels and social embeds.
- [ ] Replace placeholder images with real ground photography.
- [ ] Connect the enquiry form (or remove it and lean on WhatsApp/Instagram).
- [ ] Add the production domain, canonical URL and OG image to `index.html`; consider
      `hreflang`/localised metadata for the Tamil version.
- [ ] Add Google Analytics / Search Console if required.
- [ ] Test the form and links on a real phone (especially the WhatsApp link).

## SEO

`index.html` includes a descriptive title, meta description, Open Graph tags, theme
colour, and `SportsActivityLocation` JSON-LD with the founder, address locality, opening
hours and social profiles. Suggested keyword themes are used naturally in the copy:
"running academy in Sivagangai", "marathon training Sivagangai", "marathon village
Sivagangai", "400 m running track Tamil Nadu", "endurance training Sivagangai".

Update the JSON-LD `address`, `openingHours` and `sameAs` values once confirmed, and add
a canonical URL when the domain is live. The document language is set at runtime by the
language switcher.

## Project structure

```
src/
  App.tsx                 provider wiring, page composition, scroll progress, CTA focus
  data/site.ts            all editable bilingual content + contact config
  lib/preferences.tsx     language/theme context, persistence, <html> attributes
  index.css               Tailwind v4 theme tokens, light overrides, Tamil type, motion
  components/
    Nav.tsx               sticky nav, language/theme controls, full-screen mobile menu
    Hero.tsx              hero, stats strip, rotating stamp
    Marquee.tsx           gold keyword marquee
    About.tsx             founder card + first-person story
    Village.tsx           marathon village + 400 m track concept SVG
    Programmes.tsx        six programme cards
    WhyJoin.tsx           benefits grid
    Gallery.tsx           ground-update timeline mosaic
    Social.tsx            video feature + social stats
    FAQ.tsx               accessible accordion
    Contact.tsx           validated bilingual enquiry form + success state
    Footer.tsx            links, disclaimer, back to top
    FloatingContact.tsx   WhatsApp/Instagram floating action
    Toggles.tsx           language + theme switchers
    ui.tsx                shared UI: buttons, reveal, Img fallback, track + lion SVGs
```

## Accessibility & performance notes

- Semantic sections, one `h1`, labelled form fields, `aria-expanded` accordion,
  keyboard-visible focus rings, a skip link, and a closed mobile menu that is `inert`.
- Language and theme controls are labelled and expose `aria-pressed`; the choices persist
  across visits and are applied before first paint.
- Scroll reveals respect `prefers-reduced-motion` (animations are disabled globally).
- Images are lazy-loaded; the logo and track art are inline SVG.
- The `Img` component falls back to a styled placeholder if an image fails to load, so
  the layout never breaks when real photos are swapped in.
