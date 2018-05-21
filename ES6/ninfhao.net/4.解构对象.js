/**
 * Created by 34338 on 2018/5/21.
 */

function fun() {
    return {a:1,b:2,c:3}
}
let {a:a,b:b,c:c} = fun();

console.log(a,b,c)