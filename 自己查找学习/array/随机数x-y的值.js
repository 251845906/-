/**
 * Created by Administrator on 2017/10/23 0023.
 */
function randow(x,y) {
    if (x<y){
        var max = y
        var min = x;
    }else{
        var max = x
        var min = y;
    }
    return Math.round(Math.random*(max-min)+max)
}