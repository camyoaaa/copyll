<template>
  <div>
    任务时长
    <b class="font-georgia text-red text-lg">{{ timeLong }}</b>
    天，每天发布
    <b class="font-georgia text-red text-lg">{{ taskDayNum }}</b>
    个任务量，此次合计发布
    <b class="font-georgia text-red text-lg">{{ taskTotal }}</b>
    个任务。
  </div>
</template>

<script>
export default {
  name: "taskCalc",
  props: {
    timeLong: {
      type: Number,
      default: 0
    },
    taskDayNum: {
      type: Number,
      default: 0
    },
    taskTotal: {
      type: Number,
      default: 0
    }
  }
};
</script>
