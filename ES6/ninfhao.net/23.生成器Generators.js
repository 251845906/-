function* chef() {
    yield '迭代';
    yield '迭代1';
    yield '迭代2';
}
let obj = chef();
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
// =======================  改造一番
function* chef1(array) {
   for (var i = 0; i<array.length;i++){
       yield function (array) {
           return array[i]
       }
   }
}
let obj1 = chef(['迭代','迭代1','迭代2'])
console.log(obj1.next())
console.log(obj1.next())
console.log(obj1.next())
console.log(obj1.next())