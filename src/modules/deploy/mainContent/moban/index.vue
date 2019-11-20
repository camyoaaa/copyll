<template>
  <div ng-controller="TbFlowCtrl" class="task-page scroll-full ng-scope">
      <!-- 滚动区域开始 -->
      <template-tab :tab-list="[{ name: '任务模板', taskType: 'template' }]" />
      <el-row style="margin-top:10px">
        <el-select placeholder="模板分组" v-model="group" size="small">
          <el-option label="test1" value="test1"></el-option>
        </el-select>
        <el-button size="small">设置分组</el-button>
      </el-row>
      <el-table border :data="tableData" style="margin-top:20px" size="small">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column label="方案名称" prop="name"></el-table-column>
        <el-table-column label="发布量" prop="num"></el-table-column>
        <el-table-column label="添加日期" prop="date"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
  </div>
</template>

<script>
import typesTab from '../commonComponents/typesTab';

export default {
  name: "chaxun",
  components:{
    templateTab:{
      extends:typesTab,
      methods: {
        goto(){
          // this.$router.push({name:`deploy_moban`});
        },
        isActive(){
          return this.$route.name == 'deploy_moban';
        }
      },
    }
  },
  data(){
    return {
      group:'',
      tableData:[
        {type:'APP搜索流量',name:'曲莎迪服饰旗舰店',num:100,date:'2019-11-18 15:08'}
      ]
    }
  }
};
</script>