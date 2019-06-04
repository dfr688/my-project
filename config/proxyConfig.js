module.exports = {
  proxy: {
    '/api': {
      target: 'http://211.149.225.239:6666/qianqian',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': '/'
      }
    }
  }
}