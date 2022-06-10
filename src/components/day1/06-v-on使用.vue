<template>
  <div>
    <input type="number" v-model.number="num" />输入加几
    <br />
    <button @click="add(num)">点我+1</button>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      num: 1,
    };
  },
  methods: {
    add(num) {
      this.count += num;
    },
  },
};
</script>

<style>
</style>