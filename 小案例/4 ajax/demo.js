function Ajax (opt) {
    opt.method = opt.method.toUpperCase() || '';
    opt.url = opt.url +'' || '';
    opt.async =  opt.async || true;
    opt.string =  opt.string || '';
    opt.success = opt.success || function () {};


    const request = new XMLHttpRequest();//XMLHttpRequest对象用于在后台与服务器交换数据
    request.open(opt.method,opt.url,opt.async);
// 规定请求的类型、URL 以及是否异步处理请求。 true（异步）或 false（同步） url文件在服务器上的位置
//     request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// 向请求添加 HTTP 头 value: 规定头的值  请求格式
    request.send(opt.string);
// 将请求发送到服务器。
    request.onreadystatechange = function(){
        // 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
        // readyState
        // 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
        // 0: 请求未初始化
        // 1: 服务器连接已建立
        // 2: 请求已接收
        // 3: 请求处理中
        // 4: 请求已完成，且响应已就绪
        // status	200: "OK"
        // 404: 未找到页面
        // return request

        if (request.readyState==4 && request.status==200){
            //     // 当请求完成相应就绪    文件也‘ok’时候进行下面代码
            //     request.responseText	//获得字符串形式的响应数据
            //     request.responseXML	   //获得 XML 形式的响应数据。
            opt.success(request.responseText)

        }
    };
};
export default Ajax;