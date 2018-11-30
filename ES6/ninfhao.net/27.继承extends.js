class Preson{
    constructor(name,birthay){
        this.name = name;
        this.birthay = birthay;
    }
    intro(){
        return `${this.name},${this.birthay}`
    }
}
class Chef extends Preson{
    constructor(name,birthay){
       super(name,birthay)
    }
}
let obj = new Chef('name','birthay');
console.log(obj.intro());

// 一个类继承别的类里面的东西