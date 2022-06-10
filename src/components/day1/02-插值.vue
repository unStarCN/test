<template>
  <div>
    <!-- {{}} 这玩意就是插值语法 -->
    <!-- 1.可以直接写变量 -->
    <p>{{ msg }}</p>
    <!-- 2.可以调用api -->
    <p>{{ msg.toUpperCase() }}</p>
    <!-- 3.可以进行拼接 -->
    <p>{{ msg + "我还没哦,想和你一起去" }}</p>
    <!-- 4.三元表达式 -->
    <p>{{ age >= 18 ? "诶嘿" : "未成年" }}</p>
    <!-- 5.不能写语句 -->
    <!-- <p>{{if(age)}}</p> -->
  </div>
</template>

<script>
export default {
  name: "",
  // 在vue2中 变量在data选项中定义
  // data是一个函数
  data() {
    // 这个函数一定要有返回值 否则报错 返回值还要是一个对象
    return {
      msg: "你好,我是王小美,你吃了嘛",
      age: 18,
    };
  },
};
</script>

<style>
</style>