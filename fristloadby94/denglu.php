<?php
	//1、接收用户的输入
	$userName= $_POST['userName'];
	$userPass= $_POST['userPass'];
	
	//2、在数据库中查询
	//1)、连接数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败".mysql_error());
	}else{
		//2)、执行SQL语句
		mysql_select_db("mydbjiaheng",$con);
		$str="select * from userTable where userName='".$userName."' and userPass='".$userPass."'";
		$result = mysql_query($str,$con); 
		$rowCount = mysql_num_rows($result);
		
		$str1="select * from userTable where userPhone='".$userName."' and userPass='".$userPass."'";
		$result1 = mysql_query($str1,$con); 
		$rowCount1 = mysql_num_rows($result1);
		
		
		
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应根据查询结果给前端响应对应的（1：用户名和密码都正确，表示登录成功，0：用户名或者密码有误，登录失败）
		if($rowCount==1||$rowCount1==1){
			echo 1;
		}
		
		
				
	}
	
?>