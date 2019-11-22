<template>
  <div ng-controller="CtrlGuaji" class="task-page scroll-full ng-scope">
    <div class="page-guaji">
      <div class="guaji-banner">
        <div class="image"></div>
      </div>
      <div class="guaji-body clearfix">
        <div class="guaji-header">
          <ad-scroll ref="adScroll"></ad-scroll>
        </div>
        <div></div>
        <div class="guaji-section">
          <h2>什么是挂机？</h2>
          <h3>使用猎流挂机功能，只要有电脑有网络，系统将自动为您赚钱！</h3>
          <ol class="list-unstyled">
            <li>
              <span class="text-orange">◆</span>
              所有用户自由参与，没有任何门槛收费
            </li>
            <li>
              <span class="text-orange">◆</span>
              只要有网络，开着电脑无需看管，让电脑为您赚钱
            </li>
            <li>
              <span class="text-orange">◆</span>
              海量任务、自动结算，超多佣金、自由提现
            </li>
            <li>
              <span class="text-orange">◆</span> 具体挂机详情，请查看
              《猎流挂机规则》
            </li>
          </ol>
          <hr />
          <h2>挂机步骤</h2>
          <h3>挂机获得收藏金币，可随时提现或兑换积分哦！</h3>
          <ul class="list-unstyled">
            <li>
              <span class="text-orange">1.</span>
              请在挂机页面点击“+添加小号”添加您的淘宝账号（注：添加小号越多收入越高！）
            </li>
            <li>
              <span class="text-orange">2.</span>
              添加完账号，请“点击登录”并“加入挂机”
            </li>
            <li>
              <span class="text-orange">3.</span>
              最后不要忘记点击“开始挂机”按钮哦！
            </li>
          </ul>
        </div>
        <div class="guaji-rank">
          <div>
            <h2>近一周收益排行</h2>
          </div>
          <!-- <div ui-spinner="" ng-show="!drawRankList" class="ng-isolate-scope ng-hide" style=""><div class="loading-box"><div><div class="load-spinner"><div class="load-inner"><div class="bounce bounce1"></div><div class="bounce bounce2"></div><div class="bounce bounce3"></div></div><p class="mtm">加载中...</p></div></div></div></div> -->
          <ul class="list-unstyled">
            <!-- ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding rank-top"
                  ng-class="{'rank-top': $index < 3}"
                  >1</i
                >133****7668
              </div>
              <div class="pull-right text-right ng-binding">818.49</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding rank-top"
                  ng-class="{'rank-top': $index < 3}"
                  >2</i
                >39313****@qq.com
              </div>
              <div class="pull-right text-right ng-binding">671.09</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding rank-top"
                  ng-class="{'rank-top': $index < 3}"
                  >3</i
                >50734****@qq.com
              </div>
              <div class="pull-right text-right ng-binding">633.85</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding"
                  ng-class="{'rank-top': $index < 3}"
                  >4</i
                >l****@163.com
              </div>
              <div class="pull-right text-right ng-binding">532.26</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding"
                  ng-class="{'rank-top': $index < 3}"
                  >5</i
                >l****@163.com
              </div>
              <div class="pull-right text-right ng-binding">530.46</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding"
                  ng-class="{'rank-top': $index < 3}"
                  >6</i
                >1335818****@qq.com
              </div>
              <div class="pull-right text-right ng-binding">498.75</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding"
                  ng-class="{'rank-top': $index < 3}"
                  >7</i
                >170****8255
              </div>
              <div class="pull-right text-right ng-binding">458.94</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding"
                  ng-class="{'rank-top': $index < 3}"
                  >8</i
                >ckl****@163.com
              </div>
              <div class="pull-right text-right ng-binding">446.88</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding"
                  ng-class="{'rank-top': $index < 3}"
                  >9</i
                >1530150****@qq.com
              </div>
              <div class="pull-right text-right ng-binding">421.49</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding"
                  ng-class="{'rank-top': $index < 3}"
                  >10</i
                >cxq****@163.com
              </div>
              <div class="pull-right text-right ng-binding">416.81</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
            <li
              class="clearfix ng-scope"
              ng-repeat="item in drawRankList track by $index"
            >
              <div class="pull-left ng-binding">
                <i
                  class="rank-num ng-binding"
                  ng-class="{'rank-top': $index < 3}"
                  >11</i
                >l****@163.com
              </div>
              <div class="pull-right text-right ng-binding">394.58</div>
            </li>
            <!-- end ngRepeat: item in drawRankList track by $index -->
          </ul>
        </div>
      </div>
      <div class="guaji-footer">
        <a-affix :offsetBottom="0" style="position:absolute;bottom:0px">
          <div class="task-footer" style="border-left-width:0px">
            <a
              class="btn btn-lg btn-warning btn-square"
              ng-click="downloadClient();"
              href="javascript:void(0);"
              ><i class="lion lion-xiazai"></i> 我要挂机赚钱</a
            >
          </div>
        </a-affix>
      </div>
    </div>
  </div>
</template>

<script>
import adScroll from "./adScroll.vue";
export default {
  name: "guaji",
  components: { adScroll },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        direction: "horizontal", //控制滚动的方向
        paginationClickable: true,
        autoplay: {
          delay: 2000 //这里需要注意，如果想每2秒去自动切换，直接autoplay:2000是失效的，
        },
        loop: true,
        on: {
          click: function() {}
        }
      }
    };
  },
  methods: {}
};
</script>
