(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{218:function(t,a,s){"use strict";s.r(a);var n=s(28),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"apply-call-bind-模拟实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-call-bind-模拟实现"}},[t._v("#")]),t._v(" apply call bind 模拟实现")]),t._v(" "),s("h2",{attrs:{id:"apply-模拟实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-模拟实现"}},[t._v("#")]),t._v(" apply 模拟实现")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ccc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSChen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("我的")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("，今天")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("岁")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSChen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"首先，整理下我们需要实现的细节哈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首先，整理下我们需要实现的细节哈"}},[t._v("#")]),t._v(" 首先，整理下我们需要实现的细节哈")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("属于函数的静态方法")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("传入两个参数 新的this \\ 原函数需要的参数（以数组的形式）")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("改变函数，让函数的 this 指向 传入的this")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("返回函数的执行结果")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-属于函数的静态方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-属于函数的静态方法"}},[t._v("#")]),t._v(" 1. 属于函数的静态方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Function\n")])])]),s("h2",{attrs:{id:"call-模拟实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#call-模拟实现"}},[t._v("#")]),t._v(" call 模拟实现")]),t._v(" "),s("h2",{attrs:{id:"bind-模拟实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bind-模拟实现"}},[t._v("#")]),t._v(" bind 模拟实现")]),t._v(" "),s("h2",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/11",target:"_blank",rel:"noopener noreferrer"}},[t._v("《JavaScript深入之call和apply的模拟实现 #11》"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);