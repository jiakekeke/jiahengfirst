$(".bp4").click(function(){
	$.ajax({
		url:"denglu.php",
		async:true,
		data:"userName="+$('.bp1').val()+"&userPass="+$(".bp2").val(),
		type:"post",
		success:function(data){
			if(data=="1"){
				//保存cookie
				saveCookie("userName","VIP用户☆"+$('.bp1').val());
				location.href = "first.html";
			   
			}else{
				$(".bs10").html("亲，用户名或密码错误");
			}
		}		
	});	
});