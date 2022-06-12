<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in list" :key="value.id">
            <td>{{ index + 1 }}</td>
            <td>{{ value.name }}</td>
            <td :class="{ red: value.price > 100 }">{{ value.price }}</td>
            <td>{{ value.date | datefilter }}</td>
            <td><a href="#" @click.prevent="del(value.id)">删除</a></td>
          </tr>
          <tr v-show="list.length == 0">
            <td>没有数据, 请输入数据</td>
          </tr>
          <tr>
            <td>统计：</td>
            <td colspan="2">总价格为：0</td>
            <td colspan="2">平均价为：0</td>
          </tr>
        </tbody>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="newObj.name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model="newObj.price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="datetime-local"
              class="form-control"
              placeholder="日期"
              v-model="newObj.date"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-primary" @click.prevent="add">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// import "../../utils/commentfilter.js";
import moment from "moment";
export default {
  data() {
    return {
      list: [
        { id: 1, name: "电脑", price: 1000, date: "2022-4-4" },
        { id: 2, name: "ipad", price: 1200, date: "2022-5-5" },
        { id: 3, name: "电脑桌", price: 80, date: "2022-6-6" },
      ],
      newObj: {
        name: "",
        date: "",
        price: "",
      },
      id: 4,
    };
  },
  methods: {
    del(id) {
      this.list = this.list.filter((item) => item.id != id);
    },
    add() {
      //   this.list.push(this.newObj);
      this.newObj.id = this.id;
      this.id++;
      this.list.push({ ...this.newObj });
    },
    filters: {
      datefilter(data) {
        return moment(data).format("YYYY-MM-DD");
      },
    },
  },
};
</script>

<style >
.red {
  color: red;
}
</style>