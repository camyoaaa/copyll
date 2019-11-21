<template>
    <div class="ll-modal">
        <a-modal :closable="false" width="500px" :visible="visible" :footer="null" @cancel="handleCancel" :mask-style="{background:'rgba(0, 0, 0, 0.3)'}">

            <div class="modal-login" style="margin:-25px;margin-bottom:40px;border-radius:0px">
                <div class="modal-heading clearfix">
                    <img alt="猎流-网店推广系统" src="//img.alicdn.com/imgextra/i2/TB1IknuPVXXXXcjXpXXXXXXXXXX.jpg">
                    <a class="close-btn cursor-pointer" @click="visible = false"></a>
                </div>
            </div>
            <div class="modal-body mrl mll" style="margin:0 20px">
                <div class="form-group">
                    <div class="input-icon right"><i class="fa fa-user"></i>
                        <input type="tel" placeholder="手机号码" v-model="userName" class="form-control ng-valid ng-animate ng-valid-maxlength-add ng-valid-maxlength ng-valid-maxlength-add-active valid ng-dirty ng-valid-parse ng-touched" maxlength="11">
                    </div>
                </div>
                <div class="form-group clearfix mbl">
                    <div class="col-xs-6">
                        <div class="row">
                            <input type="tel" v-model="validCode" maxlength="6" class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength" placeholder="验证码">
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div class="row">
                            <a class="btn btn-default btn-block ng-binding cursor-pointer" style="margin-left: -1px;" @click="getCode">发送验证码</a>
                        </div>
                    </div>
                    <!-- <input type="text" name="code" ng-model="code" class="input-valid ng-pristine ng-untouched ng-valid"> -->
                </div>
                <div>
                    <!-- <input type="text" name="code" ng-model="code" class="input-valid ng-pristine ng-untouched ng-valid"> -->
                </div>
                <div class="form-group">
                    <div class="input-icon right"><i class="fa fa-key"></i>
                        <input type="password" v-model="password" placeholder="登录密码（6-16位，区分大小写）" class="form-control ng-valid ng-animate ng-valid-maxlength-add ng-valid-maxlength ng-valid-maxlength-add-active valid ng-dirty ng-valid-parse ng-touched" maxlength="16">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-icon right"><i class="fa fa-key"></i>
                        <input type="password" v-model="repassword" placeholder="确认密码" class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="16">
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-block btn-lg btn-warning" @click="regist">注册</button>
                </div>
                <div class="forget-password">
                    <p class="text-center">已有账号？<a class="cursor-pointer" @click="gotoLogin">点此登录</a></p>
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
            validCode: "",
            password: "",
            repassword: "",
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
        gotoLogin() {},
        regist() {},
        forgetPass() {},
        getCode() {}
    }
};
</script>
