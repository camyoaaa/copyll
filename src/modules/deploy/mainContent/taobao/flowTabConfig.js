export default {
    taskType: {
        buttons: [{
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
    taskDatePicker: true,
    linkSearch: {
        show: true,
        type: {
            app_flow: 'taobao_product',
            pc_flow: 'taobao_product',
            visit_flow: 'taobao_product',
        }

    },
    keywords: {
        show: ['app_flow', 'pc_flow']

    },
    scanItem: {
        show: true,
        timeOptions: {
            app_flow: [{
                    value: "30-100",
                    label: "30-100秒(免费)"
                },
                {
                    value: "100-180",
                    label: "100-180秒(+8积分)"
                },
                {
                    value: "180-280",
                    label: "180-280秒(+13积分)"
                },
                {
                    value: "280-380",
                    label: "280-280秒(+18积分)"
                }
            ],
            pc_flow: [{
                    value: "30-50",
                    label: "30-50秒(免费)"
                },
                {
                    value: "50-90",
                    label: "50-90秒(+5积分)"
                },
                {
                    value: "90-130",
                    label: "90-130秒(+10积分)"
                }
            ],
            visit_flow: [{
                    value: "30-50",
                    label: "30-50秒(免费)"
                },
                {
                    value: "50-90",
                    label: "50-90秒(+5积分)"
                },
                {
                    value: "90-130",
                    label: "90-130秒(+10积分)"
                }
            ],
        }
    },
    remark: true
}