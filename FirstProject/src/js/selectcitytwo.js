var StoprunTimer
var Heightchushihua = 0;
var clearfixonespans = document.getElementsByClassName("clearfixonespans")[0];
var ul_height = document.getElementsByClassName("kd_uls")[0];
//上升的定时器
var uprun;

function guangzhoushi() {
    StoprunTimer = setInterval("moverundown()", 10);
}

function moverundown() {
    if (ul_height >= 62) {
        ul_height = 62;
        clearInterval(StoprunTimer)
    }
    Heightchushihua++;
    ul_height.style.height = Heightchushihua + "px";
    if (ul_height.style.height == 62 + "px") {
        clearInterval(StoprunTimer)
    }

}

function btnc(n) {
    uprun = setInterval("moveup()", 10);
    clearfixonespans.innerText = n.innerText
}


function moveup() {
    Heightchushihua--;
    ul_height.style.height = Heightchushihua + "px";
    if (Heightchushihua == 0) {
        clearInterval(uprun)
    }
}





//点击欠费事件

function btns3() {
    alert("请输入正确的号码")
    document.getElementById("ips").focus();
}