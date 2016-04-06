$(function(){
	$(".services").delegate(".moveto","click",function(){
		location.href=$(this).next("h3").children("a").attr("href");
	})
	$("#site-nav").delegate("#run_hom","click",function(){
		location.href=$(this).attr("href");
		// alert("")
	})
	$(".poro_1").delegate(".link i","click",function(){
		location.href=$(this).parent("a").attr("href");
	})
})