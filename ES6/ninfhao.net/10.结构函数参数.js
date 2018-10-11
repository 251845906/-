function breakfast(dessert,drink,{loaction,restaurant}={}) {
    console.log(dessert,drink,loaction,restaurant)
}

// 把解构用在函数参数中 默认的为空不会报错
breakfast(1,2,{loaction:3,restaurant:5});


// function errbreakfast(dessert,drink,asd={}) {
//     console.log(dessert,drink,loaction,restaurant)
// }
// errbreakfast(1,2,{loaction:3,restaurant:5})
// // 这样的没办法直接只用解构的方法  报错
