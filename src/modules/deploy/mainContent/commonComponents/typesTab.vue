<template>
  <div class="sub-sidebar-menu ng-scope">
    <ul id="generalTab" class="nav nav-tabs ul-edit ng-scope">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        :class="{ active: tab.taskType == taskType }"
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
  computed: {
    taskType() {
      return this.$route.name.split("_")[2];
    }
  },
  methods: {
    goto(taskType) {
      let path = this.$route.name.split("_");
      this.$router.push({ name: [path[0], path[1], taskType].join("_") });
    }
  },
  mounted() {
    this.$log("mounted");
    let path = this.$route.name.split("_");
    this.$router.push({
      name: [path[0], path[1], this.tabList[0].taskType].join("_")
    });
  }
};
</script>
