<template>
  <div>
    <div class="form-group">
      <label class="col-sm-2 control-label">
        <slot name="label">{{ label }}</slot>
      </label>
      <div class="col-sm-9">
        <el-input
          :placeholder="placeholder"
          v-model.trim="itemLink"
          @keyup.enter.native="startSearch"
          class="linkpinut"
          clearable
          @change="onchange"
          size="small"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            :loading="searchLoading"
            @click="startSearch"
          ></el-button>
        </el-input>
        <el-collapse-transition>
          <div
            v-if="mediaCard.title"
            class="task-item clearfix"
            style="margin-top:10px"
          >
            <div class="item-pic">
              <img :src="mediaCard.imgsrc" v-show="mediaCard.imgsrc" />
            </div>
            <div class="item-content">
              <h4
                class="mts ng-binding"
                style="color:#777777;font-weight:lighter"
              >
                {{ mediaCard.title }}
                <small class="text-gray mll ng-binding">{{
                  mediaCard.subTitle
                }}</small>
              </h4>
              <div class="row text-gray">
                <div class="col-sm-6 ng-binding">
                  {{ mediaCard.footer_left }}
                </div>
                <div class="col-sm-6 ng-binding">
                  {{ mediaCard.footer_right }}
                </div>
              </div>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <div class="form-group" v-if="type == 'taobao_article'">
      <label class="col-sm-2 control-label">浏览商品</label>
      <div class="col-sm-9">
        <ul class="task-item-goods list-unstyled">
          <li class="ng-scope active">
            <img
              ng-src="//gw.alicdn.com/tfscom/i3/2204163545195/O1CN01Hhq2eb1oFM7UZtue9_!!0-item_pic.jpg"
              title="已经磨损很严重了"
              src="//gw.alicdn.com/tfscom/i3/2204163545195/O1CN01Hhq2eb1oFM7UZtue9_!!0-item_pic.jpg"
            />
          </li>
        </ul>
        <div class="text-gray">请选择您要进入浏览的商品;</div>
      </div>
    </div>
  </div>
</template>

<style>
.linkpinut .ant-input:active,
.linkpinut .ant-input:focus {
  border-color: #999999;
}
</style>
<script>
import { getTaobaoProductData } from "../httpService.js";
class MediaCard {
  constructor() {
    this.title = "";
    this.subTitle = "";
    this.imgSrc = "";
    this.footer_left = "";
    this.footer_right = "";
  }
}
const placeholderMap = {
  taobao_product: "输入商品链接(或淘口令)",
  taobao_shop: "输入店铺链接(淘宝/天猫/飞猪/极有家)",
  taobao_product_shop: "输入店铺或商品链接",
  taobao_juhs: "输入聚划算链接",
  taobao_live: "输入淘宝直播间分享的淘口令",
  taobao_daren_shop: "输入店铺或达人链接",
  taobao_weitao: "输入微淘分享的淘口令",
  taobao_article: "输入文章链接或文章微淘口令",
  jingdong_product:"输入商品链接",
  jingdong_shop:"输入京东店铺链接",
  jingdong_daren_shop:"输入京东店铺/达人链接",
  pinduoduo_product:"输入商品链接",
  pinduoduo_shop:"输入拼多多店铺链接",
    douyin_movie:"输入抖音链接"
};
const labelMap = {
  taobao_product: "商品链接",
  taobao_shop: "店铺链接",
  taobao_product_shop: "店铺或商品链接",
  taobao_juhs: "聚划算链接",
  taobao_live: "直播口令",
  taobao_daren_shop: "店铺/达人链接",
  taobao_weitao: "微淘口令",
  taobao_article: "文章链接",
  jingdong_product: "商品链接",
  jingdong_shop:"店铺链接",
  jingdong_daren_shop:"店铺/达人链接",
  pinduoduo_product:"商品链接",
  pinduoduo_shop:"店铺链接",
  douyin_movie:"抖音链接"
};
export default {
  name: "hrefFormItem",
  props: {
    type: {
      type: String,
      default: "taobao_product" //'item'淘宝商品或淘口令,'shop'店铺链接 'ju'聚划算链接,'article'文章链接,'live'直播淘口令,'daren'达人链接,'jd_item'京东商品链接,'jd_shop'京东店铺,'jd_daren'京东达人
    }
  },
  data() {
    return {
      searchLoading: false,
      itemLink: "", //各种链接
      mediaCard: new MediaCard(),
      callBackError: ""
    };
  },
  computed: {
    placeholder() {
      return placeholderMap[this.type];
    },
    label() {
      return labelMap[this.type];
    }
  },
  methods: {
    onchange() {
      this.mediaCard = new MediaCard();
    },
    renderErr() {
      this.callBackError = "暂无数据";
    },
    //获取淘宝商品数据
    async taobao_product() {
      let itemNumId = new URL(this.itemLink).searchParams.get("id");
      try {
        this.searchLoading = true;
        const res = await getTaobaoProductData(itemNumId);
        const jsonData = res.data;
        this.mediaCard.title = jsonData.item.title;
        this.mediaCard.imgsrc = jsonData.item.images[0];
        this.mediaCard.footer_left = `店铺:${jsonData.seller.shopName || ""}`;
        this.mediaCard.footer_right = `卖家:${jsonData.seller.sellerNick ||
          ""}`;
      } catch (error) {
        this.renderErr();
      } finally {
        this.searchLoading = false;
      }
    },
    startSearch() {
      let searchMethod = this[this.type];
      typeof searchMethod == "function" && searchMethod();
    }
  }
};
</script>
