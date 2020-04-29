(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{394:function(s,t,n){"use strict";n.r(t);var a=n(33),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_9-3-锁和-sync-包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-锁和-sync-包"}},[s._v("#")]),s._v(" 9.3 锁和 sync 包")]),s._v(" "),n("p",[s._v("在一些复杂的程序中，通常通过不同线程执行不同应用来实现程序的并发。当不同线程要使用同一个变量时，经常会出现一个问题：无法预知变量被不同线程修改的顺序！(这通常被称为资源竞争,指不同线程对同一变量使用的竞争)显然这无法让人容忍，那我们该如何解决这个问题呢？")]),s._v(" "),n("p",[s._v("经典的做法是一次只能让一个线程对共享变量进行操作。当变量被一个线程改变时(临界区)，我们为它上锁，直到这个线程执行完成并解锁后，其他线程才能访问它。")]),s._v(" "),n("p",[s._v("特别是我们之前章节学习的 map 类型是不存在锁的机制来实现这种效果(出于对性能的考虑)，所以 map 类型是非线程安全的。当并行访问一个共享的 map 类型的数据，map 数据将会出错。")]),s._v(" "),n("p",[s._v('在 Go 语言中这种锁的机制是通过 sync 包中 Mutex 来实现的。sync 来源于 "synchronized" 一词，这意味着线程将有序的对同一变量进行访问。')]),s._v(" "),n("p",[n("code",[s._v("sync.Mutex")]),s._v(" 是一个互斥锁，它的作用是守护在临界区入口来确保同一时间只能有一个线程进入临界区。")]),s._v(" "),n("p",[s._v("假设 info 是一个需要上锁的放在共享内存中的变量。通过包含 "),n("code",[s._v("Mutex")]),s._v(" 来实现的一个典型例子如下：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sync"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Info "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tmu sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Mutex\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ... other fields, e.g.: Str string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("如果一个函数想要改变这个变量可以这样写:")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Update")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tinfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Lock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// critical section:")]),s._v("\n    info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Str "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// new value")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// end critical section")]),s._v("\n    info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Unlock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("还有一个很有用的例子是通过 Mutex 来实现一个可以上锁的共享缓冲器:")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" SyncedBuffer "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tlock \tsync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Mutex\n\tbuffer  bytes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Buffer\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("在 sync 包中还有一个 "),n("code",[s._v("RWMutex")]),s._v(" 锁：他能通过 "),n("code",[s._v("RLock()")]),s._v(" 来允许同一时间多个线程对变量进行读操作，但是只能一个线程进行写操作。如果使用 "),n("code",[s._v("Lock()")]),s._v(" 将和普通的 "),n("code",[s._v("Mutex")]),s._v(" 作用相同。包中还有一个方便的 "),n("code",[s._v("Once")]),s._v(" 类型变量的方法 "),n("code",[s._v("once.Do(call)")]),s._v("，这个方法确保被调用函数只能被调用一次。")]),s._v(" "),n("p",[s._v("相对简单的情况下，通过使用 sync 包可以解决同一时间只能一个线程访问变量或 map 类型数据的问题。如果这种方式导致程序明显变慢或者引起其他问题，我们要重新思考来通过 goroutines 和 channels 来解决问题，这是在 Go 语言中所提倡用来实现并发的技术。我们将在第 14 章对其深入了解，并在第 14.7 节中对这两种方式进行比较。")])])}),[],!1,null,null,null);t.default=e.exports}}]);