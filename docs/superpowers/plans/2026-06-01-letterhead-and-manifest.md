# Letterhead Downloads + Asset Manifest Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Letterhead subsection (general + per-facility `.docx` downloads) to the brand guide's Print and Collateral section, with link data stored in `src/links.js`, and refresh `ASSET-MANIFEST.md` to reflect the specialty program logos and facility variants already present on disk.

**Architecture:** A new `LETTERHEAD` map and `letterheadUrl()` helper in `src/links.js` (reusing the existing `toDirectDownload()` URL normalizer). A small inline `LetterheadCard` component in `src/App.jsx`. The Stationery subsection of Print and Collateral is restructured into two H4 blocks: "Letterhead" (general card + 21 per-facility cards driven by `FACS`) and "Other Stationery" (existing Envelopes / Notecards preview cards). Slugs come from the existing `slugify(name)` helper — no new slug logic.

**Tech Stack:** React (Vite), inline-styled JSX, plain JS module for links. No tests configured in this repo per `CLAUDE.md` — verification is `npm run build` + manual browser check via `npm run dev`.

---

## Reference: FACS slug list

The implementation derives slugs by passing `f[0]` (facility name) through `slugify()` at [src/App.jsx:275](src/App.jsx#L275). Given the current FACS array at [src/App.jsx:74](src/App.jsx#L74), this produces 21 facility slugs:

```
fac-immersion-residential
fac-immersion-outpatient
fac-princeton-detox-recovery-center
fac-princeton-psychiatry-counseling
fac-new-pathway-bayonne
fac-new-pathway-pine-brook
fac-hoboken-counseling-center
fac-new-brunswick-counseling-center
fac-saddle-brook-counseling-center
fac-montville-adolescent-center
fac-pine-tree
fac-portland-psychiatry-counseling
fac-plymouth-house
fac-portland-addiction-center
fac-curawest
fac-dallas-addiction-center
fac-virtual-counseling-maine
fac-virtual-counseling-colorado
fac-virtual-counseling-florida
fac-virtual-counseling-new-jersey
fac-virtual-counseling-texas
```

These are used in **Task 2** (`LETTERHEAD` seed keys) and rendered in **Task 4** (Stationery subsection). Both must match.

---

## File map

| File | Change |
|---|---|
| [src/links.js](src/links.js) | Add `LETTERHEAD` map + `letterheadUrl(slug)` helper |
| [src/App.jsx](src/App.jsx) | Add `LetterheadCard` component; restructure Stationery subsection; import `letterheadUrl` |
| [public/assets/ASSET-MANIFEST.md](public/assets/ASSET-MANIFEST.md) | Populate "Specialty program logos" table; add 6 facility rows, remove the stale `fac-virtual-counseling` row |

`public/app.jsx` is intentionally not touched (unused legacy copy).

---

## Task 1: Add `LETTERHEAD` map and `letterheadUrl` helper to `src/links.js`

**Files:**
- Modify: `src/links.js`

- [ ] **Step 1: Insert the `LETTERHEAD` block above the helper section**

Open [src/links.js](src/links.js). Find this exact line (currently line 194):

```js
export var PRINT_ALT_VENDOR = ''      // Alternative vendor link
```

**Immediately after** that line, insert this block (preserve the blank line above and below):

```js


// ----- Letterhead downloads (per facility slug) -----
// Structure: LETTERHEAD[slug] = url (Google Drive sharing or uc?export=download URL)
// Keys:
//   'general'                        → General Guardian Recovery letterhead
//   'fac-<slug>'                     → One key per FACS entry in App.jsx
//
// URLs are auto-normalized via toDirectDownload() so either Drive URL shape
// will trigger a direct download. Empty string → button shows "Link coming soon."

export var LETTERHEAD = {
  general: '',
  'fac-immersion-residential': '',
  'fac-immersion-outpatient': '',
  'fac-princeton-detox-recovery-center': '',
  'fac-princeton-psychiatry-counseling': '',
  'fac-new-pathway-bayonne': '',
  'fac-new-pathway-pine-brook': '',
  'fac-hoboken-counseling-center': '',
  'fac-new-brunswick-counseling-center': '',
  'fac-saddle-brook-counseling-center': '',
  'fac-montville-adolescent-center': '',
  'fac-pine-tree': '',
  'fac-portland-psychiatry-counseling': '',
  'fac-plymouth-house': '',
  'fac-portland-addiction-center': '',
  'fac-curawest': '',
  'fac-dallas-addiction-center': '',
  'fac-virtual-counseling-maine': '',
  'fac-virtual-counseling-colorado': '',
  'fac-virtual-counseling-florida': '',
  'fac-virtual-counseling-new-jersey': '',
  'fac-virtual-counseling-texas': '',
}
```

- [ ] **Step 2: Add `letterheadUrl` helper at the bottom of the file**

Find the existing `iconDownloadUrl` function at the bottom of the file:

```js
export function iconDownloadUrl(slug, format) {
  var key = FMT_KEY_MAP[format] || 'vector-web'
  var entry = ICONS[slug]
  return toDirectDownload((entry && entry[key]) || '')
}
```

**Immediately after** that function (at the very end of the file), append:

```js


// ----- Helper: resolve a letterhead download URL -----

export function letterheadUrl(slug) {
  return toDirectDownload(LETTERHEAD[slug] || '')
}
```

- [ ] **Step 3: Build to verify the module parses**

Run: `npm run build`
Expected: build succeeds (look for `✓ built in <n>ms`). No "Transform failed" errors. The JS bundle size will tick up a few hundred bytes.

If the build fails with a parse error in `links.js`, re-check the comma after the last `LETTERHEAD` entry and the placement of the new export (it must be outside any other object literal).

- [ ] **Step 4: Commit**

```bash
git add src/links.js
git commit -m "$(cat <<'EOF'
Add LETTERHEAD link map and letterheadUrl helper

One key per FACS entry (21 facilities) plus a 'general' key, all
pre-seeded as empty strings. Empty URLs route through Bt's existing
"Link coming soon." alert path. Real URLs are normalized via
toDirectDownload() so either Drive URL shape will trigger a direct
download.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Import `letterheadUrl` into `src/App.jsx`

**Files:**
- Modify: `src/App.jsx` (top-of-file import block, lines 3–11)

- [ ] **Step 1: Extend the existing import statement**

Open [src/App.jsx](src/App.jsx). Find this exact import block at the top of the file:

```jsx
import {
  GUIDE_PDF, GUIDE_MD,
  MASTER_LOGO_PACKAGE, LOGO_USAGE_GUIDE, ALL_PROGRAM_LOGOS, ALL_FACILITY_LOGOS,
  LOGOS, ICONS,
  logoDownloadUrl, iconDownloadUrl,
  BD_DECK_PPTX, BD_DECK_SLIDES,
  HUB, PRINT_ORDER, PRINT_ALT_VENDOR,
  SOCIAL_TEMPLATES, EMAIL_TEMPLATES, VIDEO_FILES,
} from "./links";
```

Replace it with:

```jsx
import {
  GUIDE_PDF, GUIDE_MD,
  MASTER_LOGO_PACKAGE, LOGO_USAGE_GUIDE, ALL_PROGRAM_LOGOS, ALL_FACILITY_LOGOS,
  LOGOS, ICONS, LETTERHEAD,
  logoDownloadUrl, iconDownloadUrl, letterheadUrl,
  BD_DECK_PPTX, BD_DECK_SLIDES,
  HUB, PRINT_ORDER, PRINT_ALT_VENDOR,
  SOCIAL_TEMPLATES, EMAIL_TEMPLATES, VIDEO_FILES,
} from "./links";
```

Only two lines change: `LOGOS, ICONS,` becomes `LOGOS, ICONS, LETTERHEAD,` and `logoDownloadUrl, iconDownloadUrl,` becomes `logoDownloadUrl, iconDownloadUrl, letterheadUrl,`.

- [ ] **Step 2: Build to verify the import resolves**

Run: `npm run build`
Expected: build succeeds. (No commit yet — Task 3 lands together.)

---

## Task 3: Add `LetterheadCard` component to `src/App.jsx`

**Files:**
- Modify: `src/App.jsx` — insert new component after `IconDownload` (currently around line 850)

- [ ] **Step 1: Locate the insertion point**

Find the end of the `IconDownload` function in [src/App.jsx](src/App.jsx). It ends with `}` on a line by itself (currently line 850), followed by a blank line and then `function LogoGrid(props) {`.

- [ ] **Step 2: Insert the `LetterheadCard` component**

Between the closing `}` of `IconDownload` and `function LogoGrid(props) {`, insert this component (with a blank line above and below to match surrounding style):

```jsx
function LetterheadCard(props) {
  var dlHref = letterheadUrl(props.slug);
  return (
    <div
      style={{
        border: "1px solid " + C.gla,
        borderRadius: 10,
        padding: 14,
        flex: props.wide ? "1 1 100%" : "1 1 200px",
        minWidth: 200,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: C.mid,
          marginBottom: 2,
        }}
      >
        {props.title}
      </div>
      {props.subtitle && (
        <div style={{ fontSize: 11, color: C.bat, marginBottom: 8 }}>
          {props.subtitle}
        </div>
      )}
      <Bt href={dlHref}>Download .docx</Bt>
    </div>
  );
}
```

Notes for the engineer:
- `Bt` (defined at [src/App.jsx:518](src/App.jsx#L518)) treats a falsy `href` as "no link configured" and shows an alert reading "Link coming soon." This is the desired behavior for unconfigured entries.
- `props.wide` is used in Task 4 only on the General Letterhead card to make it full-width above the per-facility grid.

- [ ] **Step 3: Build to verify**

Run: `npm run build`
Expected: build succeeds. No unused-variable warnings in lint for `LetterheadCard` (it's used in Task 4).

- [ ] **Step 4: Commit (bundles Task 2 + Task 3)**

```bash
git add src/App.jsx
git commit -m "$(cat <<'EOF'
Add LetterheadCard component and letterheadUrl import

Compact card with title, subtitle, and a single Download .docx
button. Modeled on the Asset Hub digital-asset cards. Used by the
Stationery subsection (next commit). Empty URLs route through Bt's
existing "Link coming soon." alert path.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Restructure the Stationery subsection in `src/App.jsx`

**Files:**
- Modify: `src/App.jsx` — Stationery block inside Section III "Print and Collateral" (currently lines 4556–4565)

- [ ] **Step 1: Locate the current Stationery block**

In [src/App.jsx](src/App.jsx) inside `Sec id="print"`, find these lines (currently 4556–4565):

```jsx
          <H3>Stationery</H3>
          <Row gap={10}>
            {[
              ["Letterhead", "Logo + Gambodge accent"],
              ["Envelopes", "Primary logo"],
              ["Notecards", "Secondary logo"],
            ].map(function (i) {
              return <Pc key={i[0]} t={i[0]} d={i[1]} />;
            })}
          </Row>
```

- [ ] **Step 2: Replace with the expanded Letterhead + Other Stationery structure**

Replace the entire block above with:

```jsx
          <H3>Stationery</H3>

          <H4>Letterhead</H4>
          <Row gap={10}>
            <LetterheadCard
              title="General Letterhead"
              subtitle="Guardian Recovery — corporate"
              slug="general"
              wide={true}
            />
          </Row>
          <Row gap={10}>
            {FACS.map(function (f) {
              return (
                <LetterheadCard
                  key={f[0]}
                  title={f[0]}
                  subtitle={f[1]}
                  slug={slugify(f[0])}
                />
              );
            })}
          </Row>

          <H4>Other Stationery</H4>
          <Row gap={10}>
            {[
              ["Envelopes", "Primary logo"],
              ["Notecards", "Secondary logo"],
            ].map(function (i) {
              return <Pc key={i[0]} t={i[0]} d={i[1]} />;
            })}
          </Row>
```

Why this works:
- `FACS` and `slugify` are module-level in `App.jsx` (lines 74 and 275) — no import needed.
- `slugify(f[0])` produces the same `fac-...` slugs seeded in `LETTERHEAD` from Task 1. They match exactly.
- The original generic `Pc t="Letterhead"` card is removed; it's superseded by the new dedicated Letterhead block.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds. Bundle JS size increases modestly (one component instance per facility, all sharing one component).

- [ ] **Step 4: Manual verification in browser**

Run: `npm run dev`

Open the dev server URL (Vite prints it — usually `http://localhost:5173`). Then:

1. Scroll/click through the nav to "Print and Collateral".
2. Confirm the Stationery section now shows:
   - An H4 "LETTERHEAD"
   - A full-width "General Letterhead" card with subtitle "Guardian Recovery — corporate"
   - A wrapping grid of 21 facility cards, each showing the facility name (e.g. "Immersion Residential") and location subtitle (e.g. "Boynton Beach, FL")
   - An H4 "OTHER STATIONERY"
   - Two cards: Envelopes, Notecards
3. Click "Download .docx" on any letterhead card → browser alert reading "Link coming soon." ← expected because URLs are empty.
4. No console errors.

Stop the dev server (`Ctrl+C`).

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx
git commit -m "$(cat <<'EOF'
Restructure Stationery section with Letterhead subsection

Stationery now has two H4 subsections: Letterhead (a full-width
General card plus one card per FACS entry) and Other Stationery
(Envelopes, Notecards). The old generic "Letterhead" preview card
is removed; downloads come straight from LETTERHEAD entries in
links.js once URLs are populated.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Update `public/assets/ASSET-MANIFEST.md`

**Files:**
- Modify: `public/assets/ASSET-MANIFEST.md`

- [ ] **Step 1: Populate the "Specialty program logos" section**

In [public/assets/ASSET-MANIFEST.md](public/assets/ASSET-MANIFEST.md), find this section (currently lines 50–52):

```markdown
### Specialty program logos

*Reserved for future use. No active specialty program logos at this time.*
```

Replace it with:

```markdown
### Specialty program logos

LogoGrid appends `-inv` and `-vert` suffixes. Same four-variant rule as service-line logos.

| Base slug | Logo | Folders needed |
|-----------|------|----------------|
| `logo-immersion` | Immersion | `logo-immersion/`, `logo-immersion-vert/`, `logo-immersion-inv/`, `logo-immersion-inv-vert/` |
| `logo-new-pathway` | New Pathway | Same pattern |
| `logo-case-management` | Case Management | Same pattern |
| `logo-virtual-counseling` | Virtual Counseling | Same pattern |
```

- [ ] **Step 2: Update the "Facility lockups" table**

Find the existing facility table (currently lines 58–77). It begins with `| Slug | Facility |` and contains rows for `fac-immersion-residential` through `fac-virtual-counseling`.

Replace **the entire table** (header + all current rows) with this updated version, which inserts `fac-portland-addiction-center` after `fac-plymouth-house` and replaces the generic `fac-virtual-counseling` row with five regional variants:

```markdown
| Slug | Facility |
|------|----------|
| `fac-immersion-residential` | Immersion Residential |
| `fac-immersion-outpatient` | Immersion Outpatient |
| `fac-princeton-detox-recovery-center` | Princeton Detox & Recovery Center |
| `fac-princeton-psychiatry-counseling` | Princeton Psychiatry & Counseling |
| `fac-new-pathway-bayonne` | New Pathway Bayonne |
| `fac-new-pathway-paramus` | New Pathway Paramus |
| `fac-new-pathway-pine-brook` | New Pathway Pine Brook |
| `fac-hoboken-counseling-center` | Hoboken Counseling Center |
| `fac-new-brunswick-counseling-center` | New Brunswick Counseling Center |
| `fac-saddle-brook-counseling-center` | Saddle Brook Counseling Center |
| `fac-montville-adolescent-center` | Montville Adolescent Center |
| `fac-pine-tree` | Pine Tree |
| `fac-portland-psychiatry-counseling` | Portland Psychiatry & Counseling |
| `fac-plymouth-house` | Plymouth House |
| `fac-portland-addiction-center` | Portland Addiction Center |
| `fac-southern-maine-recovery` | Southern Maine Recovery |
| `fac-curawest` | CuraWest |
| `fac-dallas-addiction-center` | Dallas Addiction Center |
| `fac-virtual-counseling-colorado` | Virtual Counseling — Colorado |
| `fac-virtual-counseling-florida` | Virtual Counseling — Florida |
| `fac-virtual-counseling-maine` | Virtual Counseling — Maine |
| `fac-virtual-counseling-new-jersey` | Virtual Counseling — New Jersey |
| `fac-virtual-counseling-texas` | Virtual Counseling — Texas |
```

Notes:
- `fac-new-pathway-paramus` and `fac-southern-maine-recovery` were in the old manifest. Neither has SVGs on disk and neither is in the current `FACS` array. Conservatively keep them — they're documented as planned, and removing them is out of scope for this change. (If the user later confirms they should be dropped, that's a separate edit.)
- The generic `fac-virtual-counseling` row is removed — no asset on disk uses that exact slug.

