$(function(){
  /*--------------------
 * Tab切换
 *-------------------*/
  $('.js-tabtop > li').click(function(){
    var liindex = $('.js-tabtop > li').index(this);
    $(this).addClass('on').siblings().removeClass('on');
    $('.js-tabmain > li').eq(liindex).addClass('on').siblings().removeClass('on');
  });
/*--------------------
** 报警弹框
* *-------------------*/
$('body').on('click', '.police-close', function () {
    $(this).closest('.police-wrapper').remove();
})
var _top = 100
// setInterval(function () {
//     $.ajax({
//         type:'GET',
//         dataType:'json',
//         contentType:'application/json',
//         url:'http://172.16.5.224:18080/alarm/getAlarmTime',
//         success:function(res){
//             console.log(res)
//             if (res.code == 0 && res.data){
//                 _top += 10
//                 var data = JSON.parse(res.data);
//                 var html = ''
//                 html += '<div class="police-wrapper" style="top: '+ _top +'px;"><div class="police-title">报警信息<img class="police-close" src="../../asset/img/icon-close.png" alt="关闭"></div><ul class="police-content"><li><span>报警类型：</span><span class="police-detail">' + data.AlarmType.SystemOptionName +'</span></li><li><span>设备名称：</span><span class="police-detail">'+ data.AlarmSource.IPDeviceName +'</span></li></ul></div>'
//                 $('body').append(html)
//             }
//         },
//         error:function(err){
//             console.log(err)
//         }
//     })
// }, 500)
})