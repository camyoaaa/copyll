<template>
  <div class="htmlpage">
    <div class="my-page-header">
      <!-- <top-header></top-header> -->
      <div style="width:1200px;margin:0 auto;height:60px;">
        <!-- <div>logo</div> -->
        <el-menu :default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >订单管理</a
            ></el-menu-item
          >
        </el-menu>
      </div>
    </div>
    <div class="my-page-container">
      <h1>container</h1>
    </div>
    <div class="my-page-footer">
      <h1>footer</h1>
    </div>
  </div>
</template>

<script>
// import topHeader from "../deploy/topHeader";
export default {
  name: "pclayout",
  components: {
    // topHeader
  }
};
</script>
<style>
.htmlpage {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.my-page-container {
  flex: 1;
}
</style>
