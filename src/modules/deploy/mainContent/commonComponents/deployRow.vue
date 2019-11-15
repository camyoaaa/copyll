<template>
  <bottom-affix :offsetBottom="0" style="position:absolute;bottom:0px">
    <div class="task-footer ui-border-t clearfix ng-scope">
      <div class="pull-left ng-scope">
        <ul class="list-unstyled clearfix mbn">
          <li>
            任务耗时：<span class="font-georgia ng-binding">100-180</span>秒
          </li>
          <li>单次消费：<span class="font-georgia ng-binding">30</span>积分</li>
          <li>
            合计消费：<span class="font-georgia ng-binding">3,000</span>积分
          </li>
        </ul>
        <p
          ng-show="user.p === &#39;10&#39; || (user.p &gt; 20 &amp;&amp; user.p &lt; 25)"
          class="ng-hide"
        >
          <span
            >升级VIP会员，最高可享受约<span class="text-red">5折</span
            >的优惠！</span
          >
          <a
            href="javascript:void(0);"
            class="text-underline text-blue"
            ng-show="!oem"
            ng-click="recharge();"
            >升级VIP</a
          >
          <a
            href="https://www.lieliu.com/price"
            class="text-underline text-green"
            ng-show="!oem"
            target="new"
            >价格对比</a
          >
        </p>
      </div>
      <div class="pull-right ng-scope">
        <!-- ngIf: !oem --><a
          ng-if="!oem"
          href="https://e.lieliu.com/#/guaji.html"
          class="btn btn-lg btn-guaji ng-scope"
          >&nbsp;</a
        ><!-- end ngIf: !oem -->
        <button class="btn btn-lg btn-warning">
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
  }
};
</script>
