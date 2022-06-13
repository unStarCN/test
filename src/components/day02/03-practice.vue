<template>
  <p v-if="age < 18">王小美</p>
  <p v-else-if="age < 20">胡桃</p>
  <p v-else-if="age < 30">优菈</p>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      age: 20,
    };
  },
};
</script>
<style lang='less' scoped>
</style>