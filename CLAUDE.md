# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build → /dist
npm run preview   # Preview production build
npm run lint      # ESLint on .js/.jsx files
```

Requires Node 22 (see `.node-version`).

## Architecture

This is a **single-file React SPA** — virtually all application logic lives in `src/App.jsx`. There is no routing library; navigation uses `scrollIntoView()` to anchor elements. No CSS files — all styles are inline object literals, except a small `<style>` tag injected into the document for global/responsive rules (mobile breakpoint at 800px).

### Key data structures (defined at module level in App.jsx)

- `C` — Brand color palette object with semantic keys (`mid`, `pru`, `gam`, `cer`, etc.)
- `SECS` — Ordered array of 17 sections; drives sidebar navigation and the Intersection Observer
- `FACS` — Array of facility/location objects (name, services, region, branding status)
- `COLLATERAL_TYPES` — Print/digital collateral categories with sub-items

### Reusable UI primitives (functions, not classes)

Tiny inline-styled components defined at the top of App.jsx:

- `Sw()` — color swatch, `Bt()` — button (variants: default/primary/order/preview), `H3/H4/P/Q()` — text, `Row()` — flex row, `Tb()` — table, `Bx()` — placeholder box

### Feature components

- `NavPanel` — fixed left sidebar; uses Intersection Observer to track active section; includes search/filter
- `LogoDownload` / `IconDownload` — format-selector download widgets (Vector, Web, Print, SVG, PNG)
- `LogoGrid` — logo grid with orientation & color-mode filters
- `ExecGate` — PIN-gated section (**hardcoded PIN, client-side only — not a security control**)
- `CollateralNav` / `SubCollateral` — tabbed collateral navigator
- `Sec()` — section wrapper that accepts a part number and renders into the scrollable body

### Fonts

Google Fonts (DM Serif Text, IBM Plex Sans) are injected via `useEffect` with a guard to prevent duplicate `<link>` elements on re-renders.

### No test suite

There are no tests configured. Lint (`npm run lint`) is the only automated code quality check.
