<template>
    <div class="ll-modal">
        <a-modal title="充值积分" width="900px" :visible="visible" @ok="handleOk" :confirmLoading="confirmLoading" @cancel="handleCancel" :mask-style="{background:'rgba(0, 0, 0, 0.3)'}">
            <div class="form-horizontal">
                <div class="form-group hidden-xs">
                    <label class="col-sm-2 control-label">充值账号</label>
                    <div class="col-sm-9">
                        <div class="form-control-static">
                            <span class="ng-binding">{{account}}</span>
                            <span class="mll">会员等级：</span>
                            <span class="user-grade api"><span>{{userType}}</span></span>
                        </div>
                    </div>
                </div>
                <!-- <div ng-show="!ispc" style="border-bottom: 12px solid rgb(245, 245, 245); margin: 0px -20px; padding-bottom: 10px;" class="ng-hide">
                    <div class="flex flex-row">
                        <div class="flex-static" style="width: 100px; text-align: center;">
                            <svg t="1567046982668" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12378" width="56" height="56">
                                <path fill="#d4d4d4" d="M484.333639 0Q389.066911 0 301.778185 37.074244T151.604033 137.033914 51.644363 286.738772 14.570119 469.294225t37.074244 182.555454 99.95967 150.174152 150.174152 100.428965T484.333639 939.527039 666.889093 902.452796t150.174152-100.428965 99.95967-150.174152T954.097159 469.294225t-37.074244-182.555453T817.063245 137.033914 666.889093 37.074244 484.333639 0zM795.47571 761.195234l-28.157653 28.157653q-73.209899-63.824015-121.07791-85.411549-56.315307-27.219065-67.578369-57.253895-7.508708-20.648946 6.570119-47.868011 4.692942-8.447296 11.732356-21.587535t7.978002-15.017415q16.894592-30.03483 23.934005-46.460128t14.078827-55.376719T649.9945 366.988084q0-49.745188-10.793767-86.350137t-25.341888-54.43813-33.789184-28.626948-30.034831-12.670944-20.179651-1.877177q-16.894592 0-36.60495 7.508708-23.464711 7.508708-47.868011 7.508707-14.078827 0.938588-22.526123 1.407883t-25.341888 3.754354-27.688359 9.385884-24.872594 17.833181-22.056829 28.626947-14.078826 43.175069-6.100825 60.069661q0 51.622365 9.385884 95.266728t18.302475 62.416132 24.872594 47.868011q11.263061 20.648946 15.956004 30.973419 28.157654 64.762603-45.052246 97.613199-47.868011 20.648946-75.087076 36.135655T189.147571 778.089826l-15.017415-13.140238q-55.376719-59.131072-86.350138-135.156737T56.806599 470.232814q0-87.288726 33.789185-166.130156t91.043079-136.095325 136.095326-91.04308 165.660861-33.789184 166.130156 33.789184T786.089826 168.007333t91.04308 136.095325 33.789184 166.130156q0 82.595784-30.034831 157.68286t-85.411549 133.27956z" p-id="12379"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <p class="ng-binding">充值账号：13088888897</p>
                            <p>会员等级：<span class="user-grade api"><span class="ng-binding">代理商</span></span>
                                <span class="text-gray">（永久）</span></p>
                        </div>
                    </div>
                </div> -->
                <div class="form-group">
                    <label class="col-sm-2 control-label">选择套餐</label>
                    <div class="col-sm-9">
                        <div class="new-racharge-list">
                            <div class="row">
                                <div class="col-md-3 col-xs-6" v-for="(meal,index) in mealList" :key="index">
                                    <a @click="selectMeal = meal" :class="{'active':meal.id == selectMeal.id}">
                                        <div class="discount ng-binding">{{meal.priceType}}</div>
                                        <div class="face">
                                            <b class="font-georgia ng-binding">{{toFinanceNumber(meal.price)}}</b><span>元</span>
                                        </div>
                                        <div class="score ng-binding">{{meal.score}}万积分</div>
                                        <div class="promo">
                                            <span v-if="!meal.give">无赠送积分</span>
                                            <span v-else>送<span class="text-orange">{{meal.give}}</span>元流量积分</span>
                                        </div>
                                        <div class="tag">{{userType}}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">套餐详情</label>
                    <div class="col-sm-9">
                        <div>
                            <div class="recharge-content ng-binding" ng-bind-html="title">可获得<b>{{selectMeal.score}}</b>万积分！</div>
                            <div class="text-gray ng-binding">可发布{{Math.floor(selectMeal.score/15)}}个标准流量(15积分/个)，约{{Math.floor(selectMeal.score/35)}}个收藏(35积分/个)
                                <a class="text-underline text-orange" @click="gotoPrice">查看任务价格表</a></div>
                        </div>
                    </div>
                </div>
                <div class="form-group hidden-xs">
                    <label class="col-sm-2 control-label">充值金额</label>
                    <div class="col-sm-9">
                        <div class="text-orange">¥<b style="font-size: 22px;" class="ng-binding">{{selectMeal.price}}</b></div>
                    </div>
                </div>
                <div class="form-group mbn">
                    <label class="col-sm-2 control-label">支付方式</label>
                    <div class="col-sm-9">
                        <div class="form-control-static">
                            <a-radio-group :options="payWayOptions" v-model="payWay" />
                        </div>
                    </div>
                </div>
            </div>
            <template slot="footer">
                <div style="text-align:center">
                    <button class="btn btn-success btn-square fa fa-check" style="width:120px;height:32px"> 立即充值</button>
                    <a href="" ng-click="close()" class="btn btn-default btn-square" style="margin-left:10px">取消</a>

                </div>
                <div class="modal-tips">
                    <i ng-show="!ispc" class="lion lion-guanyu text-orange ng-hide" style=""></i>
                    提示：<span class="hidden-xs">充值积分可发布所有任务，</span>赠送的流量积分只能发布流量任务
                </div>
            </template>
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
            visible: false,
            confirmLoading: false,
            account: 13088888897,
            userType: "代理商",
            mealList: [],
            selectMeal: {},
            payWay: "zhifubao",
            payWayOptions: [
                { label: "支付宝支付", value: "zhifubao" },
                { label: "微信支付", value: "weixin" }
            ]
        };
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk() {
            this.confirmLoading = true;
            setTimeout(() => {
                this.visible = false;
                this.confirmLoading = false;
            }, 2000);
        },
        handleCancel() {
            this.visible = false;
        },
        getMealList() {
            this.mealList = [
                {
                    id: "meal1",
                    price: 2000,
                    priceType: "密价",
                    score: 100,
                    give: 0
                },
                {
                    id: "meal2",
                    price: 3000,
                    priceType: "密价",
                    score: 150,
                    give: 0
                },
                {
                    id: "meal3",
                    price: 4000,
                    priceType: "密价",
                    score: 200,
                    give: 0
                },
                {
                    id: "meal4",
                    price: 5000,
                    priceType: "密价",
                    score: 250,
                    give: 0
                },
                {
                    id: "meal5",
                    price: 10000,
                    priceType: "密价",
                    score: 500,
                    give: 0
                },
                {
                    id: "meal6",
                    price: 20000,
                    priceType: "密价",
                    score: 1000,
                    give: 0
                },
                {
                    id: "meal7",
                    price: 30000,
                    priceType: "密价",
                    score: 1500,
                    give: 0
                },
                {
                    id: "meal8",
                    price: 50000,
                    priceType: "密价",
                    score: 2500,
                    give: 0
                }
            ];
            this.selectMeal = this.mealList[0];
        },
        toFinanceNumber(number) {
            return new Number(number).toLocaleString();
        },
        gotoPrice() {
            this.$router.push({ name: "price" });
        }
    },
    created() {
        this.getMealList();
    }
};
</script>
