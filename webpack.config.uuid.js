const path = require('path');

module.exports = {

  mode: 'production',

  target: 'electron-main',

  entry: './uuid.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'uuid.output.js',
  },

  resolve: {
    extensions: [".js", ".json", ".node"]
  },

  node: {
    __dirname: false,
    __filename: false,
  },
};
