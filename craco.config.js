const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);
module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@layouts': resolvePath('./src/layouts'),
      '@scss': resolvePath('./src/scss'),
      '@redux': resolvePath('./src/redux'),
      '@pages': resolvePath('./src/pages'),
    },
  },
};
