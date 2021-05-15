// 作业

// 内容：实现一个简单的函数，通过 www.baidu.com。 去获取内容
// 迷渡 github: ...

// www -> proxy
// www.baidu -> proxy
// www.baidu.com -> proxy
// www.baidu.com.then -> resolve(response)
const www = new Proxy(new URL('https://www'), {
  get: function get (target, key) {
    let original = Reflect.get(target, key);

    // 其他的判断条件
    // ...
    
    // 终止条件
    if (key == 'then') {
      // target -> URL
      return Promise.prototype.then.bind(fetch(target))
    }

    target = new URL(target)
    target.hostname += `.${key}`
    return new Proxy(target, { get })
  }
})
