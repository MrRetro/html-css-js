/**
 * @author caijianjia
 * @date 2020-12-21 10:41
 */

// 功能：使用ajax获取进度条
// 1.实例一个ajax
// 2.监听ajax完成状态
// 3.监听ajax进度
// 4.打开一个ajax请求
// 5.向服务端发出这个ajax请求并带参数

let xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log('请求完成')
    }
}

xhr.onprogress = function(e){
    console.log(`打包进度==>${(e.loaded / e.total * 100).toFixed(2)}%`)
}

xhr.open('post','http://mock.o-wu.com/mock/5d9d84d2b007b76b19aaf64a/api/demo', true)

xhr.send(JSON.stringify({a:1}))
