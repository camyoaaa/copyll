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
export default {
  name: "taskCalc",
  props: {
    taskDuration: {
      type: Number,
      default: 0
    },
    taskDaily: {
      type: Number,
      default: 0
    }
  }
};
</script>
