class Chef {
    constructor(array){
        this.array = array;
    }
    cook(){
        console.log(this.array)
    }
}
let obj = new Chef([1,2,4,5]);
obj.cook();