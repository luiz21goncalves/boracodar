type TimerProps = {
  timeInSeconds: number
}

export function Timer(props: TimerProps) {
  const { timeInSeconds } = props

  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = timeInSeconds % 60

  const formatedMinutes = String(minutes).padStart(2, '0')
  const formateSeconds = String(seconds).padStart(2, '0')

  return (
    <span className="font-bold text-sm text-gray-100/70">
      {formatedMinutes}:{formateSeconds}
    </span>
  )
}
