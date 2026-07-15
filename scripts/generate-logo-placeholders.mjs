// One-off script: generate placeholder preview SVGs for every logo slug
// referenced in src/App.jsx. Drop a real SVG with the same filename to
// replace any placeholder. Re-run anytime; existing real artwork is skipped
// only if it isn't a generated placeholder (placeholders are marked).

import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(__dirname, '..')
const outDir = join(repoRoot, 'src', 'assets', 'logos')
mkdirSync(outDir, { recursive: true })

const PLACEHOLDER_MARK = '<!-- gr-placeholder -->'

// ----- Slug list -----

const primary = [
  'gr-horizontal',
  'gr-horizontal-stacked',
  'gr-vertical',
  'gr-badge',
]

const programBases = [
  'logo-sud',
  'logo-mh',
  'logo-adol',
  'logo-virtual',
]

const specialtyBases = [
  'logo-immersion',
  'logo-new-pathway',
  'logo-virtual-counseling',
  'logo-case-management',
]

const facilityNames = [
  'Immersion Residential',
  'Immersion Outpatient',
  'Princeton Detox & Recovery Center',
  'Princeton Psychiatry & Counseling',
  'New Pathway Bayonne',
  'New Pathway Pine Brook',
  'Hoboken Counseling Center',
  'New Brunswick Counseling Center',
  'Saddle Brook Counseling Center',
  'Montville Adolescent Center',
  'Pine Tree',
  'Portland Psychiatry & Counseling',
  'Plymouth House',
  'Portland Addiction Center',
  'CuraWest',
  'Dallas Addiction Center',
  'Virtual Counseling Maine',
  'Virtual Counseling Colorado',
  'Virtual Counseling Florida',
  'Virtual Counseling New Jersey',
  'Virtual Counseling Texas',
]

function slugify(name) {
  return 'fac-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const facilityBases = facilityNames.map(slugify)

// Primary uses LogoDownload with explicit slugs including -inv variants.
const primarySlugs = []
for (const base of primary) {
  primarySlugs.push(base, `${base}-inv`)
}

// LogoGrid bases expand into 4 variants each: base, -vert, -inv, -inv-vert
function expandGridSlugs(bases) {
  const out = []
  for (const base of bases) {
    out.push(base, `${base}-vert`, `${base}-inv`, `${base}-inv-vert`)
  }
  return out
}

const allSlugs = [
  ...primarySlugs,
  ...expandGridSlugs(programBases),
  ...expandGridSlugs(specialtyBases),
  ...expandGridSlugs(facilityBases),
]

// ----- Placeholder SVG template -----

function placeholderSvg(slug) {
  const inverted = slug.includes('-inv')
  const vertical = slug.endsWith('-vert')
  const bg = inverted ? '#083045' : '#F2F1F0'
  const fg = inverted ? '#FAFAF9' : '#004860'
  const muted = inverted ? '#9DD3DF' : '#97999B'
  const border = inverted ? '#004860' : '#D3E7EE'

  const w = vertical ? 240 : 360
  const h = vertical ? 240 : 160
  const orientLabel = vertical ? 'VERTICAL' : 'HORIZONTAL'
  const modeLabel = inverted ? 'INVERTED' : 'FULL COLOR'

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${slug} placeholder">
  ${PLACEHOLDER_MARK}
  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="10" fill="${bg}" stroke="${border}" stroke-dasharray="6 4"/>
  <text x="50%" y="42%" text-anchor="middle" font-family="'IBM Plex Sans', system-ui, sans-serif" font-size="${vertical ? 16 : 18}" font-weight="600" fill="${fg}">${slug}</text>
  <text x="50%" y="58%" text-anchor="middle" font-family="'IBM Plex Sans', system-ui, sans-serif" font-size="10" letter-spacing="0.12em" fill="${muted}">PLACEHOLDER · ${orientLabel} · ${modeLabel}</text>
</svg>
`
}

// ----- Write files -----

let written = 0
let skipped = 0
const seen = new Set()
for (const slug of allSlugs) {
  if (seen.has(slug)) continue
  seen.add(slug)
  const filePath = join(outDir, `${slug}.svg`)
  if (existsSync(filePath)) {
    const existing = readFileSync(filePath, 'utf8')
    if (!existing.includes(PLACEHOLDER_MARK)) {
      skipped++
      continue
    }
  }
  writeFileSync(filePath, placeholderSvg(slug))
  written++
}

console.log(`Wrote ${written} placeholder SVGs to src/assets/logos/`)
console.log(`Skipped ${skipped} files that contain real (non-placeholder) artwork`)
console.log(`Total slug coverage: ${seen.size}`)
