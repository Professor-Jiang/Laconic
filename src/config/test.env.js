//测试环境配置
'use strict'
// 配置文件合并模块
const merge = require('webpack-merge')
// 导入 dev.env.js 配置文件
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    // 导出一个对象，NODE_ENV 是一个环境变量，指定 testing 环境
    NODE_ENV: '"testing"'
})
