/**
 * Created by Administrator on 2017/8/2 0002.
 */
function getStyle(object,property) {
    return window.currentStyle ?
        object.currentStyle[property] : window.getComputedStyle(object, null)[property];
}