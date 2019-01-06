

// 发生ajax 请求, 渲染页面 
$(function () {
  var currentId; // 当前用户的id 
  var isDelete;  // 当前需要改变的状态

  var currentPage = 1; // 当前页数
  var pageSize = 5;

  render();

  function render() {
    // 发生ajax请求
    $.ajax({
      type: 'get',
      url: '/user/queryUser',
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var htmlstr = template('userTpl', info);
        $('.table tbody').html(htmlstr);

        // 分页初始化
        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
          currentPage: info.page, //当前页
          totalPages: Math.ceil(info.total / info.size),  //总页数
          onPageClicked: function (a, b, c, page) {
            // 重新赋值当前页数
            currentPage = page;
            // 重新渲染页面
            render();
          }
        })
      }
    });

  }

  // 点击button按钮的时候 更改用户的状态  (注册事件委托)
  $('.userTbody').on('click', '.btn', function () {
    // 显示模态框
    $('#userModal').modal('show');
    currentId = $(this).parent().data('id'); //获取当前点击用户的id
    
    isDelete = $(this).hasClass("btn-danger") ? 0 : 1;
     
  })

  // 点击确定按钮的时候 更改类型
  $('#submitBtn').click(function(){
    // 发送ajax 请求
    $.ajax({
         type: 'post',
         url: '/user/updateUser',
         data: {
            id : currentId,
            isDelete: isDelete
         },
         dataType: 'json',
         success: function(info){
            // console.log(info);
            if( info.success ){
              $('#userModal').modal('hide');
              // 重新渲染页面
              render();
            }
         }
    })
    
  })

})