<template>
  <div class="sub-sidebar-menu ng-scope">
    <ul id="generalTab" class="nav nav-tabs ul-edit ng-scope">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        :class="{ active: tab.taskType == $route.params.taskType }"
      >
        <a @click="goto(tab.taskType)" class="cursor-pointer">{{ tab.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "taskTypesTab",
  props: ["tabList"],
  methods: {
    goto(taskType) {
      this.$router.push({ ...this.$route, params: { taskType } });
    }
  },
  mounted() {
    this.$log("mounted");
    this.$router.push({
      ...this.$route,
      params: { taskType: this.tabList[0].taskType }
    });
  }
};
</script>
