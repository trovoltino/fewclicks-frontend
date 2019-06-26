module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5555'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
        `
      }
    }
  }
};