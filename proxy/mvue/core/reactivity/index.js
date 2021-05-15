// 依赖收集
// 什么是依赖？怎么收集？

// Dep 的作用？
// 为什么要这么设计？？

// reactive(AObject) -> 监听/测 Aobject/基本类型 -> 
// 变化 -> 副作用（处理/使用到了这些变化）使用方定义的 【收集】-> 触发通知 -> 副作用执行
let currentEffect;

// 1. 收集依赖  2. 触发通知
class Dep {
  constructor(val) {
    // 收集依赖的容器
    this.effects = new Set()
    this.__val = val;
  }

  // 这不是 Dep 干的事情，只是模拟一下 ref
  get value() {
    this.depend()
    return this.__val
  }

  set value(newVal) {
    if (this.__val !== newVal) {
      this.__val = newVal

      // 当你触发了 set 的时候，去通知触发执行
      this.notify()
    }
  }

  // 收集依赖
  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect)
    }
  }
  // 触发通知
  notify() {
    this.effects.forEach(effect => effect())
  }
}

// effect - 副作用
// export
function effectWatch(effect) {
  currentEffect = effect
  effect()
  currentEffect = null
}

// effectWatch(/* 业务逻辑 */)

// ref
// vue3 ref -> 监听基本类型的，比如 number
// ref 的使用方式
// const testRef = ref(0)
// testRef.value <- get /set
let dep = new Dep(10);
let age
effectWatch(
  // 收集的是这个函数
  () => {
    age = dep.value + 10;
    console.log('effect 执行了，输出了： ', age);
  }
)

dep.value = 20;

// reactive or ref
// reactive({}) <- 对象
// Proxy vs defineProperty

// 对象，对象 -> keys -> key -> dep??
// {age: 20, name: 'tom', email: '123@qq.com'}
// age ✅ -> dep
// name ✅ -> dep
// email ✅ -> dep
// 整个这个关系，我们需要一个数据结构来存储

const targetMap = new Map();

// 数据结构
// Map<target, DepsMap>
//  - DepsMap<key, dep>
function getDep(target, key) {
  // 和 target 绑定
  let depsMap = targetMap.get(target);
  // deps -> dep -> dep.xx
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  // 和 key 绑定
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }

  return dep;
}

// export 
function reactive(target) {
  // 代理了这个对象，不用去递归
  return new Proxy(target, {
    get(target, key) {
      const dep = getDep(target, key);
      // 依赖收集
      dep.depend()
      // 等价  return targe[key]
      return Reflect.get(target, key); // 官方推荐
    },

    set(target, key, value) {
      const dep = getDep(target, key);
      const result = Reflect.set(target, key, value);
      // 放在 Reflect.set 之后
      // 值更新之后，才去通知
      dep.notify();
      return result;
    }
  })
}

const xiaohong = reactive({ age: 16, name: '小红' })

let _age;

effectWatch(() => {
  console.log('--------- reactive 实现 -----------')
  _age = xiaohong.age + 2
  console.log('哈哈哈哈哈哈，小红长大了 ', _age)
})

effectWatch(() => {
  console.log('测试 name 也是响应式改变的')
  xiaohong.name
})

// xiaohong.age = 18;
xiaohong.name = 'xiaohonghua';