
/*
 * serial_data_send_recv.js
 * Copyright (C) 2021 2021-01-25 16:28 kalipy <kalipy@debian>
 *
 * Distributed under terms of the MIT license.
 */
//串口数据接收并显示 显示到html中的数据回显区中
//将js中的函数暴露给python调用 python调用此函数后，py会把从串口接收到的数据给到"#res_echo"(textarea)进行显示
eel.expose(js_recv);
function js_recv(res_from_py){
    console.log(typeof(res_from_py));
    console.log('js_fun从py得到的内容：' + res_from_py);
    var source = $("#res_echo").val();
    source = source + res_from_py;
    console.log(source)
    $("#res_echo").val(source);
}

// 调用python中的函数 把html中串口参数输入区中用户输入的数据发送给串口
async function js_send_data(data){  
    //把传递给python
    await eel.py_send_data(data)();
}

