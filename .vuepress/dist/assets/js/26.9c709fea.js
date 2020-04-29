(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{353:function(s,a,t){"use strict";t.r(a);var n=t(33),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_4-2-go-程序的基本结构和要素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-go-程序的基本结构和要素"}},[s._v("#")]),s._v(" 4.2 Go 程序的基本结构和要素")]),s._v(" "),t("p",[s._v("示例 4.1 "),t("a",{attrs:{href:"examples/chapter_4/hello_world.go"}},[s._v("hello_world.go")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, world"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_4-2-1-包的概念、导入与可见性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-包的概念、导入与可见性"}},[s._v("#")]),s._v(" 4.2.1 包的概念、导入与可见性")]),s._v(" "),t("p",[s._v("包是结构化代码的一种方式：每个程序都由包（通常简称为 pkg）的概念组成，可以使用自身的包或者从其它包中导入内容。")]),s._v(" "),t("p",[s._v("如同其它一些编程语言中的类库或命名空间的概念，每个 Go 文件都属于且仅属于一个包。一个包可以由许多以 "),t("code",[s._v(".go")]),s._v(" 为扩展名的源文件组成，因此文件名和包名一般来说都是不相同的。")]),s._v(" "),t("p",[s._v("你必须在源文件中非注释的第一行指明这个文件属于哪个包，如："),t("code",[s._v("package main")]),s._v("。"),t("code",[s._v("package main")]),s._v("表示一个可独立执行的程序，每个 Go 应用程序都包含一个名为 "),t("code",[s._v("main")]),s._v(" 的包。")]),s._v(" "),t("p",[s._v("一个应用程序可以包含不同的包，而且即使你只使用 main 包也不必把所有的代码都写在一个巨大的文件里：你可以用一些较小的文件，并且在每个文件非注释的第一行都使用 "),t("code",[s._v("package main")]),s._v(" 来指明这些文件都属于 main 包。如果你打算编译包名不是为 main 的源文件，如 "),t("code",[s._v("pack1")]),s._v("，编译后产生的对象文件将会是 "),t("code",[s._v("pack1.a")]),s._v(" 而不是可执行程序。另外要注意的是，所有的包名都应该使用小写字母。")]),s._v(" "),t("p",[t("strong",[s._v("标准库")])]),s._v(" "),t("p",[s._v("在 Go 的安装文件里包含了一些可以直接使用的包，即标准库。在 Windows 下，标准库的位置在 Go 根目录下的子目录 "),t("code",[s._v("pkg\\windows_386")]),s._v(" 中；在 Linux 下，标准库在 Go 根目录下的子目录 "),t("code",[s._v("pkg\\linux_amd64")]),s._v(" 中（如果是安装的是 32 位，则在 "),t("code",[s._v("linux_386")]),s._v(" 目录中）。一般情况下，标准包会存放在 "),t("code",[s._v("$GOROOT/pkg/$GOOS_$GOARCH/")]),s._v(" 目录下。")]),s._v(" "),t("p",[s._v("Go 的标准库包含了大量的包（如：fmt 和 os），但是你也可以创建自己的包（第 9 章）。")]),s._v(" "),t("p",[s._v("如果想要构建一个程序，则包和包内的文件都必须以正确的顺序进行编译。包的依赖关系决定了其构建顺序。")]),s._v(" "),t("p",[s._v("属于同一个包的源文件必须全部被一起编译，一个包即是编译时的一个单元，因此根据惯例，每个目录都只包含一个包。")]),s._v(" "),t("p",[t("strong",[s._v("如果对一个包进行更改或重新编译，所有引用了这个包的客户端程序都必须全部重新编译。")])]),s._v(" "),t("p",[s._v("Go 中的包模型采用了显式依赖关系的机制来达到快速编译的目的，编译器会从后缀名为 "),t("code",[s._v(".o")]),s._v(" 的对象文件（需要且只需要这个文件）中提取传递依赖类型的信息。")]),s._v(" "),t("p",[s._v("如果 "),t("code",[s._v("A.go")]),s._v(" 依赖 "),t("code",[s._v("B.go")]),s._v("，而 "),t("code",[s._v("B.go")]),s._v(" 又依赖 "),t("code",[s._v("C.go")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("编译 "),t("code",[s._v("C.go")]),s._v(", "),t("code",[s._v("B.go")]),s._v(", 然后是 "),t("code",[s._v("A.go")]),s._v(".")]),s._v(" "),t("li",[s._v("为了编译 "),t("code",[s._v("A.go")]),s._v(", 编译器读取的是 "),t("code",[s._v("B.o")]),s._v(" 而不是 "),t("code",[s._v("C.o")]),s._v(".")])]),s._v(" "),t("p",[s._v("这种机制对于编译大型的项目时可以显著地提升编译速度。")]),s._v(" "),t("p",[t("strong",[s._v("每一段代码只会被编译一次")])]),s._v(" "),t("p",[s._v("一个 Go 程序是通过 "),t("code",[s._v("import")]),s._v(" 关键字将一组包链接在一起。")]),s._v(" "),t("p",[t("code",[s._v('import "fmt"')]),s._v(" 告诉 Go 编译器这个程序需要使用 "),t("code",[s._v("fmt")]),s._v(" 包（的函数，或其他元素），"),t("code",[s._v("fmt")]),s._v(" 包实现了格式化 IO（输入/输出）的函数。包名被封闭在半角双引号 "),t("code",[s._v('""')]),s._v(" 中。如果你打算从已编译的包中导入并加载公开声明的方法，不需要插入已编译包的源代码。")]),s._v(" "),t("p",[s._v("如果需要多个包，它们可以被分别导入：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("或：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("但是还有更短且更优雅的方法（被称为因式分解关键字，该方法同样适用于 const、var 和 type 的声明或定义）：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("它甚至还可以更短的形式，但使用 gofmt 后将会被强制换行：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当你导入多个包时，最好按照字母顺序排列包名，这样做更加清晰易读。")]),s._v(" "),t("p",[s._v("如果包名不是以 "),t("code",[s._v(".")]),s._v(" 或 "),t("code",[s._v("/")]),s._v(" 开头，如 "),t("code",[s._v('"fmt"')]),s._v(" 或者 "),t("code",[s._v('"container/list"')]),s._v("，则 Go 会在全局文件进行查找；如果包名以 "),t("code",[s._v("./")]),s._v(" 开头，则 Go 会在相对目录中查找；如果包名以 "),t("code",[s._v("/")]),s._v(" 开头（在 Windows 下也可以这样使用），则会在系统的绝对路径中查找。")]),s._v(" "),t("p",[t("em",[s._v("译者注：以相对路径在GOPATH下导入包会产生报错信息")])]),s._v(" "),t("p",[t("em",[s._v('报错信息：local import "./XXX" in non-local package')])]),s._v(" "),t("p",[t("em",[s._v("引用："),t("a",{attrs:{href:"https://golang.org/cmd/go/#hdr-Relative_import_paths",target:"_blank",rel:"noopener noreferrer"}},[s._v("Go programs cannot use relative import paths within a work space."),t("OutboundLink")],1)])]),s._v(" "),t("p",[t("em",[s._v("注解：在GOPATH外可以以相对路径的形式执行go build（go install 不可以）")])]),s._v(" "),t("p",[s._v("导入包即等同于包含了这个包的所有的代码对象。")]),s._v(" "),t("p",[s._v("除了符号 "),t("code",[s._v("_")]),s._v("，包中所有代码对象的标识符必须是唯一的，以避免名称冲突。但是相同的标识符可以在不同的包中使用，因为可以使用包名来区分它们。")]),s._v(" "),t("p",[s._v("包通过下面这个被编译器强制执行的规则来决定是否将自身的代码对象暴露给外部文件：")]),s._v(" "),t("p",[t("strong",[s._v("可见性规则")])]),s._v(" "),t("p",[s._v("当标识符（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：Group1，那么使用这种形式的标识符的对象就可以被外部包的代码所使用（客户端程序需要先导入这个包），这被称为导出（像面向对象语言中的 public）；标识符如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的（像面向对象语言中的 private ）。")]),s._v(" "),t("p",[s._v("（大写字母可以使用任何 Unicode 编码的字符，比如希腊文，不仅仅是 ASCII 码中的大写字母）。")]),s._v(" "),t("p",[s._v("因此，在导入一个外部包后，能够且只能够访问该包中导出的对象。")]),s._v(" "),t("p",[s._v("假设在包 pack1 中我们有一个变量或函数叫做 Thing（以 T 开头，所以它能够被导出），那么在当前包中导入 pack1 包，Thing 就可以像面向对象语言那样使用点标记来调用："),t("code",[s._v("pack1.Thing")]),s._v("（pack1 在这里是不可以省略的）。")]),s._v(" "),t("p",[s._v("因此包也可以作为命名空间使用，帮助避免命名冲突（名称冲突）：两个包中的同名变量的区别在于他们的包名，例如 "),t("code",[s._v("pack1.Thing")]),s._v(" 和 "),t("code",[s._v("pack2.Thing")]),s._v("。")]),s._v(" "),t("p",[s._v("你可以通过使用包的别名来解决包名之间的名称冲突，或者说根据你的个人喜好对包名进行重新设置，如："),t("code",[s._v('import fm "fmt"')]),s._v("。下面的代码展示了如何使用包的别名：")]),s._v(" "),t("p",[s._v("示例 4.2 "),t("a",{attrs:{href:"examples/chapter_4/alias.go"}},[s._v("alias.go")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" fm "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// alias3")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   fm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, world"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("注意事项")])]),s._v(" "),t("p",[s._v("如果你导入了一个包却没有使用它，则会在构建程序时引发错误，如 "),t("code",[s._v("imported and not used: os")]),s._v("，这正是遵循了 Go 的格言：“没有不必要的代码！“。")]),s._v(" "),t("p",[t("strong",[s._v("包的分级声明和初始化")])]),s._v(" "),t("p",[s._v("你可以在使用 "),t("code",[s._v("import")]),s._v(" 导入包之后定义或声明 0 个或多个常量（const）、变量（var）和类型（type），这些对象的作用域都是全局的（在本包范围内），所以可以被本包中所有的函数调用（如 "),t("a",{attrs:{href:"examples/chapter_4/gotemplate.go"}},[s._v("gotemplate.go")]),s._v(" 源文件中的 c 和 v），然后声明一个或多个函数（func）。")]),s._v(" "),t("h2",{attrs:{id:"_4-2-2-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-函数"}},[s._v("#")]),s._v(" 4.2.2 函数")]),s._v(" "),t("p",[s._v("这是定义一个函数最简单的格式：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("functionName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你可以在括号 "),t("code",[s._v("()")]),s._v(" 中写入 0 个或多个函数的参数（使用逗号 "),t("code",[s._v(",")]),s._v(" 分隔），每个参数的名称后面必须紧跟着该参数的类型。")]),s._v(" "),t("p",[s._v("main 函数是每一个可执行程序所必须包含的，一般来说都是在启动后第一个执行的函数（如果有 init() 函数则会先执行该函数）。如果你的 main 包的源代码没有包含 main 函数，则会引发构建错误 "),t("code",[s._v("undefined: main.main")]),s._v("。main 函数既没有参数，也没有返回类型（与 C 家族中的其它语言恰好相反）。如果你不小心为 main 函数添加了参数或者返回类型，将会引发构建错误：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("func main must have no arguments and no return values results.\n")])])]),t("p",[s._v("在程序开始执行并完成初始化后，第一个调用（程序的入口点）的函数是 "),t("code",[s._v("main.main()")]),s._v("（如：C 语言），该函数一旦返回就表示程序已成功执行并立即退出。")]),s._v(" "),t("p",[s._v("函数里的代码（函数体）使用大括号 "),t("code",[s._v("{}")]),s._v(" 括起来。")]),s._v(" "),t("p",[s._v("左大括号 "),t("code",[s._v("{")]),s._v(" 必须与方法的声明放在同一行，这是编译器的强制规定，否则你在使用 gofmt 时就会出现错误提示：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("`build-error: syntax error: unexpected semicolon or newline before {`\n")])])]),t("p",[s._v("（这是因为编译器会产生 "),t("code",[s._v("func main() ;")]),s._v(" 这样的结果，很明显这错误的）")]),s._v(" "),t("p",[t("strong",[s._v("Go 语言虽然看起来不使用分号作为语句的结束，但实际上这一过程是由编译器自动完成，因此才会引发像上面这样的错误")])]),s._v(" "),t("p",[s._v("右大括号 "),t("code",[s._v("}")]),s._v(" 需要被放在紧接着函数体的下一行。如果你的函数非常简短，你也可以将它们放在同一行：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("对于大括号 "),t("code",[s._v("{}")]),s._v(" 的使用规则在任何时候都是相同的（如：if 语句等）。")]),s._v(" "),t("p",[s._v("因此符合规范的函数一般写成如下的形式：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("functionName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parameter_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("return_value_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   …\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("其中：")]),s._v(" "),t("ul",[t("li",[s._v("parameter_list 的形式为 (param1 type1, param2 type2, …)")]),s._v(" "),t("li",[s._v("return_value_list 的形式为 (ret1 type1, ret2 type2, …)")])]),s._v(" "),t("p",[s._v("只有当某个函数需要被外部包调用的时候才使用大写字母开头，并遵循 Pascal 命名法；否则就遵循骆驼命名法，即第一个单词的首字母小写，其余单词的首字母大写。")]),s._v(" "),t("p",[s._v("下面这一行调用了 "),t("code",[s._v("fmt")]),s._v(" 包中的 "),t("code",[s._v("Println")]),s._v(" 函数，可以将字符串输出到控制台，并在最后自动增加换行字符 "),t("code",[s._v("\\n")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Println（"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, world"')]),s._v("）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v('fmt.Print("hello, world\\n")')]),s._v(" 可以得到相同的结果。")]),s._v(" "),t("p",[t("code",[s._v("Print")]),s._v(" 和 "),t("code",[s._v("Println")]),s._v(" 这两个函数也支持使用变量，如："),t("code",[s._v("fmt.Println(arr)")]),s._v("。如果没有特别指定，它们会以默认的打印格式将变量 "),t("code",[s._v("arr")]),s._v(" 输出到控制台。")]),s._v(" "),t("p",[s._v("单纯地打印一个字符串或变量甚至可以使用预定义的方法来实现，如："),t("code",[s._v("print")]),s._v("、"),t("code",[s._v('println：print("ABC")')]),s._v("、"),t("code",[s._v('println("ABC")')]),s._v("、"),t("code",[s._v("println(i)")]),s._v("（带一个变量 i）。")]),s._v(" "),t("p",[s._v("这些函数只可以用于调试阶段，在部署程序的时候务必将它们替换成 "),t("code",[s._v("fmt")]),s._v(" 中的相关函数。")]),s._v(" "),t("p",[s._v("当被调用函数的代码执行到结束符 "),t("code",[s._v("}")]),s._v(" 或返回语句时就会返回，然后程序继续执行调用该函数之后的代码。")]),s._v(" "),t("p",[s._v("程序正常退出的代码为 0 即 "),t("code",[s._v("Program exited with code 0")]),s._v("；如果程序因为异常而被终止，则会返回非零值，如：1。这个数值可以用来测试是否成功执行一个程序。")]),s._v(" "),t("h2",{attrs:{id:"_4-2-3-注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-注释"}},[s._v("#")]),s._v(" 4.2.3 注释")]),s._v(" "),t("p",[s._v("示例 4.2 "),t("a",{attrs:{href:"examples/chapter_4/hello_world2.go"}},[s._v("hello_world2.go")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Package implementing formatted I/O.")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Καλημέρα κόσμε; or こんにちは 世界\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("上面这个例子通过打印 "),t("code",[s._v("Καλημέρα κόσμε; or こんにちは 世界")]),s._v(" 展示了如何在 Go 中使用国际化字符，以及如何使用注释。")]),s._v(" "),t("p",[s._v("注释不会被编译，但可以通过 godoc 来使用（第 3.6 节）。")]),s._v(" "),t("p",[s._v("单行注释是最常见的注释形式，你可以在任何地方使用以 "),t("code",[s._v("//")]),s._v(" 开头的单行注释。多行注释也叫块注释，均已以 "),t("code",[s._v("/*")]),s._v(" 开头，并以 "),t("code",[s._v("*/")]),s._v(" 结尾，且不可以嵌套使用，多行注释一般用于包的文档描述或注释成块的代码片段。")]),s._v(" "),t("p",[s._v("每一个包应该有相关注释，在 package 语句之前的块注释将被默认认为是这个包的文档说明，其中应该提供一些相关信息并对整体功能做简要的介绍。一个包可以分散在多个文件中，但是只需要在其中一个进行注释说明即可。当开发人员需要了解包的一些情况时，自然会用 godoc 来显示包的文档说明，在首行的简要注释之后可以用成段的注释来进行更详细的说明，而不必拥挤在一起。另外，在多段注释之间应以空行分隔加以区分。")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Package superman implements methods for saving the world.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Experience has shown that a small number of procedures can prove")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// helpful when attempting to save the world.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" superman\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("几乎所有全局作用域的类型、常量、变量、函数和被导出的对象都应该有一个合理的注释。如果这种注释（称为文档注释）出现在函数前面，例如函数 Abcd，则要以 "),t("code",[s._v('"Abcd..."')]),s._v(" 作为开头。")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// enterOrbit causes Superman to fly into low Earth orbit, a position")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// that presents several possibilities for planet salvation.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("enterOrbit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("godoc 工具（第 3.6 节）会收集这些注释并产生一个技术文档。")]),s._v(" "),t("h2",{attrs:{id:"_4-2-4-类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-类型"}},[s._v("#")]),s._v(" 4.2.4 类型")]),s._v(" "),t("p",[s._v("变量（或常量）包含数据，这些数据可以有不同的数据类型，简称类型。使用 var 声明的变量的值会自动初始化为该类型的零值。类型定义了某个变量的值的集合与可对其进行操作的集合。")]),s._v(" "),t("p",[s._v("类型可以是基本类型，如：int、float、bool、string；结构化的（复合的），如：struct、array、slice、map、channel；只描述类型的行为的，如：interface。")]),s._v(" "),t("p",[s._v("结构化的类型没有真正的值，它使用 nil 作为默认值（在 Objective-C 中是 nil，在 Java 中是 null，在 C 和 C++ 中是NULL或 0）。值得注意的是，Go 语言中不存在类型继承。")]),s._v(" "),t("p",[s._v("函数也可以是一个确定的类型，就是以函数作为返回类型。这种类型的声明要写在函数名和可选的参数列表之后，例如：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" FunctionName "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a typea"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b typeb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" typeFunc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你可以在函数体中的某处返回使用类型为 typeFunc 的变量 var：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("一个函数可以拥有多返回值，返回类型之间需要使用逗号分割，并使用小括号 "),t("code",[s._v("()")]),s._v(" 将它们括起来，如：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" FunctionName "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a typea"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b typeb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t1 type1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2 type2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("示例： 函数 Atoi (第 4.7 节)："),t("code",[s._v("func Atoi(s string) (i int, err error)")])]),s._v(" "),t("p",[s._v("返回的形式：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" var1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" var2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这种多返回值一般用于判断某个函数是否执行成功（true/false）或与其它返回值一同返回错误消息（详见之后的并行赋值）。")]),s._v(" "),t("p",[s._v("使用 type 关键字可以定义你自己的类型，你可能想要定义一个结构体(第 10 章)，但是也可以定义一个已经存在的类型的别名，如：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" IZ "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("这里并不是真正意义上的别名，因为使用这种方法定义之后的类型可以拥有更多的特性，且在类型转换时必须显式转换。")])]),s._v(" "),t("p",[s._v("然后我们可以使用下面的方式声明变量：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a IZ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里我们可以看到 int 是变量 a 的底层类型，这也使得它们之间存在相互转换的可能（第 4.2.6 节）。")]),s._v(" "),t("p",[s._v("如果你有多个类型需要定义，可以使用因式分解关键字的方式，例如：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   IZ "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n   FZ "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("float64")]),s._v("\n   STR "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("每个值都必须在经过编译后属于某个类型（编译器必须能够推断出所有值的类型），因为 Go 语言是一种静态类型语言。")]),s._v(" "),t("h2",{attrs:{id:"_4-2-5-go-程序的一般结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-5-go-程序的一般结构"}},[s._v("#")]),s._v(" 4.2.5 Go 程序的一般结构")]),s._v(" "),t("p",[s._v("下面的程序可以被顺利编译但什么都做不了，不过这很好地展示了一个 Go 程序的首选结构。这种结构并没有被强制要求，编译器也不关心 main 函数在前还是变量的声明在前，但使用统一的结构能够在从上至下阅读 Go 代码时有更好的体验。")]),s._v(" "),t("p",[s._v("所有的结构将在这一章或接下来的章节中进一步地解释说明，但总体思路如下：")]),s._v(" "),t("ul",[t("li",[s._v("在完成包的 import 之后，开始对常量、变量和类型的定义或声明。")]),s._v(" "),t("li",[s._v("如果存在 init 函数的话，则对该函数进行定义（这是一个特殊的函数，每个含有该函数的包都会首先执行这个函数）。")]),s._v(" "),t("li",[s._v("如果当前包是 main 包，则定义 main 函数。")]),s._v(" "),t("li",[s._v("然后定义其余的函数，首先是类型的方法，接着是按照 main 函数中先后调用的顺序来定义相关函数，如果有很多函数，则可以按照字母顺序来进行排序。")])]),s._v(" "),t("p",[s._v("示例 4.4 "),t("a",{attrs:{href:"examples/chapter_4/gotemplate.go"}},[s._v("gotemplate.go")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" v "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" T "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// initialization of package")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Func1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n   fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t T"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Method1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Func1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// exported function Func1")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("p",[s._v("Go 程序的执行（程序启动）顺序如下：")]),s._v(" "),t("ol",[t("li",[s._v("按顺序导入所有被 main 包引用的其它包，然后在每个包中执行如下流程：")]),s._v(" "),t("li",[s._v("如果该包又导入了其它的包，则从第一步开始递归执行，但是每个包只会被导入一次。")]),s._v(" "),t("li",[s._v("然后以相反的顺序在每个包中初始化常量和变量，如果该包含有 init 函数的话，则调用该函数。")]),s._v(" "),t("li",[s._v("在完成这一切之后，main 也执行同样的过程，最后调用 main 函数开始执行程序。")])]),s._v(" "),t("h2",{attrs:{id:"_4-2-6-类型转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-6-类型转换"}},[s._v("#")]),s._v(" 4.2.6 类型转换")]),s._v(" "),t("p",[s._v("在必要以及可行的情况下，一个类型的值可以被转换成另一种类型的值。由于 Go 语言不存在隐式类型转换，因此所有的转换都必须显式说明，就像调用一个函数一样（类型在这里的作用可以看作是一种函数）：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("valueOfTypeB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("typeB")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("valueOfTypeA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("类型 B 的值 = 类型 B(类型 A 的值)")])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v("\nb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("但这只能在定义正确的情况下转换成功，例如从一个取值范围较小的类型转换到一个取值范围较大的类型（例如将 int16 转换为 int32）。当从一个取值范围较大的转换到取值范围较小的类型时（例如将 int32 转换为 int16 或将 float32 转换为 int），会发生精度丢失（截断）的情况。当编译器捕捉到非法的类型转换时会引发编译时错误，否则将引发运行时错误。")]),s._v(" "),t("p",[s._v("具有相同底层类型的变量之间可以相互转换：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a IZ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("IZ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4-2-7-go-命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-7-go-命名规范"}},[s._v("#")]),s._v(" 4.2.7 Go 命名规范")]),s._v(" "),t("p",[s._v("干净、可读的代码和简洁性是 Go 追求的主要目标。通过 gofmt 来强制实现统一的代码风格。Go 语言中对象的命名也应该是简洁且有意义的。像 Java 和 Python 中那样使用混合着大小写和下划线的冗长的名称会严重降低代码的可读性。名称不需要指出自己所属的包，因为在调用的时候会使用包名作为限定符。返回某个对象的函数或方法的名称一般都是使用名词，没有 "),t("code",[s._v("Get...")]),s._v(" 之类的字符，如果是用于修改某个对象，则使用 "),t("code",[s._v("SetName")]),s._v("。有必须要的话可以使用大小写混合的方式，如 MixedCaps 或 mixedCaps，而不是使用下划线来分割多个名称。")])])}),[],!1,null,null,null);a.default=e.exports}}]);