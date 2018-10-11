
// 以前
let dessert = '蛋糕', drinl = '茶';

let obj = {
    dessert :dessert,
    drinl : drinl,
    breakfast:function () {
        return 2
    }
};
//es6

let obj1 = {
    dessert,
    drinl,
    breakfast() {
        return 2
    }
};
console.log(obj,obj1)
