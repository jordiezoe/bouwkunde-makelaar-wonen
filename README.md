# Bouwkunde — Makelaar Wonen (oefenapp)

Een offline-vriendelijke PWA voor de SVMNIVO-basistheorie **Makelaar Wonen — Bouwkunde**.
Lesstof per onderwerp, overhoringen met directe feedback, spelvormen, een
begrippentrainer, examensimulatie en een ingesproken audioboek (stem: Xander Verbeterd).

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- PWA (vite-plugin-pwa) — werkt offline na de eerste keer laden
- Voortgang lokaal opgeslagen in de browser (localStorage)

## Ontwikkelen
```bash
npm install
npm run dev        # dev-server op http://localhost:5173
npm run build      # productie-build naar dist/
npm run preview    # serveer de productie-build
```

## Lesaudio (MP3) genereren
De ingesproken fragmenten staan **niet** in de repo (groot + regenereerbaar).
Genereren (vereist macOS met de stem *Xander Verbeterd* + `ffmpeg`):

```bash
# 1) Tekst per sectie extraheren naar /tmp/audio-manifest.json
node_modules/.bin/esbuild scripts/extract-audio-text.ts \
  --bundle --format=esm --platform=node --outfile=/tmp/extract.mjs && node /tmp/extract.mjs

# 2) MP3's genereren in public/audio/ (say → ffmpeg, 64 kbps mono)
#    zie het generatiescript in de projectgeschiedenis
```

## Structuur
- `src/content/` — lesstof, vragen, begrippen per onderwerp (A/B/C/D)
- `src/screens/` — Dashboard, Lesson, Quiz, Trainer, Exam, BegrippenGlobaal, ZwakkePunten, …
- `public/figs/` — tekeningen (SVG) en foto's
- `public/audio/` — gegenereerde lesaudio (gitignored)
