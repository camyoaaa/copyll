<template>
  <div>
    <link-input
      :placeholder="placeholder"
      v-model="itemLink"
      @keyup.enter.native="createProductJsonp"
      class="linkpinut"
      clearable
      @change="onchange"
      size="small"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        :loading="searchLoading"
        @click="createProductJsonp"
      ></el-button>
    </link-input>
  </div>
</template>
<style>
.linkpinut .ant-input:active,
.linkpinut .ant-input:focus {
  border-color: #999999;
}
</style>
<script>
import { Input } from "element-ui";

export default {
  name: "linkSearch",
  components: { linkInput: Input },
  props: {
    placeholder: {
      type: String,
      default: "输入商品链接(或淘口令)"
    }
  },
  data() {
    return {
      searchLoading: false,
      itemLink: ""
    };
  },
  methods: {
    onchange() {
      this.$emit("queryback", {});
    },
    createProductJsonp(e) {
      e.pre;
      let value = this.itemLink;
      if (!value || !value.trim()) return;
      this.searchLoading = true;
      this.$jsonp(
        "https://acs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/",
        {
          AntiCreep: true,
          H5Request: true,
          type: "jsonp",
          dataType: "jsonp",
          data: `{"itemNumId":"${new URL(value).searchParams.get(
            "id"
          )}","detail_v": "3.3.2"}`
        },
        5000
      )
        .then(json => {
          this.searchLoading = false;
          this.$log("json", json);
          this.$emit("queryback", {
            imgUrl: json.data.item.images[0],
            title: json.data.item.title,
            shopName: json.data.seller.shopName,
            sellerNick: json.data.seller.sellerNick
          });
        })
        .catch(err => {
          this.$log("err", err);
          this.searchLoading = false;
        });
    }
  }
};
</script>
