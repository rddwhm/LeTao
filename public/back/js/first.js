
// 发送ajax 获得数据
$(function(){
  
  var currentPage = 1; // 获取当前页
  var pageSize = 5; // 每页展示的条数
  
  render();
  // 发送ajax 
  function render(){
    
    $.ajax({
       type: 'get',
       url: '/category/queryTopCategoryPaging',
       data: {
        page: currentPage,
        pageSize: pageSize
       },
       dataType: 'json',
       success: function(info){
         console.log(info);
         var htmlstr = template('firstTpl', info);
         $('tbody').html(htmlstr);
  
           // 分页初始化
           $('#paginator').bootstrapPaginator({
            // 版本号
            bootstrapMajorVersion: 3,
            // 当前页
            currentPage: info.page,
            // 总页数
            totalPages: Math.ceil( info.total / info.size ),
            // 注册页码点击事件
            onPageClicked: function( a, b, c, page ) {
              // 更新当前页
              currentPage = page;
              // 重新渲染页面
              render();
            }
          })
       }
    })
  }


  // 点击添加分类 显示模态框
  $('.addBtn').click(function(){

     $('#addModal').modal('show');
  })

  // 点击确定按钮的时候 把input文本框里面的内容添加到 列表
  $('.firstAdd').click(function(){
    alert(1);
    var text = $('.name-text input').text();
    console.log(text);
     // 获取文本框的内容
    //  $.ajax({
    //     type: 'post',
    //     url: '/category/addTopCategory',
    //     data: {
    //       categoryName:
    //     }
    //  })
  })
})