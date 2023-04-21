import { SONG } from '../constants/song'

export function SongDetails() {
  return (
    <div className="flex flex-col">
      <strong className="font-bold text-2xl">{SONG.name}</strong>
      <span className="text-lg text-gray-50/60">{SONG.author}</span>
    </div>
  )
}
