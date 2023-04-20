/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

type PlayerContextProviderProps = {
  children: ReactNode
}

type PlayerContextData = {
  togglePlayer: () => void
  isPlaying: boolean
}

const PlayerContext = createContext({} as PlayerContextData)

export function PlayerContextProvider(props: PlayerContextProviderProps) {
  const { children } = props

  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayer = useCallback(() => {
    setIsPlaying((prevState) => !prevState)
  }, [])

  return (
    <PlayerContext.Provider value={{ togglePlayer, isPlaying }}>
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  return useContext(PlayerContext)
}
