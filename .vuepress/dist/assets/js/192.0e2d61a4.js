(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{512:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_19-4-用户界面：web-服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-4-用户界面：web-服务端"}},[t._v("#")]),t._v(" 19.4 用户界面：web 服务端")]),t._v(" "),a("p",[t._v("（本节代码见 "),a("a",{attrs:{href:"examples/chapter_19/goto_v1/main.go"}},[t._v("goto_v1/main.go")]),t._v("。）")]),t._v(" "),a("p",[t._v("我们尚未编写启动程序的必要函数。它们（总是）类似 C，C++ 或 Java 中的 "),a("code",[t._v("main()")]),t._v(" 函数，我们的 web 服务器由它启动，例如用如下命令在本地 8080 端口启动 web 服务器：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListenAndServe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("（web 服务器的功能来自于 "),a("code",[t._v("http")]),t._v(" 包，"),a("RouterLink",{attrs:{to:"/15.0.html"}},[t._v("15 章")]),t._v(" 做了深入介绍）。web 服务器会在一个无限循环中监听到来的请求，但我们必须定义针对这些请求，服务器该如何响应。可以用被称为 HTTP 处理器的 "),a("code",[t._v("HandleFunc")]),t._v(" 函数来办到，例如代码：")],1),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如此，每个以 "),a("code",[t._v("/add")]),t._v(" 结尾的请求都会调用 "),a("code",[t._v("Add")]),t._v(" 函数（尚未完成）。")]),t._v(" "),a("p",[t._v("程序有两个 HTTP 处理器：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Redirect")]),t._v("，用于对短 URL 重定向")]),t._v(" "),a("li",[a("code",[t._v("Add")]),t._v("，用于处理新提交的 URL")])]),t._v(" "),a("p",[t._v("示意图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/19.4_fig19.1.jpg?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("最简单的 "),a("code",[t._v("main()")]),t._v(" 函数类似这样：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\thttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\thttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\thttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListenAndServe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("对 "),a("code",[t._v("/add")]),t._v(" 的请求由 "),a("code",[t._v("Add")]),t._v(" 处理器处理，所有其他请求会被 "),a("code",[t._v("Redirect")]),t._v(" 处理器处理。处理函数从到来的请求（一个类型为 "),a("code",[t._v("*http.Request")]),t._v(" 的变量）中获取信息，然后产生响应并写入 "),a("code",[t._v("http.ResponseWriter")]),t._v(" 类型变量 "),a("code",[t._v("w")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("Add")]),t._v(" 函数必须做的事有：")]),t._v(" "),a("ol",[a("li",[t._v("读取长 URL，即：用 "),a("code",[t._v('r.FormValue("url")')]),t._v(" 从 HTML 表单提交的 HTTP 请求中读取 URL")]),t._v(" "),a("li",[t._v("使用 store 上的 "),a("code",[t._v("Put")]),t._v(" 方法存储长 URL")]),t._v(" "),a("li",[t._v("将对应的短 URL 发送给用户")])]),t._v(" "),a("p",[t._v("每个需求都转化为一行代码：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\turl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FormValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/%s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这里 "),a("code",[t._v("fmt")]),t._v(" 包的 "),a("code",[t._v("Fprintf")]),t._v(" 函数用来替换字符串中的关键字 "),a("code",[t._v("%s")]),t._v("，然后将结果作为响应发送回客户端。注意 "),a("code",[t._v("Fprintf")]),t._v(" 把数据写到了 "),a("code",[t._v("ResponseWriter")]),t._v(" 中，其实 "),a("code",[t._v("Fprintf")]),t._v(" 可以将数据写到任何实现了 "),a("code",[t._v("io.Writer")]),t._v(" 的数据结构，即该结构实现了 "),a("code",[t._v("Write")]),t._v(" 方法。Go 中 "),a("code",[t._v("io.Writer")]),t._v(" 称为接口，可见 "),a("code",[t._v("Fprintf")]),t._v(" 利用接口变得十分通用，可以对很多不同的类型写入数据。Go 中接口的使用十分普遍，它使代码更通用（见 "),a("RouterLink",{attrs:{to:"/11.0.html"}},[t._v("11 章")]),t._v("）。")],1),t._v(" "),a("p",[t._v("还需要一个表单，仍然可以用 "),a("code",[t._v("Fprintf")]),t._v(" 来输出，这次将常量写入 "),a("code",[t._v("w")]),t._v("。让我们来修改 "),a("code",[t._v("Add")]),t._v("，当未指定 URL 时显示 HTML 表单：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\turl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FormValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fprint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AddForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/%s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" AddForm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`\n<form method="POST" action="/add">\nURL: <input type="text" name="url">\n<input type="submit" value="Add">\n</form>\n`')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("在那种情况下，发送字符串常量 "),a("code",[t._v("AddForm")]),t._v(" 到客户端，它是 html 表单，包含一个 "),a("code",[t._v("url")]),t._v(" 输入域和一个提交按钮，点击后发送 POST 请求到 "),a("code",[t._v("/add")]),t._v("。这样 "),a("code",[t._v("Add")]),t._v(" 处理函数被再次调用，此时 "),a("code",[t._v("url")]),t._v(" 的值来自文本域。（"),a("code",[t._v("``")]),t._v(" 用来创建原始字符串，否则按惯例 "),a("code",[t._v('""')]),t._v(" 将成为字符串边界。）")]),t._v(" "),a("p",[a("code",[t._v("Redirect")]),t._v(" 函数在 HTTP 请求路径中找到键（短 URL 的键是请求路径去除首字符，在 Go 中可以写为 "),a("code",[t._v("[1:]")]),t._v('。例如请求 "/abc"，键就是 "abc"），用 '),a("code",[t._v("Get")]),t._v(" 函数从 "),a("code",[t._v("store")]),t._v(' 检索到对应的长 URL，对用户发送 HTTP 重定向。如果没找到 URL，发送 404 "Not Found" 错误取而代之：')]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("URL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\turl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\thttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NotFound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\thttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StatusFound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("（"),a("code",[t._v("http.NotFound")]),t._v(" 和 "),a("code",[t._v("http.Redirect")]),t._v(" 是发送通用 HTTP 响应的工具函数。）")]),t._v(" "),a("p",[t._v("我们已经完整地遍历了 "),a("a",{attrs:{href:"examples/chapter_19/goto_v1"}},[t._v("goto_v1")]),t._v(" 的代码。")]),t._v(" "),a("h2",{attrs:{id:"编译和运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译和运行"}},[t._v("#")]),t._v(" 编译和运行")]),t._v(" "),a("p",[t._v("可执行程序已包含在示例代码下，如果你想立即测试可以跳过本节。其中包含 3 个 go 源文件和一个 Makefile 文件，通过它应用可以被编译和链接，只须如下操作：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Linux 和 OSX 平台：")]),t._v(" 在终端窗口源码目录下启动 "),a("code",[t._v("make")]),t._v(" 命令，或在 LiteIDE 中构建项目。")]),t._v(" "),a("li",[a("strong",[t._v("Windows 平台：")]),t._v(" 启动 MINGW 环境，步骤为：开始菜单，所有程序，MinGW，MinGW Shell（见 "),a("RouterLink",{attrs:{to:"/02.5.html"}},[t._v("2.5.5 节")]),t._v("），在命令行窗口输入 "),a("code",[t._v("make")]),t._v(" 并回车，源代码被编译并链接为原生 exe 可执行程序。")],1)]),t._v(" "),a("p",[t._v("生成内容为可执行程序，Linux/OS X 下为 "),a("code",[t._v("goto")]),t._v("，Windows 下为 "),a("code",[t._v("goto.exe")]),t._v("。")]),t._v(" "),a("p",[t._v("要启动并运行 web 服务器，那么：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Linux 和 OSX 平台：")]),t._v(" 输入命令 "),a("code",[t._v("./goto")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("Windows 平台：")]),t._v(" 从 Go IDE 启动程序（如果 Windows 防火墙阻止程序启动，设置允许该程序）")])]),t._v(" "),a("h2",{attrs:{id:"测试该程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试该程序"}},[t._v("#")]),t._v(" 测试该程序")]),t._v(" "),a("p",[t._v("打开浏览器并请求  url："),a("code",[t._v("http://localhost:8080/add")])]),t._v(" "),a("p",[t._v("这会激活 "),a("code",[t._v("Add")]),t._v(" 处理函数。请求还未包含 url 变量，所以响应会输出 html 表单询问输入：")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/19.4_fig19.2.png?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("添加一个长 URL 以获取等价的缩短版本，例如 "),a("code",[t._v("http://golang.org/pkg/bufio/#Writer")]),t._v("，然后单击按钮。应用会为你产生一个短 URL 并打印出来，例如 "),a("code",[t._v("http:// localhost:8080/2")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/19.4_fig19.3.jpg?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("复制该 URL 并在浏览器地址栏粘贴以发出请求，现在轮到 "),a("code",[t._v("Redirect")]),t._v(" 处理函数上场了，对应长 URL 的页面被显示了出来。")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/19.4_fig19.4.jpg?raw=true",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);