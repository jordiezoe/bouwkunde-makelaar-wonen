import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

/**
 * Registreer de service worker zonder automatisch herladen bij een update.
 *
 * Met registerType:'prompt' installeert de nieuwe SW stil op de achtergrond.
 * De nieuwe versie wordt actief bij de VOLGENDE keer dat de app wordt geopend —
 * NIET midden in een leer- of quiz-sessie. Dit voorkomt de storende automatische
 * refreshes op iPad Safari.
 */
registerSW({
  immediate: true,
  onNeedRefresh() {
    // Nieuwe versie beschikbaar — geen auto-reload; update actief bij volgende start.
  },
  onOfflineReady() {
    // Alles gecached, geen actie nodig.
  },
})

// Als een JS-chunk niet laadt (slecht wifi / cache-mismatch), herlaad de pagina
// zodat de service worker de juiste bestanden opnieuw kan serveren.
window.addEventListener('error', (e) => {
  const msg = e.message ?? ''
  if (
    msg.includes('Loading chunk') ||
    msg.includes('Failed to fetch dynamically imported module') ||
    msg.includes('Importing a module script failed')
  ) {
    window.location.reload()
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
