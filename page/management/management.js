
$(function () {
    var _this = this
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


    /*****地图模式按钮开始*******/
    //放大
    $('body').on('click','.btn-zoomin',function(){
        $('.map-img-content').addClass('scale-img')
        $('.map-img-content').css({
            left: 0,
            top: 0
        })
    })
    //缩小
    $('body').on('click','.btn-zoomout',function(){
        $('.map-img-content').removeClass('scale-img')
        $('.map-img-content').css({
            left: 0,
            top: 0
        })
    })
    //智能追踪
    $('body').on('click','.btn-zoomtrack',function(){
        $('.camera-2').hide()
        $('.camera-hidden').show()
    })
    //执勤监控
    $('body').on('click','.btn-zoommonitor',function(){
        $('.camera-hidden').hide()
        $('.camera-2').show()
    })
    //拖动功能
    var _drag = {};
    _drag.top = 0; //拖动过的位置距离上边
    _drag.left = 0; //拖动过的位置距离左边
    _drag.maxLeft; //距离左边最大的距离
    _drag.maxTop; //距离上边最大的距离
    _drag.dragging = false; //是否拖动标志
    //拖动函数
    function bindDrag(el) {
        var winWidth = $(window).width(),
            winHeight = $(window).height(),
            objWidth = $(el).outerWidth(),
            objHeight = $(el).outerHeight();
            _drag.maxLeft = winWidth - objWidth,
            _drag.maxTop = winHeight - objHeight;
        var els = el.style,
            x = 0,
            y = 0;
        var objTop = $(el).offset().top,
            objLeft = $(el).offset().left;
        $(el).mousedown(function (e) {
            _drag.dragging = true;
            _drag.isDragged = true;
            x = e.clientX - el.offsetLeft;
            y = e.clientY - el.offsetTop;
            el.setCapture && el.setCapture();
            $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp);
            return false;
        });

        function mouseMove(e) {
            e = e || window.event;
            if (_drag.dragging) {
                _drag.top = e.clientY - y;
                _drag.left = e.clientX - x;
                _drag.top = _drag.top > _drag.maxTop ? _drag.maxTop : _drag.top;
                _drag.left = _drag.left > _drag.maxLeft ? _drag.maxLeft : _drag.left;
                _drag.top = _drag.top < 0 ? 0 : _drag.top;
                _drag.left = _drag.left < 0 ? 0 : _drag.left;
                els.top = _drag.top + 'px';
                els.left = _drag.left + 'px';
                return false;
            }
        }

        function mouseUp(e) {
            _drag.dragging = false;
            el.releaseCapture && el.releaseCapture();
            e.cancelBubble = true;
            $(document).unbind('mousemove', mouseMove).unbind('mouseup', mouseUp);
        }
        $(window).resize(function () {
            var winWidth = $(window).width(),
                winHeight = $(window).height(),
                el = $(el),
                elWidth = el.outerWidth(),
                elHeight = el.outerHeight(),
                elLeft = parseFloat(el.css('left')),
                elTop = parseFloat(el.css('top'));
            _drag.maxLeft = winWidth - elWidth;
            _drag.maxTop = winHeight - elHeight;
            _drag.top = _drag.maxTop < elTop ? _drag.maxTop : elTop;
            _drag.left = _drag.maxLeft < elLeft ? _drag.maxLeft : elLeft;
            el.css({
                top: _drag.top,
                left: _drag.left
            })
        })
    }
    bindDrag(document.getElementById('map-img-content'));
    /*****地图模式按钮结束*******/

    /*******地图模式 视屏点击弹框开始*******/ 
    layui.use('layer', function(){
        var layer = layui.layer;
        $('.camera').on('click',function(){
            var cameraNum
            // var cameraNum = $(this).data('index')
            var html =
                '<iframe id="zhanwei-tk1" src="about:blank" frameborder="0" marginheight="0 marginwidth="0" style="position: absolute;display: block;top: 0px;right: 0px;width: 100%;height: 32px;z-index: 0;background: transparent;"></iframe>'+
                '<div class="v-toolbar">'+
                '<a href="javascript:;" class="icon-history">'+
                '<img src="../../asset/img/icon-history.png" > 历史记录</a>'+
                '<a href="javascript:;" class="js-control" id="js-btn-control">'+
                '<img src="../../asset/img/icon-control.png"> 云台控制</a>'+
                '<a href="javascript:;" id="js-btn-close"><img src="../../asset/img/icon-close.png"> 关闭</a>'+
                '</div>'+
                '<iframe id="zhanwei-tk2" src="about:blank" frameborder="0" marginheight="0" allowTransparency="true" marginwidth="0" style="position: absolute; display: none;top: 33px;right: 77px;width: 130px;height: 130px;z-index: 0;background: transparent;"></iframe>'+
                '<div class="opt-monitor" id="opt-monitor">'+
                '<a href="javascript:;" class="opt-item opt-top-lt" data-direction="topL"></a>'+
                '<a href="javascript:;" class="opt-item opt-top-ct" data-direction="topC"></a>'+
                '<a href="javascript:;" class="opt-item opt-top-rt" data-direction="topR"></a>'+
                '<a href="javascript:;" class="opt-item opt-mid-lt" data-direction="midL"></a>'+
                '<a href="javascript:;" class="opt-item opt-mid-rt" data-direction="midR"></a>'+
                '<a href="javascript:;" class="opt-item opt-bot-lt" data-direction="botL"></a>'+
                '<a href="javascript:;" class="opt-item opt-bot-ct" data-direction="botC"></a>'+
                '<a href="javascript:;" class="opt-item opt-bot-rt" data-direction="botR"></a>'+
                '<a href="javascript:;" class="opt-item opt-big" data-direction="big"></a>'+
                '<a href="javascript:;" class="opt-item opt-small" data-direction="small"></a>'+
                '</div> '+
                '<OBJECT classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" id="vlc100" codebase="" width="100%" height="85%" events="True">' +
                '<param name="wmode" value="Transparent" />' +
            '<param name="AutoLoop" value="False" />' +
            '<param name="AutoPlay" value="True" />' +
            '<param name="Time" value="True" />' +
            '<param name="ShowDisplay" value="True" />' +
            '<param name="Controls" value="False">' +
            '<EMBED pluginspage="http://www.videolan.org" type="application/x-vlc-plugin"' +
            'version="VideoLAN.VLCPlugin.2" width="100%" height="85%"' +
            'text="Waiting for video" name="vlc"></EMBED>' +
            '</OBJECT>'

            var index = layer.open({
                type: 1, 
                title:'',
                closeBtn:0,
                content: html,//这里content是一个普通的String
                area: ['800px','450px'],
                success: function(layero, index){
                    $('#vlc100').css({
                        "width": "100%",
                        "height": "100%",
                    })
                    $.get('http://172.16.5.226:18080/dvr/rtspUrl?id=1000000',function(res){
                        console.log(res.data.rtspUrl,'resddgfads')
                        var vlc = document.getElementById("vlc100");
                        var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                        var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                        vlc.playlist.playItem(id);
                        vlc.playlist.play();
                    })
                    // console.log(layero, index);
                }
            });
            //关闭弹框
            $('#js-btn-close').on('click',function(){
                layer.close(index);
            })

            //打开云台控制切换
            $('body').on('click','#js-btn-control',function(){
                $('#zhanwei-tk2').toggle()
                $('#opt-monitor').toggle()
            })
            $('body').on('click','.opt-item',function(){
                var direct = $(this).data('direction')
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
                $.get('http://172.16.5.226:18080/pzt/direction?nDirect='+direct+'&id=1000000')
            }
            //摄像头放大缩小
            function cameraHandle(direct){
                $.get('http://172.16.5.226:18080/pzt/cameraOperation?nDirect='+direct+'&id=1000000')
            }
        })
        });
        /*******地图模式 视屏点击弹框结束*******/ 
})
    