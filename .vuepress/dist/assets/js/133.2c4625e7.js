(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{455:function(s,t,n){"use strict";n.r(t);var a=n(33),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_14-13-在多核心上并行计算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-13-在多核心上并行计算"}},[s._v("#")]),s._v(" 14.13 在多核心上并行计算")]),s._v(" "),n("p",[s._v("假设我们有"),n("code",[s._v("NCPU")]),s._v("个CPU核心："),n("code",[s._v("const NCPU = 4 //对应一个四核处理器")]),s._v(" 然后我们想把计算量分成"),n("code",[s._v("NCPU")]),s._v("个部分，每一个部分都和其他部分并行运行。")]),s._v(" "),n("p",[s._v("这可以通过以下代码所示的方式完成（我们且省略具体参数）")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("DoAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    sem "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" NCPU"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Buffering optional but sensible")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" NCPU"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("DoPart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Drain the channel sem, waiting for NCPU tasks to complete")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" NCPU"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v("sem "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// wait for one task to complete")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// All done.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("DoPart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sem "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do the part of the computation")]),s._v("\n    sem "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// signal that this piece is done")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("GOMAXPROCS")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NCPU"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// runtime.GOMAXPROCS = NCPU")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("DoAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("ul",[n("li",[n("p",[n("code",[s._v("DoAll()")]),s._v("函数创建了一个"),n("code",[s._v("sem")]),s._v("通道，每个并行计算都将在对其发送完成信号；在一个 for 循环中"),n("code",[s._v("NCPU")]),s._v("个协程被启动了，每个协程会承担"),n("code",[s._v("1/NCPU")]),s._v("的工作量。每一个"),n("code",[s._v("DoPart()")]),s._v("协程都会向"),n("code",[s._v("sem")]),s._v("通道发送完成信号。")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("DoAll()")]),s._v("会在 for 循环中等待"),n("code",[s._v("NCPU")]),s._v("个协程完成："),n("code",[s._v("sem")]),s._v("通道就像一个信号量，这份代码展示了一个经典的信号量模式。（参见 "),n("RouterLink",{attrs:{to:"/14.2.html#1427-信号量模式"}},[s._v("14.2.7")]),s._v("）")],1)])]),s._v(" "),n("p",[s._v("在以上运行模型中，您还需将"),n("code",[s._v("GOMAXPROCS")]),s._v("设置为"),n("code",[s._v("NCPU")]),s._v("（参见 "),n("RouterLink",{attrs:{to:"/14.1.html#1413-使用-gomaxprocs"}},[s._v("14.1.3")]),s._v("）。")],1)])}),[],!1,null,null,null);t.default=e.exports}}]);