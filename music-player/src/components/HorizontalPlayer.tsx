import { Controls } from './Controls'
import { SongDetails } from './SongDetails'
import { Thumbnail } from './Thumbnail'
import { Timeline } from './Timeline'

type HorizontalPlayerProps = {
  variant?: 'sm' | 'md'
}

export function HorizontalPlayer(props: HorizontalPlayerProps) {
  const { variant = 'md' } = props

  const hasTimeline = variant === 'md'

  return (
    <div className="flex flex-col p-7 items-center gap-6 bg-purple-900 rounded-lg">
      <div className="flex flex-col xs:flex-row gap-7 items-center">
        <Thumbnail size="sm" />
        <SongDetails />
      </div>

      <div className="w-4/5">
        <Controls />
      </div>

      {hasTimeline && <Timeline />}
    </div>
  )
}
