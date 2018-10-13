let drink = {
    name:'drink',
    getDink:function(){
        return this.name
    }
};
let breakfast = {
    name:'breakfast',
    getDink() {
        return this.name
    }
}

let sunday = {
    __proto__:drink,
    getDink(){
        return super.breakfast() + 123
    }
};
console.log(sunday.getDink)

// super([arguments]);
// 调用 父对象/父类 的构造函数

// super.functionOnParent([arguments]);
// 调用 父对象/父类 上的方法