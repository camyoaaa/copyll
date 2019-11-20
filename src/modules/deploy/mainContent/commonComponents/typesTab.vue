<template>
    <div class="sub-sidebar-menu ng-scope">
        <ul id="generalTab" class="nav nav-tabs ul-edit ng-scope">
            <li v-for="(tab, index) in tabList" :key="index" :class="{ active: isActive(tab.taskType) }">
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
            this.$router.push({
                name: this.$route.name,
                params: { category: taskType }
            });
        },
        isActive(taskType){
          return taskType == this.$route.params.category;
        }
    },
    mounted() {
        // let path = this.$route.name.split("_");
        // this.$router.push({
        //   name: [path[0], path[1], this.tabList[0].taskType].join("_")
        // });
    }
};
</script>
