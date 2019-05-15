	// 侧边栏展开收起
	$('.icon-fold').click(function(){
		var html = $(this).html()
		if(html == '展开'){
			$(this).html('收起').animate({left: '22%'})
            $('.aside').animate({left: '0'})
		}else{
            $('.aside').animate({left: '-22%'})
            $(this).html('展开').animate({left: '3%'})
		}
	})