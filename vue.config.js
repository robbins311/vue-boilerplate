const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        // 전역변수를 모아둔 파일 연결
        // ex: @import "@/assets/_varibled.scss" or prependData
        additionalData: `@import "@/assets/_variables.scss";`
      }
    }
  }
})

