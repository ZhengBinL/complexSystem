$(function () {
      // 侧边栏展开收起
  $('.icon-fold').click(function () {
    $tis = $(this);
    var _alt = $tis.find('#showFlag').attr('alt')
    if (_alt == '1') {
      $tis.find('#showFlag').attr('alt', '2')
      $tis.find('#showFlag').attr('src', '../../asset/img/icon_expand.png')
      $tis.animate({
        left: '450px'
      })
      $('.aside').animate({
        left: '0'
      })
      $('#zhanwei-c').animate({
            left: '0'
      })
    } else {
      $('.aside').animate({
        left: '-40px'
      })
      $('#zhanwei-c').animate({
            left: '-480px'
      })
      $tis.find('#showFlag').attr('alt', '1')
      $tis.find('#showFlag').attr('src', '../../asset/img/icon_fold.png')
      $tis.animate({
        left: '0'
      })
    }
  })


      // 菜单树
      var setting = {
            data:{
              view:{
                fontCss:{
                  "color": "#229fe6"
                },
                showLine:true
              },
              simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pid",
                rootPId: 0
              }
            }
      };
      var zNodes =[];
      $.get($ctx + "/resource/node",function(res){
            zNodes =res.data
            $.fn.zTree.init($("#menu-tree"), setting,zNodes);
      })
      
})