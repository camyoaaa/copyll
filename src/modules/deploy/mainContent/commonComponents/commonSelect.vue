<template>
  <kdd-select v-model="inner_value" :placeholder="placeholder" size="small">
    <kdd-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </kdd-option>
  </kdd-select>
</template>

<script>
import { Select, Option } from "element-ui";

export default {
  name: "commonSelect",
  components: {
    kddSelect: Select,
    kddOption: Option
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: "请选择"
    }
  },
  data() {
    return {
      inner_value: ""
    };
  },
  created() {
    this.inner_value = this.options[0] ? this.options[0].value : "";
  },
  watch: {
    inner_value(value) {
      this.$emit("change", value);
    }
  }
};
</script>
