import { Controls } from './Controls'
import { Timeline } from './Timeline'

type HorizontalPlayerProps = {
  variant?: 'sm' | 'md'
}

export function HorizontalPlayer(props: HorizontalPlayerProps) {
  const { variant = 'md' } = props

  const hasTimeline = variant === 'md'

  return (
    <div className="flex flex-col p-7 items-center gap-6 bg-purple-900 rounded-lg">
      <div className="flex flex-row gap-7 items-center">
        <img src="" alt="" className="w-24 h-24 rounded bg-purple-200" />

        <div className="flex flex-col">
          <strong className="font-bold text-2xl">Acorda Devinho</strong>
          <span className="text-lg text-gray-50/60">Banda Rocketseat</span>
        </div>
      </div>

      <div className="w-4/5">
        <Controls />
      </div>

      {hasTimeline && <Timeline />}
    </div>
  )
}
