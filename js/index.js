$(".img-1").mouseenter(function(){
	$HT = $(".carousel-ul li")
	$HT.removeClass("show")
	var inof = document.getElementsByClassName('img-1')
	for(var n = 0;n < $HT.length;n++){
		var inofSum =inof[n].setAttribute("index", n)
		var sum = Number(this.getAttribute("index"))
		if(sum == n){
			$HT.eq(n).addClass("show")
		}
	}
})
$(".img-1").mouseleave(function(){
	$HT.removeClass("show")
})
$("#arr-rigth").click(function(){
	var car = $(".carousel-center")
})