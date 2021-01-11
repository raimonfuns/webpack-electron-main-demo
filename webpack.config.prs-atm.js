const path = require('path');

module.exports = {

  mode: 'production',

  target: [
    'electron12-main',
  ],

  entry: './prs-atm.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'prs-atm.output.js',
  },

  resolve: {
    extensions: ['.js', '.json', '.node'],
    alias: {
      '@sentry/node': false,
      'fast-geoip': false,
      'ioredis': false,
      'mailgun-js': false,
      'mysql2/promise': false,
      'node-mailjet': false,
      'pg': false,
      'public-ip': false,
      'telesignsdk': false,
      'twilio': false,
      'winston-papertrail-mproved': false,
      'winston': false,
      'encoding': false,
    }
  },

  externals: [
    /memcpy/, // eosjs-ecc
    /pg-native/, // qg
    /cardinal/, // mysql
    /bufferutil/, // ws
    /utf-8-validate/, // ws
    {got: 'commonjs got' }, // public-ip
  ],

  ignoreWarnings: [

  ],

  node: {
    __dirname: false,
    __filename: false,
  },

};
