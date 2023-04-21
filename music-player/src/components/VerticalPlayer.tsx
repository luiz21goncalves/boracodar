import { Controls } from './Controls'
import { SongDetails } from './SongDetails'
import { Timeline } from './Timeline'

export function VerticalPlayer() {
  return (
    <div className="h-[32.5rem] p-9 flex flex-col justify-between bg-purple-900 rounded-lg">
      <img src="" alt="" className="w-48 h-48 bg-purple-200 rounded" />
      <SongDetails />
      <Controls />
      <Timeline />
    </div>
  )
}
