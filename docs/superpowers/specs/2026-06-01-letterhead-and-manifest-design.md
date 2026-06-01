# Letterhead Downloads + Asset Manifest Update — Design

**Date:** 2026-06-01
**Scope:** Add letterhead download blocks (general + per-facility) to the brand guide and refresh `ASSET-MANIFEST.md` to reflect the specialty program logos and facility variants that now exist on disk.

---

## 1. Goals

- Users can download a "General Letterhead" `.docx` and a per-facility `.docx` letterhead for every facility in `FACS`, directly from the Print and Collateral section of the brand guide.
- The asset manifest accurately lists every logo slug currently present in `src/assets/logos/`, including the specialty program logos (`logo-immersion`, `logo-new-pathway`, `logo-case-management`, `logo-virtual-counseling`) and the five regional `fac-virtual-counseling-*` variants plus `fac-portland-addiction-center`.
- Link data lives in `src/links.js` following the existing `LOGOS` pattern, so URLs can be filled in later without touching component code.

## 2. Non-goals

- No `.docx` files are authored, uploaded, or referenced — every entry ships as an empty string (`''`).
- No new Drive folders, no PDF or Google Docs variants. Single `.docx` per block.
- No new top-level nav section. Stays inside Print and Collateral → Stationery.
- No edits to `public/app.jsx` (unused legacy copy).
- No changes to existing `LOGOS` / `ICONS` data or to the format dropdown behavior.

## 3. UI changes — `src/App.jsx`, Section 15 "Print and Collateral"

### Current structure ([src/App.jsx:4555](src/App.jsx#L4555))

```jsx
<Sec id="print" pn="III" t="Print and Collateral">
  <H3>Stationery</H3>
  <Row gap={10}>
    {[
      ["Letterhead", "Logo + Gambodge accent"],
      ["Envelopes", "Primary logo"],
      ["Notecards", "Secondary logo"],
    ].map(function (i) { return <Pc key={i[0]} t={i[0]} d={i[1]} />; })}
  </Row>
  …
</Sec>
```

### Target structure

```jsx
<Sec id="print" pn="III" t="Print and Collateral">
  <H3>Stationery</H3>

  <H4>Letterhead</H4>
  {/* General letterhead — single card */}
  <Row gap={10}>
    <LetterheadCard
      title="General Letterhead"
      subtitle="Guardian Recovery — corporate"
      slug="general"
    />
  </Row>

  {/* Per-facility letterheads — grid */}
  <Row gap={10}>
    {FACS.map(function (f) {
      var name = f[0];
      var loc = f[1];
      return (
        <LetterheadCard
          key={name}
          title={name}
          subtitle={loc}
          slug={facSlug(name)}
        />
      );
    })}
  </Row>

  <H4>Other Stationery</H4>
  <Row gap={10}>
    {[
      ["Envelopes", "Primary logo"],
      ["Notecards", "Secondary logo"],
    ].map(function (i) { return <Pc key={i[0]} t={i[0]} d={i[1]} />; })}
  </Row>

  <H3>Brochures</H3>
  …
</Sec>
```

The original `Pc t="Letterhead"` preview card is removed — superseded by the new dedicated Letterhead subsection.

### New component: `LetterheadCard`

A compact card local to `src/App.jsx`, modeled on `LogoDownload` but simpler:

```jsx
function LetterheadCard(props) {
  var dlHref = letterheadUrl(props.slug);
  return (
    <div style={{
      border: "1px solid " + C.gla,
      borderRadius: 10,
      padding: 14,
      flex: "1 1 200px",
      minWidth: 200,
    }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: C.mid, marginBottom: 2 }}>
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

No format dropdown. No preview thumbnail. One button. Empty `dlHref` falls through to the existing "Link coming soon." alert path that `Bt` already handles for other empty hrefs.

### Slug derivation: `facSlug(name)`

The existing facility slug rule (lowercase, non-alphanumerics → `-`, collapse repeats, trim, prefix `fac-`) is already used to resolve `fac-*` logo assets elsewhere in `App.jsx`. We will reuse / extract that same function so `LETTERHEAD` keys, logo paths, and the new letterhead cards all agree on slug shape with zero duplication.

If the existing helper is inlined or scattered, the implementation plan should consolidate it into a single `facSlug` (or similar) and export-or-share it within `App.jsx`. No new module needed.

## 4. Link storage — `src/links.js`

Append a new export under the existing `LOGOS` / `ICONS` blocks:

```js
// ----- Letterhead downloads (per facility slug) -----
// Structure: LETTERHEAD[slug] = url (Google Drive sharing or uc?export=download URL)
// Keys:
//   'general'                              → General Guardian Recovery letterhead
//   'fac-<facility-slug>'                  → One key per FACS entry
//
// URLs are auto-normalized via toDirectDownload() so either Drive URL shape
// (https://drive.google.com/file/d/.../view  OR  https://drive.google.com/uc?export=download&id=...)
// will trigger a direct download.

