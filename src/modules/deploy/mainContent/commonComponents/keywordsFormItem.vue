<template>
    <div>
        <form-item v-for="(kwd, index) in keywordsList" :key="index" :label="`关键词${keywordsIndexZH[index]}`">
            <div class="row">
                <div class="col-sm-5">
                    <div class="input-group">
                        <el-input v-model="kwd.name" size="small" placeholder="请输入关键词">
                            <el-button slot="append" icon="el-icon-search" @click="queryRank">查排名</el-button>
                        </el-input>
                    </div>
                </div>
                <div class="col-sm-7">
                    <div class="flex">
                        <div class="flex-grow control-label text-ellipsis prl">数量</div>
                        <div class="flex-static">
                            <div class="input-group">
                                <el-input-number v-model="kwd.num" size="small" :min="1"></el-input-number>
                            </div>
                        </div>
                        <div class="flex-static plm">
                            <el-button size="small" @click="kwd.timeAllocShow = !kwd.timeAllocShow">时段</el-button>
                        </div>
                        <div class="flex-static plm" v-if="keywordsList.length > 1">
                            <el-tooltip content="移除关键词" placement="top">
                                <a class="btn btn-cricle btn-danger cursor-pointer" @click="removeKeywords(index)">
                                    <i class="fa fa-minus"></i>
                                </a>
                            </el-tooltip>
                        </div>
                        <div class="flex-static plm">
                            <el-tooltip content="复制添加" placement="top">
                                <a class="btn btn-cricle btn-success cursor-pointer" @click="addKeywords">
                                    <i class="fa fa-plus"></i>
                                </a>
                            </el-tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <task-timer v-show="kwd.timeAllocShow" v-model="kwd.timeAlloc" :total-alloc="kwd.num" style="margin-top:10px" @overflow="(num)=>{kwd.num = num}"></task-timer>
        </form-item>
    </div>
</template>

<script>
const keywordsIndexZH = [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二",
    "十三",
    "十四",
    "十五",
    "十六",
    "十七",
    "十八",
    "十九",
    "二十"
];
export default {
    name: "keywordsFormItem",
    model: {
        prop: "pkeywordsList",
        event: "change"
    },
    data() {
        return {
            keywordsList: [],
            keywordsIndexZH
        };
    },
    methods: {
        queryRank() {
            return;
        },
        removeKeywords(index) {
            this.keywordsList = this.keywordsList.filter((i, aindex) => {
                return aindex != index;
            });
        },
        addKeywords() {
            this.keywordsList.push({
                name: "",
                num: 100,
                timeAllocShow: false,
                timeAlloc: this.$fillArray(new Array(24), 0)
            });
        }
    },
    created() {
        this.addKeywords();
    },
    watch: {
        keywordsList: {
            deep: true,
            immediate: true,
            handler(keywordsList) {
                this.$emit("change", keywordsList);
            }
        }
    }
};
</script>
