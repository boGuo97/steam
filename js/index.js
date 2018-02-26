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
$Carsi  = $(".carousel-si")
//  第一个carousel-center
$boxOne = $(".carousel-one .carousel-center")
//  第二个carousel-center
$boxTow = $(".carousel-two .carousel-center")
//  第三个carousel-center
$boxSan = $(".carousel-san .carousel-center")
//  第四个carousel-center
$boxSi = $(".carousel-si .carousel-center")
//  第一个右键
$RightOne = $(".carousel-one .arr-rigth")
//  第二个右键
$RightTow = $(".carousel-two .arr-rigth")
//  第三个右键
$RightSan = $(".carousel-san .arr-rigth")	
//  第四个右键
$RightSi = $(".carousel-si .arr-rigth")	
//  第一个左键
$LeftOne = $(".carousel-one .arr-left")
//  第二个左键
$LeftTow = $(".carousel-two .arr-left")
//  第三个左键
$LeftSan = $(".carousel-san .arr-left")
//  第四个左键
$LeftSi = $(".carousel-si .arr-left")
//  第一个小圆点
$DotOne = $(".carousel-one .dot")
//  第二个小圆点
$DotTow = $(".carousel-two .dot")
//  第三个小圆点
$DotSan = $(".carousel-san .dot")
//  第四个小圆点
$DotSi = $(".carousel-si .dot")
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
// 	第四个点击事件
$RightSi.click(function(){
	Right($boxSi,$spanListSi,$Carsi)
})
$LeftSi.click(function(){	
	Left($boxSi,$spanListSi,$Carsi)
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
var p = 0;// 第四个轮播图指标
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
	if(age3 == $Carsi){
		if(p < obj.length-1){
			p++;
			obj.eq(p).fadeIn(500)
			EnenList.eq(p).addClass("dot-span")
		}
		else{
			p = 0;
			obj.eq(p).fadeIn(500)	
			EnenList.eq(p).addClass("dot-span")
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
			obj.eq(e).fadeIn(500)				
			EnenList.eq(e).addClass("dot-span")
		}
		else{
			e = obj.length-1;
			obj.eq(e).fadeIn(500)	
			EnenList.eq(e).addClass("dot-span")
		}
	}
	if(age3 == $Carsi){
		if(p !==0){
			p--;
			obj.eq(p).fadeIn(500)
			EnenList.eq(p).addClass("dot-span")
		}
		else{
			p = obj.length-1;
			obj.eq(p).fadeIn(500)	
			EnenList.eq(p).addClass("dot-span")
		}
	}
}
  // 移上  下 显示隐藏  弹出层
// ..................关闭弹出层..............
$(".side").mouseenter(function(){
	$(".side").hide()
})
$boxOne.mouseenter(function(){
	$(".side").fadeIn(500)
	clearInterval(UY)
	$sideList = $(this).find(".side-lunbo li")
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
$boxOne.mouseleave(function(){
	$(".side").hide()
	clearInterval(UI)
	for(var i = 0;i < $sideList.length;i++){
			$sideList.eq(i).hide()
		}
	k = 0	
	$sideList.eq(0).fadeIn()
	k++
	UY = setInterval(function(){
		Right($boxOne,$spanListOne,$Carone)
	},4000)
})
$RightOne.mouseenter(function(){
	clearInterval(UY)
})
$LeftOne.mouseenter(function(){
	clearInterval(UY)	
})
$RightOne.mouseleave(function(){
	UY = setInterval(function(){
		Right($boxOne,$spanListOne,$Carone)
	},2000)
})
$LeftOne.mouseleave(function(){
	UY = setInterval(function(){
		Right($boxOne,$spanListOne,$Carone)
	},2000)	
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
for(var n = 0;n < $boxSi.length;n++){
	var $dot = $("<span></span>")
	$dot.attr("index",n)
	$dot.appendTo($DotSi)
}
//  第一个dot中的span
$spanListOne = $DotOne.find("span")
//  第二个dot中的span
$spanListTow = $DotTow.find("span")
//  第三个dot中的sapn
$spanListSan = $DotSan.find("span")
//  第四个dot中的sapn
$spanListSi = $DotSi.find("span")
// 	给第一个dot中的span的第一个上色
$spanListOne.eq(0).addClass("dot-span")
// 	给第二个dot中的span的第一个上色
$spanListTow.eq(0).addClass("dot-span")
//  给第三个dot中的span的第一个上色
$spanListSan.eq(0).addClass("dot-span")
//  给第四个dot中的span的第一个上色
$spanListSi.eq(0).addClass("dot-span")
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
$spanListSi.click(function(){
	Sum = Number($(this).attr("index"))
	for(var n = 0;n < $boxSi.length;n++){
		$boxSi.eq(n).hide()
	}
	p = 0 
	p = Sum;
	$boxSi.eq(p).fadeIn(100)
	yidong($spanListSi)
})
function yidong(DOT){
	DOT.removeClass("dot-span")
	DOT.eq(Sum).addClass("dot-span")
}
// ........自动播放................................................................
UY = setInterval(function(){
	Right($boxOne,$spanListOne,$Carone)
},2000)


// ......................................................................
$(".h-main span").click(function(){
	Nun = $(this).index();
	// .......................重置jg-a-one.............................
	$(".jg-a").closest(".a1").eq(Nun).find(".jg-a").removeClass("jg-a-one")
	$(".jg-a").closest(".a1").eq(Nun).find(".jg-a").eq(0).addClass("jg-a-one")
	$(".cpu").removeClass("cpu-block")
	$(".cpu").eq(Nun).addClass("cpu-block")

	//.............span 样式
	$(".h-main span").removeClass("main-show")
	$(this).addClass("main-show")
	//  显示a1.。。。。。。。。。。。。。。。。。。。。。。。。
	$(".a1").removeClass("a-block")
	$(".a1").eq(Nun).addClass("a-block")

	$(".cpu").removeClass("cpu-block")
	$(".cpu").eq(Nun).addClass("cpu-block")
	$(".tab-right").closest(".cpu-block").find(".tab-right").show()
})


$(".jg-a").mouseenter(function(){
	Sun = $(this).index();
	if(!$(this).hasClass("jg-a-one")){
		$(".tab-right").hide()
		$(".tab-right").closest(".cpu-block").find(".tab-right").eq(Sun).fadeOut(function(){
			$(".tab-right").closest(".cpu-block").find(".tab-right").eq(Sun).fadeIn()
		})
	}
	$(this).closest(".a1").find(".jg-a").removeClass("jg-a-one")
	$(this).addClass("jg-a-one")	
})

// ..............................游戏详情页js...............................
var Kuang = document.getElementsByClassName("kuang")[0]
$(".sert-none span").click(function(){
	var Iun = $(this).index()
	Kuang.style.left = (Iun * 121) + "px";
	$(".sert-ul li").hide()
	$(".sert-ul li").eq(Iun).fadeIn()
})

