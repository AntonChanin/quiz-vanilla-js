const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPageNames = [
  'quiz-step-1',
  'quiz-step-2',
  'quiz-step-3',
  'quiz-step-4',
  'quiz-step-5',
  'quiz-step-6',
  'quiz-step-7',
  'quiz-step-8',
  'quiz-step-9',
];
const multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`,
    filename: `${name}.html`,
    chunks: ['bundle.js']
  })
});

module.exports = {
 "mode": "none",
 "entry": "./src/index.js",
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
 devtool: 'eval-cheap-module-source-map',
 devServer: {
  static: {
    directory: path.join(__dirname, 'dist')
  },
  port: 9000,
 },
 "module": {
   "rules": [
     {
       "test": /\.css$/,
       "use": [
         "style-loader",
         "css-loader"
       ]
     },
     {
       "test": /\.js$/,
       "exclude": /node_modules/,
       "use": {
         "loader": "babel-loader",
         "options": {
           "presets": [
             "@babel/preset-env",
           ]
         }
       }
     },
   ]
 },
 plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    chunks: ['main']
  })
].concat(multipleHtmlPlugins)
};