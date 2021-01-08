const path = require('path');

module.exports = {

  mode: 'production',

  target: 'electron-main',

  entry: './prs-atm.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'prs-atm.output.js',
  },

  resolve: {
    extensions: [".js", ".json", ".node"]
  },

  node: {
    __dirname: false,
    __filename: false,
  },
};
