<template>
    <div class="scroll-viewer">
        <div class="tab-content mbn task-content">
            <!-- 任务表单开始 -->
            <div class="form-horizontal">
                <form-item label="任务类型">
                    <types-btn-group :buttons="taskTypes" v-model="form.taskType"></types-btn-group>
                    <form-tools></form-tools>
                </form-item>
                <form-item label="任务日期">
                    <task-date-picker v-model="form.daterange"></task-date-picker>
                    <task-calc :task-duration="taskDuration" :task-daily="taskDaily"></task-calc>
                </form-item>
                <form-item label="直播淘口令" v-if="this.form.taskType == 'live_cart'">
                    <link-search @queryback="
          result => {
            form.productInfo = result;
          }
        "></link-search>
                    <el-collapse-transition>
                        <product-show style="margin-top:10px" :data="form.productInfo" v-show="form.productInfo.title"></product-show>
                    </el-collapse-transition>
                </form-item>
                <form-item label="商品链接">
                    <link-search @queryback="
          result => {
            form.productInfo = result;
          }
        "></link-search>
                    <el-collapse-transition>
                        <product-show style="margin-top:10px" :data="form.productInfo" v-show="form.productInfo.title"></product-show>
                    </el-collapse-transition>
                </form-item>
                <keywords-form-item v-model="form.keywords" v-if="form.taskType == 'search_cart'"></keywords-form-item>
                <hr />
                <double-form-item v-if="form.taskType == 'search_cart'" label1="浏览时间" label2="浏览深度">
                    <common-select slot="item1" v-model="form.scanTime" :options="scanTimeOptions" :key="form.taskType"></common-select>
                    <scan-deep-select slot="item2" v-model="form.scanDeep"></scan-deep-select>
                </double-form-item>
                <form-item label="每日任务数量" v-if="!['app_flow','pc_flow'].includes(form.taskType)">
                    <el-input-number v-model="form.taskDaily" size="small" :min="0">
                    </el-input-number>
                </form-item>
                <form-item label="任务时段" v-if="!['app_flow','pc_flow'].includes(form.taskType)">
                    <types-btn-group :buttons="planTypes" v-model="form.planType"></types-btn-group>
                </form-item>
                <form-item label="时段分配" v-show="!['app_flow','pc_flow'].includes(form.taskType) && form.planType == 'custom'">
                    <task-timer v-model="form.taskAlloc" :total-alloc="form.taskDaily" style="margin-top:10px" @overflow="(num)=>{form.taskDaily = num}"></task-timer>
                </form-item>
                <form-item label="任务备注">
                    <el-input v-model="form.taskmark" size="small" placeholder="任务备注（可不填）">
                    </el-input>
                </form-item>

            </div>
        </div>
        <deploy-row :task-total="taskDuration * taskDaily" :form="form"></deploy-row>
    </div>
</template>

<script>
export default {
    name: "taobao",
    data() {
        return {
            taskTypes: [
                {
                    label: "搜索加购",
                    value: "search_cart",
                    icon: "lion-sousuo"
                },
                {
                    label: "直接加购",
                    value: "direct_cart",
                    icon: "lion-gouwuche"
                },
                {
                    label: "直播间加购",
                    value: "live_cart",
                    icon: "lion-zhibo"
                },
                {
                    label: "淘抢购",
                    value: "tao_cart",
                    icon: "lion-qiang"
                }
            ],
            planTypes: [
                { label: "自动当天完成", value: "autoToday" },
                { label: "手动自定时段", value: "custom" }
            ],
            form: {
                taskType: "",
                daterange: "",
                productInfo: {},
                keywords: [],
                scanTime: "",
                scanDeep: "",
                taskmark: "",
                taskDaily: 100,
                taskAlloc: [],
                planType: ""
            }
        };
    },
    watch: {
        "form.keywords"(value) {
            this.$log(value);
        }
    },
    computed: {
        scanTimeOptions() {
            return [
                { value: "100-180", label: "100-180秒(+免费)" },
                { value: "180-280", label: "180-280秒(+5积分)" },
                { value: "280-380", label: "280-280秒(+10积分)" }
            ];
        },
        taskDuration() {
            //任务时长
            let start = this.$moment(this.form.daterange[0]);
            let end = this.$moment(this.form.daterange[1]);
            return end.diff(start, "days") + 1;
        },
        taskDaily() {
            //每日任务量
            if (this.form.keywords.length == 0) {
                return 0;
            } else {
                return this.form.keywords
                    .map(k => k.num)
                    .reduce((a, b) => a + b);
            }
        }
    },
    methods: {
        removeKeywords(index) {
            this.form.keywords = this.form.keywords.filter((i, aindex) => {
                return aindex != index;
            });
        },
        addKeywords() {
            this.form.keywords.push({
                name: "",
                label: "关键词二",
                num: 100,
                timeAlloc: [],
                timeAllocShow: false
            });
        }
    }
};
</script>
