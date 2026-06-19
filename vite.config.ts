import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Op GitHub Pages draait de app onder een submap. De Pages-build zet
// VITE_BASE='/bouwkunde-makelaar-wonen/'; lokaal blijft het '/'.
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      // 'autoUpdate': de nieuwe service worker neemt het direct over bij de
      // eerstvolgende keer openen. Met 'prompt' (+ skipWaiting:false) bleef de
      // oude SW op iOS hardnekkig actief, óók na wegvegen → de app zat vast op
      // een verouderde versie (oude vragen/ontbrekende afbeeldingen). Voor een
      // examenapp die we bijwerken is altijd-de-laatste-versie belangrijker dan
      // het vermijden van een stille herlaad.
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.png',
        'apple-touch-icon.png',
        'icon.svg',
      ],
      manifest: {
        name: 'Bouwkunde — Makelaar Wonen',
        short_name: 'Bouwkunde',
        description:
          'Oefenapp voor SVMNIVO Basistheorie Makelaar Wonen — Bouwkunde. Lesstof, spelvormen, begrippentrainer en examensimulatie.',
        lang: 'nl',
        theme_color: '#1e40af',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'portrait',
        scope: base,
        start_url: base,
        icons: [
          {
            src: `${base}pwa-192.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `${base}pwa-512.png`,
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: `${base}pwa-maskable-512.png`,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // PRE-cache ALLEEN de app-schil (code, stijl, fonts) — niet de zware
        // figuren/foto's. Anders haalt de service worker bij de eerste keer
        // openen ~23 MB ineens binnen → op iPad/iPhone over wifi stalt of
        // mislukt dat. Afbeeldingen worden on-demand geladen en gecacht
        // (runtimeCaching hieronder). Initiële install: ~1,7 MB i.p.v. 23 MB.
        globPatterns: ['**/*.{js,css,html,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: `${base}index.html`,
        // Neem direct over zodra de nieuwe SW klaar is (i.c.m. autoUpdate), zodat
        // verouderde caches op iOS niet blijven hangen.
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            // Foto's én SVG-tekeningen: cache-first, laden zodra je ze tegenkomt
            // (.includes i.p.v. startsWith: werkt ook onder de Pages-submap)
            urlPattern: ({ request, url }) =>
              request.destination === 'image' || url.pathname.includes('/figs/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'figs-images',
              expiration: {
                maxEntries: 400,
                maxAgeSeconds: 60 * 60 * 24 * 60, // 60 dagen
              },
            },
          },
          {
            // Vooraf opgenomen lesaudio (MP3): pas cachen als je luistert
            urlPattern: ({ url }) => url.pathname.includes('/audio/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'lesaudio',
              expiration: {
                maxEntries: 300,
                maxAgeSeconds: 60 * 60 * 24 * 90, // 90 dagen
              },
              rangeRequests: true, // voor audio-seek op iOS
            },
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        /**
         * Vendor-only split — content chunks worden automatisch aangemaakt
         * door de dynamic imports in section_A/B/C/D.ts.
         * Startpagina laadt nu alleen vendor + app-shell + topicMetas (≈5 KB).
         */
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor'
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
    host: true, // luister op alle interfaces → bereikbaar vanaf iPad in lokaal netwerk
  },
})
