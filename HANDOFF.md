# HANDOFF.md

Session-to-session handoff log. **Read this at the start of every session** (after `CLAUDE.md`) to get up to speed.
**Update it at the end of every session** by adding a new entry at the top of the Session Log.

---

## Current State (keep this section current — overwrite, don't append)

**Last updated:** 2026-11-23

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
- **Stale copies in `public/`.** `public/app.jsx` is an old (~4,300-line) copy of `App.jsx` from the initial commit, and `public/assets/index-*.js` is an old build bundle. Neither is the live source — edit `src/App.jsx`. Ask before deleting them.
- **Install dependencies first.** `node_modules` isn't present in a fresh checkout — run `npm install` before `npm run dev` / `build`. `npm install` rewrites `package-lock.json`; restore it (`git checkout -- package-lock.json`) unless a dependency change is intended.
- **Copy lives in two places.** Brand copy in `src/App.jsx` is duplicated in the downloadable `public/assets/brand-guidelines-v2.md` (served via `GUIDE_MD` in `src/links.js`). Update both when changing copy.

### In Progress
- **Copy edits** on branch `copy-edits-2026-11-20` (not yet committed/pushed as of 2026-11-22). See session log.

### Next Up / Backlog
- _Add items here as they come up._

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
**Left unfinished / next steps:** Commit, push and open a PR for the branch. Resolve the two open questions above.

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
