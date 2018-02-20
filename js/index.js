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
$Carone = $(".carousel-one")
$Cartow = $(".carousel-two")
$Carsan = $(".carousel-san")
//  第一个carousel-center
$boxOne = $(".carousel-one .carousel-center")
//  第二个carousel-center
$boxTow = $(".carousel-two .carousel-center")
//  第三个carousel-center
$boxSan = $(".carousel-san .carousel-center")
//  第一个右键
$RightOne = $(".carousel-one .arr-rigth")
//  第二个右键
$RightTow = $(".carousel-two .arr-rigth")
//  第三个右键
$RightSan = $(".carousel-san .arr-rigth")	
//  第一个左键
$LeftOne = $(".carousel-one .arr-left")
//  第二个左键
$LeftTow = $(".carousel-two .arr-left")
//  第三个左键
$LeftSan = $(".carousel-san .arr-left")
//  第一个小圆点
$DotOne = $(".carousel-one .dot")
//  第二个小圆点
$DotTow = $(".carousel-two .dot")
//  第三个小圆点
$DotSan = $(".carousel-san .dot")
// ..........................................................................
//  第一个点击事件
$RightOne.click(function(){
	Right($boxOne,$spanListOne,$Carone)
})
$LeftOne.click(function(){
	Left($boxOne,$spanListOne,$Carone)
})
// 第二个点击事件 
$RightTow.click(function(){
	Right($boxTow,$spanListTow,$Cartow)
})
$LeftTow.click(function(){	
	Left($boxTow,$spanListTow,$Cartow)
})
// 	第三个点击事件
$RightSan.click(function(){
	Right($boxSan,$spanListSan,$Carsan)
})
$LeftSan.click(function(){	
	Left($boxSan,$spanListSan,$Carsan)
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
var b = 0;// 第一个轮播图指标
var l = 0;// 第二个轮播图指标
var e = 0;// 第三个轮播图指标
function Right(obj,EnenList,age3){
	for(var n = 0;n < obj.length;n++){
		obj.eq(n).hide()
		EnenList.removeClass("dot-span")
	}
	if(age3 == $Carone){
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
	if(age3 == $Cartow){
		if(l < obj.length-1){
			l++;
			obj.eq(l).fadeIn(500)
			EnenList.eq(l).addClass("dot-span")
		}
		else{
			l = 0;
			obj.eq(l).fadeIn(500)	
			EnenList.eq(l).addClass("dot-span")
		}
	}
	if(age3 == $Carsan){
		if(e < obj.length-1){
			e++;
			obj.eq(e).fadeIn(500)
			EnenList.eq(e).addClass("dot-span")
		}
		else{
			e = 0;
			obj.eq(e).fadeIn(500)	
			EnenList.eq(e).addClass("dot-span")
		}
	}
}
function Left(obj,EnenList,age3){
	for(var n = 0;n < obj.length;n++){
		obj.eq(n).hide()
		EnenList.removeClass("dot-span")
	}
	if(age3 == $Carone){
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
	if(age3 == $Cartow){
		if(l !== 0){
			l--
			// obj.eq(b).hide()
			obj.eq(l).fadeIn(500)				
			EnenList.eq(l).addClass("dot-span")
		}
		else{
			l = obj.length-1;
			obj.eq(l).fadeIn(500)	
			EnenList.eq(l).addClass("dot-span")
		}
	}
	if(age3 == $Carsan){
		if(e !== 0){
			e--
			// obj.eq(b).hide()
			obj.eq(e).fadeIn(500)				
			EnenList.eq(e).addClass("dot-span")
		}
		else{
			e = obj.length-1;
			obj.eq(e).fadeIn(500)	
			EnenList.eq(e).addClass("dot-span")
		}
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
		Right($boxOne,$spanListOne,$Carone)
	},4000)
})
$boxTow.mouseenter(function(){
	clearInterval(UP)
})
$boxTow.mouseleave(function(){
	UP = setInterval(function(){
		Right($boxTow,$spanListTow,$Cartow)
	},3000)
})
// ...........................................小图轮播
var k = 0;
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
for(var n = 0;n < $boxSan.length;n++){
	var $dot = $("<span></span>")
	$dot.attr("index",n)
	$dot.appendTo($DotSan)
}
//  第一个dot中的span
$spanListOne = $DotOne.find("span")
//  第二个dot中的span
$spanListTow = $DotTow.find("span")
//  第三个dot中的sapn
$spanListSan = $DotSan.find("span")
// 	给第一个dot中的span的第一个上色
$spanListOne.eq(0).addClass("dot-span")
// 	给第二个dot中的span的第一个上色
$spanListTow.eq(0).addClass("dot-span")
//  给第三个dot中的span的第一个上色
$spanListSan.eq(0).addClass("dot-span")
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
	l = 0 
	l = Sum;
	$boxTow.eq(l).fadeIn(100)
	yidong($spanListTow)
})
$spanListSan.click(function(){
	Sum = Number($(this).attr("index"))
	for(var n = 0;n < $boxSan.length;n++){
		$boxSan.eq(n).hide()
	}
	e = 0 
	e = Sum;
	$boxSan.eq(e).fadeIn(100)
	yidong($spanListSan)
})
function yidong(DOT){
	DOT.removeClass("dot-span")
	DOT.eq(Sum).addClass("dot-span")
}
// ........自动播放................................................................
UY = setInterval(function(){
	Right($boxOne,$spanListOne,$Carone)
},2000)
UP = setInterval(function(){
	Right($boxTow,$spanListTow,$Cartow)
},3000)

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
// ......................................................................
$(".tab-a").mouseenter(function(){
	for(var j = 0;j < $(".tab-a").length;j++){
		$(".tab-a").eq(j).attr("index",j)
		$(".tab-right").eq(j).fadeOut();
	}
		var Num = $(this).attr("index")
		$(".tab-right").eq(Num).fadeIn()
		$(".tab-a").removeClass("tab-a-one")
		$(this).addClass("tab-a-one")
		$(this)<$(".fable").addClass("fable-one")
		$(this)<$(".win span").addClass("span-one")
		$(this)<$(".win em").addClass("em-one")
})


