import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[Bouwkunde] Render error:', error, info.componentStack)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 max-w-sm w-full text-center space-y-4">
          <div className="text-4xl">⚠️</div>
          <h1 className="text-lg font-semibold text-slate-800">
            Er ging iets mis
          </h1>
          <p className="text-sm text-slate-500">
            De app is gecrasht. Je voortgang is veilig opgeslagen — herlaad de pagina om verder te gaan.
          </p>
          <p className="text-xs text-slate-400 font-mono break-all">
            {this.state.error.message}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full py-3 rounded-xl bg-primary-600 text-white font-semibold text-base active:bg-primary-700"
          >
            Herlaad app
          </button>
          <button
            onClick={() => {
              // Wis alleen de scherm-state, niet de voortgang
              try { localStorage.removeItem('bouwkunde-screen-v1') } catch { /* ignore */ }
              window.location.reload()
            }}
            className="w-full py-2 rounded-xl border border-slate-200 text-slate-500 text-sm"
          >
            Terug naar dashboard
          </button>
        </div>
      </div>
    )
  }
}
