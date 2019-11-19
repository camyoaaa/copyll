export const taobaoConfig = {
    //类型选项卡
    classTab: [{
            name: "流量",
            value: "flow"
        },
        {
            name: "收藏",
            value: "favorite"
        },
        {
            name: "加购",
            value: "cart"
        },
        {
            name: "直播",
            value: "live"
        },
        {
            name: "文章",
            value: "article"
        }
    ],
    taskTypeList: [{
            label: "APP流量",
            value: "app_flow",
            icon: "lion-shouji1"
        },
        {
            label: "PC流量",
            value: "pc_flow",
            icon: "lion-pc"
        },
        {
            label: "直访流量",
            value: "visit_flow",
            icon: "lion-lianjie"
        }
    ],
    linkSearch: {
        show: true,
        type: {
            app_flow: 'taobao_product',
            pc_flow: 'taobao_product',
            visit_flow: 'taobao_product',
        }

    },
    scanTime: {
        show: true,
        options: {
            app_flow: 'taobao_product',
            pc_flow: 'taobao_product',
            visit_flow: 'taobao_product',
        }
    },
    keywords: {
        show: ['app_flow', 'pc_flow']

    },
    remark: true
}