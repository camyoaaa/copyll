<template>
  <div style="padding:0px 20px">
    <task-types-tab :tab-list="tabList"></task-types-tab>
    <el-form style="padding:20px 40px">
      <el-form-item label="任务类型">
        <!-- <types-btn-group :buttons="flowTypes"></types-btn-group> -->
        <el-radio-group v-model="radio2" size="medium">
          <el-radio-button label="上海"
            ><i class="el-icon-search"></i> 上海</el-radio-button
          >
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import taskTypesTab from "../commonComponents/typesTab";
// import typesBtnGroup from "../commonComponents/typesBtnGroup";
// import formTools from "../commonComponents/formTools";
// import taskDatePicker from "../commonComponents/taskDatePicker";
// import linkSearch from "../commonComponents/linkSearch";
// import productShow from "../commonComponents/productShow";
// import keywords from "../commonComponents/keywords";
// import taskTimer from "../commonComponents/taskTimer";
// import commonSelect from "../commonComponents/commonSelect";
// import deployRow from "../commonComponents/deployRow";

export default {
  components: {
    taskTypesTab
    // typesBtnGroup
    // formTools,
    // taskDatePicker,
    // linkSearch,
    // productShow,
    // CollapseTransition,
    // keywords,
    // taskTimer,
    // commonSelect,
    // deployRow
  },
  data() {
    return {
      radio2: "",
      tabList: [
        //   { name: "直访流量", taskType: "visit" },
        { name: "流量", taskType: "flow" },
        { name: "收藏", taskType: "favorite" },
        { name: "加购", taskType: "cart" },
        { name: "直播", taskType: "live" },
        { name: "文章", taskType: "article" }
      ],
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
      ]
    };
  }
};
</script>
