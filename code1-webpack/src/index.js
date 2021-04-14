// 导入 jQuery
// 不推荐在 node 项目之外使用 commonJS 规范导入模块 （这是 Vue 项目）
// const $ = require('jquery')

// 使用 ES6 模块化语法，导入 jQuery，并使用 $ 来接收
import $ from 'jquery'

// 在 webpack 中，一切模块； 图片、JS、CSS、字体文件、模板文件
// You may need an appropriate loader to handle this file type.
// 翻译：你可能需要一个合适的第三方 loader 去处理这种文件类型
// 报错原因：webpack 默认只能打包处理 JS 文件，webpack 默认处理不了非 JS 后缀名的文件
// 如果 webpack 发现有些文件的后缀名不是 JS 结尾，则尝试从 webpack.config.js 配置文件中，查找有无合适的第三方 loader 来处理这种文件类型
import './css/1.css'
import './css/1.less'

// 默认情况下，如果导入的模块是路径，webpack 会优先去 node_modules 目录下查找给定的路径是否存在
import 'bootstrap/dist/css/bootstrap.min.css'

$(function(){
    $('li:odd').css('backgroundColor','green')
    $('li:even').css('backgroundColor','lightblue')
})

// 注意：webpack 默认只能打包处理一部分高级的 JS 语法，如果有些某些 JS 语法太过于高级，则 webpack 也是处理不了的
// 此时只能借助 babel 这个插件来打包处理高级的 JS 语法
class Person{
    // static 这个定义静态属性的高级语法，webpack 处理不了，会报错
    static userinfo = { name: 'pp',address: '普吉岛'}
}

// 默认导入
// 注意：默认导入的成员可以使用任何合法的名称来进行接收
// 按需导入的时候利用使用 as 关键字给到按需导入的成员起别名
import m1,{ test1 as pp,test2 } from "./js/01.ES6导入导出新语法.js"
 console.log(m1)
 console.log(pp)
 console.log(test2)

// 可以直接使用 import 导入某个模块并执行其中的代码，但不接受任何一个成员
import './js/02.直接导入不接收.js'
