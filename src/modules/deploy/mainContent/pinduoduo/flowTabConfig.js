export default {
    taskType: {
        show: true,
        buttons: [{
                label: "APP流量",
                value: "app_flow",
                icon: "lion-shouji1"
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
    taskName:{
        show:true
    },
    linkSearch: {
        show: true,
        type: {
            app_flow: 'pinduoduo_product',
        }

    },
    keywords: {
        show: ['app_flow']

    },
    scanItem: {
        show: true,
        timeOptions: {
            app_flow: [
                {
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
            ]
        }
    },
    remark: {
        show: true
    }
}