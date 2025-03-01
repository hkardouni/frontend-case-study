const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          products: 'products@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          basket: 'basket@http://localhost:3002/remoteEntry.js',
        },
        exposes: {},
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
    return config;
  },
};