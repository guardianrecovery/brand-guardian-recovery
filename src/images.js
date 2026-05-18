// Auto-imports every image in src/assets/ and subdirectories.
// Vite hashes filenames at build time → automatic cache-busting.
//
// Usage:
//   import { img } from './images'
//   <img src={img('logos/nav-logo.svg')} />
//
// If the file doesn't exist yet, returns an empty string (no crash).

const modules = import.meta.glob(
  './assets/**/*.{svg,png,jpg,jpeg,webp}',
  { eager: true }
)

const imageMap = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.replace('./assets/', ''),
    mod.default
  ])
)

export function img(key) {
  return imageMap[key] || ''
}

// For debugging: log all discovered images
// console.log('Available images:', Object.keys(imageMap))

export default imageMap
