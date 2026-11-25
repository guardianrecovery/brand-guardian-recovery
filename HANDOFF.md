# HANDOFF.md

Session-to-session handoff log. **Read this at the start of every session** (after `CLAUDE.md`) to get up to speed.
**Update it at the end of every session** by adding a new entry at the top of the Session Log.

---

## Current State (keep this section current — overwrite, don't append)

**Last updated:** 2026-11-25

- **Hosting:** Cloudflare Workers (static assets), Guardian Recovery account (`693ba284ff035a8f489710a0d8025f6c`), worker `brand-guardian-recovery`, custom domain `brand.guardianrecovery.com`. Config in `wrangler.jsonc`; `workers.dev` and preview URLs are off. Deploy by hand with `npm run deploy` (needs `wrangler login`). Moved off the DigitalOcean server (`159.65.217.5`) on 2026-11-25; that server is untouched and can be retired. Rollback: recreate the proxied A record `brand` → `159.65.217.5` and remove the Worker custom domain.
- **CI/CD:** Workers Builds connected 2026-11-25 (Workers & Pages → `brand-guardian-recovery` → Settings → Builds): repo `guardianrecovery/brand-guardian-recovery`, branch `main`, root `/`, build `npm run build`, deploy `npx wrangler deploy`, build variable `NODE_VERSION=22`. Merging to `main` deploys to brand.guardianrecovery.com. Previews are on (`npx wrangler preview` for other branches), which uses build minutes; turn off in the Builds settings if unwanted.

- **App:** Single-file React/Vite SPA brand guide — logic lives in `src/App.jsx` (~5,000 lines).
- **Supporting modules:** `src/links.js` (download URLs, `LETTERHEAD` map, `toDirectDownload()`), `src/images.js`, `src/index.css`.
- **Assets:** Facility logos in `src/assets/logos/` (`fac-<slug>[-inv][-vert].svg`), graphics in `src/assets/graphics/`. Placeholder logos can be regenerated with `scripts/generate-logo-placeholders.mjs`.
- **Design docs:** `docs/superpowers/specs/` and `docs/superpowers/plans/`.
- **Completed features:** Letterhead downloads (general + per-facility) in Print & Collateral — see plan `docs/superpowers/plans/2026-06-01-letterhead-and-manifest.md`.
- **Known gaps / notes:**
  - `CLAUDE.md` says "no CSS files" but `src/index.css` exists; it also doesn't mention `links.js` / `images.js`. Update if it causes confusion.
  - No test suite; verify with `npm run build` and a browser check via `npm run dev`.
  - Node.js 22 (`C:\Program Files\nodejs`) was installed 2026-11-20. Shells opened before then won't have `node`/`npm` on PATH; `.claude/launch.json` calls `npm.cmd` by full path for the preview server.

### Gotchas
- **"Promote to live" is per-browser only.** `ReviewBlock` (`src/App.jsx`) stores live/review state in `localStorage` (`gr-review-live:<label>`). Promoting a block only affects the browser that clicked it — nothing is published for other viewers. Making content truly live requires a code change (e.g. removing the `ReviewBlock` wrapper). Current review-gated blocks: "Service line taglines", "Other Stationery".
- **Review PIN is visible in source.** `REVIEW_PIN` in `src/App.jsx` is hardcoded and client-side, separate from the `ExecGate` PIN. Neither is a security control.
- **`npm run lint` doesn't exist.** `package.json` has no `lint` script and ESLint isn't in its devDependencies, despite `eslint.config.js` and `CLAUDE.md`. `npm run build` is the only working check for now.
- **Stale copies in `public/`.** `public/app.jsx` is an old (~4,300-line) copy of `App.jsx` from the initial commit, and `public/assets/index-DICR2wke.js` is an old build bundle. Neither is the live source — edit `src/App.jsx`. They are still in the repo and in `dist/`, but `public/.assetsignore` keeps them out of the Cloudflare deploy (they fall through to the SPA `index.html`). Ask before deleting them.
- **Install dependencies first.** `node_modules` isn't present in a fresh checkout — run `npm install` before `npm run dev` / `build`. `npm install` rewrites `package-lock.json`; restore it (`git checkout -- package-lock.json`) unless a dependency change is intended.
- **Layout width rules live in the global `<style>` tag** in `src/App.jsx` (search `.mc p`). `.tx` caps text at 75ch; `.bx` makes a bordered box shrink to fit its content; `.row` (set by `Row()`) makes `.bx` children stack one per line. New boxes or text blocks need these classes to follow the same rules.
- **Copy lives in two places.** Brand copy in `src/App.jsx` is duplicated in the downloadable `public/assets/brand-guidelines-v2.md` (served via `GUIDE_MD` in `src/links.js`). Update both when changing copy.

