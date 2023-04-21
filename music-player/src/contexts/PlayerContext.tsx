/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'

import {
  load,
  pause,
  play,
  toEnd,
  toStart,
  update,
} from '../reducers/player/actions'
import { playerReduce } from '../reducers/player/reducers'

type PlayerContextProviderProps = {
  children: ReactNode
}

type PlayerContextData = {
  isPlaying: boolean
  duration: number
  elapsedtime: number
  togglePlayer: () => void
  goToStart: () => void
  goToEnd: () => void
}

const PlayerContext = createContext({} as PlayerContextData)

export function PlayerContextProvider(props: PlayerContextProviderProps) {
  const { children } = props

  const [playerState, dispatch] = useReducer(playerReduce, {
    isPlaying: false,
    duration: 0,
    elapsedtime: 0,
  })

  useEffect(() => {
    dispatch(load())

    const interval = setInterval(() => {
      dispatch(update())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const { isPlaying, duration, elapsedtime } = playerState

  const togglePlayer = useCallback(() => {
    if (playerState.isPlaying) {
      dispatch(pause())
    } else {
      dispatch(play())
    }
  }, [playerState.isPlaying])

  const goToStart = useCallback(() => {
    dispatch(toStart())
  }, [])

  const goToEnd = useCallback(() => {
    dispatch(toEnd())
  }, [])

  return (
    <PlayerContext.Provider
      value={{
        togglePlayer,
        isPlaying,
        duration,
        elapsedtime,
        goToEnd,
        goToStart,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  return useContext(PlayerContext)
}
