import * as webSocket from './socket.config.js'
import store from '../store/index'
export function initSocket () {
  let protocol = document.location.protocol === 'http:' ? 'ws' : 'wss'
  let socket = new WebSocket(protocol + '://ip:端口/' + protocol)
  socket.binaryType = 'arraybuffer'
  socket.onmessage = response => { // 监听消息动态
    let val = webSocket.onMessage(response)
    console.log(val)
    if (!val) return
    if (val.cmd === 2) { // 心跳消息
      let data = {
        cmd: 2,
        msgtype: 4
      }
      socket.send(webSocket.Model.encode(data).finish())
    } else if (val.cmd === 3) { // online
      console.log(val.sender + ' is online')
    } else if (val.cmd === 4) { // offline
      console.log(val.sender + ' is offline')
    } else {
      store.commit('NEWMSG', val)
    }
  }
  socket.onclose = () => { // socket断线重连
    socket = new WebSocket(protocol + '://' + document.location.host + '/ws')
  }
  socket.onopen = () => { // socket连接以后的callback
    console.log('connect success!')
    let data = webSocket.connect()
    socket.send(data)
  }
  // socket.onerror = this.socketError
  return socket
}
export default initSocket
