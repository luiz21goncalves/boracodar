import { HorizontalPlayer } from './components/HorizontalPlayer'
import { VerticalPlayer } from './components/VerticalPlayer'
import { PlayerContextProvider } from './contexts/PlayerContext'

import './styles/global.css'

export function App() {
  return (
    <div className="w-full min-h-screen px-8 py-16 gap-8 flex flex-col md:flex-row items-center justify-center">
      <PlayerContextProvider>
        <VerticalPlayer />
        <div className="flex flex-col gap-8">
          <HorizontalPlayer />
          <HorizontalPlayer variant="sm" />
        </div>
      </PlayerContextProvider>
    </div>
  )
}
