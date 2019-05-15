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