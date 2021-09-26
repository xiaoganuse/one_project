//选择宽带广州市的代码js
//span标签里面的类名
var clearfixonespan = document.getElementsByClassName("clearfixonespan")[0];
var kd_ul = document.getElementsByClassName("kd_ul")[0];
//所有城市
var liii = document.getElementsByClassName("kd_ul")[0].getElementsByTagName("li");
var Stopmovedown
var Stopmovedowns

//拿到所有的li
// var i;
var ClearfixHeightdown = 0; //62
for (var i = 0; i < liii.length; i++) {

    clearfixonespan.onclick = function() {
        Stopmovedown = setInterval("clearfixdown()", 10);
        // kd_ul.style.display = "block"
        // console.log(1)
    }

    function clearfixdown() {
        if (ClearfixHeightdown >= 62) {
            ClearfixHeightdown = 62
            clearInterval(Stopmovedown)
        }
        ClearfixHeightdown++;
        kd_ul.style.height = ClearfixHeightdown + "px";
        if (kd_ul.style.height == 62 + "px") {
            clearInterval(Stopmovedown)
        }
    }
    liii[i].onclick = function() {
        Stopmovedowns = setInterval("clearfixup()", 10);
        for (let index = 0; index < liii.length; index++) {
            clearfixonespan.innerText = liii[index].innerText
        }
    }

    function clearfixup() {
        ClearfixHeightdown--;
        kd_ul.style.height = ClearfixHeightdown + "px";
        if (ClearfixHeightdown == 0) {
            clearInterval(Stopmovedowns)
        }
    }
}



// 宽带的钱事件


var btnStops;
var Stoprunoneyuan
var clearfiexs = document.getElementsByClassName("clearfiexs")[0];
var spanonupdowns = document.getElementsByClassName("spanonupdowns")[0];
var alllis = clearfiexs.getElementsByTagName("li")
var uls = document.getElementById("uls");
spanonupdowns.onmouseover = function() {

    if (Heightdowns == 0) {
        btnStops = setInterval("onmousedownLs()", 1)
    }

}
var Heightdowns = 0;
//下拉的时候
function onmousedownLs() {
    console.log(1)
    if (Heightdowns == 48) {
        // Heightdown = 0
        clearInterval(btnStops)
    }
    Heightdowns++;
    clearfiexs.style.height = Heightdowns + "px";
    if (Heightdowns == 48) {
        clearInterval(btnStops)
    }
}
//上升的时候
var leaves
var downups
spanonupdowns.onmouseout = function() {
    downups = setInterval("onmoveupss()", 10)
        // console.log(1)

}

function onmoveupss() {
    if (Heightdowns == 0) {
        // Heightdown = 0
        clearInterval(btnStops)
    }
    // console.log("我离开了")
    Heightdowns--;
    clearfiexs.style.height = Heightdowns + "px";
    if (Heightdowns == 0) {
        clearInterval(downups)
    }
}


//鼠标经过ul>li的事件
var StopRundownimgs
clearfiexs.onmouseover = function() {
    // uls.style.display = "none"
    clearInterval(downups)
}

//鼠标点击li的时候让它上去
function btnlis(n) {
    spanonupdowns.innerText = n.innerText
    n.style.backgroundColor = " #FFCC00"
    alllis[1].style.backgroundColor = "white";
    StopRundownimgs = setInterval("upsonmouvess()", 10)
}

function upsonmouvess() {
    Heightdowns--;
    clearfiexs.style.height = Heightdowns + "px";
    if (Heightdowns == 0) {
        clearInterval(StopRundownimgs)
        alllis[0].style.backgroundColor = "";
        alllis[1].style.backgroundColor = "";
        alllis[2].style.backgroundColor = "";
        alllis[3].style.backgroundColor = "";
        alllis[4].style.backgroundColor = "";
    }
}
//鼠标离开clearfiex
var clearfiexups;
clearfiex.onmouseout = function() {
        // clearfiexups = setInterval("clearfiexup()", 10)未写完
    }
    //重新遍历所有的li
    //弹框事件

function btns2() {
    alert("请输入正确的号码")
    document.getElementById("otherfocus").focus();
}































// clearfixonespan.onclick = function() {
//     Stopmovedown = setInterval("clearfixdown()", 10);
//     kd_ul.style.display = "block"
// }
// var ClearfixHeightdown = 0; //62
// function clearfixdown() {
//     ClearfixHeightdown++;
//     kd_ul.style.height = ClearfixHeightdown + "px";
//     if (kd_ul.style.height == 62 + "px") {
//         clearInterval(Stopmovedown)
//     }
// }
// li.onclick = function() {
//     Stopmovedown = setInterval("clearfixup()", 10);
//     clearfixonespan = li.innerHTML;
// }

// function clearfixup() {
//     ClearfixHeightdown--;
//     kd_ul.style.height = ClearfixHeightdown + "px";
//     if (kd_ul.style.height == 0) {
//         kd_ul.style.height = "none";
//         clearInterval(Stopmovedown)
//     }
// }