//tab切换代码快
var li1 = document.getElementsByClassName("li1")[0];
var li2 = document.getElementById("li2");
var li3 = document.getElementsByClassName("li3")[0];
var tab1 = document.getElementsByClassName("tab1")[0];
var tab2 = document.getElementsByClassName("tab2")[0];
var tab3 = document.getElementsByClassName("tab3")[0];
li1.onclick = function() {
    tab1.style.display = "block"
    li1.style.color = "#ff8202"
    tab2.style.display = "none"
    li2.style.color = "#505050"
    tab3.style.display = "none"
    li3.style.color = "#505050"

}
li2.onclick = function() {
    console.log(2)
    tab1.style.display = "none"
    li1.style.color = "#505050"
    tab2.style.display = "block"
    li2.style.color = "#ff8202"
    tab3.style.display = "none"
    li3.style.color = "#505050"

}
li3.onclick = function() {
    tab3.style.display = "block"
    li3.style.color = "#ff8202"
    tab1.style.display = "none"
    li2.style.color = "#505050"
    tab2.style.display = "none"
    li1.style.color = "#505050"
}

//固话下拉钱的代码
var btnStopa;
var Stoprunoneyuana
var clearfiexa = document.getElementsByClassName("clearfiexa")[0];
var spanonupdowna = document.getElementsByClassName("spanonupdowna")[0];
var alllia = clearfiexa.getElementsByTagName("li")
var uls = document.getElementById("uls");

spanonupdowna.onmouseover = function() {
    // if (Heightdown == 48) {
    //     // Heightdown = 0
    //     clearInterval(btnStop)
    //     clearInterval(StopRundownimg)
    // }
    if (Heightdowna == 0) {
        btnStopa = setInterval("onmousedownLa()", 1);
    }

}

var Heightdowna = 0;

function onmousedownLa() {
    if (Heightdowna == 48) {
        // Heightdown = 0
        clearInterval(btnStopa)
    }
    Heightdowna++;
    clearfiexa.style.height = Heightdowna + "px";
    if (Heightdowna == 48) {
        clearInterval(btnStopa)
    }
}

//鼠标离开事件
var leavea
var downupa
spanonupdowna.onmouseout = function() {
    downupa = setInterval("onmoveupsa()", 10)
        // console.log(1)

}

function onmoveupsa() {
    if (Heightdowna == 0) {
        // Heightdown = 0
        clearInterval(btnStopa)
    }
    // console.log("我离开了")
    Heightdowna--;
    clearfiexa.style.height = Heightdowna + "px";
    if (Heightdowna == 0) {
        clearInterval(downupa)
    }
}
//鼠标经过ul>li的事件
var StopRundownimga
clearfiexa.onmouseover = function() {
        // uls.style.display = "none"
        clearInterval(downupa)

    }
    //鼠标点击li的时候让它上去
function btnlia(n) {
    spanonupdowna.innerText = n.innerText
    n.style.backgroundColor = " #FFCC00"
    alllia[1].style.backgroundColor = "white";
    StopRundownimga = setInterval("upsonmouvesa()", 10)
}

function upsonmouvesa() {
    Heightdowna--;
    clearfiexa.style.height = Heightdowna + "px";
    if (Heightdowna == 0) {
        clearInterval(StopRundownimga)
        alllia[0].style.backgroundColor = "";
        alllia[1].style.backgroundColor = "";
        alllia[2].style.backgroundColor = "";
        alllia[3].style.backgroundColor = "";
        alllia[4].style.backgroundColor = "";
    }
}
//鼠标离开clearfiex
var clearfiexups;
clearfiexa.onmouseout = function() {
        // clearfiexups = setInterval("clearfiexup()", 10)
    }
    //重新遍历所有的li