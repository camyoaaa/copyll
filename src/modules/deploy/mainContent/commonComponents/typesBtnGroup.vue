<template>
  <div class="btn-group btn-group-sm">
    <label
      @click="checkedValue = btn.value"
      class="btn btn-radio ng-pristine ng-untouched ng-valid"
      :class="{ active: btn.value == checkedValue }"
      v-for="(btn, index) in buttons"
      :key="index"
    >
      <i class="lion" :class="btn.icon"></i>
      {{ btn.label }}
    </label>
    <!-- <label
      class="btn btn-radio ng-pristine ng-untouched ng-valid active"
      ng-model="model.tab"
      btn-radio="&#39;app&#39;"
      ><i class="lion lion-shouji1"></i> APP流量</label
    >
    <label
      class="btn btn-radio ng-pristine ng-untouched ng-valid"
      ng-model="model.tab"
      btn-radio="&#39;pc&#39;"
      ><i class="lion lion-pc"></i> PC流量</label
    >
    <label
      class="btn btn-radio ng-pristine ng-untouched ng-valid"
      ng-model="model.tab"
      btn-radio="&#39;visit&#39;"
      ><i class="lion lion-lianjie"></i> 直访流量</label
    > -->
    <!-- <label class="btn btn-radio" ng-model="model.tab" btn-radio="'1212'"><i class="lion lion-1212"></i> 投票</label> -->
  </div>
</template>

<script>
export default {
  name: "typesBtnGroup",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    buttons: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    buttons: {
      immediate: true,
      handler(buttons) {
        let activeBtn = buttons[0];
        this.checkedValue = activeBtn.value;
        this.$emit("change", activeBtn.value);
      }
    },
    checkedValue(checkedValue) {
      this.$emit("change", checkedValue);
    }
  },
  data() {
    return {
      checkedValue: ""
    };
  }
};
</script>
