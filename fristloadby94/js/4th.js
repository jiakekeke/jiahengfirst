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
	
	