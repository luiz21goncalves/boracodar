import { HorizontalPlayer } from './components/HorizontalPlayer'
import { VerticalPlayer } from './components/VerticalPlayer'

import './styles/global.css'

export function App() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center gap-8">
      <VerticalPlayer />
      <div className="flex flex-col gap-8">
        <HorizontalPlayer />
        <HorizontalPlayer variant="sm" />
      </div>
    </div>
  )
}
