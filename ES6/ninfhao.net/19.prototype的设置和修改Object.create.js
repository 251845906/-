
let breakfast = {
    getDrink(){
        return '123'
    }
};
let drink = {
    getDrink(){
        return '456'
    }
};

let qwink = {
    getDrink(){
        return '456'
    }
};

let obje = Object.create(breakfast);
console.log(obje.getDrink);
//
console.log(obje.__proto__ === breakfast)

// Object.create 创建的是一个连接器__proto__   把__proto__连接到另一个对象上面
console.log(Object.getPrototypeOf(obje) == breakfast)
// Object.getPrototypeOf() 获取的是这个对象的__proto__

Object.setPrototypeOf(obje,drink)
console.log(Object.getPrototypeOf(obje) == drink);
// Object.setPrototypeOf  设置这个对象的__proto__




obje.__proto__ = qwink;
// obje.__proto__ 和 Object.create() 相似
console.log(Object.getPrototypeOf(obje),qwink,qwink.getDrink,Object.getPrototypeOf(obje).getDrink == qwink.getDrink);
