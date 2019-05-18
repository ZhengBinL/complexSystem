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


    // 菜单树
    var zTreeObj;
    // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
    var setting = {
        view: {
            fontCss: {
                "color": "#fff",
                "font-size": "28px"
            }
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
            onClick: zTreeOnClick
        }
    };
    var zNodes = []
    $.get("http://172.16.5.226:18080/resource/node", function (res) {
        zNodes = res.data
        $.fn.zTree.init($("#menu-tree"), setting, zNodes);
    })
    // $.fn.zTree.init($("#menu-tree"), setting, zNodes);

    function zTreeOnClick(event, treeId, treeNode) {
        // $.get('http://172.16.5.226:18080/dvr/rtspUrl?id=' + treeNode.id, function (res) {
        //     play(res.data.url)
        // })
        $.get('http://172.16.5.226:18080/dvr/rtspUrl?id=1000000', function (res) {
            play(res.data.rtspUrl)
        })
    }
    $('.videos').on('click', function () {
        $('.videos').removeClass('videos-border')
        $(this).addClass('videos-border')
    })

    function play(rtspUrl) {
        var vlc = document.getElementById("vlc1");
        var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
        var id = vlc.playlist.add(rtspUrl, "fancy name", options);
        vlc.playlist.playItem(id);
        vlc.playlist.play();
    }

    function stop() {
        var vlc = document.getElementById("vlc1");
        vlc.playlist.stop();
    }
})