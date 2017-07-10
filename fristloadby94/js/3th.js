/*连接后台查看是否允许注册*/
$(function(){
	var i = null;
	$(".bp1")[0].onblur=function(){
	//	手机号
	   console.log("1");
		var reg = /^1\d{10}$/;
		
		var str = $(".bp1").val();
		if(reg.test(str)){
			$(".bs10")[0].innerHTML = "手机号输入格式正确";
		    i = true;
		     console.log("2");
//	$(".bp1").blur(function(){
		
		$.ajax({
			url:"PhoneCheck.php",
			async:true,
			data:"userPhone="+$(".bp1").val(),
			type:"post",
			success:function(data){
				if(data==1){
					//保存cookie
			
					$(".bs10").html("该手机号已被注册，你要办卡不");
				}else{
					
					$(".bs10").html("亲，赶紧注册，送包子");
				}
			}		
	    });			
	
//	});	
	$(".bp1").focus(function(){
		$(".bs10").html("");
	}); 
		    
		     
		}else{
		$(".bs10")[0].innerHTML = "这不是你的手机号吧";
		i = false;
		}
	}
	
	});
	
	
	
	
//密码
	$(".bp5")[0].onblur = function(){
		var reg2 = /^[0-9a-zA-Z][0-9a-zA-Z_]{5,18}$/;
		var str1 = $(".bp5")[0].value;
		if(reg2.test(str1)){
			$(".bs13")[0].innerHTML = "格式输入正确";
		
		}else{
		$(".bs13")[0].innerHTML = "格式不对换个密码呀";
		i = false;
		}
	}
//用户名	
	
	$(".bp4")[0].onblur = function(){
		var reg3 = /^[0-9a-zA-Z][0-9a-zA-Z_]{5,12}$/;
		var str2 = $(".bp4")[0].value;
		if(reg3.test(str2)){
			
			
			
	if($(".bp4").val()==""){	
			
			$(".bs12").html("亲，你的名字！");
		}else{
	
			$.ajax({
				url:"userName.php",
				async:true,
				data:"userName="+$('.bp4').val(),
				type:"post",
				success:function(data){
					if(data==1){
						//保存cookie
						console.log(data);
						$(".bs12").html("该用户名被捷足先登了，换个名字呗");
					}else{
						console.log(data);
						$(".bs12").html("亲，赶紧注册，克里马擦");
					}
				}		
		    });			
		}
	
	
		$(".bp4").focus(function(){
			$(".bs12").html("");
		});	
			
			
			$(".bs12")[0].innerHTML = "这个用户名可以";
		}else{
			$(".bs12")[0].innerHTML = "格式不对换个吧";
			i = false;
		}
	
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			
