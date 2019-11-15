<template>
  <div ng-controller="TbFlowCtrl" class="task-page scroll-full ng-scope">
    <!-- 滚动区域开始 -->
    <div class="scroll-viewer">
      <task-types-tab :tab-list="tabList" />
      <div class="tab-content mbn task-content">
        <!-- 任务表单开始 -->
        <div class="form-horizontal">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "taobao",
  data() {
    return {
      tabList: [
        //   { name: "直访流量", taskType: "visit" },
        { name: "流量", taskType: "flow" },
        { name: "收藏", taskType: "favorite" },
        { name: "加购", taskType: "cart" },
        { name: "直播", taskType: "live" },
        { name: "文章", taskType: "article" }
      ]
    };
  }
};
</script>
