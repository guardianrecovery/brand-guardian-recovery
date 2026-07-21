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
    'vector-web': 'https://drive.google.com/file/d/1U3wQJ5lgFuQxPl6bvgcizpbk7N1QzfVS/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1FJQr356NBgq_bVqw2YF899ioL2Wg2R1T/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1jIm1b2SnqmhoZZRp2l-GW6clf1fvQl04/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1vlJm6L-drO63tcg2gCE5dSsuQx7i4SBs/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1iJ-qckSYLrjdiwHdZB7Rk6VdadQg0Q4q/view?usp=drivesdk',
  },
  'gr-horizontal-inv': {
    'vector-web': 'https://drive.google.com/file/d/1n8CvqRsQOh7ecxrSRA8PQU61YgvNn-yt/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1XKmOwypdSLLmK48zpbzlzSQ5t6zq_UIA/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1P3sSVU5YK8gpfpGcmKRDksS8upfDXH-y/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1ro9zyQqRGIcn53ggMJ7R61Xe105xcT1_/view?usp=drivesdk',
  },
  'gr-horizontal-stacked': {
    'vector-web': 'https://drive.google.com/file/d/1PmPDfN78RqPOAcjdUVSDS8V3kEOME22l/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1pJU9LBPrNaN0BLzTKgxn5Cq44gTqNBee/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1ZF5DW9Y4tSJytn5B_6_2rAsVvsQ9syOm/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1IBUeHRjYsb-wLu0ZOAsMjbEuvvcHFDyG/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1jyevDGN8uEHmtRfDtXKV6ZrtSBg-hz9y/view?usp=drivesdk',
  },
  'gr-horizontal-stacked-inv': {
    'vector-web': 'https://drive.google.com/file/d/1zGNtKdm5ECMUDZ-59qTHSvhEFotHF-XT/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1YMATeBklDUZ7lztXryfQv59tHX-WiEAs/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1OZevul_Uz8c0LN-YhpgUaVVUrozuUWcD/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1IhU69jCDffVsJe_SJ_sZeQa4WSje2oiH/view?usp=drivesdk',
  },
  'gr-vertical': {
    'vector-web': 'https://drive.google.com/file/d/17QxDrzYM7CfXX81q9R13er7p93cht1jY/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/17rSNHQHmUgwsmBq0-YtMmow4WHTAYser/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/19oNfsDdp3fJsi7-LJ1Lv5ImIN2uWXOHZ/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1JegKu4Q2n98cA0ueU6aotmVePRsmfjRU/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1iErnUh3SiiTxdwFJr2_uqJOWPBeGjqgF/view?usp=drivesdk',
  },
  'gr-vertical-inv': {
    'vector-web': 'https://drive.google.com/file/d/1E72gv8bWG3gFuMu4j3ayfvb53EZV6a5A/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1MnIvzcGfTIVEvmYl-0EFWoBW4augQcQS/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1JSBP-mXrzq9CQptXc0a0qkspSHrafe8E/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1qCt848rCBNMp07lNHKLs9W2YkwWuy57f/view?usp=drivesdk',
  },
  'gr-badge': {
    'vector-web': 'https://drive.google.com/file/d/1BZN01mjzz8zXh6LIDXD7xVHLVKhMqEC6/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1qvYXs6KRnXNkQfy1Ou_OzRTROYmo_Z7f/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1sB2nhpAAHDX0VaS8Q4fJe90BENrtfpLQ/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1WlUJ0LuVcVAsVsRiVb5IS4SM2YrGtmi2/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/13QNrgavlc7FLccDPbAB0GfJO83jbVewT/view?usp=drivesdk',
  },
  'gr-badge-inv': {
    'vector-web': 'https://drive.google.com/file/d/1f2txOQD5m8U-njR4pTLwRt3BzjkWdkqp/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1agqB-78mJzwSA_pzrVIZLlM1SUXa43Rp/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1mQOBrde2zRcznm3oZWx9zPyzrXY_MIhn/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/13SkUcVPBu_bRNTAufujWZW2CMldBVk4m/view?usp=drivesdk',
  },

  // Service Line Logos
  'logo-sud': {
    'vector-web': 'https://drive.google.com/file/d/1yEvFr7fI2VXc1Sc2iALcNYLMzuDX0Ml0/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1dYwbxsaDIlRfPAQuCqBuFzorfdJdvvn6/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1PZn5brdctAcZJ0Xl4K7sALD53M4TF74W/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1HHZkjr-dLLN0m7V1IDYDAth4Rqf8VHV-/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/17OuQBheZP8OcHoYZ0NTGA6cF1u1PNR-Q/view?usp=drivesdk',
  },
  'logo-sud-vert': {
    'vector-web': 'https://drive.google.com/file/d/1i5lCUOGvKlnoTxpJlz6_cUaW-3a6_9Dl/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1HPYDZ_pgbm0hEhWM39jqK9535Ph-f6ke/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1_DSJi7rqPL_Llc6kLfVSJKpORGiQYWMB/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1CxuS4EUi3ervOMNXFQ3wLxAIrVOnXJHc/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1M3e76GhVzT-ucMjaORm4lSmwcXKk0lD7/view?usp=drivesdk',
  },
  'logo-sud-inv': {
    'vector-web': 'https://drive.google.com/file/d/1m5a75R1nLPNGSWMn85PcFPja41vTsYsj/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1z8w0Y6UbwDW-TxDcZHu-HN45EdRzADi4/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/130kxZBI4zg7t-C4ccbf8tEotQkXROgV6/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1MYsBmAB5VViq-qCstFJAvMgkGmceUuza/view?usp=drivesdk',
  },
  'logo-sud-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1LCOJAt7dtJPW8cqPWUbvp_UcBwlcwrkm/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1aXbSKmq071n6sfH2Neqm5LvwyeqnkFOP/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1_7eb5nNtDrGKMAVxzljvsVWzmha7q0y6/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1OPSOAo4TywTM51whrtb_mCJK5uaKAjSj/view?usp=drivesdk',
  },
  'logo-mh': {
    'vector-web': 'https://drive.google.com/file/d/12cG0nebSPpFuCwM7UfiWQasRRYpdK43t/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1kqW2hESmhkVTZSaG5i9oM8B00lB6M1kz/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1bBnw43Qaha9YwNJcWfEW5sTsyPpCsUJl/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/13sC2R0coupcFlv72uOEWEqc1YHc1Vft2/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/13oBXMkqZiTwnpdlIbElAE4bkvakhxiws/view?usp=drivesdk',
  },
  'logo-mh-vert': {
    'vector-web': 'https://drive.google.com/file/d/1w2U584eCVuTZHsdX_gBv-hdz16if4Blj/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1qil6dnS_966gBIw2XTtxIkUr8_LovKiv/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1CweguyYz3z6F_HIhw39Wxu_OqB97eRgB/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/166py6HKOo9jLslZtcTQqsCHXVFgLAKnf/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1kxL5nw6_aPb6gwQM-unD5a2ABj7amKPY/view?usp=drivesdk',
  },
  'logo-mh-inv': {
    'vector-web': 'https://drive.google.com/file/d/13MjyEY_QXLNddOUvor1X_-yCv1oPRunO/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1GBV7EFUsvcszoQtTnuT19updrcvcGdxV/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1SnMpmIOtg0EYiRtIj4vmXg2MKQDqpkGL/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1H-_-1ZYURW0JLquiZT2r5ECSJgEl_kPK/view?usp=drivesdk',
  },
  'logo-mh-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1jeh0PRA6WVCmnV9Gc6-9s9nGXPcMRHi8/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/16keVjUmu7TERDbpKFOkytm1sfDS7EY--/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/14Bd47E_xaCJXnpHAIE7IyrLe6J51dJyJ/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1LAp2yM5jXbCM5BsZsBT5GNiatNwxllZo/view?usp=drivesdk',
  },
  'logo-adol': {
    'vector-web': 'https://drive.google.com/file/d/1zxZ5J4B6qHHo88Qxb-MJHPjRg-850N_-/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1OPxTMjpJ6dkLsOmoLFDoV9-M4e-5d4Oe/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1kwK-FpgPuC_5DjnBfzrONFLG3xpiOLYz/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1mR5vZwwYFGJVlmY0EPLAdtrAfU_N6of4/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1rWSuCIZB51swq3cRWGPa4a89znjKJZ1d/view?usp=drivesdk',
  },
  'logo-adol-vert': {
    'vector-web': 'https://drive.google.com/file/d/1HnzWN2MTnfnCE5gFVrDQRxYeGOG1eETU/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1V0GSRpgucgWNGBsZjGSt2_i5UFm_7xSv/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/14l1SZNwZFqB9nUfUYOGRE7JZ8dnIjc_T/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/17boxbEnZ11qfFV8wmNpQVmNTHSR4O9o7/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1ctgg1pvWr9_1ZjuMgK7WRG8R4YUDERTt/view?usp=drivesdk',
  },
  'logo-adol-inv': {
    'vector-web': 'https://drive.google.com/file/d/1GYgAde6JSp9dShrSfjiOSbdweG_Yo_7N/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1WWPaC_tuO18Qkim7nQNs2IM7ab2lQ2jF/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1FmxROw--G68qIhHVDZwdTyQnxAWzYK9e/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1XJz2x2ORkk1cipOmD-9-ODCHuVT7-OiW/view?usp=drivesdk',
  },
  'logo-adol-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1Ym2-ekWqhRItyYu3bXZjTpngG4vIVWvm/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1E4FV0gwoRiUKJyJYNF6Fnbk3wrDyb7-F/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1ctIZthW3WVa1i7xKh1OgvOKxBK1sismW/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1uU1aJUqj5G0VWa6Fc8S-KmbiYlrunL1n/view?usp=drivesdk',
  },
  'logo-virtual': {
    'vector-web': 'https://drive.google.com/file/d/1Tm0n1rnYAAGXGsrlQUQnaiQxLDKwX957/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/16lTXIVtTymxc15-jLXPvkFyC-If7ZuVQ/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1WdRxYTTSgsRdmYXApRHzp31GAdycKmGY/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1p9SlAIaoS4wg1nFkKT2gMikNGNvmsb5Q/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1RIvArmDYn5dmPMBQowJiPhN8_N-uQ8Qw/view?usp=drivesdk',
  },
  'logo-virtual-vert': {
    'vector-web': 'https://drive.google.com/file/d/1Wnq2VjEgx2Burt9An0Byvz7b3K5wu35O/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1Aq26p0pCvgnoiRnwDKJ9FR7x4RzsHyzW/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1b9beblSuLhSd1wDlH3sSY7YRokS3KGyD/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1tteL31mPtL1_sRfpeH94M_sWmML6LdNx/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1diWXrEXY9RiTQ3Uk8NaR18v0jBp3KlDl/view?usp=drivesdk',
  },
  'logo-virtual-inv': {
    'vector-web': 'https://drive.google.com/file/d/1kP6kobJPCF_oPpvdSfa2Mvr_R-s_ldBy/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1BSjNJt7ZJFjmj9qBfS7-Zkc-SZXu4rmw/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1QDfaDNDN1PJVu8UHcjfpzx7qPFQ--Dom/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/15nmTOKOXmTr9VU-Ya9jY40QTwSpUtpIZ/view?usp=drivesdk',
  },
  'logo-virtual-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/119LXxe2Ieigzl-dE4OQfeGp3AkeYfJzh/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1t2kOLxO3-8U-NDY3Kk-uHFraLQejRhNt/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1aKnAemHC0-0OKX5IDUdz8bU-HWm2-1qV/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1hfIxPil4SnxeH7aa9oykqQMljpAuPa8F/view?usp=drivesdk',
  },

  // Specialty Program Logos
  'logo-immersion': {
    'vector-web': 'https://drive.google.com/file/d/1zNfeBRC-oNH-jBmAxEzuQioIRGK7sVaG/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1gima9TDj_1xFGCvmy7CwRXps48ikYIiM/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1aYORir2YCFCh_6Q565HutBausTH9xP2Z/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1wUMCYxTZGnB2deLZ44FmeQgelFyQxpgR/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1z-3-v6MaGFp3arJI3g8jX4ek_itiIzqJ/view?usp=drivesdk',
  },
  'logo-immersion-vert': {
    'vector-web': 'https://drive.google.com/file/d/1P2hK7f-DAUHJD7fWxHMFlRz5zEyc3jVD/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1XUu1h-kM4QzOHaXMJHxERcrs_7va0D1m/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1Msqg8QQj5M-EFs9GihGJhIAzOkFP6pdj/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/18ZEmgz3FCJdPB1iWSQquT80y6TsLV0Kp/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1JJ8wtE84vYtSifc7FQHgdMbzjIyaT9gP/view?usp=drivesdk',
  },
  'logo-immersion-inv': {
    'vector-web': 'https://drive.google.com/file/d/1UvGurUFmEjLTMZ2MKysSXgFsIJ_vFzlB/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1kJ0Oy2rbYU8bkkVzoB3mHsknLwVonFDp/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1GIuXELQ6BkW1V8MFz1LDuhqv-qus50gQ/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1jps90x2s8nMoTipOptq3WxYIhnyw0Q93/view?usp=drivesdk',
  },
  'logo-immersion-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1tuyiHJQje8xzw57B0WES3eZ5JxOV8vdh/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1YffWJns94qN7tfUJS0O-xg0iaePzPA0E/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1QeIsNy1LRHebOskR0FJqlzym_QQil7QM/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/19jANdRmNNjh-n9MtG2-Ke6r4N3zeam7m/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1g2MllHmEDkro3XioKD-cpvIL8_assZkG/view?usp=drivesdk',
  },
  'logo-new-pathway': {
    'vector-web': 'https://drive.google.com/file/d/1Un8Y3qkGzYeorwEZv4nyEEME1R4wcZul/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1twjnUyxrj-ezxd_98JkZSF8FVEsbJmvx/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1q2X3NT7lrx8IYBH9_vd3ddAKBnZCzEUN/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1JNHoouBTO0HVxQrjkQUtSn2ZAhw2NtYW/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/10Wov9qur1NDIXkA6E4jRAJzQEv2fgVQ4/view?usp=drivesdk',
  },
  'logo-new-pathway-vert': {
    'vector-web': 'https://drive.google.com/file/d/1vb7R5gDpGr5vjWt8AP-gTU-ifmdsMGVT/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1-2lwPvv4FqpSqr9MsV3xhjTaqWTZUpG-/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1gVtXELNiKVBwtriquXqzUWh_Qpl1u9wP/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1uf7BwFnZZzsEF23AAMezWAy0gXekl3gL/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1Wr-55MaKEnqdIg4XH_lQohUzp1-mGNOC/view?usp=drivesdk',
  },
  'logo-new-pathway-inv': {
    'vector-web': 'https://drive.google.com/file/d/1rzlxeBnAi1t68wwRbNahyEt27DiYwsRr/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1_OLRm3lkNuC-0mXz4jQ1lmVzOFjYxZdY/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1j8uGsEeB0BAOIVYA5Xuf-aYylq2UECf2/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1zl3plYBkZppXSwWDNKhkHFw7kqNcGJ1B/view?usp=drivesdk',
  },
  'logo-new-pathway-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1bfYwMp1BLezVh_-I9DRHxPvkIAwBPq7r/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/14AXllvHRNvaRsh74NZAFsIY3zhxPm8IS/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/17CDLstpKywCu50rPVekHYw2MnvU3I0FF/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1gu8WI13ET10TshDnbidiI4NCBqgyplUK/view?usp=drivesdk',
  },
  'logo-virtual-counseling': {
    'vector-web': 'https://drive.google.com/file/d/1qf8gCmKIzz4TvdfH5hfTdIeWUcs_qFDj/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1IOZRugO2fvvyumwIaQXddxU-I0DJu8Ej/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1fBbdJoOD25aC7Qo_QG0SrSIVIXLhXKTh/view?usp=drivesdk',
  },
  'logo-virtual-counseling-vert': {
    'vector-web': 'https://drive.google.com/file/d/1OpnjzcciE63KDZPtt3tkkxbmwJQi6A66/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/13-elMsrIuAFyCc8WVJVkXVg7XEDb8NjI/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1SZ141OsfXm1WHcfa2M2stkfcXs3nGblp/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/15kakoSGjoyU7PqgIyJWnFDtC8ZBOiMSa/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1vz-5NqlJfSBA32Mrm66IYl22hVZMWusD/view?usp=drivesdk',
  },
  'logo-virtual-counseling-inv': {
    'vector-web': 'https://drive.google.com/file/d/1pUqti1FiSMpD_wdfXPVlrXEWYFujKjCL/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1Tz8deON3rlu6AAJM-sALvgAuoQVCg_Cx/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1Av97CkEtOHOVO0-lOlW67__7MMl_R7Ld/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1rg-c44eHbrhqRobU-4iFoy1rIa-F1jOS/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1jjrlHoNa6KTtEQfzzDcbiTt6DFFGcejm/view?usp=drivesdk',
  },
  'logo-virtual-counseling-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/13MIvVrU9p9lxyaLPGcLhPRlBjsGnqA_1/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1KD3spDnWUU4wHJcrigBLn_UnT8E9eNUu/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1ac6Xc7o1w3cD_fZoNyAZNiu3N2y_CtiL/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1BLfUmLTja133esyDGjQVvoM1hoIksB9W/view?usp=drivesdk',
  },
  'logo-case-management': {
    'vector-web': 'https://drive.google.com/file/d/1YD9Heg-QOAIF_mTlrxrUs3SAMW-GVVRr/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1piTQEt1xMuoOlyTyKlUFCSGXil2feCs4/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1vF_wr38lwzd6JbMPR6q-bbMHJ5e6YIER/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1mEigbTlW8OP5oIBmEjv4RDRtU-EiVsIY/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1481bfXmU3dFuotyq46zb5iaCOG2Iv8rq/view?usp=drivesdk',
  },
  'logo-case-management-vert': {
    'vector-web': 'https://drive.google.com/file/d/1n7eMuh6L3vIYq8Vbn-yCqJfdPB2tGa8o/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1y3nEAaSyXar9gi-R5ux6IqFRx8cZG3-s/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1UgFQtClqOnve-JaLdIGg0MXos--94l8R/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1UO-_hpPIvso_N6STLCjMn7Qib_bDMIho/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/151rvIly62PCFS8qSOc57DwhvInU1FGzf/view?usp=drivesdk',
  },
  'logo-case-management-inv': {
    'vector-web': 'https://drive.google.com/file/d/13pqHZ6q713QmVk-OGH5rLv3DyyzgYc-d/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1TT1t-K8Q--Ij7Q30UnZFP7gUyVqOvF8x/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1WwY2-fdO8pE3pTL9iehyX3toLeLd0wpG/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1a7SLKz2EEKYKwd9Yqjih-pPOw5QMJ2iv/view?usp=drivesdk',
  },
  'logo-case-management-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1z01M08iLve5AGkYsKSLzYlE5_mUuJZ2A/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/15JhalURatAnoYkH3zgnGGaXDzrXA_Pzs/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1kgfGQpjFbXGA9zzoxPVcaU2YUOhVjg61/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/13gEhUafxSnyi_SdcIX-_LnZPfKXu1OLR/view?usp=drivesdk',
  },

  // Facility Logo Lockups
  'fac-immersion-residential': {
    'vector-web': 'https://drive.google.com/file/d/1lmIJZNQadcl76mRPnlUPy5LTAxZxj1cd/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/11vcjZ9BoEE6Jpno3hq7y3lChY6EizUWj/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1IqqU4LLulTaI4boKcBmYEOHFbVR4vhos/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1Out2whuYGtG2pQAVnB0mrubb9a7u1GlV/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1lKXyERKZJR2SMI2fHSQi8mDOv6sIJVtN/view?usp=drivesdk',
  },
  'fac-immersion-residential-vert': {
    'vector-web': 'https://drive.google.com/file/d/1Ug7OD_hNEJbtl5g9k2jFIZi3CpsW-MbW/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1uPTNLtj0e0ClX2YKGRKtNZShiBs4x-RA/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1tyrGsuJy8gESu8AeipfC0oSiKBKrhcga/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1RMA86wf0f1JOvTncryKoobGQg-_onRR0/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1EFq4gX0tzdruJX3lqnla-KPBtEaac9BH/view?usp=drivesdk',
  },
  'fac-immersion-residential-inv': {
    'vector-web': 'https://drive.google.com/file/d/1SpgUnVZ_964sRFAVUjx5muWUjz3U-yzw/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1aOzKyK3eXUcQO3KibsVtMGV_LzPVkFib/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/13RqsKZClPiKFqlKXVowNZ1CHj1E-9q3E/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1hBdTZQ3TqhO2poRZ-L2db995ie9SJmWL/view?usp=drivesdk',
  },
  'fac-immersion-residential-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/15QrGs7O2fsBOj0K69E-Megsbx2M4-AHA/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1SEron9K3HwVsGjj381A8zRR0n99iLsUE/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/11SeaOfYEE3KLasJU-IF8w45qvd4UsI3J/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1xkcVN7-vOtZ_JGJ65MEibQKLCnud0FXN/view?usp=drivesdk',
  },
  'fac-immersion-outpatient': {
    'vector-web': 'https://drive.google.com/file/d/14VT1PNE_dC942Xz5CXZuyhK6LtPA6KMc/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1ha1k4LDBDW-eMkNlJbNXu0uSWJ5wQnrf/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/107jhLaVRc7eSfngzoZI3QgqCinOZjQVM/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1VD_7IaNJJNdvTnkHpjt-a3kSduz69FFh/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1RnjdeKPTzb1cCJQ9a_u8QoLJdJ2-o7gs/view?usp=drivesdk',
  },
  'fac-immersion-outpatient-vert': {
    'vector-web': 'https://drive.google.com/file/d/12sY7f0m5LSVXKvCjYcp7y0BYEhTJD180/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1ucFjtzSs2aZUgfPbB-9TQypr2xsrloyw/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1uefP6L1Do_IuJ6u1G6G1tqkG3B01k597/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/17u8oQRW-TTTch0rvHQvV2PsEOYFP8x6m/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1NnwI-z9ZP6VDaDzfNWfwAFhVAhBvFmjI/view?usp=drivesdk',
  },
  'fac-immersion-outpatient-inv': {
    'vector-web': 'https://drive.google.com/file/d/1VPkJq73PXhIGT9YktYESvwWVBUCrm5bx/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1pYGpcUcKRw78EMupJ3yX01MNj-VTyVd6/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1wl75Ie6CQ_R3lOatb2YmvPjd_w72_-8v/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1q-eXjaemBNoIETRtUk-v89RG9f9q13W_/view?usp=drivesdk',
  },
  'fac-immersion-outpatient-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1WDgbtp9GBd-H4sy020gIGXzKaNAmVUWP/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1qiHEu-cHgiYGuBuC-g4q_2Al6k0UwE81/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1fvRIirR8R_5YQ0Z3RDZQ9utPKmoFEYfl/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1hprawNMiPO7hXJvZaZ6Wl5ATrd64C-wR/view?usp=drivesdk',
  },
  'fac-princeton-detox-recovery-center': {
    'vector-web': 'https://drive.google.com/file/d/1DhAsOBRRj6_i4R1ieRPDWhdKsvaU-2EB/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1KYkH7QSSpTYwGWEsm7V55ed69lsOVCYG/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/15HsuyLBcIIKqC8c2G30jYb144M1gUJ3_/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1MTpqvcGYT4VGhg3GCcwjjXLWocvzznHK/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1tLRmsy3I38NamAXbvGGHXe2r0ZJGspnO/view?usp=drivesdk',
  },
  'fac-princeton-detox-recovery-center-vert': {
    'vector-web': 'https://drive.google.com/file/d/1SohFSL32QavlAy6YZOU4GRFL0GtQlY-L/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1szYW2-1vkxprKFdQ5i2WG1MDU0qjooRX/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1MRL2obr9E_4oKbT-hVYZDPVmNtsrCaDS/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1J-MKzAo8poqDWPR8bjgmGPTf-YJ1uRDA/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1AEZPTsyw5ktVpf8e4j4JDmGsGXTBPFZ9/view?usp=drivesdk',
  },
  'fac-princeton-detox-recovery-center-inv': {
    'vector-web': 'https://drive.google.com/file/d/18kNPPegI3JfNmiCqSloYQuFt_HsWtmKJ/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1V_jx9CmmH1T1gXoBi4XYJZzTW0Hu-xiJ/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1Wf-YUEQy_W7TM3cN4bMtGh97QAGGwwve/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1K2BJrXvqjs8OlqwNGvy3TDeJtSawKBEb/view?usp=drivesdk',
  },
  'fac-princeton-detox-recovery-center-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1_EHfGpt6ZZTccZSt5ZIhoneXloMhYdG0/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1Ps1Cm5zz8pIH-mCutGimDTDTUtM2TzOZ/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1ASJMYmV19u4P3PeHw9-4oln42vavAvz5/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1Dzf9M5-YlBLRwel78a8tOHfdTFp8iUbS/view?usp=drivesdk',
  },
  'fac-princeton-psychiatry-counseling': {
    'vector-web': 'https://drive.google.com/file/d/1N-HVkYUfyoYYqGFjqaCw801WMnKPIPiv/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1XxB7YpJEd8xSca3TEKZ35L_TURCZ03NR/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1B-4zvkatxV3WQRLWyBb7VRbDmpIx7JA2/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1SrfD05rny7xTY78MCmuGnrlUDmDPxKFZ/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1sAqlTLSXJoqVE-slcfabKGT56k0lQsAV/view?usp=drivesdk',
  },
  'fac-princeton-psychiatry-counseling-vert': {
    'vector-web': 'https://drive.google.com/file/d/19D5kQBpfKtfR_bcueOswWSYZefCHp7j5/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1EZw02HLc7HhRtOXDnY5B4vufMKjF8qN2/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1FXpToSspESqnIXoLelAU-AblEHT27pT1/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/11yAfpm1-2LCyuSkUEVpcHBHSmq8VnE6i/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1tO64cHthjVJ-JchK7YRtVcRKOktnOrko/view?usp=drivesdk',
  },
  'fac-princeton-psychiatry-counseling-inv': {
    'vector-web': 'https://drive.google.com/file/d/1ih9fjBVLQsnQuOYTeev9xoNVl4Dkca6g/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1oH6D1aiBsVbsgLcJ6_7vvlVLgBhRG_l2/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1gv6CeyxuI2lcBaSR68b61l8fD3BqrDiG/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1xK1vmqOWU26nIuSZgEHLO63hhnu0rSpR/view?usp=drivesdk',
  },
  'fac-princeton-psychiatry-counseling-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/17OEQHlNhHY2L1D5cOlI0nhz0wuaSW1fO/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1070gGTRV9QbJ5EGK3awOMoXhw_Nmk9L3/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1Z0r_TR9I3kDCEFQa1EpGTHWyGetvFQyn/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/12bRxb143lske469Aow_rweKG86R-9Y7d/view?usp=drivesdk',
  },
  'fac-new-pathway-bayonne': {
    'vector-web': 'https://drive.google.com/file/d/1hP41xeTpY_PKG4wfVh7H1kr7axr1W5Y8/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1jHRV2dzE7x1Jo0d33rCFEHYr8uxnvsz7/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1Ox65uLx2P_ZO6y3TXCg9aNvAefSLCBpQ/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/12n2dBUHGBzRW_R8KJbOxt6iGFu1_BBGT/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1DNMHcyK8IyUM04AdzoihYQllg_uZrP4q/view?usp=drivesdk',
  },
  'fac-new-pathway-bayonne-vert': {
    'vector-web': 'https://drive.google.com/file/d/1nSHYYdK_rwq8gERpUICdMDTdVueCbVPK/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1Q_cLXuKY3o-sIsx31-DBYwCbF4lwIJ0s/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1KYRoblpLu0YH6zaTB2G51hlFsgfMIzqn/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1B2H8D81k62a5xAipJAdjXjPmMg0dGuiZ/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1vqml3eGdk5qQPmerDU7AxGf8-V6cmrqM/view?usp=drivesdk',
  },
  'fac-new-pathway-bayonne-inv': {
    'vector-web': 'https://drive.google.com/file/d/1caM52a_1x5yhc1BuGFVsJq7QqNGm2MJM/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1Z17Hj7jFxwYvvskK4LcUfLCaxoGgLIHS/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/11aI-TWVC0yZbjaBPc7umo_PvWZ6Na_wI/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1xa4Bm-_dko9hasuCzmLvSD18Yb0U358M/view?usp=drivesdk',
  },
  'fac-new-pathway-bayonne-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1q8ubjVWX_040WCyf4jBwUxscaRUAbrWH/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1IOE2PzXi-edcK1cee-Er-ezbY4dDLdLU/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1rwWW7yduYD15MszoeB6pSHm6hl7CnsU5/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1YwNXEADimQj2e0Cw2nvahFJLRkUXxZTu/view?usp=drivesdk',
  },
  'fac-new-pathway-pine-brook': {
    'vector-web': 'https://drive.google.com/file/d/1nOlWH6sXmQgAEz5QDttqc8Iw5f9yyML7/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1Vh_bdaOHm6Tm_kXCZDI8AsR7kbTXlkV1/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1WLkhR01IuoKXJXe2YoFCZpEnF62_Y-43/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1iamp-K3fxMKuTLACq6yLoIIsItm59iFY/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/18wbCZ4bUGdMQK54A4ZkgvXwyMPRQgU7D/view?usp=drivesdk',
  },
  'fac-new-pathway-pine-brook-vert': {
    'vector-web': 'https://drive.google.com/file/d/1MYnFPylF4IsBMHLhJPYkyyh4eDKqvQbK/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1Kd1FgC6dBK8noS7gYqMQwxHNMOS1x2tU/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1clfnSpdFhmWGJpDbaYccrrq0LsXqra5u/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1aQwi5RwraWhbu0bJE7LK98pmd319tXPY/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1YGJLPHIR1zjoeda8OpMh2eoHY1VWBj_c/view?usp=drivesdk',
  },
  'fac-new-pathway-pine-brook-inv': {
    'vector-web': 'https://drive.google.com/file/d/1U4_Dn8Q02QFYKef8UgrYIV4rgZcc9-FZ/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1eqoJNc_pKszIncr8815zIl61h1XWNEaK/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1_KCcTGSPF072PLThWNs3_ArWd0ph6Dsr/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1rcSDVkRts5oN7hQVqErDZuv2LofnELAa/view?usp=drivesdk',
  },
  'fac-new-pathway-pine-brook-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1v-KbhH31Elqn3jls6fad80vrp_XdevCC/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1po0LXJ8z0Fk8S7m9bPXvpWecST2xa9Od/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1_cm9eZjjOfOaUqAAD5k0dpmMsCLcsjJh/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1TO4H-QS5_v21dNm2WnIsVmycTaaNZjgz/view?usp=drivesdk',
  },
  'fac-hoboken-counseling-center': {
    'vector-web': 'https://drive.google.com/file/d/1izTlHWWaDjGDYQH4sIqZ7-7W3ng2K91W/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1tUMyPahJ4Fc0Vp1B7jpNJeVhkWznyNCc/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1AStS6NJc6MMK0mFTedOUzlZfbNPair1L/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/17pYnpZGjK04AqwQBwKmCu1XGxj2RFnx-/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1v3liUfmOqClL-av6W7b_azWd_wmcrQz6/view?usp=drivesdk',
  },
  'fac-hoboken-counseling-center-vert': {
    'vector-web': 'https://drive.google.com/file/d/1vyQZgQ8RGc8UAEoH7__ArJ3t58resA6g/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1C4OEyJ-YDbqs2WKcqFbwO5gWCPp9ZDaC/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1lreSGLuO1iQIc9AFbk18Gtfsw3fDMoSD/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1w0oBJlCu6mQjtDm_aP0HNr8xP1EYiSjj/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1rFspTrdFsHUx94KfCqmIObkSQTf_0O9V/view?usp=drivesdk',
  },
  'fac-hoboken-counseling-center-inv': {
    'vector-web': 'https://drive.google.com/file/d/108QE9WzT1IKwCE58NqfhDemh25CykyFt/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1Wk4zcEVxShY0fN66fey0NkNEW0lGjtY7/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1Ivp-geQDgzHl6b1_mRYvY5o2ozzpnwIv/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1Xsgez4Mdl1b8xJ6fy3-NnEydGgOuSyG6/view?usp=drivesdk',
  },
  'fac-hoboken-counseling-center-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1IkYPE4-h2LG3TzRYrdZ9faY31pII_ssf/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1PMu-Aangbx11Lt1kf7yV5USj07SvObgs/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1xWSKCLmGmZ-xoAX7A9rwJ4xXMrpiOe0j/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/19qTfmB_zbPaeWG0wVmXyKxcoOcwyTX8s/view?usp=drivesdk',
  },
  'fac-new-brunswick-counseling-center': {
    'vector-web': 'https://drive.google.com/file/d/1i3yCgHgyLUHi45HS6m7E8Bu0olSs_SAr/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1zHzjg1WsNJYR-DXkChHYnEPFVgyzuueq/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1UF5HP56q7mF2GI6yK_ALpq4bN6nS7lRk/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1W_lCbKbaOrpj0NdNTOz8sD1-MlsEMm8P/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1bBle3rqCbErn9d0aS3X_9sri7VLRj0bf/view?usp=drivesdk',
  },
  'fac-new-brunswick-counseling-center-vert': {
    'vector-web': 'https://drive.google.com/file/d/1-U1avh5mWLqrE--xrQ34eyzBXgCXk4hp/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1XiGp7WTdOtI-2VswLSxQ9fawiMa_SGKk/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1-oaRY3QzjHWQOcU6lctHEVEeM6EbLWb_/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1lpiUtWMij1VXzufnxcpbJxfR6Fxgdt0b/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1idxhMDj5Nqtmohqi7zZYRdCfvFcrMoVE/view?usp=drivesdk',
  },
  'fac-new-brunswick-counseling-center-inv': {
    'vector-web': 'https://drive.google.com/file/d/17sarB7-vpu4YZqJAaPS2Ff3UMRgP4ADu/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1KdW07BFEl3jyle5bnqKY5Ea54DHaZwUM/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1O2ACV4I3TH681JINcViTRUh7TlAFYmoX/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1uqvChhDcrG9z_BYMqUFvx6-VzS3CAZHz/view?usp=drivesdk',
  },
  'fac-new-brunswick-counseling-center-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1-pJH3rMhw_LKn4U0wIQ1q63F04KGj4PG/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1jtxZP5aL584pSj0GFgTiDeWuvWPTWPGV/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1bEH-JXTvOhx4jGEhlgNhkWm_z1jfwzXX/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1X0V0jMgb37hrBqB_pHBOg9u_GpgR4XND/view?usp=drivesdk',
  },
  'fac-saddle-brook-counseling-center': {
    'vector-web': 'https://drive.google.com/file/d/14CmJ-qDwiOQbcj_xccOvyXV0x-SRwJYt/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1JXPQdnlo6edEK_6cmDtyjYkbSKV-yvnF/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1Gh11iNbCahMFqxaZgpdWxslyNT-c9yMS/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1EK0zHRA8Ith7At-bQeoBknS-TwmUd3qz/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1v1kfCBEPnXt35qzaYAESuH2YV7s_4FUr/view?usp=drivesdk',
  },
  'fac-saddle-brook-counseling-center-vert': {
    'vector-web': 'https://drive.google.com/file/d/19a-po42Q8DJNDlfzlE21F9nyc9rKohjv/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1tgzZ9r692gO87qnrs70cm6mmy9za9Cli/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1MEmWxS5s0KW7NLw4QZY-J80phxOEZm6r/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1t85STIjAc8oTyGltKrEOhBKKJWJvHDR6/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/145faFFdi7pIkk66-l_RiZahX8ySpEqAp/view?usp=drivesdk',
  },
  'fac-saddle-brook-counseling-center-inv': {
    'vector-web': 'https://drive.google.com/file/d/1DK6bBSS3Xf_cfxSu_rUPLUp70BiGraah/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1zhQqM0bPQE4Q3As-3eEjDMQicN7E1Jm1/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1A3UEJhF1R3KzqZEbILEgtTIN30FnvlfM/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1k74sg0-M2NoCKBCrYUj1SR1M8QVXgg7R/view?usp=drivesdk',
  },
  'fac-saddle-brook-counseling-center-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1B4PXatevKcC3gzhdijdzWrYrfXjkKMdY/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1y1eVjNIS6yR-HJWTxQPmnrGFgBUzu7_V/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1lYef8iUrplFSwXWPxltPfd0_7TtqBsQg/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1ySvZFsVy4BuDaJXSz3nG9kbLeaWlOAuA/view?usp=drivesdk',
  },
  'fac-montville-adolescent-center': {
    'vector-web': 'https://drive.google.com/file/d/1DyXNxJQXvdqIQpwhH12pB4_mKthsV31i/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/16rAmQ_fWyUL73s7DvKxGmo_0x-KiI0l7/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1KvpOvY3GWLSQGnNAkfVgUdsyuU1qJDCf/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1N-P5TvVlvJ_EsiqcNPcUbHaHF0ZsH8m-/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/13xISvTPRpAPdqGiTlugspbtfbi89uWyr/view?usp=drivesdk',
  },
  'fac-montville-adolescent-center-vert': {
    'vector-web': 'https://drive.google.com/file/d/1N8DOzEQURKwPdJXlikVMzBGQhVSCX-hB/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1TBFWslSUgG2ickYa0ueTyiDqhNtXhSn9/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1q-0QxTv5rOyIt4uC10anNLsEp1hBjC2e/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1ZKylQbfQscVDOlc8DNL51nkOpcwNWcbd/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/18r9TI9BcgDp_-StJkJSuxYLl8Q-0lqJC/view?usp=drivesdk',
  },
  'fac-montville-adolescent-center-inv': {
    'vector-web': 'https://drive.google.com/file/d/1P7iK6yRaWj8vPQrYji2JmjfKx5p6zFeA/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1A8zHeTYLDjLGPY8VKaS1KdcAGS7B7QyA/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/17HCXEl6NoHHXeZ3lmZH9yGa_ciER0_6Q/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1jgeFUFEx-Ti4a_wXW2xkLDAXgosPJhPP/view?usp=drivesdk',
  },
  'fac-montville-adolescent-center-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1UyTo3jKJPKaB9d7RvWeMDO6GXNXLoxxp/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1kfsIa6BzESKVQ5vwORsRn2gATm_sgC3T/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1BWbqIUcI1_CbT0usiJlhLGYMipP0VvQW/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1wTQhn-1O682F2nHyuquIu-WEmpUEGv9y/view?usp=drivesdk',
  },
  'fac-pine-tree': {
    'vector-web': 'https://drive.google.com/file/d/1vMP8QROu8VhL8313jqLFHMOnzK9uhHGR/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1gMPn52rc6AiplgwXxHTI_eAASn79bBD7/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/11CcRKzFOXBcbrfJqzLZfi3raAjJN21qb/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1iBPAgpCTKcl_UFvBgsteN5rFmNjaD0mL/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1uY8Di5AYZEeOfZtUckPQbHNIN03AqT8P/view?usp=drivesdk',
  },
  'fac-pine-tree-vert': {
    'vector-web': 'https://drive.google.com/file/d/1_EcIJ5ixC4gJ78wMC49letLohnC_x6he/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1-mbbdTGydEB9yWFbf_Up6dw1OZbLF6cO/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1ERzFySb6GWB-HqoZqrJRyldwBfQ_Z32U/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1XcB7Gixe8cNRHvnc9kFbAUA8vv6Lk-ln/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1TOzd6FYJ4byQgyzPqn9NmHIbzdWwsXY3/view?usp=drivesdk',
  },
  'fac-pine-tree-inv': {
    'vector-web': 'https://drive.google.com/file/d/1f3xPSvuLcoc_dAH27rMCJCYpH4STBfAH/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1a0PMwQyK_sx6rSzLAKGGlY95XwbIxYrc/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1J-x5ozIDaSuUbqi7qNs2NBAv5ZCAbiLh/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1zoTkN1scofXPI8tgQneD-KnPU_FNQQPf/view?usp=drivesdk',
  },
  'fac-pine-tree-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1D341CEawdygBC7O0YAANzC2HfU4Vk9AY/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/10_RlmPpafPuZg9tw6hW40evz8CkEBunZ/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1MWPCxPAOdf-F60ClTxiOMqymN_6jwl4j/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/16CP0kgYCQyKrUcvpjsV6kJz21Lfb13aY/view?usp=drivesdk',
  },
  'fac-portland-psychiatry-counseling': {
    'vector-web': 'https://drive.google.com/file/d/1JMDKgBv3XdycGQgXGuOzxkJ2MtL6kB-V/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1LFFYnMG2kBaOd9nArdi0lyE93AAtF2nz/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1c3QddYqtdhyr40HDgrXPwylKll37dW3y/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1KwX34aOoavYJ80Am5pP7anaEop91ReGw/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1XSs96YFCFBI8Ahl3D1mPuAJpdYwGp1Og/view?usp=drivesdk',
  },
  'fac-portland-psychiatry-counseling-vert': {
    'vector-web': 'https://drive.google.com/file/d/1J4GvhgHEVaNO9n9x3cRzKhwESMMy1QyN/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1oTNfFJQ-jvtYStGEdz2sgwPmd4K_lq_H/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1DmX2qS25WXuu5Lw7QClSC0i-wd_DO4sU/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1Kv81FRrjRVUBdb-x4y6ZWnAUm4l2VoSi/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1nKkqizkfpF13rK696FT5CwVvVOyXTsbf/view?usp=drivesdk',
  },
  'fac-portland-psychiatry-counseling-inv': {
    'vector-web': 'https://drive.google.com/file/d/1lIJo8mDLxPkn-gJKRwSLvxg3Hncp1mBi/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/15mYirmiwpDGNbgS4-XE4pcSPUcSdtTT_/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1_g8X_Nj5BOXlWzIKAZkbHDTckW4zovXx/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1WEEWClmrZRWmmPC5_NUgzOloJcXPQwUI/view?usp=drivesdk',
  },
  'fac-portland-psychiatry-counseling-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1zfLOmmQY2Kntuu4jn5h8f-jTRjULVrxk/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/17Gn3O2dqCQIBKGv7r39ma1RZSLa8y5eE/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1Z0ZeJuFLHcNSToAzt803dnTMJJmUtTvD/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1iAbEjPXU1QgSb_pAyFiz4BQqdCQ8CYPm/view?usp=drivesdk',
  },
  'fac-plymouth-house': {
    'vector-web': 'https://drive.google.com/file/d/1P5q4w0Sr4LsDV4zaG8pXmTKoK4PcPtpE/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1eZskuifpLJvqJ2d6OJf6rQ7f8wfujojz/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1fmQN8BlF2YKM660o-iiAM3cvvSOsqbCY/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1ryt2utGPl34-7d6c2j71HmeKnolnfWa1/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1i-xXAS5gh7J6T2koSbPg9RRHWVE3Jcvy/view?usp=drivesdk',
  },
  'fac-plymouth-house-vert': {
    'vector-web': 'https://drive.google.com/file/d/1I0kXo4hbmk9nu0ynd4O_a8bkMbwNbWTU/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1sdjOuzFSHlknVPaA_kbYjiGTISmMGGnf/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1KQiXJ2Wb0o5ROprBs7vDQM2R9opIlGsn/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/11jqBwjSW-w8LGBLDRm6_yrDMbbmnZfWy/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1u0hbZWiHuHATK2hpzWdf_eBwC4k3TT0r/view?usp=drivesdk',
  },
  'fac-plymouth-house-inv': {
    'vector-web': 'https://drive.google.com/file/d/1Zq3CqzW2NetIQF0vXOTMryoU92HX5hf_/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1rsB8hLkQG4BGwVrlXDMh9EPUcKudNrs4/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1uTt4WAdNejOjAaoQL0mawhnUKfGJdo4S/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1kQ8iKe4kRJHPyyL3Mm878NMq5jZ1EoaV/view?usp=drivesdk',
  },
  'fac-plymouth-house-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1sB6kzaQiPTEvQG7VGnK7TPyim8hqyKfs/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1AQU-B4EDV8wI3pG7-S5BLIlS-HTcfrwK/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/181dH6wpplOOSipHF2pUCPTQbnlzTRccv/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/11K5oquVFfq38RorZLhQRN8qopjr8PmYr/view?usp=drivesdk',
  },
  'fac-portland-addiction-center': {
    'vector-web': 'https://drive.google.com/file/d/17APbgDg02QkRJjUb201xzdvq8jQlp_MM/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1-usz5vU1w8wweL5TdID-B3V-d7E_7Yrw/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1fX4KBPrMEmcck-KaGEr_JbalGdvP1Z1A/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/10xfxN0F0aLBde2bTP2lPQIXuTjQ2FRvT/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/19IrFL7T7FxH5bD20UcLIDwUQmo8owJIw/view?usp=drivesdk',
  },
  'fac-portland-addiction-center-vert': {
    'vector-web': 'https://drive.google.com/file/d/1vl3w2I_2Ba9VSIkSwLkeqmdwKCZqG0MS/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1VMQB7cWrERKCJsLZqJBTQqIV_mqlWYNc/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1IZ0GGSgJjsjfnIYvwbWppJzOCFq_eOsn/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1nv98yx_MDMlTJdyEliXf_rmG3BhokGaQ/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1QP8caaBO7lglh3tZ-dWQ5Twtn-hZmq8_/view?usp=drivesdk',
  },
  'fac-portland-addiction-center-inv': {
    'vector-web': 'https://drive.google.com/file/d/1sP7hY-HjqruKz4B0an-dsiEm5ytsWrIE/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/17xhTSDjSpGVyx_1rPuniTHvuO1psarqV/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1tQ92OyYCL3u5yy9B7g1f5mAnqXLzNAoo/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1r6Nl8rWN8aSYoR3G7kix_dyUXAD0-xzf/view?usp=drivesdk',
  },
  'fac-portland-addiction-center-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1JnBjJ2TIsHYAL_fhPRJxxgQ0fLtxBaFB/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1I8PUdR44xEPho5tZM6_XVtlM17RI7A5M/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1d27NaC5ySWCqMnV4jtpj29a1j2K6ebqn/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1cYBRhu2KBeLfRQxOM2qpbbuUbLH1PIXM/view?usp=drivesdk',
  },
  'fac-curawest': {
    'vector-web': 'https://drive.google.com/file/d/1MbquDwK4dyZT7jqvn6t2dFVn7b0EApJK/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1IFdDs9_-Ply3sd_WrjOR00o3g6SI50Zu/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1pNMcx9BdBEtCTs56QtwwCGzheMIUytHj/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1g1Zg4hU3e5GyDH-teG3qJYfND6mmT6nd/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/10YXWAIZV8GbJ8RkqHT3sUsQk2yHlcJIW/view?usp=drivesdk',
  },
  'fac-curawest-vert': {
    'vector-web': 'https://drive.google.com/file/d/1dhC0Y3HEJ3mryBsDXDuacvp1BfA-IlqW/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1yxO5GqdBBEX5gu_QbCC9zFBHN37uHduv/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1EG64k9Ja35vaz1YEaeTcz-htwwag7LgO/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1acx3iTcixI40Nsg-MoGG73xfVT84uBBa/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1jDLQ44m7w9v467blbf8fxmoxJYChUi8K/view?usp=drivesdk',
  },
  'fac-curawest-inv': {
    'vector-web': 'https://drive.google.com/file/d/1CTR7eOO3H6xLYRhEHDkge1jQ3aCq776m/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/14hIL_ou5M-hIZbLPe0cf6SQ_owA8S80S/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1B4xLptQgYzhaui5GokdpYj-xqYt3xQ7J/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1vF6GhAyKJ6TDy-vyyCuDYqeUq4nZbN65/view?usp=drivesdk',
  },
  'fac-curawest-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1FR2zOzJt8xdiyV_Tp9rHNwLaOIYtkkkH/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/13awcHLUe6WNZBAdIxxXpeAdNMD7SnGyY/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1F8SoHhjcr3avzF1U-LAGxjvmVdz2ToGm/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1pey3Tce9Un5r0oruDam8boCekKuhZGo6/view?usp=drivesdk',
  },
  'fac-dallas-addiction-center': {
    'vector-web': 'https://drive.google.com/file/d/13HV8ZVTMtIa90hKwHH_fygNcArThfQ3L/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/14ON5ISkipVZIUcPpcyi4sMOTXjADUKp6/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/11u4Ac3DAS_D01wS1AS06xQ-VeUNgi3Zo/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1GACDE5KbDRG8lmnq8bMJVyYuR1ezg6Oy/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1SVOJsCePMYYOwWFFiI6N4gdvvGfOQkiU/view?usp=drivesdk',
  },
  'fac-dallas-addiction-center-vert': {
    'vector-web': 'https://drive.google.com/file/d/1VgiMpKFrwkp97P2wphnrQ89S2UB3TfUJ/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1-0aUAdftBlPN2klSttKjFD1wqd7MJGXr/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1bWeu4tlASz6YN6d61YA4hMuaQqmJfZ54/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1Ssm7T5wlE0LXi7qY-4dQ26_IJFOgsGcy/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1yLw3BSLplyXpF_Ey2BsefPMHsy71SrzV/view?usp=drivesdk',
  },
  'fac-dallas-addiction-center-inv': {
    'vector-web': 'https://drive.google.com/file/d/1WOr9QP-_0WDRlxe8PzZtmIqK4NDyCTIZ/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1RfsRT4-NWpLdI89Nv-AoS9fb4AcLdIoz/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1Ok_kPmmhngwFRodYxZ2NvcRnIs-YS_WI/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1wJwSeAqnJxbalHQ5x5JgIQhva2AUIj5k/view?usp=drivesdk',
  },
  'fac-dallas-addiction-center-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1MUU5s0v0ypCQCnAL-r8Ihh02renBga6y/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1O56xoHclmJMYNsVv2TPwYVHUDEirdzJI/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1MkhIAunAvYxjpzA4P4Psk58FE7PHL4qB/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1Fq_azzY0CaYZn49cqMfnLJMPVMTakZtg/view?usp=drivesdk',
  },
  'fac-virtual-counseling-maine': {
    'vector-web': 'https://drive.google.com/file/d/1ZXRtTXLKOBh0LC8Ky-5F_doAUJ0FCZF8/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1owkMkWdKHfa06wRwYcEoEXEPCnsuGOcJ/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1Oj_NtYaFQrzTEzGAN3tcNAmiz3hf3FJq/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1bj0J80fjWlsLOKK3GYkwhdoFYka7Yvvl/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1AARJ2ivAm6Vgl8kLGK_88xYyFBnE1ZvJ/view?usp=drivesdk',
  },
  'fac-virtual-counseling-maine-vert': {
    'vector-web': 'https://drive.google.com/file/d/1T1fLbuaj28Lf_wZhdpGdDofXydh2vSEv/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1gUQYvvtt4yNy3GOwT_z07fweMaX_DSpq/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/13WtUZQnpiHT3SkU51ijhv6Nb2vpoHpr6/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/13hzYsz-LBpBLHULUjJujwBLzHqY9DEth/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1FFjY_Ve1keOp0bVmgWSNm_dS95KQVJ4Z/view?usp=drivesdk',
  },
  'fac-virtual-counseling-maine-inv': {
    'vector-web': 'https://drive.google.com/file/d/1XutRRcKdNY1hfLXql-W8RHO5ARLtoT9S/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1LjoynTkQuuuiWCkxEyJYzPUwf1RwMri-/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1T_HRv2NzcdXNK7wQeemPsajO0_BPgEhM/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1iyk02GfAImoJclZGDpb9o5RAgcT0jyOL/view?usp=drivesdk',
  },
  'fac-virtual-counseling-maine-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1K_79j9_VmgErRG0KIaKGJ3FoFdlL2Ixe/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1W8yQ47_-A3YYpWwYpF2MMGFLvgf3P8D9/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1Hyz3EJ88qlDP-mjMgN7yF6tqT1ESt-ZM/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1PA-N_dS3cgoYogVDOIMefT7oBLhSmJf-/view?usp=drivesdk',
  },
  'fac-virtual-counseling-colorado': {
    'vector-web': 'https://drive.google.com/file/d/1igD2OlMfBzwlPnl4oDV7K4JvZa35D3I3/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1j5Tz21j1TOCpfHr--rbd2YbGcXsVzjMa/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1QcwYSoHxKLx14IlolXjk-hESlPGL_GJz/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1odIkcMSCytq6RxUlWjdnz0j6cWiWMNgt/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1aXfiD3EkJ3CIMnmYSMDJMXygp2ICII1b/view?usp=drivesdk',
  },
  'fac-virtual-counseling-colorado-vert': {
    'vector-web': 'https://drive.google.com/file/d/1-fpHCDI1Pz1X5_ET4k0wmm9vKf7Hc0jQ/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1YV0RLMjDtnlCDxYfGJ3-tTw_F7bFXzoa/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1cy67vxkW0MPjxzOPPNkvd8I7SscAZPc5/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1MOEJJbiH3QqjWSc_WxQtYK0mpzxr1b8y/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/10pQT1keji3sY5GRkHmVuq_Gf2Nx4m5cQ/view?usp=drivesdk',
  },
  'fac-virtual-counseling-colorado-inv': {
    'vector-web': 'https://drive.google.com/file/d/1l7Cp7ilUKCzxt2zQ3zqJvlZYhckra6B6/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/10xOvUth7ANo8IvqNYyN-YHA04Ade4yXQ/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1CPOEx44jDOdWIstZ9AdDYJ1DNwZBRNBX/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/14IeKOd1LomzNVrowKdUHUxVeEFgsqXwX/view?usp=drivesdk',
  },
  'fac-virtual-counseling-colorado-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1ooocMQGZsERK2LkmJQLi9wWzxjm9DDcg/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1TUNLMEuWv8_I8KevpmTlR7rQd99CQXln/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1LIVv1C40D3tYCsef0TxV1jERhcCA9NHN/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1l62gcy3l9ABBGB_GiTIFbxsaYY5cELOm/view?usp=drivesdk',
  },
  'fac-virtual-counseling-florida': {
    'vector-web': 'https://drive.google.com/file/d/1QYR-MyaymKtxaLlpdH3PGJV5YiJAJ60z/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/120fnFLFYbprpdcHCt3TTegRlA9-iRIzH/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/16sxDNFMv6QXn9-Dob_Dr9Qocf1DLCMNj/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1iSbki_kGxaoqAMQsa-xiBNHk0CdiiWA8/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1KlEtaS9egqwqWCD3wWMxnognEDywJghU/view?usp=drivesdk',
  },
  'fac-virtual-counseling-florida-vert': {
    'vector-web': 'https://drive.google.com/file/d/1gV4ma-PBuV8neqtYcG49-8Umok8Cd_K_/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1AEltdEoBq7Q80oRvIg8gpk7OdZFkMmte/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1Vv1qqXhjOVdHNuRx0AAB4jw06FltW4mZ/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1bEgTtwbXVeZlEEpKWQS1wOrVmq4GH4Lo/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1LTq6CMXLTdVs9MrHCpUDfj0JXbgOw7i_/view?usp=drivesdk',
  },
  'fac-virtual-counseling-florida-inv': {
    'vector-web': 'https://drive.google.com/file/d/198ToErgJyFOo0p1S8FfmquTMa6UmpLFE/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1BXfKO1G_XFvznjUPy7oz0ihQlinI2tLr/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/11fx3ArQplXhYu70reO2cX4dAIxvmsY0S/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1HPWr-WR0knB7yudpCrEpPLfsSF6FVk1s/view?usp=drivesdk',
  },
  'fac-virtual-counseling-florida-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1M8UwezxIOI1Y0NVvIsbJzbOBJw5tZFsR/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/11Ns4WNx6Ww8HoyooUFAOIXJ5pCe2wL2c/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/16LSX7pxgNVq40iKH8EVyXcQ9Ks0mb2aH/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/11CiE8UDT7ApcCHnhCTxSVJcWq_PluCr5/view?usp=drivesdk',
  },
  'fac-virtual-counseling-new-jersey': {
    'vector-web': 'https://drive.google.com/file/d/1eSYQovyIB0Pp9J90befEUUcamu_IwP4T/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1OCBbdL8AZ32_hTd15DcGNiGR2RArmR02/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1ZGR3VOCyev_9E7xwwy9Ds8YmZuuHtVl1/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/12_SM7nymZK-NUD_E90m60v0CGQVNVvSN/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1XiEFic9KzikcL4VS_ABvPykgxvqbc-Vc/view?usp=drivesdk',
  },
  'fac-virtual-counseling-new-jersey-vert': {
    'vector-web': 'https://drive.google.com/file/d/1_2HXyVktlhjInrnWdvq7KYlGEsTuvt6v/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1eIgb65YU6DlAwg7N8YkLdc-XHjlygqsI/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1I2CiAqA7MSigbyqsxVGNRgwiZkjZ8FN8/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1nKDyeJch9MfZjnKY8pwXD8wZ5LYDH0DG/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1_gKH8TBFbwn10N8Lm2_p6BABYpW4XrJI/view?usp=drivesdk',
  },
  'fac-virtual-counseling-new-jersey-inv': {
    'vector-web': 'https://drive.google.com/file/d/1JxtoKUdCi2DgU04Om6Q8y1iLjSxky7BQ/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1uXwfwCQxofZ-m1QTDhCuBkxYtTxwxzxu/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/17EJzkPT7JwC6DPqtwfTICBCQRahZhV_M/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/16ozTugRbpObVtvO2fFfT8AXOhkSnBXu1/view?usp=drivesdk',
  },
  'fac-virtual-counseling-new-jersey-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1kRBtyN6WyfI4x7-belWUePxItj1SHNIw/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1l6plz3HtvQwXXELBMUoRXpIF1KVSw_10/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1AeS-WAH-OEAAP1F2F84mhUMXx4NJoWS8/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1LR_l9VGGTHW2IEl8wRW55DCHSrU1fZ1t/view?usp=drivesdk',
  },
  'fac-virtual-counseling-texas': {
    'vector-web': 'https://drive.google.com/file/d/1egLYhD1TtZJmvpu2trFW-L74ORCNNOwb/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1hIETgbykdO5d5VseE26AF44l7DlNFMqE/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1ztKChi3iwghnzaFxB9NxSlprqwL15Enh/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1KKPrgY3pPmLR3rc7Wd8fqZQYtw4z2tEY/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1BkqLf56uV8vA48YiUAtvodE6YtF8Wa4o/view?usp=drivesdk',
  },
  'fac-virtual-counseling-texas-vert': {
    'vector-web': 'https://drive.google.com/file/d/14xJYTlVKqrwVdLo5gfWAQPcGNC7wRtz6/view?usp=drivesdk',
    web: 'https://drive.google.com/file/d/1QyucMyQskhaWzIK02O6PAtnkj2Dtbv4d/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/10lH0fxm37XuI7Pf2CuBXpBQaaMjIZHNf/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/16FzXA-4IbT5TJ0_HWb3mlYwt3avJ7YcJ/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1aZM_kmG3AY8sBJcnQfmroS0F3OfZZIbj/view?usp=drivesdk',
  },
  'fac-virtual-counseling-texas-inv': {
    'vector-web': 'https://drive.google.com/file/d/1qyoHO4z-sJwhZ8Cz8VwvcB-7NSepnNEV/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1-0Z4Y9pEyOt270970jRjWLS3pAs6yD9h/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/12-Cms1D0GoId38mLhiOmTNpOVQJIca5z/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1mR7lSElZRBbzkl68lbvP3hs3vQeDv_I1/view?usp=drivesdk',
  },
  'fac-virtual-counseling-texas-inv-vert': {
    'vector-web': 'https://drive.google.com/file/d/1ILjPkUHhN9fyCwRDDEoo2V6TVKj5N5GV/view?usp=drivesdk',
    'web-no-bg': 'https://drive.google.com/file/d/1w1rF720OizsLqwJtzzcZi0SpS2I9ns07/view?usp=drivesdk',
    'vector-print': 'https://drive.google.com/file/d/1nA38fzBLASYhroulqQ_knRhFoSVmGKB7/view?usp=drivesdk',
    print: 'https://drive.google.com/file/d/1Bk7Dck0QZMDfHfdbWuke2h2lrmHmD88E/view?usp=drivesdk',
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
// Structure: LETTERHEAD[slug] = { word, gdoc }
//   word → Google Drive .docx file (downloaded via toDirectDownload)
//   gdoc → editable Google Doc URL (opened as a forced copy via letterheadCopyUrl)
// Keys:
//   'general'                        → General Guardian Recovery letterhead
//   'fac-<slug>'                     → One key per FACS entry in App.jsx
//
// word URLs are auto-normalized via toDirectDownload() so either Drive URL shape
// will trigger a direct download. gdoc URLs are rewritten to the /copy endpoint by
// letterheadCopyUrl() so the master document is never edited. Empty string → the
// corresponding button is hidden.

export var LETTERHEAD = {
  general: {
    word: 'https://drive.google.com/file/d/1W9aMPP7axK6m6VtXBJw_jeOXahf9nzGP/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1ujIUiE5rv-2H0pqV72P5RPNmG1t24NbIMxhJClYT6Ss/edit?usp=drivesdk',
  },
  'fac-immersion-residential': {
    word: 'https://drive.google.com/file/d/1uWJuBoJt7OSWvnbT1WVChHDih2HmYtgO/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1_WP2e-lBPcOyC27O82fOOylNSscVIyrfH01i4zSg2hc/edit?usp=drivesdk',
  },
  'fac-immersion-outpatient': {
    word: 'https://drive.google.com/file/d/1Rv_Lgnb4xksKvaJAoqUA22lSpM6c9stB/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1GLaWOOybmJbQsbzR8ObKWqsB8vOcs1O8sU2r-r1DGCI/edit?usp=drivesdk',
  },
  'fac-princeton-detox-recovery-center': {
    word: 'https://drive.google.com/file/d/1MzMcyd1WzqJHfl7SYSESNLa7aMZo-C7z/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/16QbrVERxT1_FEDfzkdiWYX9ULogpyHMW8uw5R9oo_xM/edit?usp=drivesdk',
  },
  'fac-princeton-psychiatry-counseling': {
    word: 'https://drive.google.com/file/d/1Znsmlff0wpQXpIepjIXSqZX063ch2hyu/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1PIld7F1CuDjMoJqeMCvEag9AAxdULRYs9GgO2TxADJE/edit?usp=drivesdk',
  },
  'fac-new-pathway-bayonne': {
    word: 'https://drive.google.com/file/d/1vVN8-kbOuUbFvjuqFUq1apxDhmyyJON0/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1WjuVyK0cjjfIe76jD1t1Ytm76oO7hv7WKFYloL_LI-4/edit?usp=drivesdk',
  },
  'fac-new-pathway-pine-brook': {
    word: 'https://drive.google.com/file/d/1HtjLYe9yZbtWR6EyX9JOLoRA-UmMAn52/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1BeECxZu1Gu41cviNm1hg433RDMJDiXNvfS0a8B1Df5A/edit?usp=drivesdk',
  },
  'fac-hoboken-counseling-center': {
    word: 'https://drive.google.com/file/d/1gBWQRlmPtr5-eGNYEKsiItCtk1UNDWnI/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/16Uu2qHk06RklLxAjqZ2Po4_BlvRv7n4swYMQ-cZzbfA/edit?usp=drivesdk',
  },
  'fac-new-brunswick-counseling-center': {
    word: 'https://drive.google.com/file/d/1MEKHn9IdXYPSuQaKIIeCxWsgnB-YCLu4/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1VUery0O04Oyj8ol2v8XAezWq0Av4uO0zkx36zeUxwIY/edit?usp=drivesdk',
  },
  'fac-saddle-brook-counseling-center': {
    word: 'https://drive.google.com/file/d/1ZsyaAzDiX1eQVBeyIEy2AyQ6uAU6QSBu/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/15VR2fJfTyffGWFG5kpZNP_ILpAqc-6QjBEAcxCEAU2A/edit?usp=drivesdk',
  },
  'fac-montville-adolescent-center': {
    word: 'https://drive.google.com/file/d/1xBbhKRfjtK85W3cT8A8WTFmfUGhZTwni/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1I2OEIafJ08c5tvyTrcFS4VwQVszpoZqslMBB0OClpgs/edit?usp=drivesdk',
  },
  'fac-pine-tree': {
    word: 'https://drive.google.com/file/d/1M3WDFa3wrjV0JjONKBbPaVWd6FYLVVC0/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1pCuhZHOjU63AQYdzxcVN3iPjzqgYIUM3BNuEKPrdZqo/edit?usp=drivesdk',
  },
  'fac-portland-psychiatry-counseling': {
    word: 'https://drive.google.com/file/d/1lLA62Ql5RgapLgQqXEVhzhcfdbmZgHeU/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1AUGfpNS6pWqGRldZfM8stM0n2rVm6e_N-TkRgrqtMzE/edit?usp=drivesdk',
  },
  'fac-plymouth-house': {
    word: 'https://drive.google.com/file/d/1rw0u20h_X-F6RPawbif5EAl-UF3nAtoU/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1z9yFDGzz5RJu0zj26gOnB4hFKP8tq1pTue29vPolmno/edit?usp=drivesdk',
  },
  'fac-portland-addiction-center': {
    word: 'https://drive.google.com/file/d/1BhD5BSneoeQZ-MLAs98SM3ghFQPrxBlR/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1CQRfeyYAj3_yJsLFFq-soXvbe0ct7OoGA2RJi27-5M4/edit?usp=drivesdk',
  },
  'fac-curawest': {
    word: 'https://drive.google.com/file/d/1Sk7cBj--JoMjyBXcjLSDot4m8rGz_VNF/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1HiI0qRt3-k9f4rUGti3cJjSUxCmPpNGHKFM7tjK76bs/edit?usp=drivesdk',
  },
  'fac-dallas-addiction-center': {
    word: 'https://drive.google.com/file/d/1O4ipOVYhIIeMwinzcvqcFXPd7sQLoOtN/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1Pijs-OSX0XAR96j_AshVjpHebDkcMS9AItKXcRYK3Fs/edit?usp=drivesdk',
  },
  'fac-virtual-counseling-maine': {
    word: 'https://drive.google.com/file/d/1lnPueVBTKbY21Qfqih1fw4LHI-9zccRL/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1a0axDZivEZ3sVGWOmHW_PpgA1AAK_Y0snCjxoqj0rQ0/edit?usp=drivesdk',
  },
  'fac-virtual-counseling-colorado': {
    word: 'https://drive.google.com/file/d/1snNf_Khfazk8UNgtJjwxJuipXtkKRlkM/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/134wQRGjNTkNzGa6RBINkM0jEOLaRNkX5pQjdXmWqNds/edit?usp=drivesdk',
  },
  'fac-virtual-counseling-florida': {
    word: 'https://drive.google.com/file/d/1EeyeT_wFHXelwRjdqe-JJ-GalfMubLLJ/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1a7VWrFwgtUVco9LFe9uEt__EId8BVLFQmQIm-9Q0QjI/edit?usp=drivesdk',
  },
  'fac-virtual-counseling-new-jersey': {
    word: 'https://drive.google.com/file/d/1A6GEVhaOlfGCC6Lp_vl8-Z0UFNW3U7sg/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1AiZ4lah7bSaDKQQw5n5IorXSFE2spOGYYtfVLSXNUy8/edit?usp=drivesdk',
  },
  'fac-virtual-counseling-texas': {
    word: 'https://drive.google.com/file/d/132tT30A-5wnM6ZSsC8YVO9AXFSGTy2Ww/view?usp=drivesdk',
    gdoc: 'https://docs.google.com/document/d/1IFbpXArCENIltZTLiLKUCUrZNeV3yWSOOiN_fR2Ni1U/edit?usp=drivesdk',
  },
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

// Normalizes a Google Drive or Google Docs sharing URL into a direct-download URL.
//   drive.google.com/file/d/{ID}/view       → drive.google.com/uc?export=download&id={ID}
//   drive.google.com/open?id={ID}           → drive.google.com/uc?export=download&id={ID}
//   docs.google.com/document/d/{ID}/edit    → docs.google.com/document/d/{ID}/export?format=docx
//   docs.google.com/spreadsheets/d/{ID}/... → /export?format=xlsx
//   docs.google.com/presentation/d/{ID}/... → /export?format=pptx
// Leaves non-Google URLs and already-normalized URLs untouched.
function toDirectDownload(url) {
  if (!url) return ''
  var m = /drive\.google\.com\/file\/d\/([^/]+)/.exec(url)
  if (m) return 'https://drive.google.com/uc?export=download&id=' + m[1]
  var o = /drive\.google\.com\/open\?id=([^&]+)/.exec(url)
  if (o) return 'https://drive.google.com/uc?export=download&id=' + o[1]
  var doc = /docs\.google\.com\/document\/d\/([^/]+)/.exec(url)
  if (doc) return 'https://docs.google.com/document/d/' + doc[1] + '/export?format=docx'
  var xls = /docs\.google\.com\/spreadsheets\/d\/([^/]+)/.exec(url)
  if (xls) return 'https://docs.google.com/spreadsheets/d/' + xls[1] + '/export?format=xlsx'
  var ppt = /docs\.google\.com\/presentation\/d\/([^/]+)/.exec(url)
  if (ppt) return 'https://docs.google.com/presentation/d/' + ppt[1] + '/export?format=pptx'
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

// Direct-download URL for the Word (.docx) version of a letterhead.
export function letterheadUrl(slug) {
  var entry = LETTERHEAD[slug]
  return toDirectDownload((entry && entry.word) || '')
}

// "Make a copy" URL for the Google Doc version of a letterhead. Rewriting the
// editable /edit URL to /copy forces Google's copy dialog, so the master doc is
// never modified — the user always works from their own copy.
export function letterheadCopyUrl(slug) {
  var entry = LETTERHEAD[slug]
  var url = (entry && entry.gdoc) || ''
  var m = /docs\.google\.com\/document\/d\/([^/]+)/.exec(url)
  if (m) return 'https://docs.google.com/document/d/' + m[1] + '/copy'
  return url
}
