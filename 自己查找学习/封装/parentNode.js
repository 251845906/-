/**
 * Created by Administrator on 2017/8/2 0002.
 */
function parent_Node(dom,pardom){
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