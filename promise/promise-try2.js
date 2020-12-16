/**
 * @author caijianjia
 * @date 2020-12-15 10:39
 */
let race1 = new Promise((resolve)=>{setTimeout(()=>{console.log(1)},500)})
let race2 = new Promise((resolve)=>{setTimeout(()=>{console.log(2)},1000)})
Promise.race([race1, race2])
