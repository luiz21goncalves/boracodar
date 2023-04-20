import { Rewind, Play, FastForward, Pause } from '@phosphor-icons/react'

import { usePlayer } from '../contexts/PlayerContext'
import { ButtonIcon } from './ButtonIcon'

export function Controls() {
  const { isPlaying, togglePlayer } = usePlayer()

  return (
    <div className="flex flex-row items-center justify-between">
      <ButtonIcon>
        <Rewind size={28} weight="fill" />
      </ButtonIcon>

      <ButtonIcon onClick={togglePlayer}>
        {isPlaying ? (
          <Pause size={28} weight="fill" />
        ) : (
          <Play size={28} weight="fill" />
        )}
      </ButtonIcon>

      <ButtonIcon>
        <FastForward size={28} weight="fill" />
      </ButtonIcon>
    </div>
  )
}
