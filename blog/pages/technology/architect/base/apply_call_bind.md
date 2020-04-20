# apply call bind 模拟实现

## apply 模拟实现

```js
var obj = {
  name: "ccc",
}
function JSChen (age){
  console.log(`我的${this.name}，今天${age}岁`)
}
JSChen.apply(obj,[18])
```

### 首先，整理下我们需要实现的细节哈

- 1. 属于函数的静态方法

- 2. 传入两个参数 新的this \ 原函数需要的参数（以数组的形式）

- 3. 改变函数，让函数的 this 指向 传入的this

- 4. 返回函数的执行结果

### 1. 属于函数的静态方法

```js
Function.prototype.jschenApply = function (context,arr){
  context = context || window
  context._fn = this
  let args = []
  for(let i = 0; i < arr.length; i += 1) {
    args.push('arr[' + i + ']')
  }
  let result = eval('context._fn(' + args + ')')
  delete context._fn
  return result
}

// 测试用例
var obj = {name: 'jsChen'};
function test(a,b,c){
  console.log(a,b,c,this)
}
test.jschenApply(obj,[1,2,3])
// 1,2,3,{name: 'jsChen'}
```

测试用例

```js

```

## call 模拟实现

```js
Function.prototype.jschenCall = function(context){
  context = context || window
  context._fn = this
  let args = []
  for(let i = 1; i < arguments.length; i += 1) {
    args.push('arguments[' + i + ']')
  }
  let result = eval('context._fn(' + args + ')')
  delete context._fn
  return result
}
```

## bind 模拟实现


## 相关链接

[《JavaScript深入之call和apply的模拟实现 #11》](https://github.com/mqyqingfeng/Blog/issues/11)