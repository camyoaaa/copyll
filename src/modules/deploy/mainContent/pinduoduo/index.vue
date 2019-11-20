<template>
    <div class="task-page scroll-full ng-scope">
        <!-- 滚动区域开始 -->
        <task-types-tab :tab-list="tabList" />
        <render-content></render-content>
    </div>
</template>

<script>
import flowTabConfig from "./flowTabConfig.js";
import favoTabConfig from "./favoTabConfig.js";

import {renderComponent} from '../renderFunction';


export default {
    data() {
        return {
            tabList: [
                { name: "流量", taskType: "flow" },
                { name: "收藏", taskType: "favorite" }
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
