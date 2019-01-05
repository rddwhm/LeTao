

//nprogress进度条插件
$(document).ajaxStart(function () {
  // console.log("ajaxStart在开始一个ajax请求时触发");
    NProgress.start();
});
$(document).ajaxStop(function () {
  // console.log("ajaxStart在开始一个ajax请求时触发");
  setTimeout(function(){
     
    NProgress.done();
  },500)
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

     // 退出功能(显示模态框)
     $(".icon_logout").click(function(){
          // 让模态框显示隐藏
         $('#myModal').modal("show");
     })


     // 退出登录功能
     $('.logoin_out').click(function(){
           $.ajax({
                type: 'get',
                url: '/employee/employeeLogout',
                dataType: 'json',
                success: function(info){
                      alert(1);
                       if(info.success){
                            location.href = 'login.html';      
                       }
                }
           })
     })
})