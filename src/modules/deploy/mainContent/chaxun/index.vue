<template>
  <div ng-controller="TbFlowCtrl" class="task-page scroll-full ng-scope">
      <!-- 滚动区域开始 -->
      <search-tab :tab-list="tabList" />
      <router-view></router-view>
  </div>
</template>

<script>
import typesTab from '../commonComponents/typesTab';
export default {
  name: "chaxun",
  components:{
    searchTab:{
      extends:typesTab,
      methods: {
        goto(taskType){
          this.$router.push({name:`deploy_chaxun_${taskType}`});
        },
        isActive(taskType){
          return this.$route.name == `deploy_chaxun_${taskType}`;
        }
      },
    }
  },
  data(){
    return {
      tabList:[
        { name: "任务日志", taskType: "task" },
        { name: "财务日志", taskType: "finance" },
        { name: "积分日志", taskType: "score" },
        { name: "金币日志", taskType: "gold" },
      ]
    }
  }
};
</script>