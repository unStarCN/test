<template>
  <div>
    <input type="text" v-model="username" />
    <p>用户名:{{ username }}</p>
    <p>变化后:{{ temp }}</p>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      username: "a",
      temp: "",
    };
  },
  watch: {
    // 侦听函数的名称必须和我们想侦听的属性名称完全一致
    username(newvalue, odlvalue) {
      // 转大写
      // 因为侦听器不能我们自己调用, 所以如果我们需要结果, 应该将其存储到一个data变量中
      this.temp = newvalue.toUpperCase();
    },
  },
};
</script>
<style lang='less' scoped>
</style>