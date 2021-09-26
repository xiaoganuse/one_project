//bannar代码快

window.onload = function() {
    //页面打开就加载图片
    strat_active_img() //这里注意如果直接调用定时器则不走stopActive这个
    runstartbtn()
}

//bananer区域的大图片js
var StopActice;

function strat_active_img() {
    StopActice = setInterval("moveImg()", 2000)
}

var index = 1;
var imgs = document.getElementsByClassName("main-img-active")[0].querySelectorAll("img");
var li = document.getElementsByClassName("main-img-active-box")[0].querySelectorAll("li");
var main_img_active = document.getElementsByClassName("main-img-active")[0];

function moveImg() {
    //便利所有的图片,拿到它的下标
    for (var i = 0; i < imgs.length; i++) {
        if (index == i) {
            imgs[i].style.display = "block";
            li[i].style.backgroundColor = "white" //判断点
            imgs[i].onmousemove = function() {
                clearInterval(StopActice);

            }
            imgs[i].onmouseout = function() {
                strat_active_img()
            }

        } else {
            imgs[i].style.display = "none"
            li[i].style.backgroundColor = "transparent"

        }

    }
    if (index == imgs.length - 1) {
        index = 0;
    } else {
        index++
    }
}

function pressToshow(n) {
    index = n;
    moveImg()
}
//auto代码块
//这里是一键5G升级代码js
//创建全局定时器
var moveToleftTimer;

function moveToLeft() {
    clearInterval(moveToleftTimer)
    moveToleftTimer = setInterval("moveToL()", 1);
}
var content1marginL = 0; //全局变量
function moveToL() {
    if (content1marginL == -2020) {
        content1marginL = 0;
    }
    content1marginL -= 10;
    document.getElementsByClassName("content-01")[0].style.marginLeft = content1marginL + "px";
    //每次移动200的倍数,清楚浮动
    if (Math.abs(content1marginL) % 1010 == 0) {
        clearInterval(moveToleftTimer);
    }
}

//创建往右变量的定时器
var marginleftTimer;

function moveToRight() {
    clearInterval(marginleftTimer)
    marginleftTimer = setInterval("moveToR()", 1);
}

function moveToR() {
    if (content1marginL == 0) {
        content1marginL = -2020;
    }
    content1marginL += 10;
    document.getElementsByClassName("content-01")[0].style.marginLeft = content1marginL + "px";
    if (Math.abs(content1marginL) % 1010 == 0) {
        clearInterval(marginleftTimer)
    }
}

var StopRuning
var contentrunleftbtn = 0
var StopRunings

function runstartbtn() {
    StopRuning = setInterval("runleftbtnauto()", 7000);
}

function runleftbtnauto() {
    StopRunings = setInterval("runleftbtns()", 1);

}

function runleftbtns() {
    if (contentrunleftbtn == -2020) {
        contentrunleftbtn = 0;
    }
    contentrunleftbtn -= 10;
    document.getElementsByClassName("content-01")[0].style.marginLeft = contentrunleftbtn + "px";
    if (Math.abs(contentrunleftbtn) % 1010 == 0) {
        clearInterval(StopRunings)
    }
}


document.addEventListener("visibilitychange", function() {
    if (!document.hidden) {
        //处于当前页面
        clearInterval(StopRuning)
        clearInterval(StopRunings)
        runstartbtn()
        console.log("我在当前页面")　　　

    } else {　　　　　　
        clearInterval(StopRuning)
        clearInterval(StopRunings)
        console.log("我不在当前页面")　　　
    }

});