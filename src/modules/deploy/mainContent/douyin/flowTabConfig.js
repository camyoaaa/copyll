export default {
    taskType: {
        show: true,
        buttons: [{
                label: "抖音粉丝",
                value: "fans_flow",
                icon: "lion-shoucang"
            },
            {
                label: "抖音点赞",
                value: "dianzan_flow",
                icon: "lion-dianzan"
            },
            {
                label: "抖音播放",
                value: "play_flow",
                icon: "lion-guankan"
            },
            {
                label: "抖音分享",
                value: "share_flow",
                icon: "lion-tuiguang"
            },{
                label: "抖音评论",
                value: "comment_flow",
                icon: "lion-comment"
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
            fans_flow: 'douyin_movie',
            dianzan_flow: 'douyin_movie',
            play_flow: 'douyin_movie',
            share_flow: 'douyin_movie',
            comment_flow: 'douyin_movie'
        }

    },
    taskDaily: {
        show:true
    },
    taskDuration: {
        show: true
    },
    remark: {
        show: true
    }
}