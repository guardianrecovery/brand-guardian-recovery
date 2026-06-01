# Asset Manifest — Guardian Recovery Brand Guide V2

Drop files into the appropriate folder. No rebuild needed during `npm run dev`.
`npm run build` copies everything to `dist/`.


## Logo File Structure

Every logo uses a **folder-per-slug** layout with four format subdirectories.
The dropdown in the guide resolves paths automatically via `logoPath()`:

```
/assets/logos/{slug}/
  vector/{slug}.svg       <- Vector (also used as card preview)
  web/{slug}.png          <- Web (PNG with background)
  web-no-bg/{slug}.png    <- Web No BG (transparent PNG)
  print/{slug}.eps        <- Print (EPS)
```

### Primary logos

| Slug | Logo |
|------|------|
| `gr-horizontal` | Primary Horizontal |
| `gr-horizontal-stacked` | Primary Horizontal Stacked |
| `gr-vertical` | Primary Vertical |
| `gr-badge` | Circular Badge |

### Inverted / knockout

| Slug | Logo |
|------|------|
| `gr-horizontal-inv` | Horizontal Inverted |
| `gr-horizontal-stacked-inv` | Horizontal Stacked Inverted |
| `gr-vertical-inv` | Vertical Inverted |
| `gr-badge-inv` | Badge Inverted |

### Service line logos

LogoGrid appends `-inv` (inverted) and `-vert` (vertical) suffixes.
Create all four combinations per base slug.

| Base slug | Logo | Folders needed |
|-----------|------|----------------|
| `logo-sud` | Adult SUD | `logo-sud/`, `logo-sud-vert/`, `logo-sud-inv/`, `logo-sud-inv-vert/` |
| `logo-mh` | Adult Mental Health | Same pattern |
| `logo-adol` | Adolescent | Same pattern |
| `logo-virtual` | Guardian Virtual | Same pattern |

### Specialty program logos

LogoGrid appends `-inv` and `-vert` suffixes. Same four-variant rule as service-line logos.

| Base slug | Logo | Folders needed |
|-----------|------|----------------|
| `logo-immersion` | Immersion | `logo-immersion/`, `logo-immersion-vert/`, `logo-immersion-inv/`, `logo-immersion-inv-vert/` |
| `logo-new-pathway` | New Pathway | Same pattern |
| `logo-case-management` | Case Management | Same pattern |
| `logo-virtual-counseling` | Virtual Counseling | Same pattern |

### Facility lockups

Auto-generated slugs with `fac-` prefix. Same suffix rules.

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

### Standalone logo files (not in dropdown system)

| Path | Used in |
|------|---------|
| `/assets/logos/nav-logo.svg` | Sidebar navigation |
| `/assets/logos/logo-secondary.svg` | Footer (centered) |


## /assets/icons/

| File | Used in |
|------|---------|
| `sunrise.svg` | Iconography — primary standalone mark |
| `sunrise-gambodge.svg` | Iconography — on dark backgrounds |
| `sunrise-frost.svg` | Iconography — knockout/inverted |
| `icon-sud.svg` | Service line icons — Adult SUD |
| `icon-mh.svg` | Service line icons — Adult Mental Health |
| `icon-adol.svg` | Service line icons — Adolescent |
| `icon-virtual.svg` | Service line icons — Virtual |


## /assets/graphics/

| File | Used in |
|------|---------|
| `arch-divider.svg` | Every section header + Graphics section example |
| `hero-divider.svg` | Overview header subdivider line |
| `pattern-on-midnight.png` | Brand pattern block — Midnight background |
| `pattern-on-frost.png` | Brand pattern block — Frost background |
| `pattern-on-glacier.png` | Brand pattern block — Glacier background |


## /assets/photos/

| File | Used in |
|------|---------|
| `rep-sticker-preview.jpg` | BD Resources — rep sticker card |
| `framing-glacier.jpg` | Photography — rounded-corner demo (Glacier bg) |
| `framing-pacific.jpg` | Photography — rounded-corner demo (Pacific 50 bg) |
| `framing-midnight.jpg` | Photography — rounded-corner demo (Midnight bg) |


## /assets/previews/

Preview modal images. The modal auto-resolves paths from the item title:
`/assets/previews/{slugified-title}.jpg`

The `previewSlug()` function lowercases the title and replaces non-alphanumeric
characters with hyphens. Examples:

| Item title | Preview file |
|------------|-------------|
| Letterhead | `letterhead.jpg` |
| Business Cards | `business-cards.jpg` |
| BD Rep Sticker | `bd-rep-sticker.jpg` |
| BD Presentation Deck | `bd-presentation-deck.jpg` |
| Board Deck | `board-deck.jpg` |
| Investor Deck | `investor-deck.jpg` |
| Meeting Templates | `meeting-templates.jpg` |
| Reports | `reports.jpg` |
| Executive Summary | `executive-summary.jpg` |
| Thought Leadership | `thought-leadership.jpg` |
| Speaker Kit | `speaker-kit.jpg` |
| Media Kit | `media-kit.jpg` |
| Folders | `folders.jpg` |
| Apparel | `apparel.jpg` |
| Merchandise | `merchandise.jpg` |
| Envelopes | `envelopes.jpg` |
| Notecards | `notecards.jpg` |
| Pull-Up Banners | `pull-up-banners.jpg` |
| Backdrops | `backdrops.jpg` |
| Branded Tablecloth | `branded-tablecloth.jpg` |
| Name Badges | `name-badges.jpg` |
| Event Signage | `event-signage.jpg` |
| Folder Booklet | `folder-booklet.jpg` |
| One-Pager | `one-pager.jpg` |
| Trifold | `trifold.jpg` |
| Rack Card | `rack-card.jpg` |
| Digital PDF | `digital-pdf.jpg` |

Missing images show "Preview image not yet available" with the expected path.


## /assets/downloads/

| File | Used in |
|------|---------|
| `brand-guidelines-v2.pdf` | Nav download button — PDF version |
| `brand-guidelines-v2.md` | Nav download button — Markdown version |


## Quick Reference

**Logo dropdown downloads** (auto-resolved):
```jsx
<LogoDownload n="Horizontal" slug="gr-horizontal" />
```

**LogoGrid items** (4th element = base slug):
```jsx
<LogoGrid items={[["Adult SUD", null, accentColor, "logo-sud"]]} />
```

**Preview modal** (auto-resolved from title):
```jsx
// Pc cards use _openPreview automatically
// Manual: openPreview("BD Presentation Deck")
// Resolves to: /assets/previews/bd-presentation-deck.jpg
```

**Bt download buttons**:
```jsx
<Bt href="/assets/path/file.ext">Download</Bt>
```

**Brand pattern images** (overlay on colored blocks):
```
/assets/graphics/pattern-on-midnight.png
/assets/graphics/pattern-on-frost.png
/assets/graphics/pattern-on-glacier.png
```
