<template>
  <div class="scroll-full task-page ng-scope" ng-controller="CtrlNotice">
    <!-- 移动端头部 -->
    <!-- ngIf: !ispc -->
    <div class="scroll-viewer">
      <ul id="generalTab" class="nav nav-tabs ul-edit responsive hidden-xs">
        <li class="active">
          <a>系统公告</a>
        </li>
      </ul>
      <div class="panel panel-white">
        <!-- ngIf: !!ispc -->
        <div class="notice-list ng-scope" ng-if="!!ispc">
          <!-- ngRepeapublicTime: item in dataList track by $index -->
          <dl
            v-for="(notice, index) in noticeList"
            :key="index"
            class="ui-border-b mbn ng-scope show"
          >
            <dt class="clearfix">
              <img
                v-if="index == 0"
                :src="newNoticeImg"
                style="margin-right:5px"
              />
              <span class="ng-binding">{{ notice.title }}</span>
              <span class="text-gray pull-right ng-binding">{{
                notice.publicTime
              }}</span>
            </dt>
            <dd v-html="notice.detail"></dd>
          </dl>
        </div>
        <!-- end ngIf: !!ispc -->
        <!-- ngIf: !ispc -->
      </div>
    </div>
  </div>
</template>

<script>
import newNoticeImg from "../../../../assests/lieliu_files/img/new_notice.gif";
export default {
  name: "notice",
  data() {
    return {
      newNoticeImg,
      noticeList: [
        {
          d: "33517",
          title: "降价通知，已恢复原价！",
          detail: "全面降价通知，已恢复为双11之前的价格，请知悉！",
          publicTime: "2019-11-11"
        },
        {
          d: "33420",
          title: "遇到恶意退款和虚假交易怎么办？",
          detail:
            "遇到恶意退款和虚假交易怎么办？<a href='https://www.heixi.com' target='_blank'>点此使用</a>黑犀网店卫士！",
          publicTime: "2019-11-07"
        },
        {
          d: "33317",
          title: "双11涨价通知！",
          detail:
            "双11活动期间，因成本增加，任务量大，按照惯例，猎流平台的商品加购、商品收藏、店铺收藏，价格将在2019.11.1日凌晨0点上调至1毛钱以上，其他业务价格不变，预计2019.11.12日凌晨0点恢复原价，请知悉！",
          publicTime: "2019-10-30"
        },
        {
          d: "33318",
          title: "直播间加购上线，助力双11！",
          detail:
            "通知：直播间加购上线，可到 <a href='http://e.lieliu.com' target='_blank'>http://e.lieliu.com</a> 的“加购”模块中发布任务！",
          publicTime: "2019-10-29"
        },
        {
          d: "33020",
          title: "淘宝店铺收藏价格上调1分钱！",
          detail:
            "因成本增加，淘宝店铺收藏/达人粉丝价格上调1分钱，2019.10.13号凌晨0点执行！",
          publicTime: "2019-10-13"
        },
        {
          d: "33018",
          title: "猎流挂机新福利，送现金咯！",
          detail:
            "<font color='#0000ff'>淘气值405以上：</font>每次任务返<font color='#ff0000'>2倍</font>金币，首次添加立返100金币/0.2元。<font color='#0000ff'>淘气值800以上：</font>每次任务返<font color='#ff0000'>3倍</font>金币，首次添加立返200金币/0.4元。 <font color='#0000ff'>举例：</font><font color='#009900'>原本返4金币的任务，4x2倍，可得8金币。原本返4金币的任务，4x3倍，可得12金币。</font><span style='color: rgb(255, 0, 0);'>账号首返金币仅限第一次，重复添加无效！</span>",
          publicTime: "2019-10-11"
        },
        {
          d: "32817",
          title: "淘宝店铺收藏价格大幅下调！",
          detail:
            "即刻起，淘宝店铺收藏/淘宝达人关注价格大幅下调。<a href='https://www.lieliu.com/price' target='_blank'><font color='#ff0000'>详细价格点此查看</font></a>",
          publicTime: "2019-09-11"
        },
        {
          d: "32720",
          title: "京东收藏、加购业务恢复！",
          detail: "京东收藏、加购业务恢复，任务速度不错，欢迎发布任务。",
          publicTime: "2019-09-06"
        },
        {
          d: "32519",
          title: "新的会员体系已上线，充值就送VIP",
          detail:
            "新的会员体系已上线，充500元起可<font color='#ff0000'>免费获赠VIP会员</font>，一共分为VIP1~VIP5五个会员等级，VIP等级越高，享受的任务折扣就越实惠，<font color='#ff0000'>最低可低至所有任务5折</font>。<a href='https://e.lieliu.com/price.html' target='_blank'>点此查看新的任务扣费详情</a><br>",
          publicTime: "2019-08-30"
        },
        {
          d: "32419",
          title: "好消息，新增淘宝商品点赞！",
          detail:
            "新增淘宝商品点赞任务，<font color='#ff0000'>100%到账不过滤</font>，<font color='#0000ff'>可快速提升商品人气热度</font>，可点击“收藏任务”中的“商品点赞”进行发布，价格实惠。",
          publicTime: "2019-08-20"
        },
        {
          d: "24317",
          title: "好消息，挂机赚现金，就是这么简单！",
          detail:
            "即日起，登录猎流后，点击左侧“挂机赚钱”，然后添加您的淘宝帐号，由于双11在即，任务量多多，平均每个淘宝帐号可轻松日赚1~2元，帐号越多，收益越高哦，赶紧去挂机吧！",
          publicTime: "2019-08-16"
        }
      ]
    };
  }
};
</script>
