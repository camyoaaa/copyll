<template>
    <div style="margin-top:10px">
        任务时长
        <b class="font-georgia text-red text-lg">{{ taskDuration }}</b>
        天，每天发布
        <b class="font-georgia text-red text-lg">{{ taskDaily }}</b>
        个任务量，此次合计发布
        <b class="font-georgia text-red text-lg">{{ taskDuration * taskDaily }}</b>
        个任务。
    </div>
</template>

<script>
const shouldRender = function(option, compareValue) {
    if (typeof option.show == "boolean" && option.show) {
        return true;
    }
    if (typeof option.show == "string" && option.show) {
        return compareValue == option.show;
    }
    if (Array.isArray(option.show)) {
        return option.show.includes(compareValue);
    }
    return false;
};
export default {
    name: "taskCalc",
    props: {
        form: {
            type: Object,
            default: () => ({})
        },
        config: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        taskDuration() {
            //任务时长
            let start = this.$moment(this.form.daterange[0]);
            let end = this.$moment(this.form.daterange[1]);
            return end.diff(start, "days") + 1;
        },
        taskDaily() {
            let taskDaily = 0;
            if (shouldRender(this.config.keywords || {}, this.form.taskType)) {
                if (Array.isArray(this.form.keywords)) {
                    let length = this.form.keywords;
                    taskDaily =
                        length == 0
                            ? 0
                            : this.form.keywords
                                  .map(k => k.num)
                                  .reduce((a, b) => a + b);
                }
            } else if (
                shouldRender(this.config.taskDaily || {}, this.form.taskType)
            ) {
                taskDaily = this.form.taskDaily || 0;
            }
            return taskDaily;
        }
    }
};
</script>
