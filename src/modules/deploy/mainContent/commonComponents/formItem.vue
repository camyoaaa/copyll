<template>
  <div class="form-group">
    <label class="col-sm-2 control-label">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="col-sm-9">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "formItem",
  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>
