
// 发送ajax 请求
$(function(){
   
  var currentPage = 1; //当前页数
  var pageSize = 5; //每页的数据条数
  render();
  function render(){

    //发送ajax请求
    $.ajax({
        type: 'get',
        url: '/category/querySecondCategoryPaging',
        data: {
            page: currentPage,
            pageSize: pageSize
        },
        dataType: 'json',
        success: function(info){
            console.log(info);
            var htmlstr = template('secondTpl', info);
            $('tbody').html(htmlstr);
  
            // 分页插件
            $('#pagintor').bootstrapPaginator({
              bootstrapMajorVersion: 3, // 版本号为3
              currentPage: info.page, // 当前页
              totalPages: Math.ceil(info.total / info.size), // 总页数
              // 注册按钮点击事件 (事件 ,)
              onPageClicked: function( a, b, c, page ){
                 // 重置页数
                 currentPage = page;
                 // 重新渲染页面
                 render();
              }
            }) 
        }
    })
  }

  // 给点击按钮注册事件 点击的时候显示模态框
  $('#addSecond').click(function(){
     $("#secondModal").modal('show');
     // 发送ajax请求
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
         var htmlstr = template('downTpl', info);
         $('.dropdown-menu').html(htmlstr);
       }
     })

     // 点击下拉框的a的时候 让下拉框的input的内容替换为a的内容
     $('#ul-dropdown-menu').on('click','a',function(){
       // 获取点击的 a 文本内容
       var txt = $(this).text();
       console.log(txt);
       // 赋值给input
       $('#dropdownText').text(txt);
     })


     // 点击file 按钮 上传图片
     $('#addPutFile').fileupload({
       dataType: 'json',
       done:function(e,data){
          console.log(data);
          var src = data.result.picAddr;
          $('#imgBox img').attr('src',src);
       }
     })

     // 点击模态框  添加按钮的时候 把form 表单里面的数据添加到列表里
     $('#addAllForm').click(function(){
        // 隐藏模态框
        $('#secondModal').modal('hide');
     })
  })
})