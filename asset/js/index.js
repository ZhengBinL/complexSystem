$(function () {
    // 通告牌的最大化与最小化
    $('.minimize').click(function () {
        $('.notice-board').hide();
        $('.notice-board-small').show();
    })
    $('.icon-maximum').click(function () {
        $(this).parent().hide();
        $('.notice-board').show();
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
        {name:"资源管理1级",url: 'https://www.baidu.com/', open:false, children:[
            {name:"资源管理1级的孩子1", url:'https://www.baidu.com'}, {name:"资源管理1级的孩子2"}]},
        {name:"test2", open:false, children:[
            {name:"test2_1"}, {name:"test2_2"}]}
    ];
    zTreeObj = $.fn.zTree.init($("#menu-tree"), setting, zNodes);
    function zTreeOnClick(event, treeId, treeObj){
        var pNode = treeObj.getParentNode();
        console.log(treeObj, 'ccc')
        console.log(pNode)
        // return filename;
    }
    // 点击左侧六宫格
    $('.palace-unit').click(function () {
        zNodes = [
            {name:"资源管理1级",url: 'https://www.layui.com/', open:false, children:[
                {name:"资源管理1级的孩子1", url:'https://www.baidu.com'}, {name:"资源管理1级的孩子2"}]},
            {name:"test2", open:false, children:[
                {name:"test2_1"}, {name:"test2_2"}]}
        ];
        zTreeObj = $.fn.zTree.init($("#menu-tree"), setting, zNodes);
    })
})