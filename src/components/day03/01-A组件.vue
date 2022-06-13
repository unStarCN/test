<template>
  <div>
    <p>王小美</p>
    <bcom></bcom>
  </div>
</template>
<script>
// 1.引入组件
import bcom from "./02-B组件.vue";
export default {
  name: "",
  data() {
    return {};
  },
  //2.注册组件, 通过component选项可以进行组件的注册
  components: {
    bcom,
  },
};
</script>
<style lang='less' scoped>
</style>