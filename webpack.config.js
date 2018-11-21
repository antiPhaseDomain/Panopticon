const path = require('path')
require('@babel/polyfill')

const project = 'truffula';

module.exports = () => {
  return {
    mode: "production",
    entry: ['@babel/polyfill', `./${project}/assets/scripts/legacy.js` ],
    output: {
        path: path.resolve(__dirname, `./${project}/assets/scripts/legacy`), 
        filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }
};
  