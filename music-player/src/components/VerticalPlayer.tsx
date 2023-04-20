import { Controls } from './Controls'
import { Timeline } from './Timeline'

export function VerticalPlayer() {
  return (
    <div className="h-[32.5rem] p-9 flex flex-col justify-between bg-purple-900 rounded-lg">
      <img src="" alt="" className="w-48 h-48 bg-purple-200 rounded" />

      <div className="flex flex-col">
        <strong className="font-bold text-2xl">Acorda Devinho</strong>
        <span className="text-lg">Banda Rocketseat</span>
      </div>

      <Controls />

      <Timeline />
    </div>
  )
}
