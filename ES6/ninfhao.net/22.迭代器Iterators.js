function chef(array) {
    let i = 0;
    return {
        next(){
            let done = (i>= array.length);
            let value = !done ? array[i++] : undefined;
            return {
                value : value,
                done:done
            }
        }
    }
}
var  obj = chef(['迭代','迭代1']);
console.log(obj.next());//  i = 0
console.log(obj.next());//  i = 1
console.log(obj.next());//  i = 2