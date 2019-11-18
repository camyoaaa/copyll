<script>
import commonSelect from "./commonSelect.vue";
export default {
  name: "scanDeepSelect",
  extends: commonSelect,
  props: {
    options: {
      type: Array,
      default: () => {
        return [
          { value: "0", label: "不浏览其他商品" },
          { value: "1", label: "随机浏览" },
          { value: "2", label: "深度浏览" }
        ];
      }
    }
  }
};
</script>
