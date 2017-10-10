/**
 * Created by Administrator on 2017/9/30 0030.
 */
// class封装
function cls(oParent,sClass){
    if (document.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var aResult = [];
        var aEle = oParent.getElementsByTagName('*');
        for(var i=0; i<aEle.length;i++){
            if(aEle[i].className.indexOf(sClass)!=-1){
                aResult.push(aEle[i]);
            }
        }
        return aResult
    }
};
// 父元素封装
function parent_Node(dom,pardom){
                    // dom 当前元素
    //               pardom 需要获取父元素
    var star = true;
    var Dom = dom;
    do{
        var par = Dom.parentNode;
        alert(par)
        // console.log(par.nodeName.toLowerCase() == pardom)
        if (par.nodeName.toLowerCase() == pardom){
            star = false;
        }else{
            if (par.nodeName.toLowerCase() == 'html'){
                star = false;
                break;
            }
            Dom = par;
        };
    }while(star);
    return par
}
// 下一个兄弟元素
function fn_nextsiblings(dom){
    // 需要兄弟元素的子元素
    var par = Dom.parentNode;
    // 获取当前元素的父元素
    var par_child = child_node(par);
    // 利用chirl_node删除空白元素
    // 获取当前元素的所有兄弟元素
    var sib = dom.nextSibling;
    // 获取当前元素的下一个兄弟元素
    return sib
}
// attr 获取css样式
function getStyle(object,property) {
    return window.currentStyle ?
        object.currentStyle[property] : window.getComputedStyle(object, null)[property];
}

// 获取子元素
function child_node(parseDom){
                    // parsedom 需要获取子元素的父元素
    var child_Node = parseDom.childNodes;
    for(var i = 0;i<child_Node.length;i++){
        // 清除空元素
        if (navDiv[i].nodeName === '#text'&&/\s/.test(navDiv[i].nodeValue)){
            parseDom.removeChild(navDiv[i]);
        };
    };
    return child_Node
}

// animate封装
function animate(dom,attr,price,distance,speed,callback){
    //           dom  当前运行的dom
    //           propert  运行的属性  width  top ....
    //           price   运行到那种程度   px  rem  em ...
    //           speed   运行速度
    //           callback   回调函数
    //           distance   m每次运行距离
    clearInterval(dom.w);
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
    dom.w = setInterval(function () {
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
                clearInterval(dom.w)
            };
        }else{
            thisNum = thisNum - distance;
            //                还有一种加负数
            if (thisNum<=parseFloat(price)){
                thisNum = parseFloat(price);
                clearInterval(dom.w)
            };
        }
        dom.style[attr] = thisNum + unit;
        if (thisNum === parseFloat(price)){
            callback && callback()
//                callback 存在则运行函数
        }
    },speed)
}
