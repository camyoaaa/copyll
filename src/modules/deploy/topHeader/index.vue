<template>
    <!-- 顶部菜单开始 -->
    <div class="page-header-topbar">
        <div class="topbar-main ng-scope">
            <div class="topbar-main ng-scope" ng-controller="HeaderCtrl">
                <a class="logo" @click="goHome">
                    <!-- <h1 style="color:white;font-weight:bold">Logo</h1> -->
                </a>
                <div class="pull-right topbar-nav list-unstyled ng-scope">
                    <div class="login-btn-group">
                        <a class="btn btn-yellow btn-square lion lion-yonghu2" @click="goLogin">
                            登录</a>
                        <a class="btn btn-yellow btn-square lion lion-zhuce" style="margin-left:5px" @click="goRegister">
                            注册</a>
                    </div>
                </div>
                <ul class="pull-right topbar-nav list-unstyled">
                    <li class="hidden-md dropdown">
                        <a @click="gotoClientDownloadPage"><i class="lion lion-xiazai"></i> 客户端下载</a>
                    </li>
                    <li class="hidden-md dropdown">
                        <a @click="gotoPriceListPage"><i class="lion lion-qian"></i> 任务价格表</a>
                    </li>
                </ul>
                <ul class="pull-left topbar-nav list-unstyled ng-scope" style="margin-left: 55px;">
                    <li class="hidden-md dropdown ng-scope">
                        <a @click="gotoNoticePage" class="notice ng-binding"><i class="lion lion-gonggao"></i>
                            公告：遇到恶意退款和虚假交易怎么办？</a>
                    </li>
                </ul>
                <!-- end ngIf: !oem -->
            </div>
        </div>
        <login-modal ref="loginModal"></login-modal>
        <regist-modal ref="registModal"></regist-modal>
        <!-- end ngIf: !!ispc -->
    </div>
</template>

<script>
import loginModal from "./login.vue";
import registModal from "./regist.vue";

export default {
    components: { loginModal, registModal },
    methods: {
        goHome() {
            this.$router.push({ name: "home" });
        },
        goLogin() {
            this.$refs.loginModal.open();
        },
        goRegister() {
            this.$refs.registModal.open();
        },
        gotoClientDownloadPage() {
            this.$router.push({ name: "download" });
        },
        gotoPriceListPage() {
            this.$router.push({ name: "price" });
        },
        gotoNoticePage() {
            this.$router.push({ name: "deploy_notice" });
        }
    }
};
</script>
