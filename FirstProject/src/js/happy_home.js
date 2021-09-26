//快乐e家代码块
var nextss = document.getElementsByClassName("nextss")[0];
var prevss = document.getElementsByClassName("prevss")[0];
var lis = document.getElementsByClassName("contentsone")[0]
    //左边的按钮
    //设置定时器
var Stoprunprevess
prevss.onclick = function() {
    clearInterval(Stoprunprevess)
    Stoprunprevess = setInterval("runRightsmove()", 1);
}
var StopMarginRights = 0;

function runRightsmove() {
    if (StopMarginRights == 0) {
        StopMarginRights = -804;
    }
    StopMarginRights += 6;
    lis.style.marginLeft = StopMarginRights + "px";
    if (Math.abs(StopMarginRights) % 402 == 0) {
        clearInterval(Stoprunprevess);
    }
}

//右边的按钮
var Stoprunleft
var StopMarginLeft = 0;
nextss.onclick = function() {
    clearInterval(Stoprunleft)
    Stoprunleft = setInterval("runleftsmove()", .1)
}

function runleftsmove() {
    if (StopMarginLeft == -804) {
        StopMarginLeft = 0;
    }
    StopMarginLeft -= 6;
    lis.style.marginLeft = StopMarginLeft + "px";
    if (Math.abs(StopMarginLeft) % 402 == 0) {
        clearInterval(Stoprunleft);
    }
}