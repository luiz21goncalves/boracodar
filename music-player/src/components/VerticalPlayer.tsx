import { Controls } from './Controls'
import { SongDetails } from './SongDetails'
import { Thumbnail } from './Thumbnail'
import { Timeline } from './Timeline'

export function VerticalPlayer() {
  return (
    <div className="h-[32.5rem] p-9 gap-6 flex flex-col items-center justify-between bg-purple-900 rounded-lg">
      <Thumbnail />
      <SongDetails />
      <Controls />
      <Timeline />
    </div>
  )
}
