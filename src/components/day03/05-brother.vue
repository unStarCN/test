<template>
  <div class="setcolor">
    <select v-model="color" @change="optionChange">
      <option value="black">black</option>
      <option value="red">red</option>
      <option value="green">green</option>
      <option value="blue">blue</option>
    </select>
  </div>
</template>
<script>
// 兄弟之前传值, son和brother之间传值
// 引入事件总线
import bus from "../../utils/eventBus.js";
export default {
  name: "",
  data() {
    return {
      color: "black",
    };
  },
  methods: {
    optionChange() {
      //  向兄弟发出一个事件
      bus.$emit("getcolor", this.color);
    },
  },
};
</script>
<style lang='less' scoped>
</style>