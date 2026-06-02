
# Insight + Legal Pages

Create five new content pages using the existing GridCrest design system (semantic tokens, rounded buttons, CTA banner BG, reveal animations). No CMS wiring yet — content is hard-coded so the pages ship today and can be migrated to Sanity later without changing routes.

## Pages

### 1. `src/routes/insight.articles.tsx` — Blog / Insights
Replace current `PagePlaceholder`. Sections:
- Hero (eyebrow "Insight", H1 "Insights & Perspectives", lede)
- Featured article card (large, left image + right text)
- Article grid (6 cards: image, category tag, title, excerpt, date, "Read more")
- Newsletter CTA strip using the shared CTA banner background
- Pagination placeholder

### 2. `src/routes/insight.news.tsx` — News
Replace placeholder. Sections:
- Hero ("News", "Latest from GridCrest")
- Press release list (date • category • headline • 2-line summary • "Read release")
- Media contact card on the right (sticky on desktop)
- CTA banner

### 3. `src/routes/insight.updates.tsx` — Updates
Replace placeholder. Sections:
- Hero ("Updates", "Product, program & partnership updates")
- Filter chips (All / Product / Program / Partnership)
- Timeline list (date pill on the left, update card on the right with type tag, title, body)
- CTA banner

### 4. `src/routes/privacy.tsx` — Privacy Policy (new file)
Long-form static doc. Sections: Introduction, Information we collect, How we use it, Sharing & disclosure, Cookies, Data retention, Your rights (GDPR/DPDP), Security, Children's privacy, International transfers, Changes to this policy, Contact (privacy@gridcrest.com). "Last updated" date at top.

### 5. `src/routes/terms.tsx` — Terms of Use (new file)
Sections: Acceptance of terms, Use of the site, Intellectual property, User content, Prohibited use, Disclaimers, Limitation of liability, Indemnification, Governing law (India), Changes to terms, Contact. "Last updated" date at top.

Both legal pages use a shared layout: max-w-3xl prose container, sticky in-page TOC on the right (lg+), H2 anchors, soft surface background for the page.

## Shared bits

- **`src/components/LegalPage.tsx`** — reusable wrapper taking `title`, `lastUpdated`, and `sections: { id, heading, body }[]`. Renders hero + TOC + sectioned body with anchor IDs.
- **`src/components/CtaBanner.tsx`** — extract the existing CTA strip used on home into one component so all five new pages use the identical banner (single source of truth for the "use same CTA banner BG everywhere" rule already in memory).
- Each page sets its own `head()` with title, description, og:title, og:description, og:url, and canonical link (leaf only).
- Footer links: add `/privacy` and `/terms` to the site footer if not already linked.

## Technical notes

- All five route files: `createFileRoute(...)` with `head()` + `component`. No loaders, no server functions — pure static.
- Article/news/update items declared as typed const arrays at top of each file so swapping to Sanity later is a one-liner (`const items = await sanity.fetch(...)`).
- Reveal animation: add `reveal-area` / `reveal-text` classes to section headings and cards to inherit the existing scroll reveal.
- Buttons use existing `btn-primary` / ghost button styles — no new variants.
- Images: use placeholder `bg-gradient-to-br from-surface-cyan to-surface-lavender` blocks (same as mega menu intro) so we don't ship broken `<img>` tags. Real imagery added when content is finalized.
- Add `/privacy` and `/terms` to `MENUS` only in the footer (not header) — header stays as-is.

## Out of scope

- Sanity wiring (separate follow-up)
- Individual article/news/update detail routes (`$slug`) — list pages only for this pass
- Real legal copy review — content is a sensible boilerplate the user should have counsel review before publish
