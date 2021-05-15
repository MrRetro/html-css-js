// const { reactive, effect } = require('@vue/reactivity')
import { reactive, effectWatch } from './core/reactivity/index.js'
// 响应式

// let a = 10

// let b = a + 1000

// console.log(a, b);

// 如果 a 的值变更
// a = 50

// 同样，想知道 b 的值

// b = a + 1000

// console.log(a, b);


// 诉求，自动化的？也就是只要 a 的值发生了变化，那么 b 的值？应该是自动更新的。
// effect 

// 1. 封装，最简单的封装是 effect 函数
// 硬代码
// function update() {
//   b = a + 1000;
// }

// a = 1000;
// update()
// console.log('------- function -------')
// console.log(a, b)


// 自动
// vue3 reactive ref ... observer

let age
const xiaoming = reactive({ age: 18 })

// 先执行一次
// todo 这里替换成了我们新写的方法
effectWatch(
  // 如下就是一个 effect，
  // 依赖了/使用了 我们监测的属性/值 
  // 'age'
  () => {
    console.log('过了一年之后...')
    age = xiaoming.age + 1; // 👈
    console.log('小明现在 ' + age +' 岁了。')
  }
)

// 当监测到 age 这个属性对应的值发生了变更的时候，执行一次
xiaoming.age = 19


// 响应式的核心原理和最简单的实现版本
// ref - 基本类型  0
// reactive - 对象  { age: 18 }
// effect - 暴露出来给用户定义副作用的
