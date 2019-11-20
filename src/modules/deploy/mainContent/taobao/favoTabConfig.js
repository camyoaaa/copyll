export default {
    taskType: {
        show: true,
        buttons: [{
                label: "搜索收藏",
                value: "search_fav"
            },
            {
                label: "商品收藏",
                value: "product_fav",
            },
            {
                label: "店铺收藏",
                value: "shop_fav",
            },
            {
                label: "商品点赞",
                value: "like_fav",
            },
            {
                label: "聚划算",
                value: "juhs_fav",
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
    juhsTip: {
        show: ['juhs_fav']
    },
    taskDatePicker: {
        show: true
    },
    linkSearch: {
        show: true,
        type: {
            search_fav: 'taobao_product',
            product_fav: 'taobao_product',
            shop_fav: 'taobao_shop',
            like_fav: 'taobao_product',
            juhs_fav: 'taobao_juhs',
        }

    },
    keywords: {
        show: ['search_fav']

    },
    scanItem: {
        show: ['search_fav'],
        timeOptions: {
            search_fav: [{
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
        show: ['product_fav', 'shop_fav', 'like_fav', 'juhs_fav']
    },
    taskDuration: {
        show: ['product_fav', 'shop_fav', 'like_fav', 'juhs_fav']
    },
    remark: {
        show: true
    }
}