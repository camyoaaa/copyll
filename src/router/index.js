import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: '/home',
        component: resolve => require(["../modules/home"], resolve)
    },
    // {
    //     path: '/home',
    //     name: 'home',
    //     redirect: '/'
    // },
    {
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
                component: resolve => require(["../modules/deploy/mainContent/chaxun"], resolve),
                children: [{
                    path: "task",
                    name: "deploy_chaxun_task",
                    component: resolve => require(["../modules/deploy/mainContent/chaxun/taskTable.vue"], resolve)
                }, ]
            },
            {
                path: "template",
                name: "deploy_moban",
                component: resolve => require(["../modules/deploy/mainContent/moban"], resolve)
            },
            {
                path: "tb/:category",
                name: "deploy_taobao",
                // component: resolve => require(["../modules/deploy/mainContent/taobao"], resolve),
                component: resolve => require(["../modules/deploy/mainContent/taobao/newIndex"], resolve),
                // children: [{
                //         path: "flow",
                //         name: "deploy_taobao_flow",
                //         component: resolve => require(["../modules/deploy/mainContent/taobao/flow"], resolve)
                //     },
                //     {
                //         path: "favorite",
                //         name: "deploy_taobao_favorite",
                //         component: resolve => require(["../modules/deploy/mainContent/taobao/favorite"], resolve)
                //     },
                //     {
                //         path: "cart",
                //         name: "deploy_taobao_cart",
                //         component: resolve => require(["../modules/deploy/mainContent/taobao/cart"], resolve)
                //     },
                //     {
                //         path: "live",
                //         name: "deploy_taobao_live",
                //         component: resolve => require(["../modules/deploy/mainContent/taobao/tlive"], resolve)
                //     },
                //     {
                //         path: "article",
                //         name: "deploy_taobao_article",
                //         component: resolve => require(["../modules/deploy/mainContent/taobao/article"], resolve)
                //     },
                // ]


            },

            {
                path: "jd/:category",
                name: "deploy_jingdong",
                component: resolve => require(["../modules/deploy/mainContent/jingdong"], resolve)
            },
            {
                path: "pdd/:category",
                name: "deploy_pinduoduo",
                component: resolve => require(["../modules/deploy/mainContent/pinduoduo"], resolve)
            },
            {
                path: "dy/:category",
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