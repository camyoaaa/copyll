<template>
    <bottom-affix :offsetBottom="0" style="position:absolute;bottom:0px">
        <div class="task-footer ui-border-t clearfix ng-scope">
            <div class="pull-left ng-scope">
                <ul class="list-unstyled clearfix mbn">
                    <li>
                        任务耗时：<span class="font-georgia ng-binding">{{form.scanTime}}</span>秒
                    </li>
                    <li>单次消费：<span class="font-georgia ng-binding">{{price}}</span>积分</li>
                    <li>
                        合计消费：<span class="font-georgia ng-binding">{{totalIntegration}}</span>积分
                    </li>
                </ul>
                <p ng-show="user.p === &#39;10&#39; || (user.p &gt; 20 &amp;&amp; user.p &lt; 25)" class="ng-hide">
                    <span>升级VIP会员，最高可享受约<span class="text-red">5折</span>的优惠！</span>
                    <a class="text-underline text-blue cursor-pointer" ng-click="recharge();">升级VIP</a>
                    <a class="text-underline text-green" @click="gotoPriceListPage">价格对比</a>
                </p>
            </div>
            <div class="pull-right ng-scope">
                <a ng-if="!oem" class="btn btn-lg btn-guaji ng-scope cursor-pointer" @click="gotoGuajiPage">&nbsp;</a>
                <button class="btn btn-lg btn-warning" @click="deployTask">
                    <i class="fa fa-paper-plane"></i> 发布任务
                </button>
            </div>
        </div>
    </bottom-affix>
</template>

<script>
import { Affix } from "ant-design-vue";
export default {
    name: "deployRow",
    components: {
        bottomAffix: Affix
    },
    props: {
        form: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        taskDuration() {
            //任务时长
            let start = this.$moment(this.form.daterange[0]);
            let end = this.$moment(this.form.daterange[1]);
            return end.diff(start, "days") + 1;
        },
        taskDaily() {
            //每日任务量
            if (this.form.keywords.length == 0) {
                return 0;
            } else {
                return this.form.keywords
                    .map(k => k.num)
                    .reduce((a, b) => a + b);
            }
        },
        price() {
            return 7;
        },
        totalIntegration() {
            return this.price * this.taskDuration * this.taskDaily;
        }
    },
    methods: {
        deployTask() {
            this.$emit("deploy");
        },
        gotoPriceListPage() {
            window.open(`${window.location.host}/price`);
        },
        gotoGuajiPage() {
            this.$router.push({ name: "deploy_guaji" });
        }
    }
};
</script>
