/**
 * Created by 34338 on 2018/5/21.
 */
let a = '5555',
    b = '4444';

let d = fun`a\naa${a}ccc${b}`;
// \n  代表换行
function fun(string,...values) {
    console.log(string)
    console.log(values)
}
console.log(d)