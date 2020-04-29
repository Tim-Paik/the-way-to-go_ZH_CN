(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{429:function(s,t,n){"use strict";n.r(t);var a=n(33),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_12-11-用-gob-传输数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-11-用-gob-传输数据"}},[s._v("#")]),s._v(" 12.11 用 Gob 传输数据")]),s._v(" "),n("p",[s._v("Gob 是 Go 自己的以二进制形式序列化和反序列化程序数据的格式；可以在 "),n("code",[s._v("encoding")]),s._v(' 包中找到。这种格式的数据简称为 Gob （即 Go binary 的缩写）。类似于 Python 的 "pickle" 和 Java 的 "Serialization"。')]),s._v(" "),n("p",[s._v("Gob 通常用于远程方法调用（RPCs，参见 "),n("RouterLink",{attrs:{to:"/15.9.html"}},[s._v("15.9节")]),s._v(" 的 rpc 包）参数和结果的传输，以及应用程序和机器之间的数据传输。\n它和 JSON 或 XML 有什么不同呢？Gob 特定地用于纯 Go 的环境中，例如，两个用 Go 写的服务之间的通信。这样的话服务可以被实现得更加高效和优化。\nGob 不是可外部定义，语言无关的编码方式。因此它的首选格式是二进制，而不是像 JSON 和 XML 那样的文本格式。\nGob 并不是一种不同于 Go 的语言，而是在编码和解码过程中用到了 Go 的反射。")],1),s._v(" "),n("p",[s._v("Gob 文件或流是完全自描述的：里面包含的所有类型都有一个对应的描述，并且总是可以用 Go 解码，而不需要了解文件的内容。")]),s._v(" "),n("p",[s._v("只有可导出的字段会被编码，零值会被忽略。在解码结构体的时候，只有同时匹配名称和可兼容类型的字段才会被解码。当源数据类型增加新字段后，Gob 解码客户端仍然可以以这种方式正常工作：解码客户端会继续识别以前存在的字段。并且还提供了很大的灵活性，比如在发送者看来，整数被编码成没有固定长度的可变长度，而忽略具体的 Go 类型。")]),s._v(" "),n("p",[s._v("假如在发送者这边有一个有结构 T：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" T "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" X"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Z "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" t "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("X"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("而在接收者这边可以用一个结构体 U 类型的变量 u 来接收这个值：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" U "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" X"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int8")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" u U\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("在接收者中，X 的值是7，Y 的值是0（Y的值并没有从 t 中传递过来，因为它是零值）")]),s._v(" "),n("p",[s._v("和 JSON 的使用方式一样，Gob 使用通用的 "),n("code",[s._v("io.Writer")]),s._v(" 接口，通过 "),n("code",[s._v("NewEncoder()")]),s._v(" 函数创建 "),n("code",[s._v("Encoder")]),s._v(" 对象并调用 "),n("code",[s._v("Encode()")]),s._v("；相反的过程使用通用的 "),n("code",[s._v("io.Reader")]),s._v(" 接口，通过 "),n("code",[s._v("NewDecoder()")]),s._v(" 函数创建 "),n("code",[s._v("Decoder")]),s._v(" 对象并调用 "),n("code",[s._v("Decode()")]),s._v("。")]),s._v(" "),n("p",[s._v("我们把示例 12.12 的信息写进名为 vcard.gob 的文件作为例子。这会产生一个文本可读数据和二进制数据的混合，当你试着在文本编辑中打开的时候会看到。")]),s._v(" "),n("p",[s._v("在示例 12.18 中你会看到一个编解码，并且以字节缓冲模拟网络传输的简单例子：")]),s._v(" "),n("p",[s._v("示例 12.18 "),n("a",{attrs:{href:"examples/chapter_12/gob1.go"}},[s._v("gob1.go")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// gob1.go")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bytes"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"encoding/gob"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" P "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Z "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n\tName    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Q "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int32")]),s._v("\n\tName "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Initialize the encoder and decoder.  Normally enc and dec would be      ")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bound to network connections and the encoder and decoder would      ")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// run in different processes.      ")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" network bytes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Buffer   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Stand-in for a network connection      ")]),s._v("\n\tenc "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" gob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewEncoder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("network"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Will write to network.      ")]),s._v("\n\tdec "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" gob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewDecoder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("network"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Will read from network.      ")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Encode (send) the value.      ")]),s._v("\n\terr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" enc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Encode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("P"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Pythagoras"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fatal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"encode error:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Decode (receive) the value.      ")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" q Q\n\terr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fatal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"decode error:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%q: {%d,%d}\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("X"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Output:   "Pythagoras": {3,4}')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("p",[s._v("示例 12.19 "),n("a",{attrs:{href:"examples/chapter_12/gob2.go"}},[s._v("gob2.go")]),s._v(" 编码到文件：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// gob2.go")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"encoding/gob"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Address "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tType             "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\tCity             "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\tCountry          "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" VCard "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tFirstName\t"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\tLastName\t"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\tAddresses\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Address\n\tRemark\t\t"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" content\t"),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tpa "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"private"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Aartselaar"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Belgium"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\twa "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"work"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Boom"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Belgium"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\tvc "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" VCard"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Jan"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Kersschot"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("pa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("wa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"none"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// fmt.Printf("%v: \\n", vc) // {Jan Kersschot [0x126d2b80 0x126d2be0] none}:')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// using an encoder:")]),s._v("\n\tfile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("OpenFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vcard.gob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("O_CREATE"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("O_WRONLY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0666")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tenc "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" gob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewEncoder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\terr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" enc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Encode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Error in encoding gob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("p",[n("strong",[s._v("练习 12.8")]),s._v("："),n("a",{attrs:{href:"exercises/chapter_12/degob.go"}},[s._v("degob.go")]),s._v("：")]),s._v(" "),n("p",[s._v("写一个程序读取 vcard.gob 文件，解码并打印它的内容。")])])}),[],!1,null,null,null);t.default=e.exports}}]);