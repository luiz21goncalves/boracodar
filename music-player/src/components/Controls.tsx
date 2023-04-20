import { useState } from 'react'

import { Rewind, Play, FastForward, Pause } from '@phosphor-icons/react'

import { ButtonIcon } from './ButtonIcon'

export function Controls() {
  const [isPlaying, setIsPlaying] = useState(false)

  function handleTogglePlay() {
    setIsPlaying((prevState) => !prevState)
  }

  return (
    <div className="flex flex-row items-center justify-between">
      <ButtonIcon>
        <Rewind size={28} weight="fill" />
      </ButtonIcon>

      <ButtonIcon onClick={handleTogglePlay}>
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
