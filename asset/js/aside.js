$(function () {
      // 侧边栏展开收起
  $('#showFlag').click(function () {
    $tis = $(this);
    if($tis.hasClass('unfolded')) {
      $('.aside').animate({
        left: '0'
      })
      $tis.removeClass('unfolded');
    } else {
      $('.aside').animate({
        left: '-450px'
      })
      $tis.addClass('unfolded');
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