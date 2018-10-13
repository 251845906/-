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
    __proto__:drink
};
console.log(sunday.getDink());

sunday.__proto__ = breakfast;
console.log(sunday.getDink());
