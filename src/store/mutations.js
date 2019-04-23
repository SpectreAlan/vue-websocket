import * as types from './mutation-types'
import Vue from 'vue'
import * as socket from '../../proto/socket.config'
const vue = new Vue()
const mutations = {
  [types.ROOM_TITLE] (state, roomTitle) {
    state.roomTitle = roomTitle
  },
  [types.ROOM_CODE] (state, roomCode) {
    state.roomCode = roomCode
  },
  [types.SHARING] (state, sharing) {
    state.sharing = sharing
  },
  [types.NEWMSG] (state, newMsg) {
    state.newMsg = newMsg
  },
  [types.MSG] (state, msg) { // 普通消息发送
    state.msg = msg
    vue.$socket.send(socket.sendMsg(msg.content, state.msg.type, null, state.roomCode))
  },
  [types.SHAREBET] (state, shareBet) { // 内容分享
    let flag = localStorage.getItem('userName') + new Date().getTime() // 创建内容分享唯一标识
    sessionStorage.setItem('flag', flag)
    state.shareBet = shareBet
    for (let i = 0; i < shareBet.length; i++) {
      vue.$socket.send(socket.sendMsg(sessionStorage.getItem('share'), 5, null, shareBet[i], flag))
    }
  }
}
export default mutations
