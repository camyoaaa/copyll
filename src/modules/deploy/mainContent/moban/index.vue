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
        <a-affix :offsetBottom="0" style="position:absolute;bottom:0px">
            <div class="task-footer clearfix hidden-app" style="border-top:1px solid #cccccc;">
                <div class="pull-left">
                    <div class="col-sm-12 ptm">
                        <div class="ui-checkbox ui-checkbox-info mtn mbn plm">
                            <label class="ui-checkbox-inline">
                                <input type="checkbox" name="status" ng-true-value="1" ng-false-value="0" ng-model="quanxuan" ng-change="selectedAll();" class="ng-pristine ng-untouched ng-valid">
                                <span>全选</span>
                            </label>
                            <a href="javascript:void(0);" ng-click="removeSelected();">删除</a>
                            <a href="javascript:void(0);" ng-click="moveSelected();">移动分组</a>
                        </div>
                    </div>
                </div>
                <div class="pull-right">
                    <a href="javascript:void(0);" ng-click="releaseSelected();" class="btn btn-lg btn-warning">一键批量发布</a>
                </div>
            </div>
        </a-affix>

    </div>
</template>

<script>
import typesTab from "../commonComponents/typesTab";

export default {
    name: "chaxun",
    components: {
        templateTab: {
            extends: typesTab,
            methods: {
                goto() {
                    // this.$router.push({name:`deploy_moban`});
                },
                isActive() {
                    return this.$route.name == "deploy_moban";
                }
            }
        }
    },
    data() {
        return {
            group: "",
            tableData: [
                {
                    type: "APP搜索流量",
                    name: "曲莎迪服饰旗舰店",
                    num: 100,
                    date: "2019-11-18 15:08"
                }
            ]
        };
    }
};
</script>