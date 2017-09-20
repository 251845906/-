/**
 * Created by Administrator on 2017/9/12 0012.
 */
function getStyle(object,property) {
    return window.currentStyle ?
        object.currentStyle[property] : window.getComputedStyle(object, null)[property];
}
function animate(dom,attr,price,distance,speed,callback){
    // dom  当前运行的dom
    //           propert  运行的属性  width  top ....
    //           price   运行到那种程度   px  rem  em ...
    //           speed   运行速度
    //           callback   回调函数
    //           distance   m每次运行距离
    clearInterval(dom.timer);

    //获取单位
    if (parseFloat(price) === Number(price)){
        var unit = '';
    }else{
        for (var i = 0;i<price.length;i++){
            if (!price.charAt(i).match(/^[0-9,-.]*$/)){
                var unit = price.substring(i);
                break;
            }
        }
    }

    dom.timer = setInterval(function () {
        // 获取要运动的元素数值     并赋予运用的值
        var thispropert = getStyle(dom,attr);

        var thisNum = parseFloat(thispropert);
        // 开始运动
        //判断是正运作还是反运作

        if(thisNum<parseFloat(price)){
            thisNum = thisNum + distance;
            //                还有一种加负数
            if (thisNum>=parseFloat(price)){
                thisNum = parseFloat(price);
                clearInterval(dom.timer)
            };
        }else{
            thisNum = thisNum - distance;
            //                还有一种加负数
            if (thisNum<=parseFloat(price)){
                thisNum = parseFloat(price);
                clearInterval(dom.timer)
            };
        }
        dom.style[attr] = thisNum + unit;
        if (thisNum === parseFloat(price)){
            callback && callback()
//                callback 存在则运行函数
        }
    },speed)
}