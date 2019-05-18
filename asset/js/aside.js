$(function () {
      // 侧边栏展开收起
      $('.icon-fold').click(function () {
            // console.log($(this).find('#showFlag')[0].alt,'src')
            var html = $(this).find('#showFlag').attr('alt')
            if (html == '1') {
                  $(this).find('#showFlag').attr('alt', '2')
                  $(this).find('#showFlag').attr('src', '../../asset/img/icon_expand.png')
                  $(this).animate({
                        left: '264px'
                  })
                  $('.aside').animate({
                        left: '0'
                  })
            } else {
                  $('.aside').animate({
                        left: '-264px'
                  })
                  $(this).find('#showFlag').attr('alt', '1')
                  $(this).find('#showFlag').attr('src', '../../asset/img/icon_fold.png')
                  $(this).animate({
                        left: '18px'
                  })
            }
      })
      // 报警弹框
      $('')

      // 菜单树
      var zTreeObj;
      // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
      var setting = {
            callback: {
                  onClick: zTreeOnClick
            }
      };
      // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
      var zNodes = [{
                  name: "资源管理1级",
                  url: 'https://www.baidu.com/',
                  open: false,
                  children: [{
                              name: "资源管理1级的孩子1",
                              url: 'https://www.baidu.com'
                        },
                        {
                              name: "资源管理1级的孩子2"
                        }
                  ]
            },
            {
                  name: "test2",
                  open: false,
                  children: [{
                              name: "test2_1"
                        },
                        {
                              name: "test2_2"
                        }
                  ]
            }
      ];
      zTreeObj = $.fn.zTree.init($("#menu-tree"), setting, zNodes);

      // var 
      // $.post(url,{},function(res){
      //       if(res.data.code===200){

      //       }else{

      //       }
      // })
      function zTreeOnClick(event, treeId, treeObj) {
            var pNode = treeObj.getParentNode();
            console.log(treeObj, 'ccc')
            console.log(pNode)
            // return filename;
      }
})