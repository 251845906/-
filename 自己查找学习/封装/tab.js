/**
 * Created by Administrator on 2017/8/3 0003.
 */
function (partab_id,tab_Box,tab_label_box,tab_label,container_label,e){
            //最外围 id    teb外层盒子    tab事件触发盒子  tab触发元素标签   内容变动集合   事件
    // c传入参数  父级元素
    var tabBox = partab_id.getElementsByTagName(tab_Box);
    for (var i = 0;i<tabBox.length;i++){
        fn_tab_Box(tabBox[i])
    };
    function fn_tab_Box(tab_dom){
        var tabLabelBox = tab_dom.getElementsByTagName(tab_label_box);
        for (var i = 0;i<tabLabelBox.length;i++){
            fn_tabLabel(tabLabelBox[i]);
        }
        function fn_tabLabel(dom){
            var tabLabel = dom.getElementsByTagName(tab_label);
            for (var i = 0;i<tabLabel.length;i++){
                tabLabel.index = i;
                tabLabel[i].addEventListener(e, function(){
                    var index = this.index;
                    for (var i = 0;i<tabLabel.length;i++){
                        tabLabel[i].style.display = 'none';
                    };
                    this.style.display = 'block';
                    for(var i = 0;i<container_label.length;i++){
                        container_label[i].style.display = 'none';
                    };
                    container_label[this].style.display = 'block';
                })
            }

        }
    }

}