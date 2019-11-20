<template>
    <div>
        <form-item label="任务时段">
            <types-btn-group :buttons="planTypes" v-model="planType"></types-btn-group>
        </form-item>
        <el-collapse-transition>
            <form-item label="时段分配" v-show="planType == 'custom'">
                <task-timer v-model="taskAlloc" :total-alloc="totalAlloc" style="margin-top:10px" @overflow="onOverflow"></task-timer>
            </form-item>
        </el-collapse-transition>
    </div>
</template>

<script>
export default {
    name: "timerFormItem",
    model: {
        prop: "taskAlloc",
        event: "change"
    },
    props: {
        totalAlloc: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            planTypes: [
                { label: "自动当天完成", value: "autoToday" },
                { label: "手动自定时段", value: "custom" }
            ],
            planType: "",
            taskAlloc: []
        };
    },
    watch: {
        taskAlloc: {
            immediate: true,
            deep: true,
            handler(taskAlloc) {
                this.$emit("change", taskAlloc);
            }
        }
    },
    methods: {
        onOverflow(num) {
            this.$emit("overflow", num);
        }
    }
};
</script>