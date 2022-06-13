<template>
  <div>
    <brother></brother>
    <son
      v-for="value in list"
      :key="value.id"
      :name="value.proname"
      :price="value.proprice"
      :info="value.info"
      :index="value.id"
      @kanyidao="deal"
    ></son>
  </div>
</template>
<script>
// 导入子组件
import son from "./04-son.vue";
import brother from "./05-brother.vue";
export default {
  name: "",
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  methods: {
    deal(index) {
      // 在子组件中传递过来了一个index, 在这里接收
      console.log(index);
      //   有了索引之后 就找对应的list项将它的proprice--
      this.list[index - 1].proprice -= 1;
    },
  },
  //   定义子组件
  components: {
    son,
    brother,
  },
};
</script>
<style lang='less' scoped>
</style>