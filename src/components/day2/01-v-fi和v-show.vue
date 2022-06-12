<template>
  <div>
    <button @click="isshow = !isshow">可见or隐藏</button>
    <!-- 语法: v-show='bool值' 如果bool值为true则显示 反正隐藏 -->
    <!-- v-show是通过为元素设置或移除display:none来实现的 -->
    <!-- <p v-show="isshow">王小美</p> -->
    <!-- 语法: v-if='bool值' true表示显示 false为隐藏 -->
    <!-- 它是通过元素的创建和销毁来实现的, false代表不会创建这个元素, true才会创建渲染 -->
    <p v-if="isshow">你好,我是王小美</p>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      isshow: true,
    };
  },
};
</script>
<style lang='less' scoped>
</style>