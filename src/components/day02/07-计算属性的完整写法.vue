<template>
  <div>
    <input type="text" v-model="getMsg" />
    <br />
    <input type="checkbox" v-model="checkAll" /> 全选
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      msg: "111",
    };
  },
  computed: {
    getMsg: {
      // get是给元素一个值 数据影响元素
      get() {
        console.log(11);
        return "11";
      },
      // set是接受元素的value,当元素的值发生变化的时候
      // 就会触发set并将值以参数的形式传递过来
      set(value) {
        console.log(value);
      },
    },
    checkAll: {
      get() {
        // 复选框的话, 看我们这里返回的是true还是false 返回true就是选中
        return true;
      },
      set(value) {
        console.log(value);
      },
    },
  },
};
</script>
<style lang='less' scoped>
</style>