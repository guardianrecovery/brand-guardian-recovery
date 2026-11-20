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
  - No test suite; verify with `npm run lint`, `npm run build`, and a browser check via `npm run dev`.

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

### 2026-11-20 — Handoff doc created
**Goal:** Set up a running handoff document for session continuity.
**Changes:**
- `HANDOFF.md` — created (this file).
- `CLAUDE.md` — added a pointer telling Claude to read and update `HANDOFF.md` each session.
**Decisions:** "Current State" is overwritten each session to stay short; "Session Log" is append-only, newest first.
**Verification:** N/A (docs only).
**Left unfinished / next steps:** None.
