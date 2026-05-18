# Display Assets (src/assets/)

These are **display images** — logos, icons, graphics, and photos rendered
in the brand guide interface. Vite processes them at build time with
content-hashed filenames for automatic cache-busting.

Drop files here → they auto-discover via `import.meta.glob` in `images.js`.
Reference them with `img('path/relative/to/this/folder')`.

## Folder Structure

```
src/assets/
├── logos/          ← Logo SVGs for display (sidebar, cards, clear zone demos)
│   ├── nav-logo.svg
│   ├── logo-secondary.svg
│   ├── gr-horizontal.svg
│   ├── gr-vertical.svg
│   ├── logo-sud.svg
│   ├── logo-sud-vert.svg
│   ├── logo-sud-inv.svg
│   ├── logo-sud-inv-vert.svg
│   ├── fac-pine-tree.svg
│   └── ...
├── icons/          ← Icon SVGs for display
│   ├── sunrise.svg
│   ├── sunrise-gambodge.svg
│   ├── sunrise-frost.svg
│   ├── icon-sud.svg
│   ├── icon-mh.svg
│   ├── icon-adol.svg
│   └── icon-virtual.svg
├── graphics/       ← Decorative elements
│   ├── arch-divider.svg
│   ├── hero-divider.svg
│   ├── pattern-on-midnight.png
│   ├── pattern-on-frost.png
│   └── pattern-on-glacier.png
├── photos/         ← Photography examples
│   ├── framing-glacier.jpg
│   ├── framing-pacific.jpg
│   ├── framing-midnight.jpg
│   └── rep-sticker-preview.jpg
└── previews/       ← Preview modal images (one per previewable item)
    ├── letterhead-logo-gambodge-accent.jpg
    ├── business-cards-per-rep.jpg
    ├── folder-booklet-adult-sud.jpg
    └── ...
```

## How It Works

1. `src/images.js` runs `import.meta.glob('./assets/**/*.{svg,png,jpg,jpeg,webp}')`
2. This auto-discovers every image file in this folder tree
3. At build time, Vite hashes each filename (e.g., `nav-logo-a1b2c3.svg`)
4. The `img()` helper returns the hashed URL for any key
5. Cache-busting is automatic — new file content = new hash = new URL

## NOT Here

Downloadable raw assets (full-res logos, EPS files, PDFs) are NOT stored
in this project. They live on Google Drive and are linked via `src/links.js`.
Update a URL in `links.js` → every corresponding Download button updates.