- [ ] **Step 3: Verify the manifest renders**

Open [public/assets/ASSET-MANIFEST.md](public/assets/ASSET-MANIFEST.md) in the editor or any markdown previewer. Confirm:
- "Specialty program logos" section now contains a populated table (no "Reserved for future use" placeholder).
- Facility table has 23 data rows (was 18, added 6 new entries: `fac-portland-addiction-center` + 5 virtual-counseling regional variants, removed 1 generic `fac-virtual-counseling`).

- [ ] **Step 4: Commit**

```bash
git add public/assets/ASSET-MANIFEST.md
git commit -m "$(cat <<'EOF'
Refresh asset manifest with specialty logos and facility variants

Specialty program logos table is now populated with the four base
slugs that have assets on disk: logo-immersion, logo-new-pathway,
logo-case-management, logo-virtual-counseling.

Facility lockups table gains fac-portland-addiction-center and five
fac-virtual-counseling-{colorado,florida,maine,new-jersey,texas}
regional variants. The generic fac-virtual-counseling row (no asset
on disk) is removed.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Final verification

- [ ] **Step 1: Full clean build**

Run: `npm run build`
Expected: `✓ built in <n>ms`, no errors.

- [ ] **Step 2: Acceptance criteria check**

Against the spec ([docs/superpowers/specs/2026-06-01-letterhead-and-manifest-design.md](docs/superpowers/specs/2026-06-01-letterhead-and-manifest-design.md) §7):

| Criterion | Status |
|---|---|
| `npm run build` succeeds | Verified in Step 1 |
| Letterhead H4 inside Stationery with General + 21 facility cards | Verified manually in Task 4 Step 4 |
| Empty letterhead URLs trigger "Link coming soon." alert | Verified manually in Task 4 Step 4 |
| Populated URL triggers direct download | Not testable in this plan (no URLs added); verified by code path: `letterheadUrl` → `toDirectDownload` → existing tested helper |
| Manifest lists all 4 specialty program logos | Verified in Task 5 Step 3 |
| Manifest lists 6 new facility entries, removes 1 stale row | Verified in Task 5 Step 3 |

- [ ] **Step 3: Final lint pass (optional but recommended)**

Run: `npm run lint`
Expected: no new errors. (If existing baseline has warnings, they should be unchanged.)

---

## Out of scope (deferred)

- Populating actual Drive URLs for any `LETTERHEAD` entry. The user fills these in by editing `links.js`, exactly like they do for `LOGOS`.
- Resolving whether `fac-new-pathway-paramus` and `fac-southern-maine-recovery` should be removed from the manifest. They're not in `FACS` and not on disk, but were in the prior manifest — keeping them is the conservative choice for this change.
- Any update to `public/app.jsx` (unused legacy copy).
- Tests — repo has none per `CLAUDE.md`.
