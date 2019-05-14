$(function () {
	// 侧边栏展开收起
	$('.icon-fold').click(function(){
		var html = $(this).html()
		if(html == '展开'){
			$(this).html('收起').animate({left: '12.5%'})
			$('.aside').animate({width: '12.5%'})
            $('.main').css('left', '12.5%')
            $('.aside-cover').animate({width: 0})
		}else{
			$('.aside').animate({width: '30px'})
            $('.main').css('left', '30px')
            $(this).html('展开').animate({left: '30px'})
			$('.aside-cover').animate({width: '30px'})
		}
	})
    // 菜单树
    var zTreeObj;
    // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
    var setting = {
        callback: {
            onClick: zTreeOnClick
        }
    };
    // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
    var zNodes = [
        {
            name:"资源管理1级",
            url: 'https://www.baidu.com/',
            open:false,
            children:[
                {name:"资源管理1级的孩子1", url:'https://www.baidu.com'},
                {name:"资源管理1级的孩子2"}
            ]
        },
        {
            name:"test2",
            open:false,
            children:[
                {name:"test2_1"},
                {name:"test2_2"}
            ]
        }
    ];
    zTreeObj = $.fn.zTree.init($("#menu-tree"), setting, zNodes);
    function zTreeOnClick(event, treeId, treeObj){
        var pNode = treeObj.getParentNode();
        console.log(treeObj, 'ccc')
        console.log(pNode)
        // return filename;
    }
})