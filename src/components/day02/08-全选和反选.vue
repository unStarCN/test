<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="checkAll" />
    <button @click="re">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.state" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          state: true,
        },
        {
          name: "孙悟空",
          state: true,
        },
        {
          name: "唐僧",
          state: false,
        },
        {
          name: "白龙马",
          state: true,
        },
      ],
      //   state:''
    };
  },
  computed: {
    checkAll: {
      get() {
        // 我们给元素值
        return this.arr.every((item) => item.state);
      },
      set(value) {
        console.log(value);
        // 根据当前的参数将数据中的对象state属性进行赋值
        this.arr.forEach((v) => (v.state = value));
      },
    },
  },
  methods: {
    re() {
      console.log(11);
      this.arr.forEach((item) => (item.state = !item.state));
    },
  },
};
</script>

<style>
</style>