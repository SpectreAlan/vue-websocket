import store from '../store/index'
import protoRoot from '@/socket/proto'
import protobuf from 'protobufjs'
export const Model = protoRoot.lookup('framework.Model') // 接口基础配置信息,对应Message.proto
const Msg = protoRoot.lookup('framework.MessageBody') // 消息配置信息，对应MessageBody.proto

export function platform () { // 获取浏览器信息:名称/版本号
  let browser = {name: 'unknown', version: 0}
  let userAgent = window.navigator.userAgent.toLowerCase()
  if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(userAgent)) {
    browser.name = RegExp.$1
    browser.version = RegExp.$2
  } else if (/version\D+(\d[\d.]*).*safari/.test(userAgent)) {
    browser.name = 'safari'
    browser.version = RegExp.$2
  }
  return browser
}
export function connect () { // 连接socket验证
  let browser = platform() // 获取用户设备信息
  let commonData = { // 参数信息详见Message.proto
    version: '1.0',
    deviceId: '',
    cmd: 1,
    sender: localStorage.getItem('userChatId'),
    msgtype: 1,
    flag: 1,
    platform: browser.name,
    platformVersion: browser.version,
    token: localStorage.getItem('userChatId')
  }
  return Model.encode(commonData).finish() // 将请求数据encode成二进制protobuf格式
}
export function onMessage (response) { // 收到消息
  if (!response) { return }
  let rawResponse = response.data
  if (rawResponse !== null && (Object.prototype.toString.call(rawResponse) === '[object ArrayBuffer]')) {
    try {
      const buf = protobuf.util.newBuffer(rawResponse) // 创建protobuf实例
      const res = Model.decode(buf)
      if (res.content) { // 解析消息内容
        let msg = protobuf.util.newBuffer(res.content)
        res.content = Msg.decode(msg)
        if (res.content.extend) {
          store.commit('SHARING', res.content.extend)
        }
      }
      return res
    } catch (err) {
      return err
    }
  } else {
    return rawResponse
  }
}
export function sendMsg (msg, type, receiver, group, share) { // 发送消息
  let content = {
    content: msg,
    type: type,
    extend: share
  }
  let baseData = {
    msgtype: 4,
    cmd: 5,
    groupId: String(group),
    token: localStorage.getItem('userChatId'),
    sender: localStorage.getItem('userChatId'),
    userName: localStorage.getItem('userName'),
    img: localStorage.getItem('avator'),
    receiver: receiver,
    content: Msg.encode(content).finish()
  }
  return Model.encode(baseData).finish()
}
