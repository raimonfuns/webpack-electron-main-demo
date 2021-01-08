测试 eletron-main 打包。

安装依赖: `yarn install`

## 对照组：用 uuid 简单测试一下打包功能

1. `yarn pack:uuid`
2. 产生 `./dist/uuid.output.js`
3. 测试打包的结果：`node ./dist/uuid.output.js`
4. 成功打印出结果，说明打包功能是没问题

## 实验组：打包 prs-atm

1. `yarn pack:prs-atm`

日志如下：

```
yarn run v1.22.5
$ webpack --config webpack.config.prs-atm.js
assets by status 6.6 MiB [cached] 1 asset
orphan modules 399 KiB [orphan] 264 modules
runtime modules 1.49 KiB 8 modules
javascript modules 18.3 MiB
  cacheable modules 18.3 MiB 2447 modules
  36 modules
json modules 514 KiB
  modules by path ./node_modules/har-schema/lib/*.json 6.93 KiB 18 modules
  modules by path ./node_modules/raw-body/node_modules/iconv-lite/encodings/tables/*.json 86.7 KiB 8 modules
  modules by path ./node_modules/iconv-lite/encodings/tables/*.json 86.7 KiB 8 modules
  modules by path ./node_modules/ajv/lib/refs/*.json 5.58 KiB 3 modules
  modules by path ./node_modules/node-mailjet/*.json 1.09 KiB
    ./node_modules/node-mailjet/package.json 1020 bytes [built] [code generated]
    ./node_modules/node-mailjet/config.json 105 bytes [built] [code generated]

WARNING in ./node_modules/bytebuffer/dist/bytebuffer-node.js 29:38-55
Module not found: Error: Can't resolve 'memcpy' in '/Users/raimonfuns/projects/webpack-electron-main-demo/node_modules/bytebuffer/dist'
 @ ./node_modules/eosjs-ecc/lib/aes.js 5:17-38
 @ ./node_modules/eosjs-ecc/lib/api_common.js 3:10-26
 @ ./node_modules/eosjs-ecc/lib/index.js 3:16-39
 @ ./node_modules/sushitrain/index.js 11:0-49
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/formidable/lib/file.js 1:43-50
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/formidable/lib/incoming_form.js 7:11-28
 @ ./node_modules/formidable/lib/index.js 1:19-58
 @ ./node_modules/superagent/lib/node/index.js 8:19-40
 @ ./node_modules/node-mailjet/mailjet-client.js 41:16-37
 @ ./node_modules/node-mailjet/index.js 1:14-41
 @ ./node_modules/utilitas/index.js 15:13-36
 @ ./node_modules/sushitrain/index.js 6:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/formidable/lib/incoming_form.js 1:43-50
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/formidable/lib/index.js 1:19-58
 @ ./node_modules/superagent/lib/node/index.js 8:19-40
 @ ./node_modules/node-mailjet/mailjet-client.js 41:16-37
 @ ./node_modules/node-mailjet/index.js 1:14-41
 @ ./node_modules/utilitas/index.js 15:13-36
 @ ./node_modules/sushitrain/index.js 6:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/formidable/lib/json_parser.js 1:43-50
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/formidable/lib/incoming_form.js 11:17-52
 @ ./node_modules/formidable/lib/index.js 1:19-58
 @ ./node_modules/superagent/lib/node/index.js 8:19-40
 @ ./node_modules/node-mailjet/mailjet-client.js 41:16-37
 @ ./node_modules/node-mailjet/index.js 1:14-41
 @ ./node_modules/utilitas/index.js 15:13-36
 @ ./node_modules/sushitrain/index.js 6:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/formidable/lib/querystring_parser.js 1:43-50
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/formidable/lib/incoming_form.js 9:24-73
 @ ./node_modules/formidable/lib/index.js 1:19-58
 @ ./node_modules/superagent/lib/node/index.js 8:19-40
 @ ./node_modules/node-mailjet/mailjet-client.js 41:16-37
 @ ./node_modules/node-mailjet/index.js 1:14-41
 @ ./node_modules/utilitas/index.js 15:13-36
 @ ./node_modules/sushitrain/index.js 6:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/got/source/request-as-event-emitter.js 72:18-25
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/got/source/as-stream.js 4:30-67
 @ ./node_modules/got/source/create.js 3:17-39
 @ ./node_modules/got/source/index.js 3:15-34
 @ ./node_modules/public-ip/index.js 5:32-46
 @ ./node_modules/utilitas/index.js 19:14-34
 @ ./node_modules/sushitrain/index.js 6:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/keyv/src/index.js 18:14-40
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/cacheable-request/src/index.js 11:13-28
 @ ./node_modules/got/source/request-as-event-emitter.js 8:25-53
 @ ./node_modules/got/source/as-stream.js 4:30-67
 @ ./node_modules/got/source/create.js 3:17-39
 @ ./node_modules/got/source/index.js 3:15-34
 @ ./node_modules/public-ip/index.js 5:32-46
 @ ./node_modules/utilitas/index.js 19:14-34
 @ ./node_modules/sushitrain/index.js 6:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/mysql2/lib/helpers.js 28:16-45
Module not found: Error: Can't resolve 'cardinal' in '/Users/raimonfuns/projects/webpack-electron-main-demo/node_modules/mysql2/lib'
 @ ./node_modules/mysql2/lib/parsers/binary_parser.js 6:16-37
 @ ./node_modules/mysql2/lib/commands/execute.js 7:24-62
 @ ./node_modules/mysql2/lib/commands/index.js 8:16-39
 @ ./node_modules/mysql2/lib/connection.js 14:17-47
 @ ./node_modules/mysql2/index.js 5:19-49
 @ ./node_modules/mysql2/promise.js 3:13-34
 @ ./node_modules/utilitas/index.js 17:11-36
 @ ./node_modules/sushitrain/index.js 6:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/prs-atm/index.js 16:10-43
Critical dependency: the request of a dependency is an expression
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/sushitrain/index.js 23:10-43
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/utilitas/index.js 34:10-43
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/sushitrain/index.js 6:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/ws/lib/buffer-util.js 105:21-42
Module not found: Error: Can't resolve 'bufferutil' in '/Users/raimonfuns/projects/webpack-electron-main-demo/node_modules/ws/lib'
 @ ./node_modules/ws/lib/receiver.js 12:42-66
 @ ./node_modules/ws/index.js 7:21-46
 @ ./node_modules/sushitrain/index.js 14:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

WARNING in ./node_modules/ws/lib/validation.js 4:22-47
Module not found: Error: Can't resolve 'utf-8-validate' in '/Users/raimonfuns/projects/webpack-electron-main-demo/node_modules/ws/lib'
 @ ./node_modules/ws/lib/receiver.js 13:43-66
 @ ./node_modules/ws/index.js 7:21-46
 @ ./node_modules/sushitrain/index.js 14:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

ERROR in ./node_modules/pg/lib/native/client.js 4:13-33
Module not found: Error: Can't resolve 'pg-native' in '/Users/raimonfuns/projects/webpack-electron-main-demo/node_modules/pg/lib/native'
 @ ./node_modules/pg/lib/native/index.js 2:0-36
 @ ./node_modules/pg/lib/index.js 27:26-45 38:24-43
 @ ./node_modules/sushitrain/index.js 13:0-36
 @ ./node_modules/prs-atm/index.js 8:0-38
 @ ./prs-atm.js 1:15-33

webpack 5.11.1 compiled with 1 error and 13 warnings in 67762 ms
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
