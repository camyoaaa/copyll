<template>
  <div id="page-wrapper" class="scroll-full" style="height:calc(100% - 65px)">
    <!-- ngView:  -->
    <div class="scroll-full ng-scope" ng-view="">
      <router-view></router-view>
    </div>
  </div>
  <!-- ngIf: !ispc -->
</template>

<script>
import Vue from "vue";
import taskTypesTab from "./commonComponents/typesTab";
import formItem from "./commonComponents/formItem";
import doubleFormItem from "./commonComponents/doubleFormItem";
import keywordsFormItem from "./commonComponents/keywordsFormItem";
import hrefFormItem from "./commonComponents/hrefFormItem";

import typesBtnGroup from "./commonComponents/typesBtnGroup";
import formTools from "./commonComponents/formTools";
import taskDatePicker from "./commonComponents/taskDatePicker";
import taskCalc from "./commonComponents/taskCalc";

import linkSearch from "./commonComponents/linkSearch";
import productShow from "./commonComponents/productShow";
import keywords from "./commonComponents/keywords";
import taskTimer from "./commonComponents/taskTimer";
import commonSelect from "./commonComponents/commonSelect";
import scanDeepSelect from "./commonComponents/scanDeepSelect";

import deployRow from "./commonComponents/deployRow";
// collapse 展开折叠
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";

Vue.component(taskTypesTab.name, taskTypesTab);
Vue.component(formItem.name, formItem);
Vue.component(doubleFormItem.name, doubleFormItem);
Vue.component(keywordsFormItem.name, keywordsFormItem);
Vue.component(hrefFormItem.name, hrefFormItem);

Vue.component(typesBtnGroup.name, typesBtnGroup);
Vue.component(formTools.name, formTools);
Vue.component(taskDatePicker.name, taskDatePicker);
Vue.component(taskCalc.name, taskCalc);
Vue.component(linkSearch.name, linkSearch);
Vue.component(productShow.name, productShow);
Vue.component(keywords.name, keywords);
Vue.component(taskTimer.name, taskTimer);
Vue.component(commonSelect.name, commonSelect);
Vue.component(scanDeepSelect.name, scanDeepSelect);
Vue.component(deployRow.name, deployRow);
Vue.component(CollapseTransition.name, CollapseTransition);

export default {
  name: "mycontent"
};
Vue.prototype.$fillArray = function(arr, value) {
  for (let index = 0; index < arr.length; index++) {
    arr[index] = value;
  }

  return arr;
};
</script>
