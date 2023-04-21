import { produce } from 'immer'

import { SONG } from '../../constants/song'
import { PLAYER_TYPES } from './actions'

type PlayerState = {
  isPlaying: boolean
  duration: number
  elapsedtime: number
}

type ActionType = {
  type: string
}

const audio = new Audio(SONG.audioPath)

export function playerReduce(state: PlayerState, action: ActionType) {
  switch (action.type) {
    case PLAYER_TYPES.LOAD:
      return produce(state, (draft) => {
        audio.load()

        draft.duration = 0
        draft.elapsedtime = 0
      })

    case PLAYER_TYPES.UPDATE:
      return produce(state, (draft) => {
        draft.duration = Number(audio.duration.toFixed(0))
        draft.elapsedtime = Number(audio.currentTime.toFixed(0))
      })

    case PLAYER_TYPES.PLAY:
      return produce(state, (draft) => {
        draft.isPlaying = true
        audio.play()
      })

    case PLAYER_TYPES.PAUSE:
      return produce(state, (draft) => {
        draft.isPlaying = false
        audio.pause()
      })

    case PLAYER_TYPES.TO_START:
      return produce(state, (draft) => {
        audio.currentTime = 0
        draft.isPlaying = true
        audio.play()
      })

    case PLAYER_TYPES.TO_END:
      return produce(state, (draft) => {
        draft.isPlaying = false
        audio.currentTime = audio.duration
        audio.pause()
      })

    default:
      return state
  }
}
