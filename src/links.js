// ============================================================
// DOWNLOAD LINKS — Guardian Recovery Brand Guide V2
// ============================================================
//
// All external download URLs in one place.
// Update a URL here → every Download button using it updates automatically.
//
// For Google Drive links, use the direct download format:
//   https://drive.google.com/uc?export=download&id=FILE_ID
//
// Or the sharing link format (opens preview first):
//   https://drive.google.com/file/d/FILE_ID/view
//
// To get FILE_ID from a sharing URL:
//   https://drive.google.com/file/d/ABC123xyz/view → FILE_ID = ABC123xyz


// ----- Full guide downloads (nav sidebar) -----

export var GUIDE_PDF = ''                                  // brand-guidelines-v2.pdf
export var GUIDE_MD = '/assets/brand-guidelines-v2.md'     // brand-guidelines-v2.md


// ----- Master logo packages -----

export var MASTER_LOGO_PACKAGE = ''   // ZIP of all primary logos
export var LOGO_USAGE_GUIDE = ''      // Logo usage rules PDF
export var ALL_PROGRAM_LOGOS = ''      // ZIP of all program logos
export var ALL_FACILITY_LOGOS = ''     // ZIP of all facility lockups


// ----- Logo downloads (per slug × format) -----
// Structure: LOGOS[slug][format] = url
// Formats: vector, web, web-no-bg, print
//
// Example:
//   LOGOS['gr-horizontal'] = {
//     vector: 'https://drive.google.com/uc?export=download&id=...',
//     web: 'https://drive.google.com/uc?export=download&id=...',
//     'web-no-bg': 'https://drive.google.com/uc?export=download&id=...',
//     print: 'https://drive.google.com/uc?export=download&id=...',
//   }

export var LOGOS = {}


// ----- Icon downloads (per slug × format) -----
// Structure: ICONS[slug][format] = url
// Formats: svg, png

export var ICONS = {}


// ----- Collateral and BD downloads -----

export var BD_DECK_PPTX = ''          // BD presentation deck
export var BD_DECK_SLIDES = ''        // Google Slides link


// ----- Asset Hub downloads -----
// Structure: HUB[slug] = url

export var HUB = {
  'master-logos': '',
  'facility-logos': '',
  'icons': '',
  'color-reference': '',
  'brand-pattern': '',
  'fonts': '',
  'guidelines': '',
  'photography-guide': '',
  'email-templates': '',
  'social-templates': '',
  'presentation-templates': '',
}


// ----- Print ordering links -----
// Structure: PRINT_ORDER[slug] = url

export var PRINT_ORDER = {
  'business-cards': '',
  'rep-stickers': '',
  'folders': '',
  'banners': '',
  'stationery': '',
  'apparel': '',
  'merchandise': '',
  'trifolds': '',
  'rack-cards': '',
}

export var PRINT_ALT_VENDOR = ''      // Alternative vendor link


// ----- Template links -----

export var SOCIAL_TEMPLATES = ''
export var EMAIL_TEMPLATES = ''
export var VIDEO_FILES = ''


// ----- Helper: resolve a logo download URL -----
// Returns the URL for a given slug + format key, or empty string

var FMT_KEY_MAP = {
  'Vector': 'vector',
  'Web': 'web',
  'Web No BG': 'web-no-bg',
  'Print': 'print',
}

export function logoDownloadUrl(slug, format) {
  var key = FMT_KEY_MAP[format] || 'vector'
  var entry = LOGOS[slug]
  return (entry && entry[key]) || ''
}


// ----- Helper: resolve an icon download URL -----

export function iconDownloadUrl(slug, format) {
  var key = format === 'PNG' ? 'png' : 'svg'
  var entry = ICONS[slug]
  return (entry && entry[key]) || ''
}
