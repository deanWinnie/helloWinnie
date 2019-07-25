const path = require('path')
// 启用热更新的 第2步
const webpack = require('webpack')
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
  // 大家已经学会了举一反4， 大家觉得，在配置文件中，需要手动指定 入口 和 出口
  entry: path.join(__dirname, './src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件
  output: { // 输出文件相关的配置
    path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件的名称
  },
  devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
    //  --open --port 3000 --contentBase src --hot
    open: true, // 自动打开浏览器
    port: 3000, // 设置启动时候的运行端口
    contentBase:  'src', // 指定托管的根目录
    hot: true // 启用热更新 的 第1步
  },
  plugins: [ // 配置插件的节点
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:"index.html"
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {test:/\.css$/,use:["style-loader",'css-loader']},
      {test:/\.scss$/,use:["style-loader",'css-loader','sass-loader']},
      {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
      { test: /\.vue$/, use: 'vue-loader' },
    ]
  }
}