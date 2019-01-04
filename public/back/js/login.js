


//  1. 进行表单校验配置    
//     校验要求:
//       (1) 用户名不能为空, 长度为2-6位
//       (2) 密码不能为空, 长度为6-12位
$(function(){
     // 进行表单校验 
     $("#form").bootstrapValidator({
         //2. 指定校验时的图标显示，默认是bootstrap风格
          feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
           // 指定校验字段
           fields: {
              // 校验用户名 
              username: {
                  validators: {
                      // 不能为空
                      notEmpty: {
                           message: "用户名不能为空"
                      },
                      // 长度校验
                      stringLength: {
                         min: 2,
                         max: 6,
                         message: '用户名长度必须在2~6之间'
                      },
                      callback: {
                          message: '用户名不存在'
                      }
                  }
              },
              // 校验密码
              password: {
                   validators: {
                       // 不能为空
                       notEmpty: {
                           message: '密码不能为空'
                       },
                       // 长度校验
                       stringLength: {
                            min: 6,
                            max: 12,
                            message: '密码长度必须在6~12之间'
                       },
                       callback: {
                          message: '密码错误'
                       }
                   }
              }
           }
     })
      /*
      * 2. 我们需要用到插件的校验功能, 所以要用 submit 按钮
      *    所以需要注册表单校验成功事件, 在事件中, 阻止默认的提交(防止跳转), 通过 ajax 提交即可
      * */
      // 注册表单校验成功事件
      $("#form").on("success.form.bv",function(e){
           // 阻止默认的提交
           e.preventDefault();
          //  console.log("阻止了登录");
           // 使用ajax 提交逻辑
           $.ajax({
                type: "post",
                url: "/employee/employeeLogin",
                data: $("#form").serialize(),
                dataType: "json",
                success: function(info){
                     console.log(info);
                     // 进行判断
                     if(info.error == 1000){
                          $("#form").data('bootstrapValidator').updateStatus('username','INVALID','callback');
                     }
                     if(info.error == 1001){
                          $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback');
                     }
                     if(info.success ){
                          location.href = "index.html";
                          return;
                     }
                }
           })
      })


      // 点击重置按钮
      $("[type = 'reset']").click(function(){
           $('#form').data("bootstrapValidator").resetForm();
      })
})