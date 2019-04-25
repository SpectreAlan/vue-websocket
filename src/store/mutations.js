import * as types from './mutation-types'
import * as socket from '../socket/socket.config'
import {initSocket} from '../socket/socket.js'
const mutations = {
  [types.ROOM_TITLE] (state, roomTitle) {
    state.roomTitle = roomTitle
  },
  [types.ISLOGIN] (state, isLogin) {
    state.isLogin = isLogin
    state.socket = isLogin ? initSocket() : null
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
    state.socket.send(socket.sendMsg(msg.content, msg.type, null, state.roomCode))
  },
  [types.SHARECONTENT] (state, shareContent) { // 内容分享
    let flag = localStorage.getItem('userName') + new Date().getTime() // 创建内容分享唯一标识
    sessionStorage.setItem('flag', flag)
    state.shareContent = shareContent
    for (let i = 0; i < shareContent.length; i++) {
      state.socket.send(socket.sendMsg(sessionStorage.getItem('share'), 5, null, shareContent[i], flag))
    }
  }
}
export default mutations
