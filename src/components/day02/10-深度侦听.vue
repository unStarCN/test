<template>
  <div>
    <input type="text" v-model="obj.username" />
    <input type="text" v-model="obj.password" />
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      obj: {
        username: "",
        password: "",
      },
    };
  },
  watch: {
    // 修改对象的属性值, 对象本身并没有变化, 意味着下面的代码不会被触发
    // 简单侦听就是侦听基本数据类型
    // 复杂侦听就是复杂数据类型咯
    // obj: {
    //   // 侦听处理函数只能写handler
    //   handler(nv, ov) {
    //     console.log(2222);
    //   },
    //   deep: true, //开启深度侦听, 如果没有设置为true则没有深度侦听的效果
    //   immediate:true //立即触发一次
    // },
    // 侦听对象的某个属性值的变化: 只有某个属性值发生了变化, 才会触发侦听器
    // 这里加个引号改成字符串, 这玩意叫欺骗编译器
    "obj.username"() {
      console.log(123123);
    },
  },
};
</script>
<style lang='less' scoped>
</style>