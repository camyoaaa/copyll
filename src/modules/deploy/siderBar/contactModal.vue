<template>
    <div class="ll-modal">
        <a-modal title="联系导师" width="500px" :visible="visible" :footer="null" @cancel="handleCancel" :mask-style="{background:'rgba(0, 0, 0, 0.3)'}">
            <div class="row ng-scope" ng-if="tutor.id !== 'N'">
                <div class="col-xs-5 text-center">
                    <img ng-src="//mapp.alicdn.com/14954442057490iNfueXMYpL2U7i.png" width="120" height="120" src="//mapp.alicdn.com/14954442057490iNfueXMYpL2U7i.png">
                    <p class="ptl mbn ng-binding"><i class="fa fa-user text-orange"></i> 贺老师</p>
                    <p class="pts ng-binding"><i class="fa fa-wechat text-green"></i> 微信号 cd7284</p>
                </div>
                <div class="col-md-7 text-l text-center" style="margin-top:10px">
                    <img ng-src="//mapp.alicdn.com/15657596501308iAf0ZNfTl4RB7r.png" width="110" height="110" src="//mapp.alicdn.com/15657596501308iAf0ZNfTl4RB7r.png">
                    <p class="text-orange ptl">有问题？扫码加导师微信！</p>
                    <p ng-show="tutor.kwx === 'N'">还可以领取<b class="text-red font-georgia text-lg">2,000</b> 积分</p>
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
</style>
<script>
export default {
    data() {
        return {
            visible: false
        };
    },
    methods: {
        open() {
            this.visible = true;
        },
        handleCancel() {
            this.visible = false;
        }
    }
};
</script>
