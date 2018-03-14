var head = document.getElementsByTagName("head")[0]
var Newscript = document.createElement("script")	
Newscript.setAttribute("src","http://www.qinsichina.com/steamDataAPI.php?callback=callbackfn")
head.appendChild(Newscript)
window.onload = function(){
	$(".showList").eq(0).remove()
	Js()
}
function callbackfn(data){
	for(var i in data){
		// console.log(data[i])
		var name = data[i].name
		var imgUrl = data[i].imgUrl
		var gameId = data[i].gameId
		var isSale = data[i].isSale
		var discount = data[i].discount
		var originPrice = data[i].originPrice
		var price = data[i].price
		var platform = data[i].platform
		var date = data[i].date
		var year = date.split("-")
		var evaluate = data[i].evaluate
		var evaluatingCount = data[i].evaluatingCount + ""
		var label = data[i].label
		var $div = $(".showList").eq(0).clone()
		$div.find(".zi").html(name)
		for(var n in imgUrl){
			$div.find(".inof-img img").eq(n).attr("src",imgUrl[n])
			$div.find(".carousel-ul img").eq(n).attr("src",imgUrl[n])
			$div.find(".carousel-ul").eq(n).css({
				backgroundImage : "url(" + imgUrl[0] + ")",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100%" + "100%",
				cursor : "pointer"
			})
			$div.find(".side-lunbo img").eq(n).attr("src",imgUrl[n])
			$div.find(".inof-img").mouseleave(function(){
				$div.find(".carousel-ul").eq(n).css({
					backgroundImage : "url(" + imgUrl[0] + ")",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100%" + "100%",
					cursor : "pointer"
				})
			})
		}
		for(var n in label){
			$div.find(".inof-span").eq(n).html(label[n])
		}
		var arr = ["好评如潮","特别好评","多半好评","褒贬不一","差评如潮","最好别买","马上下架"]
		for(var k in arr){
			if(evaluate-1 == k){
				$div.find(".haoping").html(arr[k])
			}
			if(evaluate == 4){
				$div.find(".haoping").css({
					color : "#B9A074"
				})
			}
			if(evaluate == 1){
				$div.find(".haoping").css({
					color : "#E21918"
				})
			}
		}
		if(discount == 0){
			$div.find(".inof-zhi .zhekou").html("")
		}
		else{
			$div.find(".inof-zhi .zhekou").html(discount*100 + "%")
		}
		$div.find(".yuanjia").html("￥" + originPrice)
		if($div.find(".yuanjia").html !== ""){
			$(".xianjia").addClass("xianse")
		}
		else{
			$(".xianjia").removeClass("xianse")

		}
		for(var n in platform){
			if(platform[n].indexOf("Windows") == 0){
				$div.find(".inof-jingling .wind").eq(n).css({
					backgroundImage : "url(../img/win.png)",
					width : 20 + "px",
					height : 20 + "px"
				})
			}
			if(platform[n].indexOf("Mac OS") == 0){
				$div.find(".inof-jingling .wind").eq(n).css({
					backgroundImage : "url(../img/mac.png)",
					width : 20 + "px",
					height : 20 + "px"
				})
			}
			if(platform[n].indexOf("Steam") == 0){
				$div.find(".inof-jingling .wind").eq(n).css({
					backgroundImage : "url(../img/linux.png)",
					width : 20 + "px",
					height : 20 + "px"
				})
			}
		}
		$div.find(".pinglunshu").html(formatNumber(evaluatingCount))
		$div.find(".gaidong").html(year[0] + "年" + year[1] + "月" + year[2] + "日")
		$div.appendTo(".zhaozi")
		
		
	}
	function formatNumber(str){
		if(str.length <=3){
			return str
		}
		else{
			return formatNumber(str.substr(0,str.length-3)) + "," + str.substr(str.length-3)
		}
	}
	$(".showList").eq(0).css({
		display : "block"
	})

	$div.show();

}



		
