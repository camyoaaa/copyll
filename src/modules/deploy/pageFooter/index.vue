<template>
  <div class="inner ng-scope" ng-controller="HeaderCtrl">
    <a href="https://sycm.taobao.com/" target="_blank" rel="nofollow"
      >生意参谋</a
    >
    <a href="javascript:void(0);" ng-show="!hideTutor" ng-click="services();"
      >联系客服</a
    >
    <a href="http://v.cd-vv.com/#4" target="_blank" rel="nofollow">使用教程</a>
    <a href="http://www.kehuda.com/" target="_blank">电商工具</a>
    <a href="http://www.laqu.com/" target="_blank" rel="nofollow">安全补单</a>
    <!-- ngIf: !oem --><a
      ng-if="!oem"
      href="javascript:void(0);"
      ng-click="download();"
      class="ng-scope"
      >手机版</a
    ><!-- end ngIf: !oem -->
    <!-- ngIf: !oem --><a
      ng-if="!oem"
      href="javascript:void(0);"
      ng-click="download();"
      class="ng-scope"
      >PC端</a
    ><!-- end ngIf: !oem -->
    <!-- ngIf: !oem --><a
      ng-if="!oem"
      href="http://www.lieliu.com/api.html"
      target="_blank"
      class="ng-scope"
      >诚招代理(OEM、API)</a
    ><!-- end ngIf: !oem -->
  </div>
</template>

<script>
export default {
  name: "myfooter"
};
</script>
