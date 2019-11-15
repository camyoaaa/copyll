import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "login",
        component: resolve => require(["../modules/login"], resolve)
    },
    {
        path: '/pclayout',
        name: 'pclayout',
        component: resolve => require(["../modules/pclayout/index.vue"], resolve)
    },
    {
        path: "/register",
        name: "register",
        component: resolve => require(["../modules/register"], resolve)
    },
    {
        path: "/download",
        name: "download",
        component: resolve => require(["../modules/clientDownloadPage"], resolve)
    },
    {
        path: "/price",
        name: "price",
        component: resolve => require(["../modules/priceListPage"], resolve)
    },
    {
        path: "/deploy",
        name: "deploy",
        component: resolve => require(["../modules/deploy/index.vue"], resolve),
        children: [{
                path: "notice",
                name: "deploy_notice",
                component: resolve => require(["../modules/deploy/mainContent/notice"], resolve)
            },
            {
                path: "hangup",
                name: "deploy_guaji",
                component: resolve => require(["../modules/deploy/mainContent/guaji"], resolve)
            },
            {
                path: "search",
                name: "deploy_chaxun",
                component: resolve => require(["../modules/deploy/mainContent/chaxun"], resolve)
            },
            {
                path: "template",
                name: "deploy_moban",
                component: resolve => require(["../modules/deploy/mainContent/moban"], resolve)
            },
            {
                path: "tb/:taskType",
                name: "deploy_taobao",
                component: resolve => require(["../modules/deploy/mainContent/taobao"], resolve),
                children: [{
                    path: "flow",
                    name: "deploy_taobao_flow",
                    component: resolve => require(["../modules/deploy/mainContent/taobao/flow"], resolve)
                }, ]


            },

            {
                path: "jd/:taskType",
                name: "deploy_jingdong",
                component: resolve => require(["../modules/deploy/mainContent/jingdong"], resolve)
            },
            {
                path: "pdd/:taskType",
                name: "deploy_pinduoduo",
                component: resolve => require(["../modules/deploy/mainContent/pinduoduo"], resolve)
            },
            {
                path: "dy/:taskType",
                name: "deploy_douyin",
                component: resolve => require(["../modules/deploy/mainContent/douyin"], resolve)
            },
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;