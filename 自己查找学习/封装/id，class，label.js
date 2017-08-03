/**
 * Created by Administrator on 2017/8/2 0002.
 */
function id(id) {
    return document.getElementById(id);
};
function cls(oParent,sClass){
    var aResult = [];
    var aEle = oParent.getElementsByTagName('*');
    for(var i=0; i<aEle.length;i++){
        if(aEle[i].className == sClass){
            aResult.push(aEle[i]);
        }
    }
    return aResult;
};