/**
 * Created by Administrator on 2017/8/3 0003.
 */
function (dom){
    var par = Dom.parentNode;
    var par_child = child_node(par);
    var sib = dom.nextSibling;
    function child_node(parseDom){
        var child_Node = parseDom.childNodes;
        for(var i = 0;i<child_Node.length;i++){
            if (navDiv[i].nodeName === '#text'&&/\s/.test(navDiv[i].nodeValue)){
                parseDom.removeChild(navDiv[i]);
            };
        };
        return child_Node
    }
    return sib
}

