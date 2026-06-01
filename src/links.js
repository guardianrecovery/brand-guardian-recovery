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
// All Download buttons resolve to external Google Drive URLs set below.
// Until an entry is added for a slug + format, the button shows the
// "Link coming soon." alert.
//
// File extension convention (informational — for the files on Drive):
//   vector-web   → .svg
//   web          → .jpg
//   web-no-bg    → .png
//   vector-print → .eps
//   print        → .png
//
// Structure: LOGOS[slug][format] = url
// Formats: vector-web, web, web-no-bg, vector-print, print
//
// Example:
//   LOGOS['gr-horizontal'] = {
//     'vector-web': 'https://drive.google.com/uc?export=download&id=...',
//     web: 'https://drive.google.com/uc?export=download&id=...',
//     'web-no-bg': 'https://drive.google.com/uc?export=download&id=...',
//     'vector-print': 'https://drive.google.com/uc?export=download&id=...',
//     print: 'https://drive.google.com/uc?export=download&id=...',
//   }

export var LOGOS = {
  // Primary Logos
  'gr-horizontal': {
    'vector-web': 'https://drive.google.com/file/d/1U3wQJ5lgFuQxPl6bvgcizpbk7N1QzfVS/view?usp=drive_link',
    web: 'https://drive.google.com/file/d/1FJQr356NBgq_bVqw2YF899ioL2Wg2R1T/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/1jIm1b2SnqmhoZZRp2l-GW6clf1fvQl04/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1vlJm6L-drO63tcg2gCE5dSsuQx7i4SBs/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/1iJ-qckSYLrjdiwHdZB7Rk6VdadQg0Q4q/view?usp=drive_link',
  },
  'gr-horizontal-inv': {
    'vector-web': 'https://drive.google.com/file/d/1n8CvqRsQOh7ecxrSRA8PQU61YgvNn-yt/view?usp=drive_link',
    //web: 'https://drive.google.com/file/d/1FJQr356NBgq_bVqw2YF899ioL2Wg2R1T/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/1XKmOwypdSLLmK48zpbzlzSQ5t6zq_UIA/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1P3sSVU5YK8gpfpGcmKRDksS8upfDXH-y/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/1ro9zyQqRGIcn53ggMJ7R61Xe105xcT1_/view?usp=drive_link',
  },
  'gr-horizontal-stacked': {
    'vector-web': 'https://drive.google.com/file/d/1PmPDfN78RqPOAcjdUVSDS8V3kEOME22l/view?usp=drive_link',
    web: 'https://drive.google.com/file/d/1pJU9LBPrNaN0BLzTKgxn5Cq44gTqNBee/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/1ZF5DW9Y4tSJytn5B_6_2rAsVvsQ9syOm/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1IBUeHRjYsb-wLu0ZOAsMjbEuvvcHFDyG/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/1jyevDGN8uEHmtRfDtXKV6ZrtSBg-hz9y/view?usp=drive_link',
  },
  'gr-horizontal-stacked-inv': {
    'vector-web': 'https://drive.google.com/file/d/1zGNtKdm5ECMUDZ-59qTHSvhEFotHF-XT/view?usp=drive_link',
    //web: 'https://drive.google.com/uc?export=download&id=...',
    'web-no-bg': 'https://drive.google.com/file/d/1YMATeBklDUZ7lztXryfQv59tHX-WiEAs/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1OZevul_Uz8c0LN-YhpgUaVVUrozuUWcD/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/1IhU69jCDffVsJe_SJ_sZeQa4WSje2oiH/view?usp=drive_link',
  },
  'gr-vertical': {
    'vector-web': 'https://drive.google.com/file/d/17QxDrzYM7CfXX81q9R13er7p93cht1jY/view?usp=drive_link',
    web: 'https://drive.google.com/file/d/17rSNHQHmUgwsmBq0-YtMmow4WHTAYser/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/19oNfsDdp3fJsi7-LJ1Lv5ImIN2uWXOHZ/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1JegKu4Q2n98cA0ueU6aotmVePRsmfjRU/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/1iErnUh3SiiTxdwFJr2_uqJOWPBeGjqgF/view?usp=drive_link',
  },
  'gr-vertical-inv': {
    'vector-web': 'https://drive.google.com/file/d/1E72gv8bWG3gFuMu4j3ayfvb53EZV6a5A/view?usp=drive_link',
    //web: 'https://drive.google.com/uc?export=download&id=...',
    'web-no-bg': 'https://drive.google.com/file/d/1MnIvzcGfTIVEvmYl-0EFWoBW4augQcQS/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1JSBP-mXrzq9CQptXc0a0qkspSHrafe8E/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/1qCt848rCBNMp07lNHKLs9W2YkwWuy57f/view?usp=drive_link',
  },
  'gr-badge': {
    'vector-web': 'https://drive.google.com/file/d/13QNrgavlc7FLccDPbAB0GfJO83jbVewT/view?usp=drive_link',
    web: 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1BZN01mjzz8zXh6LIDXD7xVHLVKhMqEC6/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/1WlUJ0LuVcVAsVsRiVb5IS4SM2YrGtmi2/view?usp=drive_link',
  },
  'gr-badge-inv': {
    'vector-web': 'https://drive.google.com/file/d/1BZN01mjzz8zXh6LIDXD7xVHLVKhMqEC6/view?usp=drive_link',
    //web: 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1WlUJ0LuVcVAsVsRiVb5IS4SM2YrGtmi2/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/13QNrgavlc7FLccDPbAB0GfJO83jbVewT/view?usp=drive_link',
  },


  // Service Logos
  'logo-sud': {
    'vector-web': 'https://drive.google.com/file/d/1yEvFr7fI2VXc1Sc2iALcNYLMzuDX0Ml0/view?usp=drive_link',
    web: 'https://drive.google.com/file/d/1dYwbxsaDIlRfPAQuCqBuFzorfdJdvvn6/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/1PZn5brdctAcZJ0Xl4K7sALD53M4TF74W/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1HHZkjr-dLLN0m7V1IDYDAth4Rqf8VHV-/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/17OuQBheZP8OcHoYZ0NTGA6cF1u1PNR-Q/view?usp=drive_link',
  },
  'logo-sud-vert': {
    'vector-web': 'https://drive.google.com/file/d/1BZN01mjzz8zXh6LIDXD7xVHLVKhMqEC6/view?usp=drive_link',
    web: 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1WlUJ0LuVcVAsVsRiVb5IS4SM2YrGtmi2/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/13QNrgavlc7FLccDPbAB0GfJO83jbVewT/view?usp=drive_link',
  },
  'logo-sud-inv': {
    'vector-web': 'https://drive.google.com/file/d/1BZN01mjzz8zXh6LIDXD7xVHLVKhMqEC6/view?usp=drive_link',
    //web: 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1WlUJ0LuVcVAsVsRiVb5IS4SM2YrGtmi2/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/13QNrgavlc7FLccDPbAB0GfJO83jbVewT/view?usp=drive_link',
  },
  'logo-sud-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1BZN01mjzz8zXh6LIDXD7xVHLVKhMqEC6/view?usp=drive_link',
    //web: 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'web-no-bg': 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drive_link',
    'vector-print': 'https://drive.google.com/file/d/1WlUJ0LuVcVAsVsRiVb5IS4SM2YrGtmi2/view?usp=drive_link',
    print: 'https://drive.google.com/file/d/13QNrgavlc7FLccDPbAB0GfJO83jbVewT/view?usp=drive_link',
  },
}


