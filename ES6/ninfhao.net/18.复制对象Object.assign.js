let breakfast = {a:456};
let breakfast1 = {a:456};

Object.assign(breakfast,{sss:'qwe'});
// 把一个对象复制到另一个对象中

console.log(breakfast);

let drink = Object.assign({ddd:123},breakfast)
console.log(drink);
console.log(breakfast);
// assign() 第一个参数是复制的目标  第二个参数是复制的数据  把第二个对象复制到第一个对象里边

// 也可以叫做合并对象