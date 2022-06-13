<template>
  <div>
    <input type="number" v-model.number="a" />
    <input type="number" v-model.number="b" />
    <p>a+b的结果为{{ getsum }}</p>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      a: 0,
      b: 0,
    };
  },
  // 添加一个计算属性
  computed: {
    getsum() {
      return this.a + this.b;
    },
  },
};
</script>
<style lang='less' scoped>
</style>