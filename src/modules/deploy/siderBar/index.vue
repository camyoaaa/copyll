<template>
    <!-- 左菜单开始 -->
    <!-- ngIf: !!ispc -->
    <!-- ngInclude: '/views/sidebar.html' -->
    <div id="sidebar">
        <div class="inner" style="top: 0px;">
            <div class="side-user text-center">
                <div class="power_tag power_tag_0"></div>
                <div class="headimg pointer"></div>
                <div class="power ng-hide">
                    <a class="btn btn-xs btn-square mbs ng-binding">ID:</a>
                </div>
                <small class="ng-binding ng-hide">N</small>
            </div>
            <div class="side-socre">
                <ul class="list-unstyled">
                    <li ng-if="user.p !== '18'" class="ng-scope">
                        <span>充值积分：</span>
                        <b class="text-orange ng-binding">3,400</b>
                    </li>
                    <li ng-if="user.p !== '18'" class="ng-scope">
                        <span tooltip="流量积分仅用于发布流量任务">
                            <span>流量积分：</span>
                            <b class="text-orange ng-binding">40,000</b>
                        </span>
                        <a @click="getScore" tooltip="领取积分">
                            <img :src="getIntegralImg" style="margin-left:5px" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="side-btns flex">
                <a @click="recharge" class="flex-grow btn btn-warning ng-scope">点此充值</a>
                <a @click="contactGuide" class="flex-grow btn btn-outlined btn-warning">联系导师</a>
            </div>
            <ul id="side-menu" class="list-unstyled">
                <li v-for="(menu, index) in menuList" :key="index" :class="{ active:  $route.name.indexOf(menu.routeName) > -1 }">
                    <a @click="gotoMenu(menu.routeName)" class="cursor-pointer">
                        <i class="lion" :class="
                $route.name.indexOf(menu.routeName) > -1
                  ? menu.activeIcon
                  : menu.silenceIcon
              "></i>
                        <span>{{ menu.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
        <recharge-modal ref="llModal"></recharge-modal>
        <contact-modal ref="contactModal"></contact-modal>

    </div>
    <!-- end ngIf: !!ispc -->
</template>

<script>
import getIntegralImg from "../../../assests/lieliu_files/img/get_integral.gif";
import rechargeModal from "./rechargeModal.vue";
import contactModal from "./contactModal.vue";

export default {
    name: "siderBar",
    components: {
        rechargeModal,
        contactModal
    },
    data() {
        return {
            userInfo: {
                customType: 0, //0表示未登录
                userID: 1123456,
                userTel: 18428369147,
                rechargeIntegral: 2000,
                flowIntegral: 2798000
            },
            getIntegralImg,
            menuList: [
                // {
                //   name: "工具箱",
                //   routeName: "deploy_tools",
                //   activeIcon: "lion-tools",
                //   silenceIcon: "lion-tools-o"
                // },
                {
                    name: "淘宝任务",
                    routeName: "deploy_taobao",
                    activeIcon: "lion-tb",
                    silenceIcon: "lion-tb-o"
                },
                {
                    name: "京东任务",
                    routeName: "deploy_jingdong",
                    activeIcon: "lion-jd",
                    silenceIcon: "lion-jd-o"
                },
                {
                    name: "拼多多任务",
                    routeName: "deploy_pinduoduo",
                    activeIcon: "lion-pdd",
                    silenceIcon: "lion-pdd-o"
                },
                {
                    name: "抖音任务",
                    routeName: "deploy_douyin",
                    activeIcon: "lion-douyin",
                    silenceIcon: "lion-douyin-o"
                },
                {
                    name: "挂机赚钱",
                    routeName: "deploy_guaji",
                    activeIcon: "lion-guaji",
                    silenceIcon: "lion-guaji-o"
                },
                {
                    name: "业务查询",
                    routeName: "deploy_chaxun",
                    activeIcon: "lion-chaxun",
                    silenceIcon: "lion-chaxun-o"
                },
                {
                    name: "任务模板",
                    routeName: "deploy_moban",
                    activeIcon: "lion-moban",
                    silenceIcon: "lion-moban-o"
                }
                //   {
                //     name: "开店管家",
                //     routeName: "deploy_dianpu",
                //     activeIcon: "lion-dianpu",
                //     silenceIcon: "lion-dianpu-o"
                //   }
            ]
        };
    },
    methods: {
        gotoMenu(routeName) {
            if (routeName == "deploy_chaxun") {
                this.$router.push({ name: "deploy_chaxun_task" });
                return;
            }
            this.$router.push({
                name: routeName,
                params: { category: "flow" }
            });
        },
        getScore() {},
        contactGuide() {
            this.$refs.contactModal.open();
        },
        recharge() {
            this.$refs.llModal.showModal();
        }
    }
};
</script>
