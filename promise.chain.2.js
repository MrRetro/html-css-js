function promiseCreator() {
  return new Promise(resolve=>{
    console.log(1)
    setTimeout(resolve, 1000);
  })
}

function promiseCreator2() {
  return new Promise(resolve=>{
    console.log(2)
    setTimeout(resolve, 2000);
  })
}

const promiseCreatorList = [
  promiseCreator,
  promiseCreator2,
];

let promise = new Promise(resolve=>{
  resolve()
})
// 解法一
Promise.chain = arr =>{
  let first = promise
  for(let item of arr){
    (item =>{
      first = first.then(resolve=>item(resolve=>resolve()))
    })(item)
  }
}
// Promise.chain(promiseCreatorList)

// 解法二
// Promise.chainAsync = arr =>{
//   for(let item of arr){
//     await item()
//   }
// }
// Promise.chainAsync(promiseCreatorList)

