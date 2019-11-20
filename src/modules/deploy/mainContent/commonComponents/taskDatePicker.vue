<template>
  <a-range-picker
    :ranges="shortcuts"
    :disabledDate="disabledDate"
    :defaultValue="defaultRange"
    @change="rangechange"
  ></a-range-picker>
</template>

<script>
// import { DatePicker } from "ant-design-vue";

export default {
  name: "taskDatePicker",
  // components: { RangePicker: DatePicker.RangePicker },
  model: {
    prop: "daterange",
    event: "change"
  },
  data() {
    return {
      disabledDate(current) {
        return (
          current &&
          (current <= Date.now() - 3600 * 1000 * 24 ||
            current >= Date.now() + 3600 * 1000 * 24 * 30)
        );
      },
      defaultRange: [this.$moment(), this.$moment()],
      shortcuts: {
        "1天": [this.$moment(), this.$moment()],
        "3天": [this.$moment(), this.$moment().add(2, "day")],
        "5天": [this.$moment(), this.$moment().add(4, "day")],
        "7天": [this.$moment(), this.$moment().add(6, "day")],
        "10天": [this.$moment(), this.$moment().add(10, "day")],
        "15天": [this.$moment(), this.$moment().add(15, "day")],
        "30天": [this.$moment(), this.$moment().add(29, "day")]
      }
    };
  },
  methods: {
    rangechange(dates, dateStrings) {
      //   this.$log("From: ", dates[0], ", to: ", dates[1]);
      //   this.$log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
      this.$emit("change", dateStrings);
    }
  },
  created() {
    this.$emit(
      "change",
      this.defaultRange.map(moment => moment.format("YYYY-MM-DD"))
    );
  }
};
</script>

<style>
.ant-input:hover {
  border-color: #999999 !important;
}
.ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled) {
  border-color: #999999;
  box-shadow: none;
}
.el-input-number__decrease:hover,
.el-input-number__increase:hover {
  color: #999999 !important;
}
.el-button:focus,
.el-button:hover,
.el-button:active {
  color: inherit !important;
}
</style>
