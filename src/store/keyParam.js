import { proxy } from 'valtio'
import { derive } from 'valtio/utils'

export const state = proxy({
  pos: '',
  key: null
})

export const actions = {
  setKey: (pos, key) => {
    state.pos = pos
    state.key = key
  },
  getKey: () => [state.pos, state.key]
}
