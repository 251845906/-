let food = new Map();
let fruit = {},cook = function () {},dessert = '123';
food.set(fruit,1); //set 添加值
food.set(cook,2);
food.set(dessert,3);
console.log(food);
console.log(food.size);//map长度
console.log(food.has());//查看是否有这个值
console.log(food.get(fruit));//获取这个对象的键
food.delete(cook);
console.log(food);//删除map里的对象
food.forEach((value,key) => {console.log(`${key},${value}`)});//循环这个map
food.clear();//清空这个map
console.log(food);

