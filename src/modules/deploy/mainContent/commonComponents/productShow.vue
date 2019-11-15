<template>
  <div class="task-item clearfix">
    <div class="item-pic">
      <img :src="data.imgUrl" v-show="data.imgUrl" />
    </div>
    <div class="item-content">
      <h4 class="mts ng-binding" style="color:#777777;font-weight:lighter">
        {{ data.title }}
        <small class="text-gray mll ng-binding"></small>
      </h4>
      <div class="row text-gray">
        <div class="col-sm-6 ng-binding">店铺：{{ data.shopName }}</div>
        <div class="col-sm-6 ng-binding">卖家：{{ data.sellerNick }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productShow",
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          imgUrl: "",
          title: "",
          shopName: "",
          sellerNick: ""
        };
      }
    }
  }
};
</script>
