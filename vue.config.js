module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://matrimonio-next.vercel.app/',
        changeOrigin: true
      }
    }
  }
};
