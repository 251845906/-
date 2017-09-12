/**
 * Created by Administrator on 2017/9/12 0012.
 */
function getStyle(object,property) {
    return window.currentStyle ?
        object.currentStyle[property] : window.getComputedStyle(object, null)[property];
}
function animate(dom,propert,price,speed,callback){
               // dom  当前运行的dom
    //           propert  运行的属性  width  top ....
    //           price   运行到那种程度   px  rem  em ...
    //           speed   运行速度
    //           callback   回调函数
    var timer;
    //获取单位
    for (var i = 0;i<price.length;i++){
        if (!price.charAt(i).match(/^[0-9,-]*$/)){
            var unit = price.substring(i);
            break;
        }
    }
    timer = setInterval(function () {
        // 获取要运动的元素数值     并赋予运用的值
        var thispropert = getStyle(dom,propert);
        var thisNum = parseFloat(thispropert);
        // 开始运动
        //判断是正运作还是反运作
        if(thisNum>parseFloat(price)){
            thisNum += 10;
            if (thisNum>=parseFloat(price)){
                thisNum = parseFloat(price);
                callback ? callback():console.log();
                clearInterval(timer)
            };
        }else{
            thisNum -= 10;
            if (thisNum<=parseFloat(price)){
                thisNum = parseFloat(price);
                callback ? callback():console.log();
                clearInterval(timer)
            };
        }
        dom.style[propert] = thisNum + unit;
    },speed)
}