export var LETTERHEAD = {
  general: '',
  // One key per FACS entry — populated mechanically by the implementation plan
  // from the live FACS array in App.jsx (using the same facSlug rule used by
  // the facility lockup logos). Pre-seeded as empty strings so it's obvious
  // which entries still need a URL.
}

export function letterheadUrl(slug) {
  return toDirectDownload(LETTERHEAD[slug] || '')
}
```

Notes:
- Pre-seeding all current FACS slugs as empty strings makes it obvious which entries still need a URL (find `'',$` in the file).
- The `toDirectDownload()` helper added in the prior session is reused unchanged.
- `letterheadUrl` follows the same shape as `logoDownloadUrl` / `iconDownloadUrl`.

## 5. Asset manifest changes — `public/assets/ASSET-MANIFEST.md`

### 5a. "Specialty program logos" section

Replace the placeholder text with the four specialty program logos that now exist on disk:

```markdown
### Specialty program logos

LogoGrid appends `-inv` and `-vert` suffixes. Same four-variant rule as service-line logos.

| Base slug | Logo | Folders needed |
|-----------|------|----------------|
| `logo-immersion` | Immersion | Same pattern |
| `logo-new-pathway` | New Pathway | Same pattern |
| `logo-case-management` | Case Management | Same pattern |
| `logo-virtual-counseling` | Virtual Counseling | Same pattern |
```

### 5b. "Facility lockups" table

- **Add** these rows (alphabetical insertion or grouped by region — match the existing table order, which is FACS order):
  - `fac-portland-addiction-center` → "Portland Addiction Center"
  - `fac-virtual-counseling-colorado` → "Virtual Counseling — Colorado"
  - `fac-virtual-counseling-florida` → "Virtual Counseling — Florida"
  - `fac-virtual-counseling-maine` → "Virtual Counseling — Maine"
  - `fac-virtual-counseling-new-jersey` → "Virtual Counseling — New Jersey"
  - `fac-virtual-counseling-texas` → "Virtual Counseling — Texas"

- **Remove** the generic `fac-virtual-counseling` row, since no matching asset exists on disk (only state variants do).

Insertion order: keep the existing manifest grouping (Florida → New Jersey → New England → Texas → Florida virtual etc.). The implementation plan will pick a concrete ordering that follows what's already there.

## 6. Files touched

| File | Change |
|---|---|
| `src/App.jsx` | Restructure Stationery subsection; add `LetterheadCard` component; consolidate `facSlug` helper if scattered |
| `src/links.js` | Add `LETTERHEAD` export, `letterheadUrl` helper, import re-export as needed |
| `public/assets/ASSET-MANIFEST.md` | Specialty logos table populated; facility table updated (add 6 rows, remove 1) |

`public/app.jsx` is intentionally not touched.

## 7. Acceptance criteria

- `npm run build` succeeds.
- The brand guide renders a "Letterhead" H4 inside Stationery with one General card and 18 facility cards.
- Clicking Download on any letterhead card whose URL is still empty triggers the existing "Link coming soon." alert (no broken navigation, no 404).
- Once a URL is pasted into `LETTERHEAD` for any slug (either Drive URL shape), that card's Download button immediately triggers a direct file download.
- The asset manifest lists all four specialty program logos and the six new facility entries; no slug listed in the manifest is absent from `src/assets/logos/`, and vice versa for the entries we just added.

## 8. Open questions

None at design time. The implementation plan will resolve:
- Exact location of the existing facility-slug logic in `App.jsx` (extract vs. duplicate).
- Exact `FACS` slug list to seed `LETTERHEAD` with — derived mechanically from the current `FACS` array by mapping each `f[0]` (facility name) through `facSlug()`. The actual count and order come from FACS at implementation time, not this spec.
- Whether `fac-virtual-counseling` (generic, currently referenced in App but with no on-disk asset) should be kept as a FACS entry or replaced by the five regional `fac-virtual-counseling-*` variants. This spec only commits to the manifest side of that question (remove generic, add five regional rows). The App-side question is out of scope for this change.
