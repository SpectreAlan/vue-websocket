const state = {
  roomTitle: '', // 房间名称
  roomCode: '', // 房间ID
  newMsg: {}, // 收到的新消息
  msg: {}, // 待发送消息
  sharing: false, // 内容分享状态
  shareContent: [], // 内容分享列表
  socket: null,
  isLogin: false
}
export default state
