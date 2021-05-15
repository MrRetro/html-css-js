function ajax(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        // console.log(xhr.readyState) 
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                //状态码 200代表请求成功。一般用于GET与POST请求
                //404代表没有找到页面
                console.log(xhr.response)
            }
        }
        arr = []
    }
    xhr.open('get',`http://www.${arr.join('.')}`)
    xhr.send()
}
var arr = []
var fn = null
var handle = {
    get: (target, key, receive) => {
        if(!target[key]) Reflect.set(target, `${key}`, {})
        console.log('222==>',target, JSON.stringify(target), handle.aa)
        arr.push(Object.keys(target)[0])
        clearTimeout(fn)
        fn = setTimeout(()=>{
            // 去执行请求
            ajax()
        })
        return new Proxy(target[key], handle)
    },
    apply(){

    }
}
var www = new Proxy({}, handle)
