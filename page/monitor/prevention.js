
var initPos,    // 初始化位置信息-->请求返回的位置
    initType,   // 初始化类型信息-->请求返回的类型
    initRtsp,   // 初始化视频地址信息-->请求返回的地址
    initMsg;    // 初始化msg信息-->请求返回的msg

//实时获取报警信息
//  激活ajax
dwr.engine.setActiveReverseAjax(true)
// // 页面未加载的时候是否发送通知
dwr.engine.setNotifyServerOnPageUnload(true,true)
// // 出现错误后的处理方法
dwr.engine.setErrorHandler(function(){})
function getAlarmTimeForAction(dataValue) {
    if (dataValue.msg) { // 返回的有高亮数据点
        initMsg = dataValue.msg;      // 赋值msg
        initRtsp = dataValue.rtspUrls;    // 赋值视频地址
        /**
         * 渲染灯笼
         * */
        var msg = JSON.parse(dataValue.msg); // 返回信息
        var pos = msg.AlarmSource.IPDeviceName; // 岗哨
        var type = msg.AlarmType.SystemOptionName; // 报警类型
        // console.log(pos)
        // console.log(type)
        // console.log(msg)
        $('.btn-police').show();
        var $el;
        if (type == '光纤震动') {
            $el = $('.prevention-img .r-warn')
        } else if (type == '周界入侵') {
            $el = $('.prevention-img .g-warn')
        } else {
            $el = $('.prevention-img .y-warn')
        }
        // 点亮匹配数据
        $el.each(function (index, item) {
            var _pos = $(item).data('pos');
            var _type = $(item).data('type');
            if (pos == _pos && _type == '光纤震动') {
                $(item).addClass('red');
                // delayOpt('red');
//                                setTimeout(function () {
//                                    if (initPos == pos && initType == type) {
//                                        return
//                                    }
//                                    $(item).removeClass('red')
//                                    removeVideo()
//                                }, 30000)
            } else if (pos == _pos && _type == '周界入侵') {
                $(item).addClass('green');
                // delayOpt('green')
            } else if (pos == _pos && _type == '激光对射') {
                $(item).addClass('yellow');
                // delayOpt('yellow');
            }
        })
        // 如果有视频地址信息，渲染视频
        if (dataValue.rtspUrls && dataValue.rtspUrls.length) {
            renderVideo(dataValue.rtspUrls);
        }
        initPos = pos;       // 储存返回的报警位置信息
        initType = type;    // 储存返回的报警类型信息
    }
}

/*
* 如果是跳转页面，
* 需要获取cookie并渲染
* 1,2,3,4步
*/
// 1、首先判断是否是从报警弹框进入该页面
function isPageJump() {
    var url = window.location.href
    var flag = url.split('?')[1]; // 弹框页面传入call=1的值
    return flag ? true : false;
}
// 2、如果是通过报警弹框进入该页面，则渲染renderPageJump方法
function renderPageJump() {
    // 如果是跳转页面，且oldMsg有数据，并且未获取到请求数据
    if (isPageJump()){
        $('.btn-police').show();
        //  oldMsg表示存储的msg信息
        var oldMsg = JSON.parse(sessionStorage.getItem("hrefParam"));
        // var oldMsg = sessionStorage.getItem("hrefParam");
        //console.log(oldMsg)
        if( oldMsg && !initMsg){
            var rtspUrls = sessionStorage.getItem("rtspUrls"); // 获取视频地址
            console.log(decodeURIComponent(rtspUrls), 'decode');
            var decodeRtsp = decodeURIComponent(rtspUrls);  // 解析视频地址
            var pos = oldMsg.alarmSource.iPDeviceName; // 报警岗哨
            var type = oldMsg.alarmType.systemOptionName; // 报警类型
            $('.prevention-img span').each(function (index, item) {
                var _pos = $(item).data('pos');
                var _type = $(item).data('type');
                if (_pos == pos && type == _type){
                    if (type == '光纤震动') {
                        $(item).addClass('red cookie-dom');
                        // delayOpt('red', true);
                    } else if (type == '周界入侵') {
                        $(item).addClass('green cookie-dom');
                        // delayOpt('green', true);
                    } else {
                        $(item).addClass('yellow cookie-dom');
                        // delayOpt('yellow', true);
                    }
                }
            })
            // 渲染视频
            setTimeout(function(){
                renderVideo(decodeRtsp.split(','));
            },1000)
        }

    }
}
// 3、30秒后清除cookie，并且移除掉视频, flag表示有cookie
// function delayOpt(className, flag) {
//     $(item).removeClass(className);
//     var date = new Date();
//     date.setTime(date.getTime() - 10000);
//     setTimeout(function () {
//         if (flag){
//             sessionStorage.removeItem("hrefParam");
//             sessionStorage.removeItem("rtspUrls");
//             // $('.btn-police').hide();
//             // console.log(sessionStorage,'sessionStorage');
//             // document.cookie= "hrefParam='';expires="+ date.toGMTString +";path=/";
//             // document.cookie="rtspUrls='';expires="+ date.toGMTString +";path=/";
//         }
//         $(item).removeClass(className);
//         removeVideo();
//     }, 30000)
// }


