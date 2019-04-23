import * as types from './mutation-types'
export const selectRoom = function ({commit}, args) {
  commit(types.ROOM_CODE, args.id)
  commit(types.ROOM_TITLE, args.title)
}
