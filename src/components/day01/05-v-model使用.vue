<template>
  <div>
    <input type="checkbox" v-model="mywife" value="王小美" />王小美
    <input type="checkbox" v-model="mywife" value="胡桃" />胡桃
    <input type="checkbox" v-model="mywife" value="影宝" />影宝
    <input type="checkbox" v-model="mywife" value="优菈" />优菈
    <br />
    <input type="radio" v-model="gy" value="王小美" />王小美
    <input type="radio" v-model="gy" value="甘雨" />甘雨
    <br />
    <select v-model="city">
      <option value="蒙德">蒙德</option>
      <option value="璃月">璃月</option>
      <option value="稻妻">稻妻</option>
      <option value="雪山">雪山</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mywife: [],
      gy: "",
      city: "",
    };
  },
};
</script>

<style>
</style>