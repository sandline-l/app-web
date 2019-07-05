<template>
  <div class="movie">
    <!-- 菜单 -->
    <nav class="nav">
      <router-link :to="{name:'Home'}">首页</router-link>
      <a
        href="#"
        v-for="(item,index) in navList"
        :key="index"
        :class="{ active: index ==0 }"
      >{{item}}</a>
    </nav>
    <div class="movie_box">
      <!-- 类型导航 -->
      <div class="choose_area">
        <div class="choose_item clearfix">
          <div class="left">类型 :</div>
          <div class="right">
            <ul class="clearfix">
              <li class="active">
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="choose_item clearfix">
          <div class="left">类型 :</div>
          <div class="right">
            <ul class="clearfix">
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="choose_item clearfix none_border">
          <div class="left">类型 :</div>
          <div class="right">
            <ul class="clearfix">
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
              <li>
                <a href="#">lorem1</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 电影海报 -->
      <div class="movie_page clearfix">
        <!-- 根据每页条数来渲染应该有多少个 -->
        <div class="movie_item" v-for="(item,index) in newcurSize" :key="index">
          <img src="../../assets/img/movie.png" alt>
          <div class="title">蜘蛛侠：英雄远征(到来的约定日)</div>
          <div class="score">9.5</div>
        </div>
      </div>
      <!-- <fen-ye></fen-ye> -->
    </div>
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="30"
      background
    ></el-pagination>
  </div>
</template>

<script>
// import FenYe from '../../components/fenye.vue';
export default {
  // 思路, 引入代码之后, 将分页 和 被分页数据联系起来, 也就是 数据的渲染时由 curSize 决定的,(真实每页条数)
  // 初始化的时候, 由总条数和 当前页数 计算出 curSize
  // 修改每页条数和修改当前页时, 再计算cursize
  // 问题, 把相同的代码提取到函数中, 然后执行函数, 但是却无法达到相同的效果

  components: {},
  methods: {
    changeCurSize() {
      if (this.currentPage < this.totalPage) {
        this.curSize = this.pageSize;
      } else if (this.currentPage == this.totalPage) {
        this.curSize = this.total - (this.totalPage - 1) * this.pageSize;
      }
    },
    // 修改每页条数时触发, 将当前的每页条数赋值为新的值
    handleSizeChange(val) {
      this.pageSize = val;
      // console.log("每页条数", this.pageSize);
      // console.log("显示条数", this.curSize);
      // console.log("当前页", this.currentPage);
      // console.log("总页数", this.totalPage);
      // console.log(this.totalPage == this.currentPage);
    },
    // 修改页数时触发, 将当前的页数赋值为新的值
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log("显示条数", this.curSize);
      // console.log("当前页", this.currentPage);
      // console.log("总页数", this.totalPage);
      // console.log(this.totalPage == this.currentPage);
    }
  },
  created() {
    if (this.currentPage < this.totalPage) {
      this.curSize = this.pageSize;
    } else if (this.currentPage == this.totalPage) {
      this.curSize = this.total - (this.totalPage - 1) * this.pageSize;
    }
  },
  mounted() {},
  data() {
    return {
      navList: ["正在热映", "即将上映", "经典影片"],
      // 当前页,
      currentPage: 1,
      // 每页显示条数
      pageSize: 5,
      // 总条数
      total: 30,
      // 真实显示条数
      curSize: 0
    };
  },
  computed: {
    // 用计算属性,计算出总的页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    newcurSize() {
      // 之前也是想用计算属性来控制 cursize的, 但是写错了,在条件判断中有两个return , 所以可能只触发了一个,另外一个就不触发了.
      // 其实计算属性可以是衍生属性, 等值判断完了之后 , 在统一返回一个值,
      if (this.currentPage < this.totalPage) {
        this.curSize = this.pageSize;
      } else if (this.currentPage == this.totalPage) {
        this.curSize = this.total - (this.totalPage - 1) * this.pageSize;
      }
      return this.curSize;
    }
  }
};
</script>

<style lang='scss'>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.movie {
  line-height: 1.5;
  font-size: 16px;
  .nav {
    height: 60px;
    background-color: #47464a;
    text-align: center;
    line-height: 60px;
    a {
      color: #999;
      height: 60px;
      display: inline-block;
      margin: 0 38px;
    }
    a:hover {
      color: #fff;
    }
    a.active {
      color: #ef4238;
    }
  }
  .movie_box {
    width: 1200px;
    margin: 0 auto;
    line-height: 30px;
    .choose_area {
      border: 1px solid #ccc;
      padding: 10px 20px;
      margin: 30px 0;
      .choose_item {
        margin: 1em 0;
        border-bottom: 1px dotted #e5e5e5;
        .left {
          float: left;
          width: 60px;
          text-align: right;
          color: #999;
        }
        .right {
          float: left;
          width: 1050px;
          color: #333;
          ul {
            li {
              // background-color: #f04;
              margin: 0 8px;
              line-height: 30px;
              font-size: 14px;
              a {
                display: inline-block;
                margin: 0 6px;
                height: 100%;
              }
              float: left;
            }
            li:hover {
              color: red;
            }
            li.active {
              border-radius: 20px;
              background-color: red;
              color: #fff;
            }
          }
        }
      }
      .choose_item.none_border {
        border: none;
      }
    }
    .movie_page {
      //   height: 30px;
      //   background-color: #f40;
      text-align: center;

      .movie_item {
        float: left;
        margin: 0px 48px 20px 0;
        img {
          width: 160px;
          height: 220px;
        }
        .title {
          overflow: hidden;
          width: 160px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .score {
          color: #ffb400;
          font-style: italic;
        }
        .score::first-letter {
          font-size: 25px;
        }
      }
      .movie_item:nth-of-type(6n) {
        margin-right: 0;
      }
      //   葫芦侠,
    }
  }
  .el-pagination {
    text-align: center;
    margin: 20px 0 40px;
  }
}
</style>
