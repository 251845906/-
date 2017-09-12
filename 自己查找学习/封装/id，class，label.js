/**
 * Created by Administrator on 2017/8/2 0002.
 */
function id(id) {
    return document.getElementById(id);
};
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