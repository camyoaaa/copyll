<template>
    <div class="btn-group pull-right task-btn-group">
        <!-- ngIf: !!caseLink && !ispc -->
        <!-- ngIf: !!caseLink && !!ispc -->
        <a target="new" ng-if="!!caseLink &amp;&amp; !!ispc" class="btn-reset lion lion-help ng-scope" title="查看任务示例" @click="gotoDemo"><span>示例</span></a><!-- end ngIf: !!caseLink && !!ispc -->
        <a ng-click="resetForm();" @click="resetForm" class="btn-reset lion lion-chongzhi cursor-pointer" title="重置任务参数"><span>重置</span></a>
        <a ng-show="model.tab == 'juhuasuan'" href="#/tb/batch-favorite.html" class="btn-reset lion lion-battch-plus" title="批量发布任务" style=""><span>批量</span></a>
        <a ng-click="saveAs();" @click="saveAS" class="btn-reset lion lion-save hidden-xs" title="另存任务方案"><span>另存</span></a>
    </div>
</template>

<script>
export default {
    name: "formTools",
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
