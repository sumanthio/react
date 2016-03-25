module.exports = {
  context : __dirname + "/app",
  entry : {
    javascript: "./app.js",
    html: "./index.html",
  },
  output : {
    filename : "bundle.js",
    path : __dirname + "/dist"
  },
  module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loaders: ['babel-loader']
     },
     {
       test: /\.jsx$/,
       loaders: ['babel-loader']
     },
     {
       test: /\.html$/,
       loader: "file?name=[name].[ext]"
     }
   ]
 }
}
