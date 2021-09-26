 var btnStop;
 var Stoprunoneyuan
 var clearfiex = document.getElementsByClassName("clearfiex")[0];
 var spanonupdown = document.getElementsByClassName("spanonupdown")[0];
 var allli = clearfiex.getElementsByTagName("li")
 var uls = document.getElementById("uls");
 spanonupdown.onmouseover = function() {
     // if (Heightdown == 48) {
     //     // Heightdown = 0
     //     clearInterval(btnStop)
     //     clearInterval(StopRundownimg)
     // }
     if (Heightdown == 0) {
         btnStop = setInterval("onmousedownL()", 1);
     }

 }
 var Heightdown = 0;

 function onmousedownL() {
     if (Heightdown == 48) {
         // Heightdown = 0
         clearInterval(btnStop)
     }
     Heightdown++;
     clearfiex.style.height = Heightdown + "px";
     if (Heightdown == 48) {
         clearInterval(btnStop)
     }
 }
 //鼠标离开事件
 var leave
 var downup
 spanonupdown.onmouseout = function() {
     downup = setInterval("onmoveups()", 10)
         // console.log(1)

 }

 function onmoveups() {
     if (Heightdown == 0) {
         // Heightdown = 0
         clearInterval(btnStop)
     }
     // console.log("我离开了")
     Heightdown--;
     clearfiex.style.height = Heightdown + "px";
     if (Heightdown == 0) {
         clearInterval(downup)
     }
 }
 //鼠标经过ul>li的事件
 var StopRundownimg
 clearfiex.onmouseover = function() {
     // uls.style.display = "none"
     clearInterval(downup)

 }

 //鼠标点击li的时候让它上去
 function btnli(n) {
     spanonupdown.innerText = n.innerText
     n.style.backgroundColor = " #FFCC00"
     allli[1].style.backgroundColor = "white";
     StopRundownimg = setInterval("upsonmouves()", 10)
 }

 function upsonmouves() {
     Heightdown--;
     clearfiex.style.height = Heightdown + "px";
     if (Heightdown == 0) {
         clearInterval(StopRundownimg)
         allli[0].style.backgroundColor = "";
         allli[1].style.backgroundColor = "";
         allli[2].style.backgroundColor = "";
         allli[3].style.backgroundColor = "";
         allli[4].style.backgroundColor = "";
     }
 }
 //鼠标离开clearfiex
 var clearfiexups;
 clearfiex.onmouseout = function() {
         // clearfiexups = setInterval("clearfiexup()", 10)
     }
     //重新遍历所有的li

 //欠费
 var tit_no = document.getElementsByClassName("tit_no")[0];
 var ipt = document.getElementsByClassName("ipt")[0];

 function btna() {
     tit_no.style.display = "block";
     // console.log(ipt.value)
 }

 function onout(n) {
     if (ipt.value != "") {
         tit_no.style.display = "none";
     }
 }




 // 宽带的