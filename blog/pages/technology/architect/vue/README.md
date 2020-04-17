# vue

## 深入响应式

vue 深入响应式的解决方案采用的式 es6 语法提供的 Object.defineProperty 函数

::: tip 用法
`Object.definedProperty(obj, prop, descriptor)` 给对象定义属性
:::

来一个 mdn 的表，方便记忆

||configurable|	enumerable|	value|	writable|	get|	set|
|--|--|--|--|--|--|--|
|数据描述符| 可以| 可以| 可以| 可以| 不可以| 不可以|
|存取描述符| 可以| 可以| 不可以| 不可以| 可以| 可以|


### 模拟一个 vue 响应式
```js
// 创建一个dom
var div = document.createElement('div')
div.id = 'ccc'
div.innerText = '我是陈程城'
div.style.background = 'red'
document.body.appendChild(div)

var app = {
  data:{
    show:false
  },
  methods:{
    onUserClick(){
      this.show = true
    }
  }
}


// 初始化一下
// 搞个观察者
Object.defineProperty(
  app,
  'show',
  {
    configurable:true,
    enumerable:true,
    get(){
      return this.data.show
    },
    set(val){
      console.log('我监听到有人要改我了，我可以去改下视图了')
      div.style.display = val?'unset':'none';
      this.data.show = val;
    }
  }
)
app.show = app.data.show



// 当用户触发了 onUserClick
app.methods.onUserClick.apply(app)
```

### 检查变化

这里要注意的是什么，这里引入官方文档一句话哈

::: warning 废弃
[Vue.js](https://cn.vuejs.org/v2/guide/reactivity.html)

受现代 `JavaScript` 的限制 (而且 Object.observe 也已经被废弃)，Vue 无法检测到对象属性的添加或删除。
:::

讲的是什么呢

如果没有事先（开发中）在 `data` 中定义需要做响应式的数据，那么，页面初始化后再去给 `data` 添加新的属性，这些新添加到 `data` 上的属性是无法监听到的，因为 `js` 的这个方法 `Object.observe` 已经废弃了，当然 `vue` 是有提供一个特有的 `api` 去实现这个功能


## 路由

三种

- hash
- history
- abstract

### hash

- hash 其实就是锚点，跳转到锚点指定的位置而不会真的跳转页面

- 通过监听 hashchange 做页面更换处理

### history

- 利用 html5 history 维护一个页面栈

- 路由跳转实际上并不是真的跳转页面，需要在服务端配置重定向

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="jschen"></div>
  <ul>
    <li href="/cc1">ccc1</li>
    <li href="/cc2">ccc2</li>
    <li href="/cc3">ccc3</li>
  </ul>
</body>
<script>
  class Router {
    constructor(){
      this.router = {}
    }
    push(url,query){
      history.pushState({query},'title_cc1',url)
      this.router[url] && this.router[url]()
    }
    replace(url,query){
      history.replaceState({query,},'title_cc1',url)
      this.router[url] && this.router[url]()
    }
    init(...val){
      this.replace(...val)
    }
    setConfig(optionList){
      optionList.forEach(pageOption => {
        this.router[pageOption.router] = pageOption.cb // 这个cb就是用来切换页面的 
      });
    }
  }
  let router = new Router()
  router.setConfig([
    {
      router:'/html.html',
      cb:() => {console.log('加载主页')}
    },
    {
      router:'/cc1',
      cb:() => {console.log('加载cc1')}
    },
    {
      router:'/cc2',
      cb:() => {console.log('加载cc2')}
    },
    {
      router:'/cc3',
      cb:() => {console.log('加载cc3')}
    }
  ])
  router.init(location.pathname,{name:'我是主页'}) // 这里很重要哈，因为history模式下跳转的页面实际上是不存在的，如果用户在其他路由下刷新页面那么nginx接到的请求页面是找不到的，所以这里需要在nginx配置重定向
  document.querySelector('ul').addEventListener('click',(e) => {
    console.log(e,'e');
    e.preventDefault()
    console.log(e.target.getAttribute('href'));
    
    router.push(e.target.getAttribute('href'),{name:'asdf'})
  })
</script>
</html>
```


### abstract

这个是在 node.js 跑的
