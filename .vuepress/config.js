module.exports = {
    title: 'Go入门指南',
    description: '《The Way to Go》中文译本',
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'Go 入门指南' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
    ],
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    markdown: {
        lineNumbers: true,
    },
    base: '/',
    dest: 'docs',
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    themeConfig: {
        smoothScroll: true,
        logo: '/favicon.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '目录', link: '/directory.html' },
            {
                text: '导航', items: [
                    { text: '首页', link: '/' },
                    { text: '目录', link: '/directory.html' },
                    { text: '前言', link: '/preface.html' },
                    { text: '第一部分：学习 Go 语言', link: '/01.1.html' },
                    { text: '第二部分：语言的核心结构与技术', link: '/04.1.html' },
                    { text: '第三部分：Go 高级编程', link: '/12.0.html' },
                    { text: '第四部分：实际应用', link: '/16.0.html' },
                ]
            },
        ],
        sidebar: [
            ['/', '首页'],
            ['/directory', '目录'],
            ['/preface', '前言'],
            {
                title: '第一部分：学习 Go 语言',
                children: [
                    {
                        title: '第1章：Go 语言的起源，发展与普及',
                        path: '/01.1',
                        children: [
                            '01.1',
                            '01.2',
                        ],
                    },
                    {
                        title: '第2章：安装与运行环境',
                        path: '/02.1',
                        children: [
                            '02.1',
                            '02.2',
                            '02.3',
                            '02.4',
                            '02.5',
                            '02.6',
                            '02.7',
                            '02.8',
                        ],
                    },
                    {
                        title: '第3章：编辑器、集成开发环境与其它工具',
                        path: '/03.0',
                        children: [
                            '03.0',
                            '03.1',
                            '03.2',
                            '03.3',
                            '03.4',
                            '03.5',
                            '03.6',
                            '03.7',
                            '03.8',
                            '03.9',
                        ],
                    },
                ],
            },
            {
                title: '第二部分：语言的核心结构与技术',
                children: [
                    {
                        title: '第4章：基本结构和基本数据类型',
                        path: '/04.1',
                        children: [
                            '04.1',
                            '04.2',
                            '04.3',
                            '04.4',
                            '04.5',
                            '04.6',
                            '04.7',
                            '04.8',
                            '04.9',
                        ],
                    },
                    {
                        title: '第5章：控制结构',
                        path: '/05.0',
                        children: [
                            '05.0',
                            '05.1',
                            '05.2',
                            '05.3',
                            '05.4',
                            '05.5',
                            '05.6',
                        ],
                    },
                    {
                        title: '第6章：函数（function）',
                        path: '/06.0',
                        children: [
                            '06.0',
                            '06.1',
                            '06.2',
                            '06.3',
                            '06.4',
                            '06.5',
                            '06.6',
                            '06.7',
                            '06.8',
                            '06.9',
                            '06.10',
                            '06.11',
                            '06.12',
                        ],
                    },
                    {
                        title: '第7章：数组与切片',
                        path: '/07.0',
                        children: [
                            '07.0',
                            '07.1',
                            '07.2',
                            '07.3',
                            '07.4',
                            '07.5',
                            '07.6',
                        ],
                    },
                    {
                        title: '第8章：Map',
                        path: '/08.0',
                        children: [
                            '08.0',
                            '08.1',
                            '08.2',
                            '08.3',
                            '08.4',
                            '08.5',
                            '08.6',
                        ],
                    },
                    {
                        title: '第9章：包（package）',
                        path: '/09.0',
                        children: [
                            '09.0',
                            '09.1',
                            '09.2',
                            '09.3',
                            '09.4',
                            '09.5',
                            '09.6',
                            '09.7',
                            '09.8',
                            '09.9',
                            '09.10',
                            '09.11',
                        ],
                    },
                    {
                        title: '第10章：结构（struct）与方法（method）',
                        path: '/10.0',
                        children: [
                            '10.0',
                            '10.1',
                            '10.2',
                            '10.3',
                            '10.4',
                            '10.5',
                            '10.6',
                            '10.7',
                            '10.8',
                        ],
                    },
                    {
                        title: '第11章：接口（interface）与反射（reflection）',
                        path: '/11.0',
                        children: [
                            '11.0',
                            '11.1',
                            '11.2',
                            '11.3',
                            '11.4',
                            '11.5',
                            '11.6',
                            '11.7',
                            '11.8',
                            '11.9',
                            '11.10',
                            '11.11',
                            '11.12',
                            '11.13',
                            '11.14',
                        ],
                    },
                ],
            },
            {
                title: '第三部分：Go 高级编程',
                children: [
                    {
                        title: '第12章：读写数据',
                        path: '/12.0',
                        children: [
                            '12.0',
                            '12.1',
                            '12.2',
                            '12.3',
                            '12.4',
                            '12.5',
                            '12.6',
                            '12.7',
                            '12.8',
                            '12.9',
                            '12.10',
                            '12.11',
                            '12.12',
                        ],
                    },
                    {
                        title: '第13章：错误处理与测试',
                        path: '/13.0',
                        children: [
                            '13.0',
                            '13.1',
                            '13.2',
                            '13.3',
                            '13.4',
                            '13.5',
                            '13.6',
                            '13.7',
                            '13.8',
                            '13.9',
                            '13.10',
                        ],
                    },
                    {
                        title: '第14章：协程（goroutine）与通道（channel）',
                        path: '/14.0',
                        children: [
                            '14.0',
                            '14.1',
                            '14.2',
                            '14.3',
                            '14.4',
                            '14.5',
                            '14.6',
                            '14.7',
                            '14.8',
                            '14.9',
                            '14.10',
                            '14.11',
                            '14.12',
                            '14.13',
                            '14.14',
                            '14.15',
                            '14.16',
                            '14.17',
                        ],
                    },
                    {
                        title: '第15章：网络、模版与网页应用',
                        path: '/15.0',
                        children: [
                            '15.0',
                            '15.1',
                            '15.2',
                            '15.3',
                            '15.4',
                            '15.5',
                            '15.6',
                            '15.7',
                            '15.8',
                            '15.9',
                            '15.10',
                            '15.11',
                            '15.12',
                        ],
                    },
                ],
            },
            {
                title: '第四部分：实际应用',
                children: [
                    {
                        title: '第16章：常见的陷阱与错误',
                        path: '/16.0',
                        children: [
                            '16.0',
                            '16.1',
                            '16.2',
                            '16.3',
                            '16.4',
                            '16.5',
                            '16.6',
                            '16.7',
                            '16.8',
                            '16.9',
                            '16.10',
                        ],
                    },
                    {
                        title: '17章：模式',
                        path: '/17.0',
                        children: [
                            '17.0',
                            '17.1',
                            '17.2',
                            '17.3',
                            '17.4',
                        ],
                    },
                    {
                        title: '第18章：出于性能考虑的实用代码片段',
                        path: '/18.0',
                        children: [
                            '18.0',
                            '18.1',
                            '18.2',
                            '18.3',
                            '18.4',
                            '18.5',
                            '18.6',
                            '18.7',
                            '18.8',
                            '18.9',
                            '18.10',
                            '18.11',
                        ],
                    },
                    {
                        title: '第19章：构建一个完整的应用程序',
                        path: '/19.0',
                        children: [
                            '19.0',
                            '19.1',
                            '19.2',
                            '19.3',
                            '19.4',
                            '19.5',
                            '19.6',
                            '19.7',
                            '19.8',
                            '19.9',
                            '19.10',
                        ],
                    },
                    {
                        title: '第20章：Go 语言在 Google App Engine 的使用',
                    },
                    {
                        title: '第21章：实际部署案例',
                    },
                ],
            },
        ],
    },
}
