<template>
  <a-locale-provider :locale="zh_CN">
    <div id="app" style="height:100%;background-color: #f5f5f5;">
      <router-view style="height:100%"></router-view>
    </div>
  </a-locale-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";

export default {
  name: "app",
  data() {
    return {
      zh_CN
    };
  }
};
</script>
