<template>
    <div ng-controller="TbFlowCtrl" class="task-page scroll-full ng-scope">
        <!-- 滚动区域开始 -->
        <task-types-tab :tab-list="tabList" />
        <render-content></render-content>
    </div>
</template>

<script>
import flowTabConfig from "./flowTabConfig.js";
import favoTabConfig from "./favoTabConfig.js";
import cartTabConfig from "./cartTabConfig.js";
import liveTabConfig from "./liveTabConfig.js";
import artcTabConfig from "./artcTabConfig.js";

const shouldRender = function(option, compareValue) {
    if (typeof option.show == "boolean" && option.show) {
        return true;
    }
    if (typeof option.show == "string" && option.show) {
        return compareValue == option.show;
    }
    if (Array.isArray(option.show)) {
        return option.show.includes(compareValue);
    }
    return false;
};

const renderComponent = function(h, cTab, form, name, option, config) {
    if (!shouldRender(option, form.taskType)) return null;
    switch (name) {
        case "taskType":
            return (
                <form-item label="任务类型">
                    <types-btn-group
                        buttons={option.buttons}
                        value={form.taskType}
                        onChange={type => (form.taskType = type)}
                    />
                    <form-tools tools={option.tools}></form-tools>
                </form-item>
            );
        case "juhsTip":
            return (
                <form-item>
                    <div class="pts">
                        <b class="text-red">
                            聚划算开团提醒只能发布和完成250个任务，不保证显示率
                        </b>
                        <a class="text-orange">
                            <i class="fa fa-search"></i>点击查看详情
                        </a>
                    </div>
                </form-item>
            );
        case "liveTip":
            return (
                <form-item>
                    <div class="pts">
                        <b class="text-red">
                            直播热度到账率100%，最多发布100万热度！
                        </b>
                    </div>
                </form-item>
            );
        case "taskDatePicker":
            return (
                <form-item label="任务日期">
                    <task-date-picker
                        value={form.daterange}
                        onChange={daterange => (form.daterange = daterange)}
                    />
                    <task-calc form={form} config={config} />
                </form-item>
            );
        case "linkSearch0":
            return <href-form-item type={option.type[form.taskType]} />;
        case "linkSearch":
            return <href-form-item type={option.type[form.taskType]} />;
        case "keywords":
            return (
                <keywords-form-item
                    value={form.keywords}
                    onChange={ks => (form.keywords = ks)}
                />
            );
        case "scanItem":
            return (
                <double-form-item label1="浏览时间" label2="浏览深度">
                    <common-select
                        slot="item1"
                        value={form.scanTime}
                        onChange={scanTime => (form.scanTime = scanTime)}
                        options={option.timeOptions[form.taskType]}
                        key={form.taskType}
                    ></common-select>
                    <scan-deep-select
                        slot="item2"
                        value={form.scanDeep}
                        onChange={scanDeep => (form.scanDeep = scanDeep)}
                    ></scan-deep-select>
                </double-form-item>
            );
        case "remark":
            return (
                <form-item label="任务备注">
                    <el-input
                        value={form.taskmark}
                        onChange={mark => (form.taskmark = mark)}
                        size="small"
                        placeholder="任务备注（可不填）"
                    ></el-input>
                </form-item>
            );
        case "taskDaily":
            return (
                <form-item label="每日任务数量">
                    <el-input-number
                        value={form.taskDaily}
                        onChange={value => (form.taskDaily = value)}
                        size="small"
                        min={1}
                    />
                </form-item>
            );
        case "taskDailyPro":
            return (
                <double-form-item
                    label1="每日任务数量"
                    label2={form.taskType == "shop_guide" ? "浏览商品数" : ""}
                >
                    <el-input-number
                        slot="item1"
                        value={form.taskDaily}
                        onChange={value => (form.taskDaily = value)}
                        size="small"
                        min={1}
                    />
                    <el-input-number
                        disabled
                        slot="item2"
                        value={form.scanGoodsNum}
                        onChange={value => (form.scanGoodsNum = value)}
                        size="small"
                        min={1}
                    />
                </double-form-item>
            );
        case "taskDuration":
            return (
                <timer-form-item
                    value={form.taskAlloc}
                    onChange={taskAlloc => (form.taskAlloc = taskAlloc)}
                    totalAlloc={form.taskDaily}
                    onOverflow={total => (form.taskDaily = total)}
                />
            );
        default:
            break;
    }
};

export default {
    data() {
        return {
            tabList: [
                { name: "流量", taskType: "flow" },
                { name: "收藏", taskType: "favorite" },
                { name: "加购", taskType: "cart" },
                { name: "直播", taskType: "live" },
                { name: "文章", taskType: "article" }
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
                planType: "",
                scanGoodsNum: 1
            }
        };
    },
    components: {
        renderContent: {
            render(h) {
                let currentTab = this.$parent.currentTab;
                let form = this.$parent.form;
                let config = {};
                switch (currentTab) {
                    case "flow":
                        config = flowTabConfig;
                        break;
                    case "favorite":
                        config = favoTabConfig;
                        break;
                    case "cart":
                        config = cartTabConfig;
                        break;
                    case "live":
                        config = liveTabConfig;
                        break;
                    case "article":
                        config = artcTabConfig;
                        break;
                    default:
                        break;
                }
                let renderComponentArray = [];
                for (let k in config) {
                    renderComponentArray.push(
                        renderComponent(
                            h,
                            currentTab,
                            form,
                            k,
                            config[k],
                            config
                        )
                    );
                }
                return (
                    <div class="scroll-viewer">
                        <div class="tab-content mbn task-content">
                            <div class="form-horizontal">
                                {renderComponentArray}
                            </div>
                        </div>
                        <deploy-row form={form} config={config}></deploy-row>
                    </div>
                );
            }
        }
    },
    computed: {
        currentTab() {
            return this.$route.params.category;
        }
    }
};
</script>
