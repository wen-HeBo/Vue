function getContentByPath(params) {
    return new Promise(function(successCb,errorCb){
        // ...
        // return successCb(s)
        // return errorCb(e)
    })
}

// 如果某个方法内部用到了 await 关键字，那么这个方法必须修饰为 async 异步方法
// await 只能用在被 async 修饰的方法中，await 虽然是异步执行但还是按照代码顺序
async function test() {
    // 如果 某个方法的返回值是 Promise 实例对象，那么就可以用 await 关键字修饰 Promise 实例
    const data1 = await getContentByPath("path1").catch(err => err)
    if(data1 instanceof Error){
        // 判断 data1 是否为 Error 类型，是否读取失败
    }
    const data2 = await getContentByPath("path2")
    const data3 = await getContentByPath("path3")
}

// test() 是异步方法
// 但在 异步方法中，遇到第一个 await 之前，所有代码都是同步执行 