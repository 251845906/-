let dessert = '蛋糕',drink = '茶';

let breakfast = `今天早餐是 \n ${dessert} 与 ${drink}`;



console.log(
    breakfast,
    breakfast.startsWith('今天'),
    breakfast.endsWith('今天'),
    breakfast.includes('今天')
)

//  startsWith   判断字符串是否是某个字符开头的
//  endsWith   判断字符串是否是某个字符结尾的
//  includes   判断字符串是否是包含某个字符串