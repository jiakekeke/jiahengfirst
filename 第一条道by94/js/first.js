
function getId(str){
				return document.getElementById(str);
			}
			function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj,null)[attr];
				}
			}
			
	var b2 = getId("b2");
	var b4 = getId("b4");
	b2.onmouseenter = function(){
		b4.style.display="block";
		b2.style.borderBottom="none";
	}
	b2.onmouseleave = function(){
		b4.style.display="none";
	b2.style.borderBottom="block";
	}		
/*kaitou*/			
		getId("fd1").onmouseover = function(){
			getId("f3").style.display="block";
			
		}
		getId("f3").onmouseover = function(){
			getId("f3").style.display="block";
			
		}
		getId("fd1").onmouseout = function(){
	
			getId("f3").style.display="none";
		}
		getId("f3").onmouseout = function(){
			getId("f3").style.display="none";
			
		}
			
	getId("fd2").onmouseover = function(){
			getId("f4").style.display="block";
			}
	getId("f4").onmouseover = function(){
			getId("f4").style.display="block";
			}
	getId("fd2").onmouseout = function(){	
			getId("f4").style.display="none";
		}
	getId("f4").onmouseout = function(){	
			getId("f4").style.display="none";
		}
			
			/*二级导航*/

	   function show(){
	   	
	   		getId("cl").onmouseover =function(){
	
		getId("eu").style.display="block";
	}
	getId("eu").onmouseover =function(){
	
		getId("eu").style.display="block";
		
	}
	getId("cl").onmouseout=function(){
	
		getId("eu").style.display="none";
	}
	   	
	   	
	   	
	   	
	    var erji =  getId("eu").getElementsByTagName("li");
	    
	    var ererji = erji.children;
	   	for(var i=0;i<erji.length;i++){
	   		erji[i].index =i;
	       erji[i].onmouseover=function(){
            this.getElementsByTagName('div')[0].style.display = "block";
        }
	        erji[i].onmouseout = function(){
	        	getId("eu").style.display="none";
            this.getElementsByTagName('div')[0].style.display = "none";
        }
	   	}
	   }
	  
	show();
	
	
	
	/*轮播图js*/		
			var oWrap = getId("wrap");
			var oSlide = getId("slide");
			var iWidth = parseInt(getStyle(oWrap,"width"));
			var oList = getId("list");
			var oLi = oList.getElementsByTagName("li");
			var oLen = oLi.length;
			var oNext = getId("next");
			var oPrev = getId("prev");
			var m = 0;  //当前第几张图的索引
			var timer = null;
			oSlide.innerHTML+=oSlide.innerHTML;
			//自动轮播
			function autoPlay(){
				timer = setInterval(function(){
					m++;
					if(m==oLen+1){
						oSlide.style.left = "0";
						m=1;
					}
	//				oSlide.style.left = (-1)*m*iWidth+"px"; css直接改，没有动画效果
	//				通过move函数改变left值，当前第几张图的数值×每个的宽度在取负值
					move(oSlide,{"left":(-1)*m*iWidth+"px"});
					for(var i=0;i<oLen;i++){
						oLi[i].className = "";
					}
					oLi[m%oLen].className = "active";
				},1000)
			}
			//	调用自动轮播		
			autoPlay();
			
			// 鼠标移上移开清除或开启定时器
			oWrap.onmouseover = function(){
				clearInterval(timer);
			}
			oWrap.onmouseout = function(){
				autoPlay();
			}
			
			//下面圆点鼠标移上
			for(var i=0;i<oLen;i++){
				oLi[i].index = i;  //存储index属性
				oLi[i].onmouseover = function(){
					for(var j=0;j<oLen;j++){
						oLi[j].className = "";
					}
					oLi[this.index].className = "active";
					m = this.index; //将index复制给m，全局也知道当前是第几张图
					move(oSlide,{"left":(-1)*m*iWidth+"px"});
				}
			}
			// next的点击
			oNext.onclick = function(){
				m++;
//				if(m==oLen){  //最后一张之后再点击改到第一张
//					m=0;
//				}

				if(m==oLen+1){
					oSlide.style.left = "0";
					m=0;
				}
				move(oSlide,{"left":(-1)*m*iWidth+"px"});
				
				for(var i=0;i<oLen;i++){
					oLi[i].className = "";
				}
				oLi[m%oLen].className = "active";
			}
			// prev的点击
			oPrev.onclick = function(){
				m--;
				if(m==-1){  //第一张在往前点击改到最后一张
					m=oLen-1;
					oSlide.style.left = (-1)*oLen*iWidth+"px";
				}
				move(oSlide,{"left":(-1)*m*iWidth+"px"});
				for(var i=0;i<oLen;i++){
					oLi[i].className = "";
				}
				oLi[m%oLen].className = "active";
			}
/*黄晓明*/
      var gl = getId("gu").getElementsByTagName("li");
	var gd = gl.children;
   
   for(let i=0;i<gl.length;i++){
   	gl[i].onmouseover = function(){
   		gl[i].style.boxShadow=" 2px 2px 2px 2px black";
   		move(this.children[1],{"top":"200px"});
   	} 	
   		gl[i].onmouseout = function(){
   			gl[i].style.boxShadow=" 0px 0px 0px 0px black";
   		move(this.children[1],{"top":"270px"});
   	} 
  }
    






/*第五大道特效*/

