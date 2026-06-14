# Bouwkunde-app op je iPhone

De app is nu een **PWA** (Progressive Web App): je kunt 'm naar je beginscherm
toevoegen en gebruiken alsof het een echte app is, ook offline.

---

## Snelste route: lokaal testen via wifi

Goed om eerst te kijken of alles werkt voor je gaat hosten.

1. **Op je Mac**, in deze map:
   ```bash
   npm run dev
   ```
   Vite luistert nu op `0.0.0.0:5173` (dankzij `server.host: true`).

2. **Op je iPhone** (zelfde wifi-netwerk):
   - Open Safari → ga naar **`http://192.168.2.20:5173`** (jouw Mac-IP).
   - Tip: als dit IP wisselt, draai opnieuw `ipconfig getifaddr en0` in Terminal.

3. **Toevoegen aan beginscherm**:
   - Tik op het **deel-icoontje** (vierkantje met pijl omhoog).
   - Scroll → **"Zet op beginscherm"** → naam invullen → Toevoegen.
   - App-icoon verschijnt op je homescreen, opent zonder Safari-balken.

> ⚠️ Lokaal werkt alleen als je Mac aanstaat en op hetzelfde wifi-netwerk. Geen
> offline-gebruik onderweg. Daarvoor: deploy naar Vercel of Netlify (hieronder).

---

## Permanent online: deploy naar Vercel (gratis)

Aanrader. Eenmalig setup van ~5 minuten, daarna werkt 'm overal — ook offline
op je iPhone door de service worker.

### Optie A: via de Vercel-website (zonder CLI)

1. Maak een gratis account aan op <https://vercel.com> (kan via GitHub-login).
2. Push deze map naar een GitHub-repo:
   ```bash
   git init
   git add .
   git commit -m "Bouwkunde e-learning app"
   gh repo create bouwkunde-app --private --source=. --push
   ```
3. Op vercel.com: **New Project** → kies je repo → **Deploy**. Vercel detecteert
   automatisch Vite en gebruikt `vercel.json` voor SPA-routing.
4. Na ±1 minuut krijg je een URL als `https://bouwkunde-app-abc.vercel.app`.

### Optie B: via de Vercel CLI

```bash
npm install -g vercel
vercel login
vercel        # eerste keer: vragen beantwoorden (defaults zijn goed)
vercel --prod # publiek live zetten
```

### Daarna op je iPhone

1. Open de Vercel-URL in Safari.
2. Deel-icoontje → "Zet op beginscherm" → Toevoegen.
3. Open de app vanaf het beginscherm — werkt offline na de eerste keer.

---

## Permanent online: deploy naar Netlify (alternatief, ook gratis)

```bash
npm install -g netlify-cli
netlify login
netlify init        # nieuwe site of bestaande
netlify deploy --prod
```

Of: drag-and-drop de `dist/`-map (na `npm run build`) op
<https://app.netlify.com/drop>.

---

## Updates verspreiden naar je iPhone

De service worker (`autoUpdate`-modus) controleert bij elk app-bezoek of er een
nieuwe versie is. Zo niet:

- Tik twee keer op het app-icoon → service worker pakt de nieuwe versie op.
- Eventueel: in Safari de site openen, "Wis website-gegevens" → herinstalleer.

---

## Voortgang & sync

- Voortgang staat in `localStorage` van het device — iPhone en Mac houden hun
  eigen voortgang bij.
- Wil je later wel sync: dat kan met Supabase of Firebase in een aparte iteratie.

---

## iPhone-specifieke optimalisaties die al zijn ingebouwd

- `viewport-fit=cover` + safe-area padding → werkt met notch/Dynamic Island.
- `apple-touch-icon` 180×180 → goed icoon op beginscherm.
- `apple-mobile-web-app-capable` → opent fullscreen zonder Safari-balken.
- `theme-color #1e40af` → matching status bar in standalone-mode.
- `-webkit-text-size-adjust: 100%` → geen ongewenste tekstvergroting in
  landscape.
- `format-detection: telephone=no` → "1:100" wordt niet als telefoonnummer
  gezien.
- Min. 44 px tap-hoogte op alle knoppen.
- Header sticky met grote tikvelden; "Examensimulatie"-knop wordt
  "🎓 Examen" op smalle schermen.
- Lesson/quiz/exam-knoppen worden full-width op mobiel.
