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