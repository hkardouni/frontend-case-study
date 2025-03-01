const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.output.publicPath = 'http://localhost:3001/_next/';
      config.plugins.push(
        new NextFederationPlugin({
          name: 'products',
          filename: 'static/chunks/remoteEntry.js', // مسیر مشخص برای سِرو
          exposes: {
            './ProductList': './components/ProductList',
          },
          remotes: {},
          shared: {
            react: {
              singleton: true,
              eager: true,
              requiredVersion: '18'
            },
            'react-dom': {
              singleton: true,
              eager: true,
              requiredVersion: '18'
            },
          },
          extraOptions: {
            enableImageLoaderFix: true,
            enableUrlLoaderFix: true,
          },
        })
      );
    }
    return config;
  },
};