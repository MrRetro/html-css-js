/**
 * @author caijianjia
 * @date 2020-12-21 10:13
 */


const MAXLEN = 6 // 最大值

/**
 * 输入框最多只能输入n个字符
 * */
function inputMax(){
    let e = [].shift.call(arguments)
    if(e.target.value.length >= MAXLEN){
        e.target.value = e.target.value.slice(0,MAXLEN)
    }
}

const input = document.getElementById('input')
input.addEventListener('input', inputMax , false)
