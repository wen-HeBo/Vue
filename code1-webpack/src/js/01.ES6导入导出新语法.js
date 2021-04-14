// 在 webpack 中，每个js 文件都是独立的模块
// 在每个模块中，都有独立的作用域
// 其他模块默认无法直接访问当前模块中定义的成员
let a = 10;
let b = 20;

// 这个 export default{} 语法叫做默认导出
// 在一个模块中。只允许默认导出一次
export default{
    a,
    b,
    say(){
        console.log('OK')
    }
}

// 在一个模块中，可以使用按需到处和默认导出
// 在一个模块中，可以多次按需导出
export let test1 = 'ppKritt'
export let test2 = 'billkin'
