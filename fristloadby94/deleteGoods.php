<?php
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$vipName   = $_REQUEST['vipName'];
	$goodsId   = $_REQUEST['goodsId'];
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","qianfeng");
	
	//2）、选择数据库（找目的地）
	mysql_select_db("shoppingcenter",$conn);
	
	//3）、传输数据（过桥）
	//insert语句
	$sqlstr = "delete from  shoppingCart where vipName='".$vipName."' and goodsId='".$goodsId."'";
	//echo($sqlstr);
	
	$result=true;
	if(!mysql_query($sqlstr,$conn)){
		$result=false;
	}
	
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	//3、给客户端返回（响应）！
	echo $result;
?>