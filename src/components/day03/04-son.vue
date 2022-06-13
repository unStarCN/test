<template>
  <div class="my-product">
    <h3 :style="{ color: color }">{{ name }}</h3>
    <p>{{ price }} 元</p>
    <p>{{ info }}</p>
    <button @click="kan">砍一刀</button>
  </div>
</template>

<script>
// 引入事件总线 目的是接受兄弟传来的值
import bus from "../../utils/eventBus";
export default {
  // 定义一个props来接收父传过来的值
  props: ["name", "price", "info", "index"],
  data() {
    return {
      color: "",
    };
  },
  methods: {
    kan() {
      // 让父组件实现--子传父
      // 1.让子组件通过$emit发起一个事件, 并
      // 传递相应的参数(如果有必要)
      // this.$emit('自定义方法',参数)
      //   我们想要的操作就是让价格减一, 所以需要一个索引
      this.$emit("kanyidao", this.index);
    },
  },
  // 兄弟那传过来的值, 放在哪呢, 也不知道它传过来的值什么时候要用
  // 既然不知道什么时候要用, 那就在页面一渲染完成就自动调用这个函数吧
  mounted() {
    // 监听兄弟组件所发出的事件
    bus.$on("getcolor", (data) => {
      this.color = data;
    });
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>