$(function(){

	// 下拉選單
	$("nav>ul>li").on({
		mouseenter:function(){
			$(this).children("div").stop().slideDown();
		},
		mouseleave:function(){
			$(this).children("div").stop().slideUp();
		}
	});

	// 滑動至指定位置
	$("nav a").click(function(event){
		event.preventDefault(); //取消(a)事件(置頂)默認值
		var bt = $(this).attr("href"); //返回取得屬性與值
		var pos = $(bt).offset(); //抓取相對的座標位置
		$("html,body").animate({ 
			scrollTop: pos.top - $('nav').height() 
		},1000);
		//變數pos的top(y軸)
	});

	//滑動置頂
	$("#gotop").click(function(){
		$("html,body").animate({
			scrollTop:0
		},1000);
	});

	//指定捲軸位置淡出淡入
	$(window).scroll (function(){
		if($(this).scrollTop() > 200){
			$('#gotop').stop().fadeTo('fast',1);
		} else {
			$('#gotop').stop().fadeOut('fast');
		}
	});

	//換圖輪播套件
	$('#camera').camera({
		hover: false,
		loader:'bar',
		loaderColor:'#AC195C',
		loaderBgColor:'#fff',
		loaderOpacity:'.5',
		loaderPadding:1, 
		// navigation:false,
		playPause:false,
		time:3000,
		pagination:false,
		thumbnails:true
	});
	$('#camera_md').camera({
		hover: false,
		loader:'bar',
		loaderColor:'#AC195C',
		loaderBgColor:'#fff',
		loaderOpacity:'.5',
		loaderPadding:1, 
		// navigation:false,
		playPause:false,
		time:3000,
		pagination: 'none',
		height:'auto'
	});

	$(function(){
		var h = $(window).height();
		$("#camera_md").css('height',h);
	})

	$(function(){
	  if($(window).width() < 767){
	    $("#camera").remove();
	  }
	});

	$(function(){
	  if($(window).width() > 768){
	    $("#camera_md").remove();
	  }
	});

	//點圖放大套件
	$("figure").fancybox({

		groupAttr:'rel',

        helpers: {
            title : {
              type : 'float'
            }
        }
     });

});
