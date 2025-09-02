SUNANLYTZ – Case Study Showcase

A polished Next.js site presenting the SUNANLYTZ case competition study with sections for market context, viability matrix, execution plan, and an embedded PDF viewer.

Getting Started

1. Install deps:

```bash
npm install
```

2. Add your PDF at `public/case-study.pdf`.

3. Run locally:

```bash
npm run dev
```

Deploy to Vercel

- Push this folder to a GitHub repo.
- On Vercel, “Add New Project” → import the repo → Root directory: `/`.
- Framework preset: Next.js. No env vars needed.
- After deploy, ensure the PDF file exists in `public/` so `/pdf` renders it inline.

Structure

- `src/app/page.tsx`: Landing + sections
- `src/app/pdf/page.tsx`: PDF viewer route
- `src/components/*`: UI components

Made with love by SUNANLYTZ


