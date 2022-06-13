<template>
  <div id="app">
    <div class="add">
      品牌名称:<input type="text" v-model="brandName" /> 添加日期:<input
        type="datetime-local"
        v-model="date"
      />
      价格:<input type="number" v-model="price" />
      <input type="button" value="添加" @click="add" />
    </div>
    <div class="add">
      品牌名称:<input type="text" placeholder="请输入搜索条件" />
    </div>
    <div>
      <table class="tb">
        <tbody>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>价格</th>
            <th>图片</th>
            <th>操作</th>
          </tr>
          <tr v-for="(value, index) in brandList" :key="value.id">
            <td>{{ index + 1 }}</td>
            <td>{{ value.brandName }}</td>
            <td>{{ value.date }}</td>
            <!-- <td :class="{ red: value.price > 10000 }">{{ value.price }}</td> -->
            <!-- 单个的就用对象, 多个的话就用数组了 -->
            <!-- 语法 :class='[样式名称,{样式名称:bool}]' -->
            <td :class="[{ red: value.price > 10000 }]">
              {{ value.price }}
            </td>
            <td><img :src="value.img" alt="" /></td>
            <td>
              <a href="javascipt:;" @click="del(value.id, $event)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      brandList: [
        // 数据一定要有id
        {
          id: 1,
          brandName: "QQ",
          date: "2022-4-4",
          price: 10000,
          img: "http://pic-bucket.ws.126.net/photo/0008/2020-03-11/F7EJD9BE6R0M0008NOS.jpg?imageView&thumbnail=300y225",
        },
        {
          id: 2,
          brandName: "BWM",
          date: "2022-5-5",
          price: 20000,
          img: "http://pic-bucket.ws.126.net/photo/0008/2019-06-18/EHV82VCR294K0008NOS.jpg?imageView&thumbnail=300y225",
        },
        {
          id: 3,
          brandName: "BYD",
          date: "2022-6-6",
          price: 30000,
          img: "http://pic-bucket.ws.126.net/photo/0008/2021-04-12/G7DBDENINJEM0008NOS.jpg?imageView&thumbnail=300y225",
        },
      ],
      brandName: "",
      date: "",
      price: "",
      id: 4,
    };
  },
  //   删除操作 既从数组中将该项抹除 通过id去匹配
  methods: {
    del(id, e) {
      e.preventDefault();
      this.brandList = this.brandList.filter((value) => value.id != id);
    },

    // 添加
    add() {
      // 首先要获取到表单里面的值嘛 利用双向绑定
      // console.log(111);
      // console.log(this.brandName, this.date, this.price);
      // 加到数组里面去
      this.brandList.push({
        id: this.id,
        brandName: this.brandName,
        date: this.date,
        price: this.price,
        img: "http://pic-bucket.ws.126.net/photo/0008/2020-03-11/F7EJD9BE6R0M0008NOS.jpg?imageView&thumbnail=300y225",
      });
      this.id++;
    },
  },
};
</script>
<style lang='less' scoped>
#app {
  width: 900px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
img {
  width: 100px;
}
.red {
  color: red;
}
</style>