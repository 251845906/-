function breakfast(dessert="蛋糕",drink="茶") {
    return `${dessert}与${drink} `
}

// 当函数不传参数的时候  会执行默认的参数

console.log(breakfast(),breakfast('香烟','火鸡'))