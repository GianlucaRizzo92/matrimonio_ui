module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://matrimonio-next.vercel.app/api/form',
        changeOrigin: true
      }
    }
  }
};
