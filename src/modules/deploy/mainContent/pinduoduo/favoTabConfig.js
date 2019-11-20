export default {
    taskType: {
        show: true,
        buttons: [{
                label: "搜索收藏",
                value: "search_favo",
                icon: "lion-sousuo"
            },
            {
                label: "直接收藏",
                value: "direct_favo",
                icon: "lion-gouwudai"
            },
            {
                label: "店铺收藏",
                value: "shop_favo",
                icon: "lion-store"
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
            search_favo: 'pinduoduo_product',
            direct_favo: 'pinduoduo_product',
            shop_favo:"pinduoduo_shop"
        }

    },
    keywords: {
        show: ['search_favo']

    },
    scanItem: {
        show: ['search_favo'],
        timeOptions: {
            app_flow: [{
                    value: "30-100",
                    label: "30-100秒(免费)"
                },
                {
                    value: "100-180",
                    label: "100-180秒(+5积分)"
                },
                {
                    value: "180-280",
                    label: "180-280秒(+10积分)"
                },
                {
                    value: "280-380",
                    label: "280-280秒(+15积分)"
                }
            ]
        }
    },
    taskDaily: {
        show: ['direct_favo','shop_favo']
    },
    taskDuration: {
        show: ['direct_favo','shop_favo']
    },
    remark: {
        show: true
    }
}