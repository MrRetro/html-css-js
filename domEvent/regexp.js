/**
 * @author caijianjia
 * @date 2020-12-21 11:27
 */

// 使用正则过滤出window.location.search所有的key和value
function getUrl2Object({url}){
    let obj = {}
    let reg = /[^?&]+=[^?&]+/g
    for(let item of url.match(reg)){
        obj[item.split('=')[0]] = item.split('=')[1]
    }
    return obj
}

getUrl2Object({url: 'https://www.o-wu.com?a=1&b=2&c=3'})

// meitu面试题
// 参数 obj = {a: 1, b: 2}
// 参数 temp = 'this is a = {{ a }}, b = {{ b }}'
// 输出 'this is a = 1, b = 2'
function replace(temp, obj){
    return temp.replace(/{{\s*(\w+)\s*}}/g, function(match, $1) {
        return obj[$1];
    })
}
