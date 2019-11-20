<template>
  <!-- 左菜单开始 -->
  <!-- ngIf: !!ispc -->
  <!-- ngInclude: '/views/sidebar.html' -->
  <div id="sidebar" ng-if="!!ispc" class="ng-scope">
    <div class="inner ng-scope" style="top: 0px;">
      <div class="side-user text-center">
        <div class="power_tag power_tag_0"></div>
        <div
          class="headimg pointer"
          ng-class="{&#39;vip&#39;: user.p &gt; 10}"
        ></div>
        <div class="power ng-hide" ng-show="user.p &gt; 0">
          <a
            href="javascript:void(0);"
            class="btn btn-xs btn-square mbs ng-binding"
            >ID:</a
          >
        </div>
        <small ng-show="user.z !== &#39;N&#39;" class="ng-binding ng-hide"
          >N</small
        >
      </div>
      <!-- ngIf: user.p > '0' -->
      <div class="side-socre ng-scope" ng-if="user.p > '0'">
        <ul class="list-unstyled">
          <!-- ngIf: user.p !== '18' -->
          <li ng-if="user.p !== '18'" class="ng-scope">
            <span>充值积分：</span>
            <b class="text-orange ng-binding">3,400</b>
          </li>
          <!-- end ngIf: user.p !== '18' -->
          <!-- ngIf: user.p !== '18' -->
          <li ng-if="user.p !== '18'" class="ng-scope">
            <span tooltip="流量积分仅用于发布流量任务">
              <span>流量积分：</span>
              <b class="text-orange ng-binding">40,000</b>
            </span>
            <a
              href="javascript:;"
              ng-click="receive()"
              ng-show="user.lc === '0'"
              tooltip="领取积分"
            >
              <img :src="getIntegralImg" style="margin-left:5px" />
            </a>
          </li>
          <!-- end ngIf: user.p !== '18' -->
          <!-- ngIf: user.p == '18' -->
        </ul>
      </div>
      <!-- <div class="side-btns list-unstyled">
		<li ng-if="!oem || showRecharge === '1'"><a ng-click="recharge()" href="javascript:void(0);" class="btn btn-xs btn-block btn-warning btn-radius-sm">点此充值</a></li>
		<li ng-if="user.p >= '18' && ispc"><a ng-click="withdraw()" href="javascript:void(0);" class="btn btn-xs btn-block btn-warning btn-radius-sm">余额提现</a></li>
		<li ng-show="!hideTutor"><a ng-click="services();" href="javascript:void(0);" class="btn btn-xs btn-block btn-outlined btn-warning btn-radius-sm">联系导师</a></li>
	</div> -->
      <div class="side-btns flex">
        <!-- ngIf: !oem || showRecharge === '1' --><a
          ng-if="!oem || showRecharge === &#39;1&#39;"
          ng-click="recharge()"
          href="javascript:void(0);"
          class="flex-grow btn btn-warning ng-scope"
          >点此充值</a
        ><!-- end ngIf: !oem || showRecharge === '1' -->
        <!-- ngIf: user.p == '18' -->
        <a
          ng-show="!hideTutor"
          ng-click="services();"
          href="javascript:void(0);"
          class="flex-grow btn btn-outlined btn-warning"
          >联系导师</a
        >
      </div>
      <ul id="side-menu" class="list-unstyled">
        <!-- <li ng-class="{'active': path === 'tool'}">
			<a href="#/tool/credit.html">
				<i class="lion" ng-class="{'lion-tools': path === 'tool', 'lion-tools-o': path !== 'tool'}"></i>
				<span>工具箱 <img src="//mapp.alicdn.com/1554947343820g7bjTMPScqo2zWF.gif" alt="NEW"></span>
			</a>
		</li> -->
        <li
          v-for="(menu, index) in menuList"
          :key="index"
          :class="{ active:  $route.name.indexOf(menu.routeName) > -1 }"
        >
          <a @click="gotoMenu(menu.routeName)" class="cursor-pointer">
            <i
              class="lion"
              :class="
                $route.name.indexOf(menu.routeName) > -1
                  ? menu.activeIcon
                  : menu.silenceIcon
              "
            ></i>
            <span>{{ menu.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- end ngIf: !!ispc -->
</template>

<script>
import getIntegralImg from "../../../assests/lieliu_files/img/get_integral.gif";
export default {
  name: "siderBar",
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
      if(routeName == 'deploy_chaxun'){
        this.$router.push({ name: 'deploy_chaxun_task'});
        return;
      }
      this.$router.push({ name: routeName, params: { category: "flow" } });
    }
  }
};
</script>
