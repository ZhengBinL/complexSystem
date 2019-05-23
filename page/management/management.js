
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
            var videoWidth = $videoli.find('.videos').width();
            $videoli.find('.videos').css('height', (videoWidth*9/16));
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
        var index
        var dataSzCameraId
        $('.camera').on('click',function(){
            // var cameraNum
            var cameraNum = $(this).data('index')
            var html =
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
                '<OBJECT classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" id="vlc100" codebase="" width="100%" height="100%" events="True">' +
                '<param name="wmode" value="Transparent" />' +
                '<param name="AutoLoop" value="False" />' +
                '<param name="AutoPlay" value="True" />' +
                '<param name="Time" value="True" />' +
                '<param name="ShowDisplay" value="True" />' +
                '<param name="Controls" value="False">' +
                '<EMBED pluginspage="http://www.videolan.org" type="application/x-vlc-plugin"' +
                'version="VideoLAN.VLCPlugin.2" width="100%" height="100%"' +
                'text="Waiting for video" name="vlc"></EMBED>' +
                '</OBJECT>'

             index = layer.open({
                type: 1,
                title:'',
                closeBtn:0,
                scrollbar: false,//不允许浏览器滚动
                content: html,//这里content是一个普通的String
                area: ['800px','482px'],
                success: function(layero, index){
                    $('#vlc100').css({
                        "width": "100%",
                        "height": "450px",
                    })
                    $('#vlc100').parent().find('.v-toolbar').show()
                    $('#vlc100').parent().find('#js-btn-control').attr('data-index',cameraNum)
                    $.get($ctx+'/dvr/rtspUrl?id='+cameraNum,function(res){
                        var vlc = document.getElementById("vlc100");
                        var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                        var id = vlc.playlist.add(res.data.rtspUrl, "fancy name", options);
                        vlc.playlist.playItem(id);
                        vlc.playlist.play();
                        // dataSzCameraId = res.data.cid
                        $('#vlc100').parent().find('.v-toolbar').find('.icon-history').attr('data-szCameraId',res.data.cid)
                    })
                }
            });
            //关闭弹框
            $('#js-btn-close').on('click',function(){
                var vlc = document.getElementById("vlc100");
                vlc.playlist.stop();
                layer.close(index);
            })

            //打开云台控制切换
            $('body').on('click','#js-btn-control',function(){
                $('#zhanwei-tk2').toggle()
                $('#opt-monitor').toggle()
            })

        })
        // 历史视屏
        // 点击历史记录显示
        $('body').on('click', '.icon-history', function () {
          layer.close(index);
          $('.js-tabtop > li').click()
          if(!$(this).attr("data-szCameraId")){
            return
          } else {
            szCameraId=this.getAttribute("data-szCameraId")
          }

          $('.split-mode').hide()
          $('.history-wrapper').show()

          // 设置历史记录视频高度
          var historyVideoWidth = $('.video-wrapper .video').width();
          var historyVideoHeight = historyVideoWidth * 9 / 16;
          var searchMarTop = (historyVideoHeight - 386) / 2
          $('.video-wrapper .video').css('height', historyVideoHeight);
          $('.search-btn').css('marginTop', searchMarTop); // 设置搜索按钮位置
          init();
        })
    });
    /*******地图模式 视屏点击弹框结束*******/ 

    /*******分屏模式渲染li开始*******/
    var liHtml =''
    var j=0
    for(var i =0;i<16;i++){
        liHtml+=
        ('<li class="videos-li" data-index="'+(i+1)+'">'+
        '<dl>'+
        '<dt class="v-toolbar">'+
        '<a href="javascript:;" class="icon-history"><img src="../../asset/img/icon-history.png" > 历史记录</a>'+
        '<a href="javascript:;" class="js-control"><img src="../../asset/img/icon-control.png"> 云台控制</a>'+
        '<a href="javascript:;" class="js-close"><img src="../../asset/img/icon-close.png"> 关闭</a>'+
        '<iframe id="zhanwei'+(i+1)+'" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position: absolute;display: none;top: 32px;right: 90px;width: 100px;height: 168px;z-index: 0;background: transparent;"></iframe>'+
        '<div class="opt-monitor">'+
        '<a href="javascript:;" class="opt-item opt-top-lt" data-direction="topL"></a>'+
        '<a href="javascript:;" class="opt-item opt-top-ct" data-direction="topC"></a>'+
        '<a href="javascript:;" class="opt-item opt-top-rt" data-direction="topR"></a>'+
        '<a href="javascript:;" class="opt-item opt-mid-lt" data-direction="midL"></a>'+
        '<a href="javascript:;" class="opt-item opt-mid-rt" data-direction="midR"></a>'+
        '<a href="javascript:;" class="opt-item opt-bot-lt" data-direction="botL"></a>'+
        '<a href="javascript:;" class="opt-item opt-bot-ct" data-direction="botC"></a>'+
        '<a href="javascript:;" class="opt-item opt-bot-rt" data-direction="botR"></a>'+
        '<a href="javascript:;" class="opt-item opt-big"  data-direction="big"></a>'+
        '<a href="javascript:;" class="opt-item opt-small" data-direction="small"></a>'+
        '</div>'+
        '</dt>'+
        '<dd class="videos">'+
        '<div id="objvideo'+(i+1)+'" style="position: absolute;top:32px; bottom: 0;width: 100%;">'+
        '</div>'+
        '</dd>'+
        '</dl>'+
        '</li>')
    }
    
    $('#mode-rec').prepend(liHtml)
    caleHeight(4)

    function caleHeight(itemnumb) {
        // 设置分屏模式视频高度
        var itemWidth = $('.mode-content .videos').width();
        var itemHeight = itemWidth * 9 / 16;
        $('.mode-content .videos').css('height', itemWidth);
        $('#vlc1').css({
            "width":itemWidth,
            "height":itemHeight
        })
        $('#vlc2').css({
            "width":itemWidth,
            "height":itemHeight
        })
        $('#vlc3').css({
            "width":itemWidth,
            "height":itemHeight
        })
        $('#vlc4').css({
            "width":itemWidth,
            "height":itemHeight
        })
        $('#mode-rec').css({
            'height': (itemHeight+32) * itemnumb + (itemnumb + 1) * 10, // 10：item元素边距；32：toolbar高度
            'overflow': 'hidden'
        })
    }
    // 点击云平台控制
    $('body').on('click', '.js-control', function () {
        $(this).parent().children('.opt-monitor').toggle()
        $(this).parent().find('iframe').toggle()
    })
    //点击关闭
    $('body').on('click','.js-close',function(){
        $(this).parents('.videos-li').attr('data-active',123)
        $(this).parents('.videos-li').find('.v-toolbar').hide()
        $(this).parents('.videos-li').find('OBJECT').remove()
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
    // 点击历史记录显示
    // $('body').on('click', '.icon-history', function () {
    //     $('.js-tabtop > li').click()
    //     if(!$(this).attr("data-szCameraId")){
    //         return
    //     } else {
    //         szCameraId=this.getAttribute("data-szCameraId")
    //     }
    //     $('.split-mode').hide()
    //     $('.history-wrapper').show()
    //
    //     // 设置历史记录视频高度
    //     var historyVideoWidth = $('.video-wrapper .video').width();
    //     var historyVideoHeight = historyVideoWidth * 9 / 16;
    //     var searchMarTop = (historyVideoHeight - 386) / 2
    //     $('.video-wrapper .video').css('height', historyVideoHeight);
    //     $('.search-btn').css('marginTop', searchMarTop); // 设置搜索按钮位置
    //     init();
    // })
})
    