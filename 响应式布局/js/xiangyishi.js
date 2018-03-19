var sum = document.getElementsByTagName("body")[0].offsetWidth
var liList = document.getElementsByClassName("over")[0].getElementsByTagName("li")
var $over = document.getElementsByClassName("over")[0]
var count = liList.length;
$(".wrap").css({
  width : sum + "px"
})
$(".wrap li").css({
  width : sum + "px"
})
$over.style.width = (count + 1) * sum + "px"
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var wrap = document.getElementsByClassName("wrap")[0];
var navList = document.getElementById("navList");
var n = 0;
var m = 0;  //当前在第几张
var isVirtualHas = false;
var isAnimationHas = false;
next.onclick = function(){
  if(!isAnimationHas){
    n++;
    if(n == count){
      //克隆一份第一张的副本
      newli = liList[0].cloneNode(true);
      $over.appendChild(newli);
      m = 0;
    }
    else{
      m++;
    }
    animation("next")
  }
}
//自动播放
var autoPlay = setInterval(function(){
  next.onclick()
},3000)
//智能判断
wrap.onmouseenter = function(){
  clearInterval(autoPlay)
}
wrap.onmouseleave = function(){
  autoPlay = setInterval(function(){
    next.onclick()
  },3000)
}
prev.onclick = function(){
  if(!isAnimationHas){
    n--;
    if(n !== -1){
      m--;
      animation("prev");
    }
    else{
      n = 0;
      newli = liList[liList.length-1].cloneNode(true);
      $over.insertBefore(newli,$over.firstChild);
      $over.style.left = -sum + "px";
      m = count - 1;
      animation("prev");
      isVirtualHas = true;
    }
  }
}
function animation(dir){
  updataDotStatus();
  var t = setInterval(function(){
    isAnimationHas = true;
    var ml = parseInt($over.style.left);
    //当动画执行完毕之后
    if(ml == n * (-sum)){
      clearInterval(t)
      isAnimationHas = false;
      // 判断该动画是否是向后箭头的障眼法情况
      if(n == count){
        //$over瞬间到达真实的第一张去
        $over.style.left = 0;
        //移除临时li
        $over.removeChild(newli);
        //将n校准到正确的位置上
        n = 0;
      }
      // 判断该动画是否时向前箭头的障眼法情况
      if(isVirtualHas){
        //$over瞬间到达真实的第一张去
        $over.style.left = (-(count - 1) * sum) + "px";
        //移除临时li
        $over.removeChild(newli);
        //将n校准到正确的位置上
        n = count - 1;
        isVirtualHas = false;
      }
      return;
    }
    if(dir == "next"){
      $over.style.left = ml + (Math.floor((n*(-sum) - ml) / 12)) + "px"
    }
    if(dir == "prev"){
      $over.style.left = ml + (Math.ceil((n*(-sum) - ml) / 12)) + "px"
    }
  },16)
}
// 初始化小圆点
for(var i = 0; i < count;i++){
  var newli = document.createElement("span");
  newli.setAttribute("index",i)
  navList.appendChild(newli)
}
var spanList = navList.getElementsByTagName("span");
spanList[0].className = "focus";
//更新小圆点函数
function updataDotStatus(){
  for(var i = 0; i < count; i++){
    spanList[i].className = ""
  }
  spanList[m].className = "focus";
}
for(var i = 0;i < count; i++){
  spanList[i].onclick = function(){
    if(n < this.getAttribute("index")){
      // 更新变量状态
      n = this.getAttribute("index");
      m = n;
      animation("next")
    }
    if(n > this.getAttribute("index")){
      // 更新变量状态
      n = this.getAttribute("index");
      m = n;
      animation("prev")
    }
  }
}