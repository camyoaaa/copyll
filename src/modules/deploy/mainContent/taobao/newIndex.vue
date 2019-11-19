<template>
  <div ng-controller="TbFlowCtrl" class="task-page scroll-full ng-scope">
    <!-- 滚动区域开始 -->
    <task-types-tab :tab-list="tabList" />
    <render-content></render-content>
  </div>
</template>

<script>
import flowTabConfig from "./flowTabConfig.js";
import favoTabConfig from "./favoTabConfig.js";
import cartTabConfig from "./cartTabConfig.js";
import liveTabConfig from "./liveTabConfig.js";
import artcTabConfig from "./artcTabConfig.js";

const renderComponent = function(h, cTab, form, name, option) {
  switch (name) {
    case "taskType":
      return (
        <form-item label="任务类型">
          <types-btn-group
            buttons={option.buttons}
            value={form.taskType}
            onChange={type => {
              form.taskType = type;
            }}
          />
          <form-tools tools={option.tools}></form-tools>
        </form-item>
      );
    case "taskDatePicker":
      return (
        <form-item label="任务日期">
          <task-date-picker
            value={form.daterange}
            onChange={daterange => {
              form.daterange = daterange;
            }}
          />
        </form-item>
      );
    case "linkSearch":
      return <href-form-item buttons={option} type={option.type[cTab]} />;
    case "keywords":
      return <keywords-form-item />;
    case "scanItem":
      return (
        <double-form-item label1="浏览时间" label2="浏览深度">
          <common-select
            slot="item1"
            value={form.scanTime}
            onChange={scanTime => {
              form.scanTime = scanTime;
            }}
            options={option.timeOptions[form.taskType]}
            key={form.taskType}
          ></common-select>
          <scan-deep-select
            slot="item2"
            value={form.scanDeep}
            onChange={scanDeep => {
              form.scanDeep = scanDeep;
            }}
          ></scan-deep-select>
        </double-form-item>
      );
    case "remark":
      return (
        <form-item label="任务备注">
          <el-input
            value={form.taskmark}
            onChange={mark => {
              form.taskmark = mark;
            }}
            size="small"
            placeholder="任务备注（可不填）"
          ></el-input>
        </form-item>
      );
    default:
      break;
  }
};

export default {
  data() {
    return {
      tabList: [
        { name: "流量", taskType: "flow" },
        { name: "收藏", taskType: "favorite" },
        { name: "加购", taskType: "cart" },
        { name: "直播", taskType: "live" },
        { name: "文章", taskType: "article" }
      ],
      form: {
        taskType: "",
        daterange: "",
        productInfo: {},
        keywords: [],
        scanTime: "",
        scanDeep: "",
        taskmark: "",
        taskDaily: 100,
        taskAlloc: [],
        planType: ""
      }
    };
  },
  components: {
    renderContent: {
      render(h) {
        let currentTab = this.$parent.currentTab;
        let form = this.$parent.form;
        let config = {};
        switch (currentTab) {
          case "flow":
            config = flowTabConfig;
            break;
          case "favorite":
            config = favoTabConfig;
            break;
          case "cart":
            config = cartTabConfig;
            break;
          case "live":
            config = liveTabConfig;
            break;
          case "article":
            config = artcTabConfig;
            break;
          default:
            break;
        }
        let renderComponentArray = [];
        for (let k in config) {
          renderComponentArray.push(
            renderComponent(h, currentTab, form, k, config[k])
          );
        }
        return (
          <div class="scroll-viewer">
            <div class="tab-content mbn task-content">
              <div class="form-horizontal">{renderComponentArray}</div>
            </div>
            <deploy-row form={form}></deploy-row>
          </div>
        );
      }
    }
  },
  computed: {
    currentTab() {
      return this.$route.params.category;
    }
  }
};
</script>
