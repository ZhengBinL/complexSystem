$(function(){
  /*--------------------
 * Tab切换
 *-------------------*/
  $('.js-tabtop > li').click(function(){
    var liindex = $('.js-tabtop > li').index(this);
    $(this).addClass('on').siblings().removeClass('on');
    $('.js-tabmain > li').eq(liindex).addClass('on').siblings().removeClass('on');
  });
})

/*--------------------
** 报警弹框
* *-------------------*/
$('body').on('click', '.js-police-pop-close', function () {
    var msg = $(this).closest('.police-wrapper').find('.js-police-msg').html()
    var that = this;
    $.ajax({
        type:'PUT',
        dataType:'json',
        contentType:'application/json',
        url: $ctx +'/alarm/putAlarmCancel?msg=' + encodeURIComponent(msg) + '&op=no',
        success:function(res){
            if (res.code == 0){
                $(that).closest('.police-wrapper').remove();
            }
        }
    })
}).on('click', '.js-police-look', function () {
    var msg = $(this).closest('.police-wrapper').find('.js-police-msg').html();
    var rtspUrls = $(this).closest('.police-wrapper').find('.js-rtspUrls').text();
    var _encodeRtsp = encodeURIComponent(rtspUrls);
    // console.log(_encodeRtsp, '_encodeRtsp');
    sessionStorage.setItem("hrefParam",msg);
    sessionStorage.setItem("rtspUrls",_encodeRtsp);

    // document.cookie="hrefParam="+ msg + ';path=/'; // 存储cookie
    // document.cookie="rtspUrls="+_encodeRtsp + ';path=/';
    //console.log(document.cookie);
    window.location.href = '../../page/prevention/index.html?call=1';
})

var _top = 80;
// 报警弹框 后端出发
//  激活ajax    
dwr.engine.setActiveReverseAjax(true)
// 页面未加载的时候是否发送通知
dwr.engine.setNotifyServerOnPageUnload(true,true)
// 出现错误后的处理方法
dwr.engine.setErrorHandler(function(){})

function getMessageTime(data){
  console.log(data,'坦克弹框')
    // if (window.eventBus) {
    //     window.eventBus.$emit('getDwr',data);
    // }
}

// setInterval(function () {
//     $.ajax({
//         type:'GET',
//         dataType:'json',
//         contentType:'application/json',
//         url: $ctx +'/alarm/getAlarmTime?'+new Date().getTime(),
//         success:function(res){
//             if (res.code == 0 && res.data.msg){
//                 _top += 10
//                 var html_pop = ''
//                 var data = JSON.parse(res.data.msg);
//                 html_pop += '<iframe id="zhanwei-police" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position: fixed;display: block;top:  '+ _top +'px;right: 30px;width: 290px;height: 302px;z-index: 0;background: transparent;"></iframe><div class="police-wrapper" style="top: '+ _top +'px;">' +
//                     '<div class="police-title">报警信息<img class="police-close js-police-pop-close" src="../../asset/img/icon-close.png" alt="关闭"></div>' +
//                     '<ul class="police-content">' +
//                     '<li><span>报警类型：</span><span class="police-detail">' + data.alarmType.systemOptionName +'</span></li>' +
//                     '<li><span>设备名称：</span><span class="police-detail">'+ data.alarmSource.iPDeviceName +'</span></li>' +
//                     '<li><span>报警时间：</span><span class="police-detail">'+ data.timeCreated +'</span></li></ul>' +
//                     '<div class="btn-wrapper">' +
//                     '<div style="display: none" class="js-police-msg">'+res.data.msg+'</div>' +
//                     '<div class="js-rtspUrls" style="display: none;">'+res.data.rtspUrls+'</div>'+
//                     '<a href="javascript:;" class="js-police-look layui-btn layui-btn-sm layui-btn-normal" target="_self">查看</a>' +
//                     '<a href="javascript:;" class="js-police-pop-close layui-btn layui-btn-sm layui-btn-primary">关闭</a>' +
//                     '</div></div>';
//                 $('body').append(html_pop);
//             }
//         },
//         error:function(err){
//             console.log(err);
//         }
//     })
// }, 1000);

//格式化时间戳
function formatDate(t, isTime) {
  var date;
  if(Number(t)){
    //formatDate(1398250569555)
    //formatDate('1398250569555')
    date = new Date(Number(t));
  }else{
    //参数  t 如果不传或格式错误，则格式化当前系统时间
    //formatDate()
    //formatDate(null)
    //formatDate(NaN, 1)
    //formatDate('d1398250569555')
    date = new Date();
  }
  var YY = date.getFullYear();
  var MM = (date.getMonth()+1 < 10 ? '0'+ (date.getMonth()+1) : date.getMonth()+1);
  var DD = date.getDate()+1 < 10 ? '0'+ date.getDate() : date.getDate();
  var hh = date.getHours() < 10 ? '0'+ date.getHours() : date.getHours();
  var mm = date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes();
  var ss = date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds();
  //isTime = true 日期格式为 YY-MM-DD hh:mm:ss;
  //isTime = false 日期格式为 YY-MM-DD;
  var ft = isTime ? (YY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss) : (YY + '-' + MM + '-' + DD);
  return ft;
}