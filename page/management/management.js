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
                    $('#zhanwei-c').animate({
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
                    $('#zhanwei-c').animate({
                        left: '-300px'
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
            $.get("http://172.16.5.228:18080/resource/node", function (res) {
                zNodes = res.data
                $.fn.zTree.init($("#menu-tree"), setting, zNodes);
            })
            // $.fn.zTree.init($("#menu-tree"), setting, zNodes);
            var indexNum

            function zTreeOnClick(event, treeId, treeNode) {
                // $.get('http://172.16.5.226:18080/dvr/rtspUrl?id=' + treeNode.id, function (res) {
                //     play(res.data.url)
                // })
                $.get('http://172.16.5.228:18080/dvr/rtspUrl?id=1000000', function (res) {
                        // play(res.data.rtspUrl)


                        if (indexNum == 1) {
                            var vlc = document.getElementById("vlc1");
                            var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                            var id = vlc.playlist.add(rtspUrl, "fancy name", options);
                            vlc.playlist.playItem(id);
                            vlc.playlist.play();
                        } else if (indexNum == 2) {
                            var vlc = document.getElementById("vlc2");
                            var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                            var id = vlc.playlist.add(rtspUrl, "fancy name", options);
                            vlc.playlist.playItem(id);
                            vlc.playlist.play();
                        } else if (indexNum == 3) {
                            var vlc = document.getElementById("vlc3");
                            var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                            var id = vlc.playlist.add(rtspUrl, "fancy name", options);
                            vlc.playlist.playItem(id);
                            vlc.playlist.play();
                        } else if (indexNum == 4) {
                            var vlc = document.getElementById("vlc4");
                            var options = new Array(":aspect-ratio=16:9", "--rtsp-tcp");
                            var id = vlc.playlist.add(rtspUrl, "fancy name", options);
                            vlc.playlist.playItem(id);
                            vlc.playlist.play();
                        }
                        // var vlc = document.getElementById("vlc1");

                    }

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
                        $('#objvideo1').append(html)
                        $('#vlc1').css({
                            "width": "100%",
                            "height": "100%"
                        })
                    } else if (indexNum == 2) {
                        $('#objvideo2').append(html)
                        $('#vlc2').css({
                            "width": "100%",
                            "height": "100%"
                        })
                    } else if (indexNum == 3) {
                        $('#objvideo3').append(html)
                        $('#vlc3').css({
                            "width": "100%",
                            "height": "100%"
                        })
                    } else if (indexNum == 4) {
                        $('#objvideo4').append(html)
                        $('#vlc4').css({
                            "width": "100%",
                            "height": "100%"
                        })
                    }

                })

                function play(rtspUrl) {
                    var vlc
                    if (indexNum == 1) {
                        vlc = document.getElementById("vlc1");
                    } else if (indexNum == 2) {
                        vlc = document.getElementById("vlc2");
                    } else if (indexNum == 3) {
                        vlc = document.getElementById("vlc3");
                    } else if (indexNum == 4) {
                        vlc = document.getElementById("vlc4");
                    }
                    // var vlc = document.getElementById("vlc1");
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