 let desserts = new Set('123');
desserts.add('4');
desserts.add('1');// 添加一个参数
console.log(desserts);
desserts.delete('1'); //删除一个参数
console.log(desserts);
console.log(desserts.size);// Set 长度
console.log(desserts.has(1));// 查看是否包含这个值
desserts.forEach( desserts =>{console.log(desserts)});
desserts.clear()//清空一个set
console.log(desserts);
// Set 里面不能有重复的值  比较像一个数组