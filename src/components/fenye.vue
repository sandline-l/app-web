<template>
  <div class="page clearfix">
    <ul class="clearfix">
      <li v-show="showFirstPage" v-if="(pageNum == 1? false:true)">
        <a href="#">上一页</a>
      </li>
      <li v-if='pageNum'>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li class="active">
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">5</a>
      </li>
      <li>
        <a href="#">6</a>
      </li>
      <li>
        <a href="#">7</a>
      </li>
      <li>
        <a href="#">8</a>
      </li>
      <li>
        <a href="#">9</a>
      </li>
      <li>
        <a href="#">10</a>
      </li>
      <li v-show="showLastPage">
        <a href="#">下一页</a>
      </li>
    </ul>
  </div>
</template>



<script>


// "showFirstPage":true,
//             "showLastPage":true,
//             "showPrevPage":true,
//             "showNextPage":true,
export default {
  methods: {
    getDate() {
      // 这里简单模拟一下后台传过来的数据
      for (let i = 0; i < 601; i++) {
        this.data.push({ name: "liu", look: "very handsome" });
      }
      // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
      this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1;
    },
    getGroup() {
      for (let i = 0; i < this.pageNum; i++) {
        // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
        // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5(对slice操作来说是0-5)条，第二页是6-10(对slice操作来说是5-10)条...
        this.totalPage[i] = this.data.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }
    },
    // 当前显示的内容
    // this.dataShow = this.totalPage[this.currentPage];
    // 上一页和下一页
    // 下一页
    nextPage() {
      if (this.currentPage == this.pageNum - 1) return;
      this.dataShow = this.totalPage[++this.currentPage];
    },
    // 上一页
    prePage() {
      if (this.currentPage == 0) return;
      this.dataShow = this.totalPage[--this.currentPage];
    }
  },
  data() {
    return {
      // 假设这是后台传来的数据来源
      data: [],
      // 所有页面的数据
      totalPage: [],
      // 每页显示数量
      pageSize: 5,
      // 共几页
      pageNum: 2,  // total
      // 当前显示的数据
      dataShow: "",
      // 默认当前显示第一页
      currentPage: 0
    };
  }
};
</script>

<style lang='scss' scoped>
.page {
  text-align: center;
  margin: 10px 0 20px;
  ul {
    li {
      // float: left;
      display: inline-block;
      border: 1px solid #ccc;
      // padding: 0 10px;
      margin: 0 4px;
      a {
        padding: 4px 10px;
      }
    }
    li:hover {
      // color: #fff;
      border-color: #f40;
    }
    li.active {
      color: #fff;
      border-color: #f40;
      background-color: #f40;
    }
  }
}
</style>
