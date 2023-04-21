/* eslint-disable no-unused-vars */
export enum PLAYER_TYPES {
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  UPDATE = 'UPDATE',
  LOAD = 'LOAD',
  TO_START = 'TO_START',
  TO_END = 'TO_END',
}

export function play() {
  return { type: PLAYER_TYPES.PLAY }
}

export function pause() {
  return { type: PLAYER_TYPES.PAUSE }
}

export function update() {
  return { type: PLAYER_TYPES.UPDATE }
}
export function load() {
  return { type: PLAYER_TYPES.LOAD }
}

export function toStart() {
  return { type: PLAYER_TYPES.TO_START }
}

export function toEnd() {
  return { type: PLAYER_TYPES.TO_END }
}