/*
 * 点击确定与取消按钮操作
 * @params
 * result：yes表示点击确定，no表示点击取消
*/
function removeCls(result) {
    //  1.通过是否请求数据成功，如果initMsg有数据，则操作的是返回数据
    if (initMsg){
        // $('.btn-police').hide();
        var _initMsg = JSON.parse(initMsg);
        var _rtspUrls = initRtsp;
        var pos = _initMsg.AlarmSource.IPDeviceName; // 岗哨
        var type = _initMsg.AlarmType.SystemOptionName; // 报警类型
        $('OBJECT').each(function (index, item) {
            for(var i = 0; i < _rtspUrls.length; i++){
                if($(item).attr('rtsp') == _rtspUrls[i]){
                    $(item).closest('.prevention-video').children('.video-hover').hide();
                    $(item).closest('.prevention-video').children('iframe').hide();
                    $(item).remove();
                }
            }
        })
        $('.prevention-img span').each(function (index, item) {
            var _pos = $(item).data('pos');
            var _type = $(item).data('type');
            if (_pos == pos && type == _type){
                if (type == '光纤震动') {
                    $(item).removeClass('red')
                } else if (type == '周界入侵') {
                    $(item).removeClass('green');
                } else {
                    $(item).removeClass('yellow');
                }
            }
        })
        // $.ajax({
        //     type:'GET',
        //     dataType:'json',
        //     // contentType:'application/json',
        //     // data:{
        //     //     'msg_info':initMsg,
        //     //     "con_info":result
        //     // },
        //     url: $ctx +'/alarm/putAlarmCancel?msg_info='+encodeURIComponent(initMsg)+'&con_info='+result,
        //     success:function(res){
        //         if (res.code == 0){
        //             //
        //         }
        //     }
        // })
    }
    // 如果未请求到数据，并且是通过页面跳转，则操作的是cookie传入的数据
    // else if (!initMsg && isPageJump()){
    //     var cookieMsg = document.cookie.split(";")[0].split("=")[1]
    //     $.ajax({
    //         type:'PUT',
    //         dataType:'json',
    //         contentType:'application/json',
    //         url: $ctx +'/alarm/putAlarmCancel?msg=' + encodeURIComponent(cookieMsg) + '&op=' + result,
    //         success:function(res){
    //             if (res.code == 0){
    //                 $('.cookie-dom').removeClass('red green yellow');
    //                 var date = new Date();
    //                 date.setTime(date.getTime() - 10000);
    //                 document.cookie= "hrefParam='';expires="+ date.toGMTString +";path=/";
    //                 document.cookie="rtspUrls='';expires="+ date.toGMTString +";path=/";
    //             }
    //         }
    //     })
    // }
}
// 点击确定或者取消，移除class
$('body').on('click', '.js-police-btn-yes', function () {
    removeCls('yes')
}).on('click', '.js-police-btn-no', function () {
    removeCls('no')
})

