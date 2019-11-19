<template>
    <div ng-controller="TbFlowCtrl" class="task-page scroll-full ng-scope">
        <!-- 滚动区域开始 -->
        <task-types-tab :tab-list="tabList" />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "taobao",
    data() {
        return {
            tabList: [
                { name: "流量", taskType: "flow" },
                { name: "收藏", taskType: "favorite" },
                { name: "加购", taskType: "cart" },
                { name: "直播", taskType: "live" },
                { name: "文章", taskType: "article" }
            ]
        };
    }
};
</script>
