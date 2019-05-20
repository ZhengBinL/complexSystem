
$(function () {
    // 菜单树
    var zNodes = []//节点
    var indexNum//点击的某个点的index
    // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
    var setting = {
        view: {
            fontCss: {
                "color": "#fff",
                "font-size": "28px"
            },
            showLine:true
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pid",
                rootPId: 0
            }
        },
        callback: {
            onClick: zTreeOnClick//节点点击回调函数
        }
    };
    
    $.get($ctx+"/resource/node", function (res) {
        zNodes = res.data
        $.fn.zTree.init($("#menu-tree"), setting, zNodes);
    })

    function zTreeOnClick(event, treeId, treeNode) {
        if(!!treeNode.isParent)return
        $.get($ctx+'/dvr/rtspUrl?id=1000000', function (res) {
            if (indexNum == 1) {
                play($('#vlc1'))
            } else if (indexNum == 2) {
                play($('#vlc2'))
            } else if (indexNum == 3) {
                play($('#vlc3'))
            } else if (indexNum == 4) {
                play($('#vlc4'))
            }
            $('.videos-li').eq(indexNum-1).find('.icon-history').attr('data-szCameraId',res.data.cid)
        })
    }

    $('.videos-li').on('click', function () {
        indexNum = $(this).attr('data-index')
        $('.videos-li').removeClass('videos-border')
        $(this).addClass('videos-border')
        var html = '<OBJECT classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" id="vlc' + $(this).attr('data-index') + '" codebase="" width="100%" height="85%" events="True">' +
            '<param name="AutoLoop" value="False" />' +
            '<param name="AutoPlay" value="True" />' +
            '<param name="Time" value="True" />' +
            '<param name="ShowDisplay" value="True" />' +
            '<param name="Controls" value="False">' +
            '<EMBED pluginspage="http://www.videolan.org" type="application/x-vlc-plugin"' +
            'version="VideoLAN.VLCPlugin.2" width="100%" height="85%"' +
            'text="Waiting for video" name="vlc"></EMBED>' +
            '</OBJECT>'
        if (indexNum == 1) {
            if($('#vlc1').length>0) return 
            $('#objvideo1').append(html)
            $('#vlc1').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 2) {
            if($('#vlc1').length>0) return 
            $('#objvideo2').append(html)
            $('#vlc2').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 3) {
            if($('#vlc1').length>0) return 
            $('#objvideo3').append(html)
            $('#vlc3').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 4) {
            if($('#vlc1').length>0) return 
            $('#objvideo4').append(html)
            $('#vlc4').css({
                "width": "100%",
                "height": "100%"
            })
        } 
    })

    function play(vlc){
        var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
        var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
        vlc.playlist.playItem(id);
        vlc.playlist.play();
    }
})
    