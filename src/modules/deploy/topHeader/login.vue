<template>
    <div class="ll-modal">
        <a-modal :closable="false" width="500px" :visible="visible" :footer="null" @cancel="handleCancel" :mask-style="{background:'rgba(0, 0, 0, 0.3)'}">

            <div class="modal-login" style="margin:-25px;margin-bottom:40px;border-radius:0px">
                <div class="modal-heading clearfix">
                    <img alt="猎流-网店推广系统" src="//img.alicdn.com/imgextra/i2/TB1IknuPVXXXXcjXpXXXXXXXXXX.jpg">
                    <a class="close-btn cursor-pointer" @click="visible = false"></a>
                </div>
            </div>
            <div class="modal-body mrl mll" style="margin:0px 20px">
                <div class="form-group">
                    <div class="input-icon right"><i class="fa fa-user"></i>
                        <input type="tel" placeholder="手机号/邮箱" v-model="userName" class="form-control ng-valid ng-valid-maxlength valid ng-dirty ng-valid-parse ng-touched" maxlength="36">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-icon right"><i class="fa fa-key"></i>
                        <input type="password" placeholder="登录密码" v-model="password" class="form-control ng-valid ng-animate ng-valid-maxlength-add ng-valid-maxlength ng-valid-maxlength-add-active valid ng-dirty ng-valid-parse ng-touched" maxlength="16">
                    </div>
                </div>
                <div class="form-group pull-left">
                    <div class="checkbox-list">
                        <label><input type="checkbox" v-model="remember" class="ng-pristine ng-untouched ng-valid">&nbsp; 记住登录账号</label>
                    </div>
                </div>
                <div class="form-group pull-right">
                    <a @click="forgetPass" class="btn-forgot-pwd cursor-pointer">找回密码</a>
                </div>
                <div class="clearfix"></div>
                <div class="form-group">
                    <button class="btn btn-block btn-lg btn-warning" @click="login">登录</button>
                </div>
                <div class="forget-password">
                    <p class="text-center">还没有账号？<a class="cursor-pointer" @click="regist">注册新用户</a></p>
                </div>
            </div>

        </a-modal>
    </div>
</template>
<style>
.ant-modal-header {
    background: #ff5010;
}
.ant-modal-title {
    font-size: 14px;
    color: white;
}
.ant-modal-close,
.ant-modal-close:focus,
.ant-modal-close:hover {
    color: white;
    text-decoration: none;
}
.modal-tips {
    background: #e8e8e8;
    border-top: 1px #ddd solid;
    text-align: center;
    margin: 10px -16px -10px -16px;
    height: 30px;
    line-height: 30px;
    color: #777;
}
.close-btn {
    font-family: "lion" !important;
    float: right;
    font-size: 1.3em;
    line-height: 100%;
    margin: -15px;
    padding: 15px;
    height: 48px;
    width: 48px;
    color: #ffffff;
}
</style>
<script>
import logo from "./logo.png";
export default {
    data() {
        return {
            visible: false,
            userName: "",
            password: "",
            remember: false,
            logo
        };
    },
    methods: {
        open() {
            this.visible = true;
        },
        handleCancel() {
            this.visible = false;
        },
        login() {},
        regist() {},
        forgetPass() {}
    }
};
</script>
