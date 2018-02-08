var Dot = document.getElementById("dot")
$HT = $(".carousel-ul li")
$(".img-1").mouseenter(function(){
	var inof = document.getElementsByClassName('img-1')
	$HT.removeClass("show")
	for(var n = 0;n < $HT.length;n++){
		var inofSum =inof[n].setAttribute("index", n)
		sum = Number(this.getAttribute("index"))
		$(".carousel-ul").css({
			background : "none"
		})
		if(sum == n){
			$HT.eq(n).fadeIn()
		}
		else{
			$HT.eq(n).hide() 

		}
	}
})
// .........................................................................
//  第一个carousel-center
$boxOne = $(".carousel-one .carousel-center")
// 第二个carousel-center
$boxTow = $(".carousel-two .carousel-center")
// 第一个右键
$RightOne = $(".carousel-one .arr-rigth")
// 第二个右键
$RightTow = $(".carousel-two .arr-rigth")
// 第一个左键
$LeftOne = $(".carousel-one .arr-left")
// 第二个左键
$LeftTow = $(".carousel-two .arr-left")
//第一个小圆点
$DotOne = $(".carousel-one .dot")
// 第二个小圆点
$DotTow = $(".carousel-two .dot")
// ..........................................................................
// 第一个点击事件
$RightOne.click(function(){
	Right($boxOne,$spanListOne)
})
$LeftOne.click(function(){
	Left($boxOne,$spanListOne)
})
// 第二个点击事件 
$RightTow.click(function(){
	Right($boxTow,$spanListTow)
})
$LeftTow.click(function(){	
	Left($boxTow,$spanListTow)
})
// ..........................................................................
$(".img-1").mouseleave(function(){
	for(var n = 0;n < $HT.length;n++){
		$HT.eq(n).fadeOut()
	}
	$(".carousel-ul").css({
		background : ""
	})
})
var b = 0;
function Right(obj,EnenList){
	for(var n = 0;n < obj.length;n++){
		obj.eq(n).hide()
		EnenList.removeClass("dot-span")
	}
	if(b < obj.length-1){
		b++;
		obj.eq(b).fadeIn(500)
		EnenList.eq(b).addClass("dot-span")
	}
	else{
		b = 0;
		obj.eq(b).fadeIn(500)	
		EnenList.eq(b).addClass("dot-span")
	}
}
function Left(obj,EnenList){
	for(var n = 0;n < obj.length;n++){
		obj.eq(n).hide()
		EnenList.removeClass("dot-span")
	}
	if(b !== 0){
		b--
		// obj.eq(b).hide()
		obj.eq(b).fadeIn(500)				
		EnenList.eq(b).addClass("dot-span")
	}
	else{
		b = obj.length-1;
		obj.eq(b).fadeIn(500)	
		EnenList.eq(b).addClass("dot-span")
	}
}
  // 移上  下 显示隐藏  弹出层
$boxOne.mouseenter(function(){
	$(".side").fadeIn(500)
	clearInterval(UY)
})
$boxOne.mouseleave(function(){
	$(".side").hide()
	clearInterval(UI)
	UY = setInterval(function(){
		Right($boxOne,$spanListOne)
	},4000)
})
// ...........................................小图轮播
var k = 0;
var l = 0;
// ............................................................................
//  生成小圆点
for(var n = 0;n < $boxOne.length;n++){
	var $dot = $("<span></span>")
	$dot.attr("index",n)
	$dot.appendTo($DotOne)
}
for(var n = 0;n < $boxTow.length;n++){
	var $dot = $("<span></span>")
	$dot.attr("index",n)
	$dot.appendTo($DotTow)
}
//  第一个dot中的span
$spanListOne = $DotOne.find("span")
//  第二个dot中的span
$spanListTow = $DotTow.find("span")
// 	给第一个dot中的span的第一个上色
$spanListOne.eq(0).addClass("dot-span")
// 	给第一个dot中的span的第一个上色
$spanListTow.eq(0).addClass("dot-span")
//  小圆点点击事件
$spanListOne.click(function(){
	Sum = Number($(this).attr("index"))
	for(var n = 0;n < $boxOne.length;n++){
		$boxOne.eq(n).hide()
	}
	b = 0;
	b = Sum;
	$boxOne.eq(b).fadeIn(100)
	yidong($spanListOne)
})
$spanListTow.click(function(){
	Sum = Number($(this).attr("index"))
	for(var n = 0;n < $boxTow.length;n++){
		$boxTow.eq(n).hide()
	}
	b = 0 
	b = Sum;
	$boxTow.eq(b).fadeIn(100)
	yidong($spanListTow)
})
function yidong(DOT){
	DOT.removeClass("dot-span")
	DOT.eq(Sum).addClass("dot-span")
}
// ........自动播放................................................................
UY = setInterval(function(){
		Right($boxOne,$spanListOne)
},2000)
// ..................智能判断..............\

$boxOne.mouseenter(function(){
	var $sideList = $(this).find(".side-lunbo li")
	UI = setInterval(function(){
		for(var i = 0;i < $sideList.length;i++){
			$sideList.eq(i).hide()
		}
		if(k == $sideList.length-1){
			k=0;	
		}
		else{
			k++;
		}
		$sideList.eq(k).fadeIn()
	},1000)
})
// ........................................轮播图2.....................		

