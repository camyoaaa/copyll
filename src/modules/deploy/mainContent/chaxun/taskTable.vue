<template>
    <div>
        <el-row style="margin-top:10px">
            <el-select placeholder="任务类型" size="small" style="width:120px" v-model="taskType">
            <el-option v-for="(type,index) in taskTypeList" :key="index" :value="type.value" :label="type.label" />
        </el-select>
        <el-select placeholder="任务状态" size="small" style="width:120px" v-model="taskStatus">
            <el-option v-for="(status,index) in taskStatusList" :key="index" :value="status.value" :label="status.label" />
        </el-select>
        <a-range-picker  v-model="dateRange" format="YYYY-MM-DD" style="width:240px;height:32px;position:relative;top:1px"/>
        <span style="width:300px;display:inline-block">
            <el-input placeholder="关键词" v-model="keywords" size="small">
            <el-select v-model="keywordsType" slot="prepend" placeholder="请选择" style="width:100px">
                <el-option label="查询全部" value="all"></el-option>
                <el-option label="按ID查询" value="id"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        </span>
        <el-table size="small" :data="tableData" border style="margin-top:20px">
            <el-table-column prop="type" label="任务类型"></el-table-column>
            <el-table-column prop="wangw" label="旺旺/访问"></el-table-column>
            <el-table-column prop="price_total" label="单价/总价"></el-table-column>
            <el-table-column prop="pubNum" label="发布量/剩余量"></el-table-column>
            <el-table-column prop="status" label="处理状态"></el-table-column>
            <el-table-column prop="pubTime" label="发布时间"></el-table-column>
            <el-table-column prop="exeTime" label="执行日期"></el-table-column>
            <el-table-column prop="name" label="任务名称"></el-table-column>
            <el-table-column label="操作"></el-table-column>
        </el-table>
        </el-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                taskTypeList:[],
                taskStatusList:[],
                taskType:'',
                taskStatus:'',
                dateRange:[this.$moment(),this.$moment()],
                keywordsType:'all',
                keywords:'',
                tableData:[
                    {type:'PC搜索流量',wangw:200,price:10,total:1000,pubNum:400,remainNum:600,status:'进行中',pubTime:'2019-11-20',exeTime:'2019-11-20',name:''}
                ]
            }
        }
    }
</script>
