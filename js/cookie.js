var head = document.getElementsByTagName("head")[0]
var Newscript = document.createElement("script")	
Newscript.setAttribute("src","http://www.qinsichina.com/steamDataAPI.php?callback=callbackfn")
head.appendChild(Newscript)

function callbackfn(data){
	for(var i in data){
		console.log(data[i])
		var name = data[i].name
		var imgUrl = data[i].imgUrl
		var gameId = data[i].gameId
		var isSale = data[i].isSale
		var discount = data[i].discount
		var originPrice = data[i].originPrice
		var price = data[i].price
		var platform = data[i].platform
		var date = data[i].date
		// console.log(date)
		var evaluate = data[i].evaluate
		var evaluatingCount = data[i].evaluatingCount
		var label = data[i].label
		var $div = $(".showList").eq(0).clone()
		var Al = $(".arr-left")
		$div.find(".zi").html(name)
		for(var n in imgUrl){
			$div.find(".inof-img img").eq(n).attr("src",imgUrl[n])
			$div.find(".carousel-ul img").eq(n).attr("src",imgUrl[n])
			$div.find(".carousel-ul").css({
				backgroundImage : "url(" + imgUrl[0] + ")",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100%" + "100%",
				cursor : "pointer"
			})
			$div.find(".inof-img img").eq(0)
		}
		for(var n in label){
			$div.find(".inof-span").eq(n).html(label[n])
		}
		var arr = ["好评如潮","特别好评","多半好评","褒贬不一","差评如潮","最好别买","马上下架"]
		for(var k in arr){
			if(evaluate-1 == k){
				$div.find(".haoping").html(arr[k])
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
		$div.find(".pinglunshu").html(evaluatingCount)
		$div.find(".gaidong").html(date)
		$div.appendTo(".carousel-one")
	}
	$(".showList").eq(0).remove()
	$(".showxian").eq(0).css({
		display : "block"
	})
	$div.show();
	Js()
}
