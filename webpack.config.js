module.exports = {
  devtool: 'source-map',
  context : __dirname + "/app",
  entry : {
    javascript: "./app.js",
    html: "./index.html",
  },
  output : {
    filename : "bundle.js",
    path : __dirname + "/dist"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
   loaders: [
     {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'react-hot!babel'
      },
     {
       test: /\.html$/,
       loader: "file?name=[name].[ext]"
     }
   ]
 }
}