### In Progress
- Nothing in progress. UI edits PR #8 and Cloudflare deploy PR #9 are merged. See the handoff section "Executive Resources gate" at the bottom for the next task.

### Next Up / Backlog
- **Service line icon artwork.** Tiles are hidden behind `SHOW_SERVICE_LINE_ICONS = false` in `src/App.jsx`. When real icons exist: replace the files in `src/assets/icons/` (`icon-sud`, `icon-mh`, `icon-adol`, `icon-virtual`), set the flag to `true`, restore the icon list in `brand-guidelines-v2.md`, and consider darkening the Mental Health / Adolescent tile titles (low contrast).

### Open Questions / Decisions Pending
- **18th location / state count:** 17 facilities are open (`FACS`). The 18th is in Kenosha, WI, coming online soon, so copy says 18 (user's call, 2026-11-22). Kenosha is in the Brand Architecture tables as "GR - Wisconsin" under a new Wisconsin heading (2026-11-23) but not yet in `FACS` or `REGIONS`. When it opens: add it there (logo, letterhead, region), and decide whether "six states" becomes seven — Wisconsin isn't in any state list yet.

---

## Session Log (newest first)

<!--
Template — copy this for each new session:

### YYYY-MM-DD — <short title>
**Goal:** what the session set out to do
**Changes:**
- `path/to/file` — what changed and why
**Decisions:** choices made and the reasoning
**Verification:** lint / build / browser check results
**Left unfinished / next steps:** anything the next session must pick up
-->

### 2026-11-25 — Migrate hosting to Cloudflare Workers
**Goal:** Move brand.guardianrecovery.com from the DigitalOcean server to the Guardian Recovery Cloudflare account, with CI/CD via Workers Builds.
**Changes:**
- `wrangler.jsonc` (new) — static assets from `./dist`, SPA fallback, account pinned (wrangler is logged in to three accounts), custom domain route, `workers_dev` and `preview_urls` off.
- `public/.assetsignore` (new) — `/app.jsx` and `/assets/index-DICR2wke.js` excluded from the deploy.
- `package.json` / `package-lock.json` — `wrangler` devDependency, `deploy` script.
- DNS — deleted the proxied A record `brand.guardianrecovery.com` → `159.65.217.5` (zone `962533e2644705254ff4daad42a25c56`, record `73ef1d9b66f16f01e7f1f0a76826cd3b`); Worker custom domain created by `wrangler deploy`.
- PR #9 merged. Deployed by hand with `npx wrangler deploy` from the branch.
**Decisions:** Workers with static assets, not Pages. Stale `public/` files excluded, not deleted (user: exclude if not needed). Cloudflare Access for the Executive Resources PIN goes on a path, not the whole site (user) — see the handoff section below.
**Verification:** `npm run build`, `wrangler deploy --dry-run`; live check: `/` 200 with the new bundle `index-cj8qUm9P.js`, `/assets/brand-guidelines-v2.md` 200 `text/markdown`, `/app.jsx` falls through to `index.html`, workers.dev URL 404.
**Left unfinished / next steps:** Retire the DigitalOcean server when ready. Executive Resources gate (below). Workers Builds was connected in the dashboard afterwards (the build-token step cannot be done through the API); first build from `main` succeeded and the site stayed up.

### 2026-11-24 — Callout boxes, Logo Misuse, phone fix
**Goal:** UI edits on branch `ui-edits-2026-11-24`.
**Changes:**
- `src/App.jsx` — Light Gambodge callout boxes (`C.gam + "1F"` fill, `C.gam + "66"` border, radius 10, `bx tx`) around three lines: Voice "Never: Addict…" (italic, Midnight), Voice "SEO exception…" and Logos "Never reproduce the logo…" (Cavern; was light gray, too faint on yellow).
- `src/App.jsx` — New "Logo Misuse" sub-section after the logo warning box: `LogoMisuse` grid (`.pg`, 3 across / 2 on phone) with 1 correct + 5 don't tiles (retyped in Georgia, skewed, rotated, drop shadow, off-palette recolor). Uses `gr-horizontal.svg?raw` inline via `grHorizontalSvg()`, which strips the white rect, crops the margin, and can swap colors. `DONT_RED` (#B3261E) is used only for the ✕ labels and is not a brand color.
- `src/App.jsx` — Phone spill fix: Typography type-scale rows (`.ts`) now wrap under 600px (label + spec on top, sample below). Page was 447px wide at 375px.
- `public/assets/brand-guidelines-v2.md` — Logo Misuse list added.
**Decisions:** Callout boxes are repeated inline styles, not a shared component (only three so far).
**Verification:** `npm run build` passes. Browser: desktop and 375px checked; no horizontal scroll at 375px.
**Left unfinished / next steps:** Review and merge the PR.

### 2026-11-23 — README rewritten for non-technical readers
**Goal:** Make `README.md` readable for staff, not just developers.
**Changes:**
- `README.md` — rewritten: what the guide is, who it's for, section-by-section overview, downloads, contact (marketing team), PIN caveat, then a short technical section for maintainers. Live URL brand.guardianrecovery.com. PIN value removed. Old file had a stray UTF-16 line appended; new file is plain UTF-8.
**Decisions:** User chose non-technical audience, team (not a person) as contact, PINs mentioned without values.
**Verification:** N/A (docs only).
**Left unfinished / next steps:** Not committed.

### 2026-11-23 — Service line icons hidden ("Coming soon")
**Goal:** Hide the stand-in service line icon tiles until real artwork exists (branch `iconography-updates-2026-11-23`).
**Changes:**
- `src/App.jsx` — Iconography: service line tiles wrapped in `SHOW_SERVICE_LINE_ICONS` (module-level flag, `false`). A "Coming soon" notice (Gambodge left border, `.bx`/`.tx`) shows instead. Tile code and icon files kept for when artwork arrives. "Condition and program sub-icons… V3" note unchanged.
- `public/assets/brand-guidelines-v2.md` — Service Line Icons list replaced with the same "Coming soon" text (app wins).
- `HANDOFF.md` — this entry; In Progress and Backlog updated.
**Decisions:** Hidden behind a flag instead of deleted, so turning the tiles back on is a one-line change.
**Verification:** `npm run build` passes. Browser: notice renders under Service Line Icons, tiles gone, Master Brand Icons unchanged.
**Left unfinished / next steps:** Review and merge the PR.

### 2026-11-23 — Wide layout: full-width main, capped text, fit-to-content boxes
**Goal:** UI updates on branch `ui-updates-2026-11-23`.
**Changes** (all `src/App.jsx`):
- `<main>`: removed `maxWidth: 800` (added `minWidth: 0`) so the content column fills the space right of the sidebar.
- Global style tag: `.mc p, .mc li, .mc blockquote, .mc .tx { max-width: 75ch }` keeps line length readable.
- `tx` class on text inside bordered boxes: `Cd` body, tagline explanation, three typography cards, Creative Request Portal.
- `bx` class (`width: fit-content; max-width: 100%`) on `Cd`, the blue tagline box, the typography cards and the Creative Request box. `row` class on `Row()` with `.row > .bx { flex: 0 0 100%; max-width: fit-content }` so row cards stack instead of going 2-up.
- Photography and Imagery: added "Photography in Practice" — a 6-tile placeholder grid (flat palette color + image icon + shot label) after Core Principles. Full column width, 3 across (`.pg` class; 2 across under 600px). Now filled with six photos from guardianrecovery.com in `src/assets/photos/practice/` (webp; placeholder still renders if a file is missing), each with a caption, plus a small note that these are the images currently in use. Labels changed: "Diverse portrait" → "Portrait", "Family moment" → "Peer conversation" (no family photo on the site). Skipped headshots, cutout program heroes, Instagram, and an AI-generated Immersion image. Not in `brand-guidelines-v2.md` (visual only).
- Color chips (`Sw`): text color now computed per swatch (`swInk`) — Midnight or white, black fallback for mid-tones; secondary lines softened but kept ≥4.5:1. All 30 chips pass AA (min 4.52). Removed the `light` prop. Service line cards in Color use darker title inks (Pacific 900, Sage 700).
- Iconography: `src/assets/icons/` was missing, so all 7 icons were broken. Added sunrise icons (rays + arc from `nav-logo.svg`; Prussian / Gambodge / Frost; Gambodge and Frost shown on Midnight) and service line icons (same sunrise in Cerulean, Pacific, Sage, Prussian — no separate artwork exists; replace files with real art if designed).
**Decisions:** Tables, grids and headings stay full width. User chose to leave the low-contrast Mental Health / Adolescent titles on the Iconography service line cards. Pull quotes (`Q`) run ~680px because of larger serif type; left as is.
**Verification:** `npm run build` passes. Browser at 1600px: no text wider than ~660px, boxes 623–881px with no large empty space, no horizontal scroll. At 375px nothing overflows.
**Left unfinished / next steps:** Merged as PR #4 (2026-11-23); branch deleted. Real service line icon artwork, if designed, replaces the sunrise stand-ins in `src/assets/icons/`.

### 2026-11-23 — Wisconsin added to Brand Architecture
**Goal:** Add Wisconsin and the Kenosha facility to the facility list (user request).
**Changes** (each in `src/App.jsx` and `public/assets/brand-guidelines-v2.md`):
- Brand Architecture: new "Wisconsin" heading and table after New England, one row: "GR - Wisconsin", "Kenosha, WI", "IOP, Virtual Detox (coming soon), Residential (coming soon)".
- `HANDOFF.md` — this entry; open question updated.
**Decisions:** Table only. `FACS`, `REGIONS`, location counts and "six states" copy left unchanged (copy already counts Kenosha as the 18th location; the state-count question is still open).
**Verification:** `npm run build` passes.
**Left unfinished / next steps:** PR opened for Marc to review before go-live. The live site is not auto-deployed from GitHub; it needs a build and upload after merge.

### 2026-11-20 → 2026-11-22 — Copy edits (Brand Story)
**Goal:** Copy updates on branch `copy-edits-2026-11-20`.
**Changes** (each in `src/App.jsx` and `public/assets/brand-guidelines-v2.md`):
- Location count: origin story "16 in-person facilities" → "18"; boilerplates (long/medium/short) and fact sheet "19 locations including virtual" → "18 locations including virtual".
- Origin story: "By 2019, expanded SUD offerings…" → "By 2019, Guardian Recovery expanded SUD offerings…".
- Origin story: "that treatment should be…" → "that the level and quality of treatment should be…".
- Origin story: "service lines added" → "service lines were added".
- Brand Promise: → "We provide the quality of care we would seek for ourselves or a loved one."
- `src/App.jsx` only: palette `C.mid` / `C.pru` swapped so Midnight = #083045 (deep blue, confirmed by user) and Prussian = #004860, matching the markdown. Changes every Midnight background/gradient on the site. Note: primary logo SVGs use #004860 as ink; inverted facility logos sit on #083045.
- `brand-guidelines-v2.md` only: Guardian Virtual launch year 2024 → 2022 (confirmed by user), moved into chronological order to match the app.
- **Virtual Counseling = five states** (FL, TX, NJ, ME, CO; confirmed by user). Both files: architecture table, Specialty Programs card, Virtual OP level of care, Appendices "States" (dropped "+ virtual in PA") and "Virtual" rows. Previously said seven (incl. NH, PA).
- **Full app ↔ markdown sync (rule: app wins).** `brand-guidelines-v2.md` rewritten to match the app: added hero intro/version/founder quote, 2025 regionalization line, app's "Today:" sentence, MH program wording, Specialty Program Logos, Shell swatch, Master Brand Icons intro, icon names, arch caption, Executive Resources item lists + V3 note (removed claim that talking points are "managed here"), Digital Meeting Backgrounds, Asset Hub Letterhead, Folder Booklet + Virtual in facility/regional collateral, app footer. Removed md-only content: New Pathway Paramus (not a current facility), Portland Addiction Center footnote, inverted-logo intro sentence, §15 Stationery and Print Ordering "Stationery" (letterhead lives in Asset Hub; envelopes/notecards are review-gated). Review-gated app content deliberately left out of the md.
- `HANDOFF.md` — this entry; Current State updated (Node install, copy-in-two-places gotcha, open questions).
**Decisions:** User chose "18 locations including virtual" (not 23) as the total for boilerplate/fact-sheet copy. Stale `public/app.jsx` and `public/assets/index-*.js` left untouched.
**Verification:** `npm run build` passes; each edit confirmed in the browser via `npm run dev`.
**Left unfinished / next steps:** Merged as PR #3. Resolve the open question above (Kenosha, WI).

### 2026-11-20 — Gotchas added
**Goal:** Capture non-obvious pitfalls found while surveying the repo.
**Changes:**
- `HANDOFF.md` — added "Gotchas" section (review-mode localStorage, review PIN, missing lint script, stale `public/` copies, `npm install`); dropped `npm run lint` from the verify note.
**Decisions:** Kept to gotchas only; general project facts (links.js/Drive, manifest docs, repo/version) intentionally left out.
**Verification:** N/A (docs only).
**Left unfinished / next steps:** None.

### 2026-11-20 — Handoff doc created
**Goal:** Set up a running handoff document for session continuity.
**Changes:**
- `HANDOFF.md` — created (this file).
- `CLAUDE.md` — added a pointer telling Claude to read and update `HANDOFF.md` each session.
**Decisions:** "Current State" is overwritten each session to stay short; "Session Log" is append-only, newest first.
**Verification:** N/A (docs only).
**Left unfinished / next steps:** None.


---

## Handoff: Executive Resources gate (Cloudflare Access)

**Goal:** Replace the client-side PIN on "Executive Resources" (and the review PIN) with a real access control. Done = anyone without access gets a Cloudflare Access login, not the content, and the gated content is not in the public JS bundle.

**State:** Scoped only, not started.
- `ExecGate` in `src/App.jsx` (~line 1773) compares input to a hardcoded PIN in the browser. Rendered in `<Sec id="exec" pn="III" t="Executive Resources">` (~line 5016). The unlocked content ships in the bundle to every visitor.
- `REVIEW_PIN` (~line 1530) and `ReviewBlock` (~line 1533) work the same way. It gates "Service line taglines" (~2683) and "Other Stationery" (~5325), and "promote to live" is per-browser `localStorage`. Not covered by this task unless Marc says so.
- The unlocked `ExecGate` content today is placeholder tiles only (Internal: Board Deck, Investor Deck, Meeting Templates, Reports; External: Executive Summary, Thought Leadership, Speaker Kit, Media Kit) plus a V3 note. No real confidential material is exposed yet.
- Marc's decision: put the PIN/gate in Cloudflare, in front of a path, not the whole site.
- Cloudflare Access protects URL paths. The app has none today (navigation is `scrollIntoView`), so a path-scoped Access app protects nothing until the gated content has its own path.

**Files touched:** none yet. Read: `src/App.jsx` (ExecGate, REVIEW_PIN, `<Sec id="exec">`).

**Changes:** none.

**Failures:** none.

**Next steps:**
1. Decide the shape with Marc: (a) a separate static page such as `/exec/` (own `exec/index.html` as a second Vite entry, or a second Worker route), or (b) client routing with the exec view code-split and served from `/exec/*`. Option (a) is simpler and keeps the main bundle free of exec content.
2. Move the gated content out of `App.jsx` into that page; the `exec` section in the main guide becomes a link to `/exec/` (keep the sidebar `SECS` entry working).
3. Remove `ExecGate` and its PIN from `src/App.jsx`; update `README.md` (it mentions the PIN caveat) and `public/assets/brand-guidelines-v2.md` if they mention it.
4. Create a Cloudflare Access application (Zero Trust, Guardian Recovery account) for `brand.guardianrecovery.com/exec*`, with an allow policy (Guardian Recovery email domain, or a named group). Marc must confirm who is allowed and the identity provider (one-time PIN by email works with no setup).
5. Verify: logged-out request to `/exec/` returns the Access login (302), the main page stays public, and `grep` of `dist/assets/*.js` finds no exec content.

**Decisions:** Access goes on a path, not the whole site (Marc, 2026-11-25). Treat the existing PINs as not secure; do not copy their values into docs or commits.

**Dead ends:** Putting Access in front of the current single-page app protects nothing, because exec content is in the shared JS bundle and there is no path to match.

**How to run/test:** `npm install`, `npm run dev` for local; `npm run build` to check; deploy with `npm run deploy` (wrangler logged in to the Guardian Recovery account, id in `wrangler.jsonc`) or let Workers Builds deploy on merge to `main`. Test Access with `curl -sI https://brand.guardianrecovery.com/exec/`.

**Open questions:**
- Who gets access (email domain, specific people)?
- Does the review PIN (`ReviewBlock`) get the same treatment, or stay as is?
- Is a separate `/exec/` page acceptable, or should it stay inside the single-page app?
