class Chef {
    constructor(){

    }
    static cook(argu){
        console.log(argu)
        return 0
    }
}
console.log(Chef.cook('static静态方法'));

// static 静态方法 会return 一个值   如果没写  则返回undefined