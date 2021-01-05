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

Promise.chain = arr => {
  arr.reduce((first, second)=>first.then(second), Promise.resolve())
}
// Promise.chain(promiseCreatorList)

