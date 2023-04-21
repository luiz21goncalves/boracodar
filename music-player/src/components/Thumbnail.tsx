import clsx from 'clsx'

import { SONG } from '../constants/song'

type ThumbnailProps = {
  size?: 'md' | 'sm'
}

export function Thumbnail(props: ThumbnailProps) {
  const { size = 'md' } = props

  return (
    <img
      src={SONG.thumbnailPath}
      alt={`capa da música ${SONG.name} do autor ${SONG.author}`}
      className={clsx('rounded', {
        'w-24 h-24': size === 'sm',
        'w-48 h-48': size === 'md',
      })}
    />
  )
}
