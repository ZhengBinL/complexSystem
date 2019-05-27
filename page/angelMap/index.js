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
        $('.camera-hidden').hide();
        $('.camera-2').show()
    })
    //执勤监控
    $('body').on('click','.btn-zoommonitor',function(){
        $('.camera-2').hide();
        $('.camera-hidden').show()
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
                '<iframe id="zhanwei-tk2" src="about:blank" frameborder="0" marginheight="0" allowTransparency="true" marginwidth="0" style="position: absolute; display: none;top: 33px;right: 77px;width: 130px;height: 130px;z-index: 0;background: rgba(0,3,28,0.8);"></iframe>'+
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
                // var vlc = document.getElementById("vlc100");
                // vlc.playlist.stop();
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
