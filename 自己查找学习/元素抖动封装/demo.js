function fn_shake(dom,attr,distance,reduce,speed,callback){
//                dom       抖动元素
//                attr      抖动属性
//                reduce    抖动时候每次减少的距离
//                distance  东东距离
//                speed     计时器时间
//                callback  回调
    if (dom.star == undefined || dom.star){
        // 第一次点击时是undefined 可以运行
        dom.star = false;
        // 然后改为false 改为false || 如果没运行结束的时候点击时候是不会再次运行这个函数运行结束时候再改为true
        var arr = [];
//            抖动数组
        var timer;
//            声明定时器
        var thisDom = dom;
//            给当前dom赋值
        var num = 0;
//          计时器每次改变的下标
        var getAttr = getStyle(dom,attr);
//          获取当前的attr属性
        var AttrNum = parseFloat(getAttr);

        for (var i = distance; i>0; i-=reduce){
            arr.push(i,-i);
//                抖动要用的值
        }
        clearInterval(thisDom.timer)
//            每次点击时候清除定时器
        thisDom.timer = setInterval(function () {
//                开启定时器
//                判断下标是否>运行值的长度
//                如果大于等于则抖动结束  小于是继续执行
            if (num>=arr.length){
//                    如果大于等于则抖动结束 回归原位 并清除定时器
                thisDom.style[attr] = getAttr;
                clearInterval(timer)
                dom.star = true;
                // 运行结束吧开关打开
                callback&&callback()
//                    回调函数存在时候执行回调
            }else{
//                    不大于的情况执行下次要抖动的距离
                thisDom.style[attr] = (AttrNum+arr[num])+'px';
            }
            num++;
        },speed)

    }