<template>
  <div class="scroll-viewer">
    <div class="tab-content mbn task-content">
      <!-- 任务表单开始 -->
      <div class="form-horizontal">
        <form-item label="任务类型">
          <types-btn-group
            :buttons="taskTypes"
            v-model="form.taskType"
          ></types-btn-group>
          <form-tools></form-tools>
        </form-item>
        <form-item label="任务日期">
          <task-date-picker v-model="form.daterange"></task-date-picker>
          <task-calc
            :task-duration="taskDuration"
            :task-daily="taskDaily"
          ></task-calc>
        </form-item>
        <form-item label="文章链接">
          <link-search
            placeholder="输入文章链接/文章微淘口令"
            @queryback="
              result => {
                form.productInfo = result;
              }
            "
          ></link-search>
          <el-collapse-transition>
            <product-show
              style="margin-top:10px"
              :data="form.productInfo"
              v-show="form.productInfo.title"
            ></product-show>
          </el-collapse-transition>
        </form-item>
        <double-form-item
          label1="每日任务数量"
          :label2="form.taskType == 'shop_guide' ? '浏览商品数' : ''"
        >
          <el-input-number
            slot="item1"
            v-model="form.taskDaily"
            size="small"
            :min="0"
          >
          </el-input-number>
          <el-input-number
            disabled
            slot="item2"
            v-if="form.taskType == 'shop_guide'"
            v-model="form.scanGoodsNum"
            size="small"
            :min="1"
          >
          </el-input-number>
        </double-form-item>
        <form-item label="任务时段">
          <types-btn-group
            :buttons="planTypes"
            v-model="form.planType"
          ></types-btn-group>
        </form-item>
        <form-item label="时段分配" v-show="form.planType == 'custom'">
          <task-timer
            v-model="form.taskAlloc"
            :total-alloc="form.taskDaily"
            style="margin-top:10px"
            @overflow="
              num => {
                form.taskDaily = num;
              }
            "
          ></task-timer>
        </form-item>
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
    <deploy-row
      :task-total="taskDuration * taskDaily"
      :form="form"
    ></deploy-row>
  </div>
</template>

<script>
export default {
  name: "taobao",
  data() {
    return {
      taskTypes: [
        {
          label: "阅读次数",
          value: "readTimes",
          icon: "lion-guankan"
        },
        {
          label: "阅读人数",
          value: "readers",
          icon: "lion-yonghu2"
        },
        {
          label: "引导进店",
          value: "shop_guide",
          icon: "lion-woyeyaokaidian"
        }
      ],
      planTypes: [
        { label: "自动当天完成", value: "autoToday" },
        { label: "手动自定时段", value: "custom" }
      ],
      form: {
        taskType: "",
        daterange: "",
        productInfo: {},
        keywords: [],
        scanTime: "",
        scanDeep: "",
        scanGoodsNum: 1,
        taskmark: "",
        taskDaily: 100,
        taskAlloc: [],
        planType: ""
      }
    };
  },
  watch: {
    "form.keywords"() {}
  },
  computed: {
    scanTimeOptions() {
      return [
        { value: "100-180", label: "100-180秒(免费)" },
        { value: "180-280", label: "180-280秒(+5积分)" },
        { value: "280-380", label: "280-280秒(+10积分)" }
      ];
    },
    linkSearchPlaceholder() {
      if (
        ["search_favorite", "product_favorite", "product_praise"].includes(
          this.form.taskType
        )
      ) {
        return "输入商品链接(或淘口令)";
      }
      if (this.form.taskType == "shop_favorite") {
        return "输入店铺链接(淘宝/天猫/飞猪/极有家)";
      }
      if (this.form.taskType == "ju_favorite") {
        return "输入聚划算链接";
      }
      return "";
    },
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
        return this.form.keywords.map(k => k.num).reduce((a, b) => a + b);
      }
    }
  },
  methods: {
    removeKeywords(index) {
      this.form.keywords = this.form.keywords.filter((i, aindex) => {
        return aindex != index;
      });
    },
    addKeywords() {
      this.form.keywords.push({
        name: "",
        label: "关键词二",
        num: 100,
        timeAlloc: [],
        timeAllocShow: false
      });
    }
  }
};
</script>
