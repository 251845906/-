let arr = [1,2,3,4,5,6];

console.log(...arr);
// 现在...是展开操作符    spread
// 还有一种方法 是剩余操作符 rest
function breakfase(dessert,drink,...foods) {
    console.log(dessert,drink,foods)
}
breakfase(1,2,3,4,5,6,7)
//  这时候... 会把剩余的参数全部展开  现在是剩余操作符