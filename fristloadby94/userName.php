<?php	
	//字符编码使用utf-8；
//	header("Content-type: text/html; charset=utf-8");
	//1、接收客户端的输入的数据
	//$_POST:针对post请求方法。

	$user = $_POST['userName'];
	
	//2、保存到数据库
	//1)、连接数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败".mysql.error());
//		echo "注册失败:服务器连接有问题".mysql.error();
	}else{
		//2)、执行SQL语句
		mysql_select_db("mydbjiaheng",$con);
			
		$str="select * from userTable where userName='".$user."'";
		    $result = mysql_query($str,$con); 
		    $rowCount = mysql_num_rows($result);
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应
		
		
		if($rowCount==1){
			echo 1;
		}else{
			echo 0;
		}
	}	
	    
	
	
	?>