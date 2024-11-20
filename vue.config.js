module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  devServer: {
    port: 8080, // Specify your preferred port
    open: true, // Automatically open the browser on server start
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
      },
    },
  },
};

