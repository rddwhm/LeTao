

// 表单校验 插件
$(function(){
      // 使用表单插件
      $('#form').bootstrapValidator({
              //2. 指定校验时的图标显示，默认是bootstrap风格
            feedbackIcons: {
              valid: 'glyphicon glyphicon-ok',
              invalid: 'glyphicon glyphicon-remove',
              validating: 'glyphicon glyphicon-refresh'
            },

             //指定校验字段
             fields: {
                  // 校验用户名 
                  username: {
                      validators: {
                          // 不能为空
                          notEmpty: {
                              message: '用户名不能为空'
                          },
                          // 长度校验
                          stringLength: {
                              min: 2,
                              max: 6,
                              message: '用户名长度必须在2~6之间'
                          },
                          collback: {
                              message: '用户名不存在'
                          }
                      }
                  },
                  // 密码校验
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
                            message: '用户名长度必须在6~12之间'
                        },
                        collback: {
                          message: '密码不正确'
                        }
                    }
                }
             }
      })

      // 点击重置按钮的时候 隐藏所有的图标和文本
      $('[type = reset]').click(function(){
           $('#form').data('bootstrapValidator').resetForm();
      })


      // 点击登录的时候进行校验 
      $('.icon-login').click(function(){
           // 发生ajax 请求
           $.ajax({
                type: 'post',
                url: '/employee/employeeLogin',
                data: $('#form').serialize(),
                success: function(info){
                       // 1000 用户名不存在
                       if(info.error == 1000){
                         $('#form').updateStatus('username', 'INVALID', 'collback');
                       }  
                       // 1001 
                       if(info.error == 1001){
                         $('#form').updateStatus('password', 'INVALID', 'collback');                          
                       }
                       // 成功的时候跳转到index.html页面
                       if(info.success){
                           location.href = "index.html";
                       }
                }
           })
      })
})