/*
 * 有视频数据的渲染
 * @params：
 * urls是视频地址数组
*/
function renderVideo(urls) {
    var html = '';
    for (var j = 0; j < 4; j++) {
        html += '<div class="prevention-video">' +
            '<div class="video-hover"><a href="javascript:;" class="js-prevent-close"><img src="../../asset/img/icon-close.png" width="15px" height="15px"> 关闭</a></div>' +
            '<iframe class="iframe" style="position: absolute;left: 10px;right: 10px; top: 0px;z-index: 0;background: transparent;border: none;height: 32px;" marginwidth="0" marginheight="0"></iframe>' +
            '<div class="vlc1">';
        if (j < urls.length) {
            html += '<OBJECT rtsp="' +urls[ j ]+'" classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" id="vlc' + (j + 1) + '" codebase="" width="100%" height="100%" events="True"><param name="AutoLoop" value="False" /><param name="AutoPlay" value="True" /><param name="Time" value="True" /><param name="ShowDisplay" value="True" /><param name="Controls" value="False"><EMBED pluginspage="http://www.videolan.org" type="application/x-vlc-plugin" version="VideoLAN.VLCPlugin.2" width="100%" height="85%" text="Waiting for video" name="vlc"></EMBED></OBJECT>'
        } else {
            html += ''
        }
        html += '</div></div>'
    }
    $('#video-wrapper').html(html)

    // 如果没有视频，则隐藏掉关闭按钮与iframe
    $('.prevention-video').each(function(index, item) {
        if (!$(item).find('OBJECT').length){
            $(item).children('.video-hover, .iframe').hide();
        }
    })
    // 填充视频数据后，设置dom高度
    var itemWidth = $('.vlc1').width();
    var itemHeight = itemWidth * 20 / 36;
    $('.vlc1').css("height", itemHeight);
    // 渲染视频
    if(urls.length == 1){
        play(urls[0], "vlc1");
        $('#vlc1').css({width: '100%', height: '100%'})
    }else if(urls.length == 2){
        play(urls[0], "vlc1");
        $('#vlc1').css({width: '100%', height: '100%'})
        play(urls[1], "vlc2");
        $('#vlc2').css({width: '100%', height: '100%'})
    }else if(urls.length == 3){
        play(urls[0], "vlc1");
        $('#vlc1').css({width: '100%', height: '100%'})
        play(urls[1], "vlc2");
        $('#vlc2').css({width: '100%', height: '100%'})
        play(urls[2], "vlc3");
        $('#vlc3').css({width: '100%', height: '100%'})
    }else if(urls.length == 4){
        play(urls[0], "vlc1");
        $('#vlc1').css({width: '100%', height: '100%'})
        play(urls[1], "vlc2");
        $('#vlc2').css({width: '100%', height: '100%'})
        play(urls[2], "vlc3");
        $('#vlc3').css({width: '100%', height: '100%'})
        play(urls[3], "vlc4");
        $('#vlc4').css({width: '100%', height: '100%'})
    }
    // for (var i = 0; i < urls.length; i++) {
    //     play(urls[i], "vlc" + (i + 1));
    //     $('#vlc' + (i + 1)).css({width: '100%', height: '100%'})
    // }
}

/*
* 移除视频dom
*/
function removeVideo(){
    $('OBJECT').each(function (index, item) {
        $(item).closest('.prevention-video').children('.video-hover').hide();
        $(item).closest('.prevention-video').children('.iframe').hide();
        $(item).remove();
    })
}
/*
* 无视频，初始化渲染右侧视频列表
*/
function renderList() {
    var html = '';
    for (var j = 0; j < 4; j++) {
        html += '<div class="prevention-video"><div class="vlc1"></div></div>'
    }
    $('#video-wrapper').html(html)
    var itemWidth = $('.vlc1').width();
    var itemHeight = itemWidth * 20 / 36;
    $('.vlc1').css("height", itemHeight);
}


// 点击关闭按钮
$('body').on('click', '.js-prevent-close', function () {
    $(this).closest('.prevention-video').find('OBJECT').remove();
    $(this).parent().remove();
})
