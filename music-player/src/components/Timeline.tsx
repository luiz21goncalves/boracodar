/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import { usePlayer } from '../contexts/PlayerContext'
import { Timer } from './Timer'

export function Timeline() {
  const { duration, elapsedtime } = usePlayer()

  const timeLeft = duration - elapsedtime

  const percentage = Math.ceil((elapsedtime * 100) / duration)

  console.log({ percentage })

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full h-2 bg-gray-200/10 relative rounded-full">
        <div
          className="h-full rounded-full absolute top-0 left-0 bg-gray-200"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="w-full flex flex-row items-center justify-between">
        <Timer timeInSeconds={duration} />
        <Timer timeInSeconds={timeLeft} />
      </div>
    </div>
  )
}
