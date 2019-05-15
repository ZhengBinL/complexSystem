$(function(){
    	// 侧边栏展开收起
	$('.icon-fold').click(function(){
        // console.log($(this).find('#showFlag')[0].alt,'src')
		var html = $(this).find('#showFlag').attr('alt')
		if(html == '1'){
            $(this).find('#showFlag').attr('alt','2')
            $(this).find('#showFlag').attr('src','../../asset/img/icon_expand.png')
            $(this).animate({left: '19%'})
            $('.aside').animate({left: '0'})
		}else{
            $('.aside').animate({left: '-22%'})
            $(this).find('#showFlag').attr('alt','1')
            $(this).find('#showFlag').attr('src','../../asset/img/icon_fold.png')
            $(this).animate({left: '1%'})
		}
	})
})