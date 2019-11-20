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
                label: "预约抢购",
                value: "promise_cart",
                icon: "lion-clock"
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
    linkSearch: {
        show: true,
        type: {
            search_cart: 'jingdong_product',
            direct_cart: 'jingdong_product',
            promise_cart: 'jingdong_product',
        }

    },
    keywords: {
        show: ['search_cart']

    },
    scanItem: {
        show: ['search_cart'],
        timeOptions: {
            search_cart: [{
                    value: "30-30",
                    label: "30-30秒(免费)"
                }
            ],
        }
    },
    taskDaily: {
        show: ['direct_cart', 'promise_cart']
    },
    taskDuration: {
        show: ['direct_cart', 'promise_cart']
    },
    remark: {
        show: true
    }
}