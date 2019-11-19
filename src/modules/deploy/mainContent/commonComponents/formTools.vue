<template>
  <div class="btn-group pull-right task-btn-group">
    <!-- ngIf: !!caseLink && !ispc -->
    <!-- ngIf: !!caseLink && !!ispc -->
    <a
      v-for="(tool, index) in tools"
      :key="index"
      class="btn-reset lion"
      :class="tool.icon"
      :title="tool.title"
      @click="tool.click"
      ><span>{{ tool.name }}</span></a
    >
  </div>
</template>

<script>
export default {
  name: "formTools",
  props: {
    tools: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    gotoDemo() {
      this.$router.push({ name: "taskDemo" });
    },
    resetForm() {
      this.$emit("resetForm");
    },
    saveAS() {
      this.$emit("saveAS");
    }
  }
};
</script>
