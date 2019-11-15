<template>
  <div class="form-group">
    <label class="col-sm-2 control-label">
      <slot name="label">{{ label1 }}</slot>
    </label>
    <div class="col-sm-4">
      <slot name="item1"></slot>
    </div>
    <label class="col-sm-2 control-label">
      <slot name="label">{{ label2 }}</slot>
    </label>
    <div class="col-sm-4">
      <slot name="item2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "doubleFormItem",
  props: {
    label1: {
      type: String,
      default: ""
    },
    label2: {
      type: String,
      default: ""
    }
  }
};
</script>
