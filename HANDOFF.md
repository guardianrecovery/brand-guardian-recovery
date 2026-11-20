# HANDOFF.md

Session-to-session handoff log. **Read this at the start of every session** (after `CLAUDE.md`) to get up to speed.
**Update it at the end of every session** by adding a new entry at the top of the Session Log.

---

## Current State (keep this section current — overwrite, don't append)

**Last updated:** 2026-11-20

- **App:** Single-file React/Vite SPA brand guide — logic lives in `src/App.jsx` (~5,000 lines).
- **Supporting modules:** `src/links.js` (download URLs, `LETTERHEAD` map, `toDirectDownload()`), `src/images.js`, `src/index.css`.
- **Assets:** Facility logos in `src/assets/logos/` (`fac-<slug>[-inv][-vert].svg`), graphics in `src/assets/graphics/`. Placeholder logos can be regenerated with `scripts/generate-logo-placeholders.mjs`.
- **Design docs:** `docs/superpowers/specs/` and `docs/superpowers/plans/`.
- **Completed features:** Letterhead downloads (general + per-facility) in Print & Collateral — see plan `docs/superpowers/plans/2026-06-01-letterhead-and-manifest.md`.
- **Known gaps / notes:**
  - `CLAUDE.md` says "no CSS files" but `src/index.css` exists; it also doesn't mention `links.js` / `images.js`. Update if it causes confusion.
  - `git` is not on the PATH in the PowerShell environment Claude uses — git commands fail unless run from another shell.
  - No test suite; verify with `npm run build` and a browser check via `npm run dev`.

### Gotchas
- **"Promote to live" is per-browser only.** `ReviewBlock` (`src/App.jsx`) stores live/review state in `localStorage` (`gr-review-live:<label>`). Promoting a block only affects the browser that clicked it — nothing is published for other viewers. Making content truly live requires a code change (e.g. removing the `ReviewBlock` wrapper). Current review-gated blocks: "Service line taglines", "Other Stationery".
- **Review PIN is visible in source.** `REVIEW_PIN` in `src/App.jsx` is hardcoded and client-side, separate from the `ExecGate` PIN. Neither is a security control.
- **`npm run lint` doesn't exist.** `package.json` has no `lint` script and ESLint isn't in its devDependencies, despite `eslint.config.js` and `CLAUDE.md`. `npm run build` is the only working check for now.
- **Stale copies in `public/`.** `public/app.jsx` is an old (~4,300-line) copy of `App.jsx` from the initial commit, and `public/assets/index-*.js` is an old build bundle. Neither is the live source — edit `src/App.jsx`. Ask before deleting them.
- **Install dependencies first.** `node_modules` isn't present in a fresh checkout — run `npm install` before `npm run dev` / `build`.

### In Progress
- _Nothing currently in progress._

### Next Up / Backlog
- _Add items here as they come up._

### Open Questions / Decisions Pending
- _None._

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
