
$(function() {
	$(".main_1 .main_text").css({"opacity": "1"})
	$("body .fixed").css({"background":"rgba(0,0,0,0.1)"});
	$(".panel").css({"height":$(window).height()});
	$.scrollify({
		section:".panel"
	});
	$(".scroll").click(function(e) {
		e.preventDefault();
		$.scrollify("move",$(this).attr("href"));
	});
	resize1();
	$(window).resize(function(){
		resize1();
		
		var ti=$(window).height();

		switch($(window).scrollTop()){
			case 0: 
			// 框架1
				mr1($(".main_text").eq(0))
			break;
			case ti: 
			// 框架2
				mr1($(".main_text").eq(1))
			break;
			case ti*2: 
			// 框架3
			
			break;
			case ti*3: 
			// 框架4
				mr1($(".main_4 .main_text"))
			break;
		}
	
	});
	$("body").delegate(".fi_img1","click",function(){
		$(".fixed2").animate({left:"0px"},800);
	})
	$(".fixed2").delegate(".fi_img2","click",function(){
		$(".fixed2").animate({left:"-55%"},800);
	});
	
	$("body").bind("click",function(){
		//m();
	})

	$(window).scroll(function(){
		resize1();
		var ti=$(window).height();
		var ti1;
		switch($(window).scrollTop()){
			case 0: 
			// 框架1
			ti1=$(".main_1 .main_text");
				mr(ti1);a();
				$("#mucolor").css({"background":"rgba(0, 0, 0, 0.2)"});
			break;
			case ti: 
			// 框架2
				ti1=$(".main_2 .main_text");
				mr(ti1);a();
				$("#mucolor").css({"background":"rgba(30, 33, 41, 0.5)"});
			break;
			case ti*2: 
			// 框架3
				ti1=$(".main_3 .main_text");
				mr(ti1);
				yun(".main_3 .a3_1");
				$(".main_3 .a3_2").css({"transform":"translate(0,0)"});
				$("#mucolor").css({"background":"rgba(252, 13, 13, 0.5)"})
			break;
			case ti*3: 
			// 框架4
			ti1=$(".main_4 .main_text");
			mr(ti1);a()
			yun(".main_4 .a3_1");
			$("#mucolor").css({"background":"rgba(78, 30, 56, 0.5)"})
			break;
					}
		
	})
})
function resize1(){
	var he=$(window).height();
	var wid=$(window).width();
	$(".public").css({"height":he,"width":wid});
	$(".panel").css({"height":$(window).height()});
}
function mr(x1){//位移
	$(".main_text").animate({"top":"50%","opacity": "0"},10);
	x1.animate({"top":"40%","opacity": "1"},500);
	
}
function mr1(x1){//位移
	
	x1.animate({"top":"40%","opacity": "1"},500);
	
}
function yun(yundom){

$(yundom).css({"transform":"scale(1.8)"});
setTimeout(function(){
	$(yundom).css({"transform":"scale(1)"});
	setTimeout(function(){
	$(yundom).css({"transform":"scale(1.6)"});
	setTimeout(function(){
	$(yundom).css({"transform":"scale(1)"});
	setTimeout(function(){
	$(yundom).css({"transform":"scale(1.4)"});
	setTimeout(function(){
	$(yundom).css({"transform":"scale(1)"});
	setTimeout(function(){
	$(yundom).css({"transform":"scale(1.2)"});
	setTimeout(function(){
	$(yundom).css({"transform":"scale(1)"});
	
},500)
},500)
},500)
},500)
},500)
},500)
},500)
}
function a(){
	$(".main_3 .a3_2").css({"transform":"translate(0,50%)"})
}