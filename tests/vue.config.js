module.exports = {

  devServer: {

    proxy: {

      // 1. 对所有以  "/api"　开头的url 做处理

      '/api': {

        target: 'http://siwei.me',  // 3. 转发到 siwei.me上

        secure: true,

        changeOrigin: true,

        pathRewrite: {

          '^/api': '',  // 2. 把url中的　"/api" 去掉

        },

      }

    },

  },

}
