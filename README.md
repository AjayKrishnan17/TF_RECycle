# Taskforce RECycle — Marketplace (MERN rebuild)

A restyled rebuild of the Taskforce RECycle marketplace using the MERN
stack (MongoDB, Express, React, Node). Same content and purpose as the
original site — new visual direction.

## Design direction

The original used a maroon/gold theme. This version leans into the
uploaded magenta starburst artwork as a fixed backdrop on every page,
with a dark violet glass UI layered on top so the artwork glows through
without hurting readability.

- **Palette:** ink `#120817`, plum `#2A0F35`, magenta `#E31C79`, amber `#FFB627`, spoke-cyan `#29E0C9`, mist `#F5EEF7`
- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (labels/stats)
- **Signature element:** the "hub ring" — a circular, spoke-lined badge (bike-wheel motif) used for icons and stat callouts instead of generic numbered markers

## Project structure

```
recycle-hub/
├── backend/          Express API + MongoDB models
│   ├── config/db.js
│   ├── models/       ContactMessage, Cycle
│   ├── routes/       contact, cycles
│   ├── seed.js       optional demo data
│   └── server.js
└── frontend/         React (Vite) + Tailwind
    └── src/
        ├── assets/bg-texture.png   ← the background artwork you provided
        ├── components/  Navbar, Footer
        └── pages/       Home, About, BrowseCycles, Contact
```

## Getting started

1. Install dependencies:
   ```bash
   npm run install:all
   ```
2. Create `backend/.env` from `backend/.env.example` and point
   `MONGO_URI` at your MongoDB instance (local or Atlas).
3. (Optional) seed a few demo cycles:
   ```bash
   cd backend && node seed.js
   ```
4. Run both servers together from the project root:
   ```bash
   npm run dev
   ```
   - API on `http://localhost:5000`
   - Web app on `http://localhost:5173` (proxies `/api` to the backend)

## Notes

- **Browse Cycles page**: wired to `GET /api/cycles`, but you mentioned
  cycle browsing already lives on a separate site — set
  `EXTERNAL_BROWSE_URL` at the top of `frontend/src/pages/BrowseCycles.jsx`
  to link straight out to it instead.
- **Contact form** posts to `POST /api/contact` and stores submissions in
  MongoDB (`ContactMessage` collection). `GET /api/contact` lists them for
  basic admin review.
- **Download Bill** button currently triggers the browser print dialog as
  a placeholder — swap in real PDF generation (e.g. `pdfkit` on the
  backend) once you have bill data to render.
