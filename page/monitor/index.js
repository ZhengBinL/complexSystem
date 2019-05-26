
$(function () {
    var _this = this
    var szCameraId="";
    // 菜单树
    var zNodes = []//节点
    var indexNum//点击的某个点的index
    // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
    var setting = {
        view: {
            fontCss: {
                "color": "#229fe6"
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
        var treeNodeId = treeNode.id
        if(!!treeNode.isParent)return
        $.get($ctx+'/dvr/rtspUrl?id='+treeNodeId, function (res) {
            if (indexNum == 1) {
                var vlc = document.getElementById("vlc1")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();

            } else if (indexNum == 2) {
                var vlc = document.getElementById("vlc2")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            } else if (indexNum == 3) {
                var vlc = document.getElementById("vlc3")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            } else if (indexNum == 4) {
                var vlc = document.getElementById("vlc4")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 5) {
                var vlc = document.getElementById("vlc5")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 6) {
                var vlc = document.getElementById("vlc6")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 7) {
                var vlc = document.getElementById("vlc7")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 8) {
                var vlc = document.getElementById("vlc8")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 9) {
                var vlc = document.getElementById("vlc9")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 10) {
                var vlc = document.getElementById("vlc10")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 11) {
                var vlc = document.getElementById("vlc11")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 12) {
                var vlc = document.getElementById("vlc12")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 13) {
                var vlc = document.getElementById("vlc13")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 14) {
                var vlc = document.getElementById("vlc14")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 15) {
                var vlc = document.getElementById("vlc15")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }else if (indexNum == 16) {
                var vlc = document.getElementById("vlc16")
                var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                vlc.playlist.playItem(id);
                vlc.playlist.play();
            }
            var $videoli = $('.videos-li').eq(indexNum-1);
            $videoli.find('.videos').css('height',$videoli.find('.videos').attr('data-height'));
            $videoli.attr('data-active','111');
            $videoli.find('.v-toolbar').show();
            $videoli.find('.opt-monitor').stop().hide();
            $videoli.find('.icon-history').attr('data-szCameraId',res.data.cid);
        })
    }

    // js添加视屏
    $('body').on('click','.videos-li',function(){
        indexNum = $(this).attr('data-index')
        $('.videos-li').removeClass('videos-border')
        $(this).addClass('videos-border')
        var html = '<OBJECT classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" id="vlc' + $(this).attr('data-index') + '" codebase="" events="True">' +
            '<param name="AutoLoop" value="False" />' +
            '<param name="AutoPlay" value="True" />' +
            '<param name="Time" value="True" />' +
            '<param name="ShowDisplay" value="True" />' +
            '<param name="Controls" value="False">' +
            '<EMBED pluginspage="http://www.videolan.org" type="application/x-vlc-plugin"' +
            'version="VideoLAN.VLCPlugin.2" width="100%" height="100%"' +
            'text="Waiting for video" name="vlc"></EMBED>' +
            '</OBJECT>'
        if (indexNum == 1) {
            //只能添加一个
            if($('#vlc1').length>0) return
            //如果没有选择视屏删除obj
            delLi()
            $('#objvideo1').append(html)

            $('#vlc1').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 2) {
            if($('#vlc2').length>0) return
            delLi()
            $('#objvideo2').append(html)
            $('#vlc2').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 3) {
            if($('#vlc3').length>0) return
            delLi()
            $('#objvideo3').append(html)
            $('#vlc3').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 4) {
            if($('#vlc4').length>0) return
            delLi()
            $('#objvideo4').append(html)
            $('#vlc4').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 5) {
            if($('#vlc5').length>0) return
            delLi()
            $('#objvideo5').append(html)
            $('#vlc5').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 6) {
            if($('#vlc6').length>0) return
            delLi()
            $('#objvideo6').append(html)
            $('#vlc6').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 7) {
            if($('#vlc7').length>0) return
            delLi()
            $('#objvideo7').append(html)
            $('#vlc7').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 8) {
            if($('#vlc8').length>0) return
            delLi()
            $('#objvideo8').append(html)
            $('#vlc8').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 9) {
            if($('#vlc9').length>0) return
            delLi()
            $('#objvideo9').append(html)
            $('#vlc9').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 10) {
            if($('#vlc10').length>0) return
            delLi()
            $('#objvideo10').append(html)
            $('#vlc10').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 11) {
            if($('#vlc11').length>0) return
            delLi()
            $('#objvideo11').append(html)
            $('#vlc11').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 12) {
            if($('#vlc12').length>0) return
            delLi()
            $('#objvideo12').append(html)
            $('#vlc12').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 13) {
            if($('#vlc13').length>0) return
            delLi()
            $('#objvideo13').append(html)
            $('#vlc13').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 14) {
            if($('#vlc14').length>0) return
            delLi()
            $('#objvideo14').append(html)
            $('#vlc14').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 15) {
            if($('#vlc15').length>0) return
            delLi()
            $('#objvideo15').append(html)
            $('#vlc15').css({
                "width": "100%",
                "height": "100%"
            })
        } else if (indexNum == 16) {
            if($('#vlc16').length>0) return
            delLi()
            $('#objvideo16').append(html)
            $('#vlc16').css({
                "width": "100%",
                "height": "100%"
            })
        }

    })
    function delLi(){
        for(var i = 0;i<$('.videos-li').length;i++){
            if($('.videos-li').eq(i).attr('data-active') != 111){
                $('.videos-li').eq(i).find('OBJECT').remove()
            }
        }
    }

    // 点击云平台控制
    $('body').on('click', '.js-control', function () {
        $(this).parent().children('.opt-monitor').toggle()
        $(this).parent().find('iframe').toggle()
    })
    //点击关闭
    $('body').on('click','.js-close',function(){
        var $tis = $(this).parents('.videos-li');
        var $vid = $(this).parent().next()
        $tis.attr('data-active',123);
        $tis.find('.v-toolbar').hide()
        var resetHeight = parseInt($vid.attr('data-height')) + 32;
        $tis.find('videos').css('height',resetHeight);
        $tis.find('OBJECT').remove()
    })
    /*******分屏模式渲染li结束*******/

    /*******方向按钮事件开始*******/
    $('body').on('click','.opt-item',function(){
        var direct = $(this).data('direction')
        var directNum = $(this).parent().parent().find('.js-control').attr('data-index')
        if(direct = "topL"){
            directHandle(5)
        }else if(direct = "topC"){
            directHandle(7)
        }else if(direct = "topR"){
            directHandle(1)
        }else if(direct = "midL"){
            directHandle(3)
        }else if(direct = "midR"){
            directHandle(4)
        }else if(direct = "botL"){
            directHandle(6)
        }else if(direct = "botC"){
            directHandle(3)
        }else if(direct = "botR"){
            directHandle(8)
        }else if(direct = "big"){
            cameraHandle(0)
        }else if(direct = "small"){
            cameraHandle(3)
        }

    })
    //摄像头方向
    function directHandle(direct){
        $.get($ctx+ '/pzt/direction?nDirect='+direct+'&id='+directNum)
    }
    //摄像头放大缩小
    function cameraHandle(direct){
        $.get($ctx+ '/pzt/cameraOperation?nDirect='+direct+'&id='+directNum)
    }
    /*******方向按钮事件开始*******/

    // 历史视屏
    $('body').on('click', '.search-btn', function () {
        var searchDate = this.getAttribute("data-search-time");
        if (searchDate == null) {
            searchDate = dateFtt("yyyy-MM-dd", new Date());
        }
//            var szCameraId = "1000121$1$0$0"
        var nRecordSource = 3;
        var nRecordType = 0;
        var strStartTime = searchDate + " 00:00:00";
        var strEndTime = searchDate + " 23:59:59";
        var nStartTime = getDate(strStartTime).getTime() / 1000;
        var nEndTime = getDate(strEndTime).getTime() / 1000;
        /*查询录像信息*/
        ButtonQueryRecord_onclick2(szCameraId, nRecordSource, nRecordType, nStartTime, nEndTime);
        /*播放录像信息*/
        ButtonStartTimePlaybackByWndNo_onclick2(szCameraId, nRecordSource, nStartTime, nEndTime);
    });

    //点击倍速
    $('body').on('click', '.icon-speed', function () {
        $('.speed-wrapper').stop().toggle();
        $('#zhanwei').stop().toggle()
    })
    // 点击倍速的某一项
    $('body').on('click', '.speed-item', function () {
        var $that = $(this)
        $that.addClass('on').siblings().removeClass('on')
        $that.parent().slideUp('fast')
        $('#zhanwei').stop().hide()
    })
    // 点击历史记录中的关闭按钮
    $('body').on('click', '.history-wrapper .icon-history', function () {
        $('.history-wrapper').hide();
        $('.split-mode').show();
    })
    // 单击刻度条某一项
    $('body').on('click', '.scale-unit', function (e) {
//            var szCameraId = "1000121$1$0$0"
        var nRecordSource = 3;
        var nRecordType = 0;
        var nStartTime = this.getAttribute("data-start-time");
        var nEndTime = this.getAttribute("data-end-time");
        console.log(nStartTime + "==" + nEndTime)
        /*查询录像*/
        ButtonQueryRecord_onclick3(szCameraId, nRecordSource, nRecordType, nStartTime, nEndTime);
        /*播放录像信息*/
        ButtonStartTimePlaybackByWndNo_onclick2(szCameraId, nRecordSource, nStartTime, nEndTime);

    })
    // 停止播放
    $('body').on('click', '.playAndsuspend', function () {
        playAndsuspend();
    })
})