var hWidth = parseInt(getStyle(getId("hu2"),"width"));
    var o = 0; 
    getId("hs1").onclick=function(){
    	o++;
    	move(getId("h3"),{"left":(-1)*o*hWidth+"px"});
    
    	
    }
    getId("hs2").onclick =function(){
    	move(getId("h3"),{"left":0+"px"});
    }	


var container = document.getElementsByClassName("container");
		for(var i=0;i<container.length;i++){
			//$(function(){
		
		$(".item")[i].onmouseenter = function(){
			
			$(this).children(".topline").stop(true,true).animate({width:"166px"},300);
			
			$(this).children(".rightline").stop(true,true).animate({height:"85px"},300);
			
			$(this).children(".bottomline").stop(true,true).animate({width:"166px"},300);
			$(this).children(".leftline").stop(true,true).animate({height:"85px"},300);
			$(this).children(".i1").stop(true,true).animate({opacity:"0"},300);
			$(this).children(".i2").stop(true,true).animate({opacity:"1"},300);
		
		}
		$(".item")[i].onmouseleave = function(){
			$(this).children(".topline").stop(true,true).animate({width:"0px"},300);
			$(this).children(".rightline").stop(true,true).animate({height:"0px"},300);
			$(this).children(".bottomline").stop(true,true).animate({width:"0px"},300);
			$(this).children(".leftline").stop(true,true).animate({height:"0px"},300);
			$(this).children(".i1").stop(true,true).animate({opacity:"1"},300);
			$(this).children(".i2").stop(true,true).animate({opacity:"0"},300);
		}
		
	
		}
		























/*小轮播图*/
	var oku2 = getId("ku2");
	var oku3 = getId("ku3");   
	var okul = getId("kul");
	var okur = getId("kur"); 
	var okli=oku2.getElementsByTagName("li")[0];
	
	var kWidth = parseInt(getStyle(okli,"width"));
        var k=0;
   okur.onclick = function(){
   	    k++;
   	    move(oku2,{"left":(-1)*k*kWidth+"px"});
   }
 okul.onclick = function(){
   	    k--;
   	    move(oku2,{"left":(-1)*k*kWidth+"px"});
   	    }
  




/*蒙版*/
/*选项卡*/
    
  


    var _li = getId("iu1").getElementsByTagName("li")
      
for(var i=0;i<_li.length;i++){
			_li[i].index = i; 
					console.log(i);//存储index属性
				_li[i].onmouseover = function(){
			
					for(var j=0;j<_li.length;j++){
					_li[j].className = "";
					}
					_li[this.index].className = "iactive";		
					
				
				if (this.index==0){
						
						move(getId("iii"),{"left":"0px"});
					}else if(this.index==1){
						move(getId("iii"),{"left":"-1210px"});
					}else if(this.index==2){
						move(getId("iii"),{"left":"-2420px"});
					}
					
			}

}
  
  

 
 var i4 =  getId("i4").getElementsByTagName("div");
  
for(let i=0;i<i4.length;i++){ 	
  	  i4[i].onmouseover = function(){  	
  	  	  move(this.children[1],{"opacity":"0.5"});
  	  }
  	 i4[i].onmouseout = function(){
	  	   move(this.children[1],{"opacity":"0"});
  	  }
  	
  }

/*shopping*/
var ju =  getId("j").getElementsByTagName("ul")[0];
var jl = ju.getElementsByTagName("li");
for(let i=0;i<jl.length;i++){ 	
	
  	  jl[i].onmouseover = function(){  	
  	  	  move(this.children[0],{"top":"-50px"});
  	  }
  	 jl[i].onmouseout = function(){
	  	   move(this.children[0],{"top":"0px"});
  	  }
  	
  }


/*最底下*/


var con = document.getElementsByClassName("con");
var lu3 = document.getElementById("lu3");
var li3 = document.getElementsByTagName("li");
		for(var i=0;i<con.length;i++){
	   con[i].index = i;	
  
		$(".con")[i].onmouseover= function(){
			
			if(this.index==this.index){
				console.log(i);
				//$("#lu3 li").eq(this.index-1).hide();
				$("#lu3 li").eq(this.index).show().siblings().hide();
			}
			$(this).children(".item").children(".topline").stop(true,true).animate({width:"191px"},300);
			$(this).children(".item").children(".rightline").stop(true,true).animate({height:"63px"},300);
			$(this).children(".item").children(".bottomline").stop(true,true).animate({width:"191px"},300);
			$(this).children(".item").children(".leftline").stop(true,true).animate({height:"63px"},300);
			$(this).parent("#lu2:empty").children(".li3").stop(true,true).animate({opacity:"1"},300);
		  var currIndex = $(this).index();
		   $(this).parent().next().children().stop(true,true).animate({opacity:"1"},300);
		    $(this).parent().next().children().eq(currIndex).stop(true,true).animate({opacity:"1"},300);
		}
			

		
		$(".con")[i].onmouseleave = function(){
			$(this).children(".item").children(".topline").stop(true,true).animate({width:"0px"},300);
			$(this).children(".item").children(".rightline").stop(true,true).animate({height:"0px"},300);
			$(this).children(".item").children(".bottomline").stop(true,true).animate({width:"0px"},300);
			$(this).children(".item").children(".leftline").stop(true,true).animate({height:"0px"},300);
			
			
		}
		
	
	}













