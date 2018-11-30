class Chef {
    constructor(array){
        this.array = array || [];
    }
    get menu(){
        return  this.array
    }
    set menu(argu){
        this.array.push(argu)
    }
    cook(){
        console.log(this.array)
    }
}
let obj = new Chef([1,2,3,4]);
obj.menu = '12';
obj.menu = '34';
console.log(obj.menu);