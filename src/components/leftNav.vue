<template>
  <div id="pendant">
    <ul>
      <li class="lift_item">
        <a href="javascript:;">精品商铺</a>
      </li>
      <li class="lift_item">
        <a href="javascript:;">店铺推荐</a>
      </li>
      <li class="lift_item">
        <a href="javascript:;">名家推荐</a>
      </li>
      <li class="lift_item">
        <a href="javascript:;">藏品展示</a>
      </li>
      <li class="lift_item">
        <a href="javascript:;">拍卖预展</a>
      </li>
      <li class="lift_item">
        <a href="javascript:;">在线交易</a>
      </li>
      <li class="lift_item">
        <a href="javascript:;">新闻中心</a>
      </li>
      <li class="lift_item">
        <a href="javascript:;">关于我们</a>
      </li>
      <li class="lift_item_last">
        <a href="javascript:;">顶部</a>
        <b class="triangle"></b>
      </li>
    </ul>
  </div>
</template>

<script>

import $ from 'jquery'
export default {

  mounted() {
    var $lift = $("#pendant");
    //当页面滚动的时候,触发滚动事件, 显示/隐藏楼层滚动条,
    //改变楼层滚动条的样式
    // $(window).scroll(() => {
    //   var scrollTop = $("html,body").scrollTop();
    //   var $f1 = $(".boutique_shops");
    //   var offsetTop = $f1.offset().top;
    //   if (offsetTop < scrollTop + (innerHeight / 4) * 1) {
    //     $lift.fadeIn(500);
    //   } else {
    //     $lift.fadeOut(500);
    //   }
    //   var $floors = $(".floor");
    //   $floors.each((i, elem) => {
    //     var $f = $(elem);
    //     if ($f.offset().top < scrollTop + (innerHeight / 4) * 1)
    //       $lift
    //         .find(".lift_item:eq(" + i + ")")
    //         .addClass("hover")
    //         .siblings()
    //         .removeClass("hover");
    //   });
    // });
    //给按钮绑定点击事件,改变html的位置
    // $lift.children("ul").on("click", "li", function() {
    //   var $li = $(this);
    //   var i = $li.index();
    //   if (i == $lift.find("li").length - 1) {
    //     return "";
    //   }
    //   var $fi = $(".floor:eq(" + i + ")");
    //   var offsetTop = $fi.offset().top;
    //   $("html").animate(
    //     {
    //       scrollTop: offsetTop - 60
    //     },
    //     500
    //   );
    // });
    //返回顶部
    $lift.find(".lift_item_last").on("click", function() {
      $("html").animate(
        {
          scrollTop: 0
        },
        500
      );
    });
  }
};
</script>

<style>
#pendant {
  position: fixed;
  left: 60px;
  bottom: 100px;
  width: 60px;
  height: 486px;
  z-index: 100;
  text-align: center;
  font-size: 12px;
  /* display: none; */
}
#pendant li {
  width: 60px;
  height: 53px;
  line-height: 53px;
  background-color: #a39696;
  border-bottom: 1px dashed white;
  font-size: 12px;
  text-align: center;
}
#pendant ul li:hover {
  background-color: red;
}
#pendant li a {
  width: 100%;
  height: 100%;
  display: inline-block;
  color: white;
}
</style>
