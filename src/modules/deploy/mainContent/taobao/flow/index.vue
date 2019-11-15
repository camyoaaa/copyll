<template>
  <div ng-controller="TbFlowCtrl" class="task-page scroll-full ng-scope">
    <!-- 滚动区域开始 -->
    <div class="scroll-viewer">
      <task-types-tab :tab-list="tabList" />
      <div class="tab-content mbn task-content">
        <!-- 任务表单开始 -->
        <div class="form-horizontal">
          <form-item label="任务类型">
            <types-btn-group
              :buttons="flowTypes"
              v-model="form.taskType"
            ></types-btn-group>
            <form-tools></form-tools>
          </form-item>
          <form-item label="任务日期">
            <task-date-picker v-model="form.daterange"></task-date-picker>
            <task-calc style="margin-top:10px"></task-calc>
          </form-item>
          <form-item label="商品链接">
            <link-search
              @queryback="
                result => {
                  productInfo = result;
                }
              "
            ></link-search>
            <el-collapse-transition>
              <product-show
                style="margin-top:10px"
                :data="productInfo"
                v-show="productInfo.title"
              ></product-show>
            </el-collapse-transition>
          </form-item>
          <form-item label="关键词一">
            <keywords />
            <task-timer v-if="true"></task-timer>
          </form-item>
          <hr />
          <double-form-item label1="浏览时间" label2="浏览深度">
            <common-select
              slot="item1"
              v-model="form.scanTime"
              :options="scanTimeOptions"
            ></common-select>
            <common-select
              slot="item2"
              v-model="form.scanDeep"
              :options="scanDeepOptions"
            ></common-select>
          </double-form-item>
          <form-item label="任务备注">
            <el-input
              v-model="form.taskmark"
              size="small"
              placeholder="任务备注（可不填）"
            >
            </el-input>
          </form-item>
        </div>
      </div>
      <deploy-row></deploy-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "taobao",
  data() {
    return {
      flowTypes: [
        {
          label: "APP流量",
          value: "app_flow",
          icon: "lion-shouji1"
        },
        {
          label: "PC流量",
          value: "pc_flow",
          icon: "lion-pc"
        },
        {
          label: "直访流量",
          value: "visit_flow",
          icon: "lion-lianjie"
        }
        // {
        // 	label: "投票",
        // 	value: "visit_1212",
        // 	icon:'lion-1212'
        // }
      ],
      form: {
        taskType: "",
        daterange: "",
        scanTime: "",
        scanDeep: "",
        taskmark: ""
      },
      taskDayNum: 100,
      productInfo: {},
      scanTimeOptions: [
        { value: "30-100", label: "30-100秒(免费)" },
        { value: "100-180", label: "100-180秒(免费)" },
        { value: "180-280", label: "180-280秒(免费)" },
        { value: "280-380", label: "280-280秒(免费)" }
      ],
      scanDeepOptions: [
        { value: "0", label: "不浏览其他商品" },
        { value: "1", label: "随机浏览" },
        { value: "2", label: "深度浏览" }
      ]
    };
  },
  computed: {
    taskDays() {
      let start = this.$moment(this.form.daterange[0]);
      let end = this.$moment(this.form.daterange[1]);
      return end.diff(start, "days") + 1;
    },
    taskTotal() {
      return this.taskDays * this.taskDayNum;
    }
  }
};
</script>
