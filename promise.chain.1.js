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

Promise.chain = arr =>{
  arr.reduce((first, second)=>{
    return first.then(resolve=>second(resolve=>resolve()))
  }, promise)
}
// Promise.chain(promiseCreatorList)

