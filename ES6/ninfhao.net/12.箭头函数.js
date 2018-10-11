
let breakfast = dessert => { return dessert}
console.log(breakfast(22))
let breakfast1 = dessert => dessert;
// 箭头后面直接跟参数 就是直接返回值
console.log(breakfast1(33))

// 多个参数

let breakfast2 = (dessert,drink,{rest,err}) => `${dessert}与\n ${drink}${rest}${err}`;
console.log(breakfast2(33,44,{rest:2,err:4}))