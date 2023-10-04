module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/form',
        changeOrigin: true
      }
    }
  }
};
