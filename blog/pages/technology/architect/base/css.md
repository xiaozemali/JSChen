# css 基础篇

## 盒模型

## 选择器

## 定位/浮动

## flex/grid

## BEM 命名规范

Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论。

## 全局过滤

```html
<style>
html{
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
-webkit-filter: grayscale(100%);
}
</style>
```

## 渐变画三角

<style>
#grad1 {
    height: 200px;
	width:50px;
    background-color: red; /* 不支持线性的时候显示 */
    background:
        linear-gradient(135deg, transparent 17px, pink 0) left top,
        linear-gradient(-135deg, transparent 17px, pink 0) right top,
        linear-gradient(-45deg, transparent 17px, pink 0) right bottom,
        linear-gradient(45deg, transparent 17px, pink 0) left bottom;
background-size: 50% 50%;
background-repeat: no-repeat;
}
</style>
<div id="grad1"></div>

```html
<style>
#grad1 {
    height: 200px;
	width:50px;
    background-color: red; /* 不支持线性的时候显示 */
    background:
        linear-gradient(135deg, transparent 17px, pink 0) left top,
        linear-gradient(-135deg, transparent 17px, pink 0) right top,
        linear-gradient(-45deg, transparent 17px, pink 0) right bottom,
        linear-gradient(45deg, transparent 17px, pink 0) left bottom;
background-size: 50% 50%;
background-repeat: no-repeat;
}
</style>
<div id="grad1"></div>
```
