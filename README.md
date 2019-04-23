# vue + websocket + vuex

> vue + websocket + vuex实现点对点消息推送，数据传输采用Google的protobuf格式

## protobuf

安装protobufjs依赖
```
npm install protobufjs -S
```
在package.json的scripts内创建protobuf转js命令
```
"proto": "pbjs -t json-module -w commonjs -o src/proto/proto.js  src/proto/*.proto"
```
之后便可以使用如下命令将与后端约定好的proto文件转化为js文件
```
npm run proto
```
