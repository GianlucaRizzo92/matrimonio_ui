module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://matrimonio-omega.vercel.app',
        changeOrigin: true
      }
    }
  }
};
