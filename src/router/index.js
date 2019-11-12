import Vue from "vue";
import VueRouter from "vue-router";
import deploy from "../modules/deploy/index.vue";

Vue.use(VueRouter);

const routes = [
    // {
    //     path: "/",
    //     name: "homepage",
    //     component: Home
    // },
    // {
    //     path: "/homepage",
    //     name: "homepage",
    //     component: resolve => require(["@/components/helloWorld.vue"], resolve)
    // },
    {
        path: "/deploy",
        name: "deploy",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ "../modules/deploy/index.vue")
        component: deploy
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