// ----- Icon downloads (per slug × format) -----
// Structure: ICONS[slug][format] = url
// Formats: vector-web, web, web-no-bg, vector-print, print

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


// ----- Template links -----

export var SOCIAL_TEMPLATES = ''
export var EMAIL_TEMPLATES = ''
export var VIDEO_FILES = ''


// ----- Helper: resolve a logo download URL -----
// Returns the URL for a given slug + format key, or empty string

var FMT_KEY_MAP = {
  'Vector Web': 'vector-web',
  'Web': 'web',
  'Web No BG': 'web-no-bg',
  'Vector Print': 'vector-print',
  'Print': 'print',
}

// Normalizes a Google Drive sharing URL (/file/d/FILE_ID/view) into the
// direct-download form (uc?export=download&id=FILE_ID). Leaves non-Drive
// URLs and already-normalized URLs untouched.
function toDirectDownload(url) {
  if (!url) return ''
  var m = /drive\.google\.com\/file\/d\/([^/]+)/.exec(url)
  if (m) return 'https://drive.google.com/uc?export=download&id=' + m[1]
  var o = /drive\.google\.com\/open\?id=([^&]+)/.exec(url)
  if (o) return 'https://drive.google.com/uc?export=download&id=' + o[1]
  return url
}

export function logoDownloadUrl(slug, format) {
  var key = FMT_KEY_MAP[format] || 'vector-web'
  var entry = LOGOS[slug]
  return toDirectDownload((entry && entry[key]) || '')
}


// ----- Helper: resolve an icon download URL -----

export function iconDownloadUrl(slug, format) {
  var key = FMT_KEY_MAP[format] || 'vector-web'
  var entry = ICONS[slug]
  return toDirectDownload((entry && entry[key]) || '')
}


// ----- Helper: resolve a letterhead download URL -----

export function letterheadUrl(slug) {
  return toDirectDownload(LETTERHEAD[slug] || '')
}
