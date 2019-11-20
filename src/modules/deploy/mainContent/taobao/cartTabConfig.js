export default {
    taskType: {
        show: true,
        buttons: [{
                label: "搜索加购",
                value: "search_cart",
                icon: "lion-sousuo"
            },
            {
                label: "直接加购",
                value: "direct_cart",
                icon: "lion-gouwuche"
            },
            {
                label: "直播间加购",
                value: "live_cart",
                icon: "lion-zhibo"
            },
            {
                label: "淘抢购",
                value: "tao_cart",
                icon: "lion-qiang"
            }
        ],
        tools: [{
                name: "示例",
                title: "查看任务示例",
                icon: "lion-help",
                click: () => {}
            },
            {
                name: "重置",
                title: "重置任务参数",
                icon: "lion-chongzhi",
                click: () => {}
            },
            {
                name: "批量",
                title: "批量发布任务",
                icon: "lion-battch-plus",
                click: () => {}
            },
            {
                name: "另存",
                title: "另存任务方案",
                icon: "lion-save",
                click: () => {}
            }
        ]
    },
    taskDatePicker: {
        show: true
    },
    linkSearch0: {
        show: ['live_cart'],
        type: {
            live_cart: 'taobao_live'
        }
    },
    linkSearch: {
        show: true,
        type: {
            search_cart: 'taobao_product',
            direct_cart: 'taobao_product',
            live_cart: 'taobao_product',
            tao_cart: 'taobao_product'
        }

    },
    keywords: {
        show: ['search_cart']

    },
    scanItem: {
        show: ['search_cart'],
        timeOptions: {
            search_cart: [{
                    value: "100-180",
                    label: "100-180秒(免费)"
                },
                {
                    value: "180-280",
                    label: "180-280秒(+5积分)"
                },
                {
                    value: "280-380",
                    label: "280-280秒(+10积分)"
                }
            ],
        }
    },
    taskDaily: {
        show: ['direct_cart', 'live_cart', 'tao_cart']
    },
    taskDuration: {
        show: ['direct_cart', 'live_cart', 'tao_cart']
    },
    remark: {
        show: true
    }
}