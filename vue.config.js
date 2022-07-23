const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置浏览器自动打开的端口
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
  },
  // 关闭eslint 校验工具
  lintOnSave: false
})
