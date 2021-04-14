// 这是 webpack 的配置文件
// 注意：webpack 这个工具，就是基于 Node 开发出来的
/*
    只要运行了 npm run dev，就会立即运行 webpack 这个命令，
    webpack 这个工具会在项目根目录中查找 webpack.config.js 这个配置文件，
    然后读取配置文件中，向外导出配置对象，
    然后 webpack 根据配置对象，进行相关的打包操作；
*/

const path = require('path')

// 导入复制 index.html 页面的插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', //指定复制的模板
    filename: 'index.html' // 指定生成的文件的名称，这个复制出来的文件也是虚拟看不见的
})

// 导入解析 Vue 的插件
const VuePlugin = require('vue-loader/lib/plugin')
const vuePlugin = new VuePlugin()

// 使用 CommonJS 规范，向外暴露一个配置对象
// webpack 4.x 默认约定：把 src-> index.js 打包输出到 dist-> main.js
module.exports = {
    mode: 'development',  // 两个可选值 development（开发） 和 production（产品）
    
    /*  entry: path.join(__dirname,'./src/index1.js'),  // 指定打包哪个文件
        output:{
            // 指定输出文件相关的配置
            path: path.join(__dirname,'./dist'),  // 把打包好的文件，输出到哪个目录中
            filename: 'build.js'  // 指定输出文件的名称
        }
    */
   
   /*
   devServer:{ 
       port:9999, // webpack-dev-server 端口

   },
   */

   // webpack 要挂载的插件的数组
   plugins: [htmlPlugin,vuePlugin],
   module: {
    // 所有非 JS 文件的第三方模块，都需要在这里进行配置，才能够正常的被打包
    rules: [
        // 所有第三方文件模块的匹配规则
        // 注意：loader 的调用顺序是从后往前的
        { test: /\.css$/, use: ['style-loader','css-loader'] },
        { test: /\.less$/,use: ['style-loader','css-loader','less-loader'] },
        { test: /\.jpg|jpeg|png|gif|bmp|svg$/,use: 'url-loader?esModule=false' },
        { test: /\.eot|woff|woff2|ttf|svg$/,use: 'url-loader' },

        // 注意：在配置 babel-loader 的时候，一定要添加 exclude 排除项，把 node_modules 目录排除
        // 这样只让 babel-loader 转换 程序员 自己手写的 JS 代码；
        // 好处：1. 能够提高编译的转换效率；2. 能够防止不必要的报错！
        { test: /\.js$/,use: 'babel-loader',exclude: /node_modules/ },
        { test: /\.vue$/,use: 'vue-loader' },
    ]
   }
}

// 注意：webpack-dev-server 会把打包好的文件输出到项目根目录中存放，且是以隐藏的文件而存在的；
// 注意：html-webpack-plugin 插件除了有复制文件的能力，还会把自动打包好的文件注入到复制出来的页面底部；