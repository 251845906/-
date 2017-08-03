
/**
 * Created by Administrator on 2017/7/11 0011.
 */
// $(function(){})
// $('#id')
// $('.aa')
// $(this)
//     封装$符号
    function $(v){
        if (typeof v === 'function'){
            window.onload = v
        }else if (typeof v === 'string'){
            var first = v.charAt(0);
            switch (first){
                case '#':
                    return document.getElementById(v.substring(1))
                    break;
                case '.':
                    return document.getElementById(v.substring(1))
                    break;
            }
        }else if(typeof v === 'object'){
            return v
        }
    };
    function getStyle(object,property) {
        return window.currentStyle ?
            object.currentStyle[property]:window.getComputedStyle(object,null)[property];
    }
    // function css(obj,property,price) {
    //
    //     if (arguments[2] === 'undefined'){
    //         read();
    //         return read;
    //     }else{
    //         write()
    //     }
    //     function read(){
    //         if (window.getComputedStyle){
    //             return document.getComputedStyle(obj,'null')[property];
    //         }else{
    //             return obj.currentStyle[property];
    //         }
    //     };
    //     function write(){
    //         property  = eval(property)
    //         obj.style[property] = price;
    //     }
    // }











// function $() {
//     var elements = [];
//     for (var i = 0, len = arguments.length; i < len; i++) {
//         var element = arguments[i];
//         if (typeof element === 'string') {
//             element = document.getElementById(element);
//         }
//         if (arguments.length !== 1) {
//         } else {
//             return element;
//         }
//         elements.push(element);
//     }
//     return elements;
// };
//
//     $ = {
//         css: function (a, b) {
//             alert(this)
//             arguments[1] === 'undefined' ? read(a) : write(a, b);
//             function read(a) {
//                 if (window.getComputedStyle) {
//                     window.getComputedStyle('', null).a
//                 } else {
//                     ''.currentStyle.a;
//                 }
//                 ;
//             };
//             function write() {
//
//             };
//         }
//     }
// window.$ = function(){
//     return new $(arguments);
// }

