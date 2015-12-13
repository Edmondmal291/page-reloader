
$(document).ready(function(){
	

	$("#btn_start").click(function(){
	
	var str_sec=0;
	
	var  int_sec;
	
	str_sec=$("#sec").val();
	
	int_sec=parseInt(str_sec);
	
	int_sec=int_sec*1000;
	
	var set=setInterval(refresh,int_sec);
	
	function refresh(){
		location.reload(true);
	}
	
});
$("#btn_stop").click(function(){
	
	window.clearInterval(set);	
});

});