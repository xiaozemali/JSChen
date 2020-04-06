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
Function
```


## call 模拟实现
## bind 模拟实现


## 相关链接

[《JavaScript深入之call和apply的模拟实现 #11》](https://github.com/mqyqingfeng/Blog/issues/11)