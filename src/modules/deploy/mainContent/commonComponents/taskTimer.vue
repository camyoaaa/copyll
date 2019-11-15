<template>
  <div
    class="task-timer ng-pristine ng-untouched ng-valid "
    onselectstart="return false;"
    ui-tasktimer=""
    ng-model="keyword.hour"
    count="keyword.num"
    days="1"
    assign="keyword.assign"
    ng-show="!!keyword.show"
    on-change="change();"
    style=""
  >
    <div class="timer clearfix">
      <div v-for="(t, index) in 24" :key="t" class="col-xs-2 col-sm-1 ">
        <div class="row item">
          <div
            class="title ng-binding"
            :class="{ 'title-today': index >= nowTimeNum }"
            :title="index < nowTimeNum ? '次日' : '当日'"
          >
            {{ get24Time(index) }}
          </div>
          <span class="timer-btn ng-binding">{{ getRate() }}</span>
          <alloc-number
            size="mini"
            v-if="true"
            :min="0"
            :controls="false"
            :max="restTaskNum"
            v-model="allocNum"
            style="width:100%;border:none"
            controls-position="right"
          ></alloc-number>
        </div>
      </div>
    </div>
    <div class="timer-footer clearfix">
      <!-- ngIf: !discount -->
      <div class="pull-left " ng-if="!discount">
        共
        <b class="font-georgia text-blue ng-binding">{{ taskTotal }}</b>
        个任务，已分配
        <b class="font-georgia text-green ng-binding">{{ hadAlloc }}</b>
        个，剩余未分配
        <b class="font-georgia text-red ng-binding">{{ tobeAlloc }}</b> 个
      </div>
      <!-- end ngIf: !discount -->
      <!-- ngIf: !!discount -->
      <div class="pull-right">
        <a class="btn btn-xs" ng-click="set('clear');" tooltip="清空"
          ><i class="fa fa-trash"></i
        ></a>
        <a class="btn btn-xs" ng-click="saveTemp();" tooltip="保存"
          ><i class="fa fa-save"></i
        ></a>
        <div class="btn-group">
          <label
            class="btn btn-xs btn-default ng-pristine ng-untouched ng-valid active"
            ng-model="type"
            btn-radio="'today'"
            ng-click="set('today')"
            >当天完成
          </label>
          <!-- <label
            class="btn btn-xs btn-default"
            ng-model="type"
            btn-radio="'day'"
            ng-click="set('day')"
            >仅白天</label
          > -->
          <label
            class="btn btn-xs btn-default ng-pristine ng-untouched ng-valid"
            ng-model="type"
            btn-radio="'curve'"
            ng-click="set('curve')"
          >
            模拟流量
          </label>
          <a
            href="javascript:void(0);"
            class="btn btn-xs btn-default"
            ng-click="loadTemp();"
          >
            自定义…
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.task-timer .el-input__inner {
  border: none !important;
  border-width: 0px !important;
}
</style>
<script>
import { InputNumber } from "element-ui";
export default {
  name: "taskTimer",
  components: { allocNumber: InputNumber },
  data() {
    return {
      nowTimeNum: new Date().getHours(),
      allocNum: "",
      restTaskNum: 300,
      taskTotal: "",
      hadAlloc: 0,
      tobeAlloc: 0
    };
  },
  methods: {
    get24Time(t) {
      return t < 10 ? `0${t}:00` : `${t}:00`;
    },
    getRate() {
      return "0.0%";
    }
  }
};
</script>
