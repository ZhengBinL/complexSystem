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


      var setting = {
            data: {
                  // simpleData: {
                  //       enable: true,
                  //       idKey: "id", //节点id
                  //       pIdKey: "parentId", //父节点id
                  // },
            },
            view: {
                  showLine: false, // 是否显示节点之间的连线
            },
            async: {
                  enable: true, // 开启异步加载
                  url: "", //对应的后台请求路径
                  dataType: "json",
                  autoParam: ["id=parentId"] // 异步加载时需要自动提交父节点属性的参数
            },
            callback: { //回调函数
                  onClick: onClick, // 节点被点击时调用
                  onAsyncSuccess: zTreeOnAsyncSuccess, // 异步加载正常结束的事件回调函数
            },
      };
      function onClick(event, treeId, treeNode, clickFlag) {
            var id = treeNode.id; // 树id
            var treename = treeNode.name; // 树名称.可以在需要的时候加
            var treeObj = $.fn.zTree.getZTreeObj(treeId);
            var nodes = treeObj.getSelectedNodes(); //
            if (nodes.length > 0) {
                  treeObj.reAsyncChildNodes(nodes[0], "refresh"); // 刷新节点
            }
            //用于捕获异步加载正常结束的事件回调函数
            function zTreeOnAsyncSuccess(event, treeId, treeNode, msg) {
                  var treeObj = $.fn.zTree.getZTreeObj(treeId);
                  var nodes = treeObj.getNodes();
                  if (nodes.length > 0) {
                        for (var i = 0; i < nodes.length; i++) {
                              treeObj.expandNode(nodes[i], true, false, false); //默认展开第一级节点
                        }
                  }
            }
            // 加载树初始化
            function init() {
                  $.fn.zTree.init($("#menu-tree"), setting); // 将得到的数据解析并填充到ZTree
            }
            $(function () {
                  init(); //加载数据
            })
      }
})