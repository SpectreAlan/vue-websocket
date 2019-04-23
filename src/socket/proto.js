/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
'use strict'

var $protobuf = require('protobufjs/light')

var $root = ($protobuf.roots['default'] || ($protobuf.roots['default'] = new $protobuf.Root()))
  .addJSON({
    framework: {
      nested: {
        Model: {
          fields: {
            version: {
              type: 'string',
              id: 1
            },
            deviceId: {
              type: 'string',
              id: 2
            },
            cmd: {
              type: 'uint32',
              id: 3
            },
            sender: {
              type: 'string',
              id: 4
            },
            receiver: {
              type: 'string',
              id: 5
            },
            groupId: {
              type: 'string',
              id: 6
            },
            msgtype: {
              type: 'uint32',
              id: 7
            },
            flag: {
              type: 'uint32',
              id: 8
            },
            platform: {
              type: 'string',
              id: 9
            },
            platformVersion: {
              type: 'string',
              id: 10
            },
            token: {
              type: 'string',
              id: 11
            },
            appKey: {
              type: 'string',
              id: 12
            },
            timeStamp: {
              type: 'string',
              id: 13
            },
            sign: {
              type: 'string',
              id: 14
            },
            content: {
              type: 'bytes',
              id: 15
            },
            userName: {
              type: 'string',
              id: 16
            },
            img: {
              type: 'string',
              id: 17
            }
          }
        },
        MessageBody: {
          fields: {
            title: {
              type: 'string',
              id: 1
            },
            content: {
              type: 'string',
              id: 2
            },
            time: {
              type: 'string',
              id: 3
            },
            type: {
              type: 'uint32',
              id: 4
            },
            extend: {
              type: 'string',
              id: 5
            }
          }
        }
      }
    }
  })

module.exports = $root
