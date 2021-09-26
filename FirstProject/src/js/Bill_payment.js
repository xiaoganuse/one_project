//欢享服务代码
var sp1 = document.getElementsByClassName("welcom-service-main-meun-sp1")[0];
var sp2 = document.getElementsByClassName("welcom-service-main-meun-sp2")[0];
var list_img = document.getElementsByClassName("list_img")[0];
sp2.onmouseover = function() {
    sp2.style.color = "#ff8201"
    sp1.style.color = "#777777"
    list_img.style.marginLeft = "-896px";
    // sp1.style.backgroundPosition = "-216px -217px"
    sp1.style.backgroundPosition = "-216px -253px"
    sp2.style.backgroundPosition = "-216px -324px"
}
sp1.onmouseover = function() {
    sp1.style.color = "#ff8201" //经过后变红色
    sp2.style.color = "#777777";
    sp2.style.backgroundPosition = "-217px -324px"
    sp1.style.backgroundPosition = "-216px -217px"
    sp2.style.backgroundPosition = "-216px -288px"
    list_img.style.marginLeft = "0px";
}

var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0]
var li_01_list = document.getElementsByClassName("li-01-list")[0];
var Stopmovetoleft;
var moveleftMarginliHeight = 0;
//往左走的代码
prev.onclick = function() {
    clearInterval(Stopmovetoleft)
    Stopmovetoleft = setInterval("moveleftMarginli_01_list()", 1)
}

function moveleftMarginli_01_list() {
    if (moveleftMarginliHeight == -448) {
        moveleftMarginliHeight = 0;
    }
    li_01_list.style.marginLeft = moveleftMarginliHeight + "px";
    moveleftMarginliHeight -= 4;
    if (Math.abs(moveleftMarginliHeight) % 224 == 0) {
        clearInterval(Stopmovetoleft)
    }
}
//往右走的代码
var Stopmovemarginright;
var moveMarginliHeights = 0;
next.onclick = function() {
    clearInterval(Stopmovemarginright)
    Stopmovemarginright = setInterval("moveleftMarginli_02_list()", 1)
}

function moveleftMarginli_02_list() {
    if (moveMarginliHeights == 0) {
        moveMarginliHeights = -448;
    }
    li_01_list.style.marginLeft = moveMarginliHeights + "px";
    moveMarginliHeights += 4;
    if (Math.abs(moveMarginliHeights) % 224 == 0) {
        clearInterval(Stopmovemarginright)
    }
}