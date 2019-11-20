<template>
    <div class="task-timer">
        <div class="timer clearfix">
            <div v-for="(allocObj, index) in allocObjArray" :key="index" class="col-xs-2 col-sm-1 ">
                <div class="row item">
                    <div class="title" :class="{ 'title-today': index >= nowHour }" :title="index < nowHour ? '次日' : '当日'">
                        {{ get24Time(index) }}
                    </div>
                    <span class="timer-btn ng-binding">{{ getRate(allocObj.alloc) }}</span>
                    <el-input-number size="mini" :min="0" :controls="false" v-model="allocObj.alloc" @change="checkInrange" style="width:100%;border:none"></el-input-number>
                </div>
            </div>
        </div>
        <div class="timer-footer clearfix">
            <div class="pull-left">
                共
                <b class="font-georgia text-blue ng-binding">{{ totalAlloc }}</b>
                个任务，已分配
                <b class="font-georgia text-green ng-binding">{{ hadAlloc }}</b>
                个，剩余未分配
                <b class="font-georgia text-red ng-binding">{{ tobeAlloc }}</b> 个
            </div>
            <div class="pull-right">
                <a class="btn btn-xs" @click="clearAlloc" tooltip="清空"><i class="fa fa-trash"></i></a>
                <a class="btn btn-xs" @click="saveAlloc" tooltip="保存"><i class="fa fa-save"></i></a>
                <div class="btn-group">
                    <label class="btn btn-xs btn-default" :class="{'active':allocPlan == 'today'}" btn-radio="'today'" @click="allocPlan = 'today'">当天完成
                    </label>
                    <label class="btn btn-xs btn-default" :class="{'active':allocPlan == 'simulate'}" @click="allocPlan = 'simulate'">
                        模拟流量
                    </label>
                    <!-- <label class="btn btn-xs btn-default" :class="{'active':allocPlan == 'template'}" > 自定义...</label>-->
                    <el-select size="mini" placeholder="现有方案" v-model="customPlan" @click.native="allocPlan = 'template'" @change="customPlanChange">
                        <el-option v-for=" (cplan,index) in customPlanArrList" :key="index" :label="cplan.planName" :value="cplan.planAlloc"></el-option>
                    </el-select>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.task-timer .el-input-number .el-input__inner {
    border: none !important;
    border-width: 0px !important;
    padding-left: 1px !important;
    padding-right: 1px !important;
}
.task-timer .el-select .el-input__inner {
    height: 22px;
    line-height: 22px;
    width: 80px;
    padding-left: 5px !important;
    padding-right: 1px !important;
    border: 1px solid #cfc2c2;
}
.task-timer .el-select .el-input.is-focus .el-input__inner,
.task-timer .el-select .el-input__inner:focus {
    border-color: #999999 !important;
}

.task-timer .el-input--mini .el-input__icon {
    line-height: 22px !important;
}
.task-timer .el-select .el-input__suffix {
    right: 0px;
}
</style>
<script>
const roundHours = function() {
    //当前24格式的小时,根据分钟四舍五入
    let currentHours = new Date().getHours();
    let currentMinutes = new Date().getMinutes();
    if (currentMinutes >= 30) {
        let tDate = new Date();
        tDate.setHours(currentHours + 1);
        return tDate.getHours();
    } else {
        return currentHours;
    }
};
export default {
    name: "taskTimer",
    model: {
        prop: "allocList",
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
            allocObjArray: [],
            nowHour: roundHours(),
            allocPlan: "today", //分配方案:'今天完成','模拟流量','选择现有方案'
            customPlanArr: [],
            customPlanArrList: []
        };
    },
    methods: {
        get24Time(t) {
            return t < 10 ? `0${t}:00` : `${t}:00`;
        },
        clearAlloc() {
            this.allocObjArray = this.getResponsiveAlloc(
                this.$fillArray(new Array(24), 0)
            );
        },
        saveAlloc() {
            return this.getPureAlloc(this.allocObjArray);
        },
        initAllocData(total = this.totalAlloc, todayHours = 24 - this.nowHour) {
            this.allocObjArray = this.getResponsiveAlloc(
                this.getRandomAllocArray(total, todayHours)
            );
        },
        getResponsiveAlloc(allocArray) {
            //获取响应式的任务分配数据
            return allocArray.map(t => ({ alloc: t, userAlloced: false }));
        },
        getPureAlloc(allocObjArray) {
            //获取纯净的任务分配数组
            return allocObjArray.map(t => t.alloc);
        },
        getCustomPlan() {
            //获取用户自定义的任务分配方案
            this.customPlanArrList = [
                {
                    planName: "方案一",
                    planAlloc: this.getRandomAllocArray(100, 11)
                },
                {
                    planName: "方案二",
                    planAlloc: this.getRandomAllocArray(100, 10)
                },
                {
                    planName: "方案三",
                    planAlloc: this.getRandomAllocArray(100, 15)
                }
            ];
        },
        customPlanChange(planAlloc) {
            if (!Array.isArray(planAlloc)) return;
            this.allocObjArray = this.getResponsiveAlloc(planAlloc);
        },
        checkInrange() {
            //检查用户分配是否溢出
            if (this.hadAlloc > this.totalAlloc) {
                this.$emit("overflow", this.hadAlloc);
            }
        },
        getRate(t) {
            //获取任务分配的百分比
            if (!this.hadAlloc) return "0.0%";
            let point = t / this.hadAlloc;
            var str = Number(point * 100).toFixed(1);
            str += "%";
            return str;
        },
        getRandomAllocArray(total, todayHours) {
            //获取随机分配数组
            let nextDayHours = 24 - todayHours;
            let nextDayHoursArray = this.$fillArray(new Array(nextDayHours), 0);
            let todayHoursArray = this.$fillArray(new Array(todayHours), 0);

            //给今天的时辰分配随机个数的任务
            for (var i = 0; i < total; i++) {
                var num = parseInt(Math.random() * todayHours);
                todayHoursArray[num]++;
            }
            return nextDayHoursArray.concat(todayHoursArray);
        }
    },
    created() {
        this.initAllocData();
        this.getCustomPlan();
    },
    computed: {
        hadAlloc() {
            //已分配数量
            if (this.allocObjArray.length == 0) return 0;
            return this.allocObjArray.map(t => t.alloc).reduce((a, b) => a + b);
        },
        tobeAlloc() {
            //未分配数量
            return this.totalAlloc - this.hadAlloc;
        }
    },
    watch: {
        totalAlloc(newValue, oldValue) {
            if (newValue < oldValue) {
                this.initAllocData();
            }
        },
        allocPlan: {
            immediate: true,
            handler(allocPlan) {
                switch (allocPlan) {
                    case "today":
                        this.initAllocData();
                        this.customPlan = "";
                        break;
                    case "simulate":
                        this.initAllocData(undefined, 24);
                        this.customPlan = "";
                        break;
                    default:
                        break;
                }
            }
        },
        allocObjArray: {
            deep: true,
            handler(value) {
                this.$emit("change", this.getPureAlloc(value));
            }
        }
    }
};
</script>
