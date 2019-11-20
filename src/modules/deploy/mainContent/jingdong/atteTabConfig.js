export default {
    taskType: {
        show: true,
        buttons: [{
                label: "店铺关注",
                value: "shop_atte",
                icon: "lion-dianpu-o"
            },
            {
                label: "达人关注",
                value: "daren_atte",
                icon: "lion-dianzan"
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
            shop_atte: 'jingdong_shop',
            daren_atte: 'jingdong_daren_shop'
        }

    },
    taskDaily: {
        show: true
    },
    taskDuration: {
        show: true
    },
    remark: {
        show: true
    }
}