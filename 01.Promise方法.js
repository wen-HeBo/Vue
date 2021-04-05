// 1.Promise是构造函数1
// 2.Promise.prototype上有.then() .catch()
// 3.Promise表示异步操作

// 表示一个【形式上的】异步操作
// const p = new Promise()  


// 创建具体的异步操作
// const p = new Promise(function(){
//     // 在这个 function 中可以执行具体的异步操作
// })

// 封装 Prmise 方法 今后只需调用别人封装好的库，如axios
// 只要 new 了 Promise，而它所代表的异步操作会立即执行
// 在外封装一个函数，执行函数才会执行异步操作 ，这样才会按需执行
function getContentByPath(params) {
    return new Promise(function(successCb,errorCb){
        // ...
        // return successCb(s)
        // return errorCb(e)
    })
}

// Promise.prototype.then() 方法的作用就是为 Promise 实例对象指定成功和失败的回调函数
// .then() 第一个参数永远都是成功的回调函数（不可省略），第二个是失败的回调函数可省略
getContentByPath("path").then(
    function(data){
        /* 成功的回调函数*/
        console.log("成功" + data);
    },
    function(error){
        /* 失败的回调函数*/
        console.log("失败" + error);
    })

// 嵌套使用方法
// 通过 .cath() 方法捕获 .then() 中发生的错误，集中处理
getContentByPath("path1")
    .then(function(data){
        /* 成功的回调函数*/
        console.log("成功" + data);
        return getContentByPath("path2")
    })
    .then(function(data){
        // path2 的 Promise 实例对象
        console.log("成功" + data);
    })
    .catch(function(error){
        /* 失败的回调函数*/
        console.log("失败" + error);
    })



