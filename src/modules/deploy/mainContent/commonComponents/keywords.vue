<template>
  <div class="row">
    <div class="col-sm-5">
      <div class="input-group">
        <keywords-input
          v-model="keywords"
          size="small"
          placeholder="请输入关键词"
        >
          <el-button slot="append" icon="el-icon-search" @click="queryRank"
            >查排名</el-button
          >
        </keywords-input>
      </div>
    </div>
    <div class="col-sm-7">
      <div class="flex">
        <div class="flex-grow control-label text-ellipsis prl">数量</div>
        <div class="flex-static">
          <div class="input-group">
            <tasknum-input
              v-model="taskNum"
              size="small"
              :min="1"
            ></tasknum-input>
          </div>
        </div>
        <div class="flex-static plm">
          <el-button size="small" @click="togglePanel">时段</el-button>
        </div>
        <div class="flex-static plm" v-if="showRemoveButton">
          <kdd-tooltip content="移除关键词" placement="top">
            <a class="btn btn-cricle btn-danger cursor-pointer" @click="remove">
              <i class="fa fa-minus"></i>
            </a>
          </kdd-tooltip>
        </div>
        <div class="flex-static plm">
          <kdd-tooltip content="复制添加" placement="top">
            <a class="btn btn-cricle btn-success cursor-pointer" @click="addk">
              <i class="fa fa-plus"></i>
            </a>
          </kdd-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.btn-danger,
.btn-success {
  padding: 0px;
  width: 32px;
  height: 32px;
  line-height: 32px;
}
</style>
<script>
import { Input, InputNumber, Tooltip } from "element-ui";
const isRealNum = function(val) {
  // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
  if (val === "" || val == null) {
    return false;
  }
  if (!isNaN(val)) {
    return true;
  } else {
    return false;
  }
};
export default {
  name: "keywords",
  components: {
    keywordsInput: Input,
    tasknumInput: InputNumber,
    kddTooltip: Tooltip
  },
  props: {
    showRemoveButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      keywords: "",
      taskNum: ""
    };
  },
  methods: {
    queryRank() {
      console.log("queryRank");
    },
    taskNumChange(val) {
      this.$log("taskNumChange", val);
      if (!isRealNum(val)) {
        this.taskNum = "";
      }
    },
    togglePanel() {
      this.$emit("toggle");
    },
    remove() {
      this.$emit("remove");
    },
    addk() {
      this.$emit("add");
    }
  }
};
</script>
