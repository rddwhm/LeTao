

//nprogress进度条插件
$(document).ajaxStart(function () {
  // console.log("ajaxStart在开始一个ajax请求时触发");
    NProgress.start();
});
$(document).ajaxStart(function () {
  // console.log("ajaxStart在开始一个ajax请求时触发");
      NProgress.done();
});


// 入口函数 
$(function(){
     // 让二级菜单显示隐藏
     $(".category").click(function(){
            $(this).next().stop().slideToggle();
     })
   
     $('.icon_menu').click(function(){
           $('.lt_aside').toggleClass("hidemenu");
           $('.lt_main').toggleClass("hidemenu");
           $('.lt_topbar').toggleClass("hidemenu");
     })

     // 退出功能
     $(".icon_logout").click(function(){
         $('#myModal').modal("show");
     })
})