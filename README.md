# Go Jaehyun Portfolio

This repository contains two folders:

- `next-web-renewal/` — The main modern portfolio site built with Next.js (static export ready)
- `legacy/` — Old static site (for reference only)

## Getting Started

1. Move into the Next.js project directory:
   ```sh
   cd next-web-renewal
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Static Export (for static hosting)

1. Build and export the static site:
   ```sh
   npm run build && npm run export
   ```
2. The static files will be in the `out/` directory inside `next-web-renewal/`.
3. You can deploy the contents of `out/` to any static hosting service.

---

- Main site: [`next-web-renewal/`](./next-web-renewal)
- Old site: [`legacy/`](./legacy) 