<template>
  <!-- 语法: v-for='(值,索引) in 目标结果'
    想循环生成谁, 就在谁中添加v-for
   -->
  <div class="box">
    <ul>
      <li>
        <span>编号</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <span>姓名</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <span>年龄</span>
      </li>
      <li v-for="(value, index) in list" :key="value.id">
        <span>{{ index + 1 }}</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <span>{{ value.name }}</span> &nbsp;&nbsp;&nbsp;&nbsp;
        <span>{{ value.age }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [
        { id: 1, name: "jack", age: 20 },
        { id: 2, name: "rose", age: 19 },
        { id: 3, name: "tom", age: 18 },
      ],
    };
  },
};
</script>

<style lang="less" scope>
.box {
  color: aqua;
  font-size: 30px;
}
</style>