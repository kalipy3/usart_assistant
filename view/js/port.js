/*
 * port.js
 * Copyright (C) 2021 2021-01-25 15:56 kalipy <kalipy@debian>
 *
 * Distributed under terms of the MIT license.
 */
//获取所有串口并且显示到html中的串口选择栏中 
//调用python中的函数
async function js_get_all_port(){
    // 调用python中的函数,注意需要在定义前加上async声明异步    
    let content = await eel.py_get_all_port()();  //这里用let不用var,调用的python函数后面是两对括号
    console.log(content)
    for (var i = 0; i < content.length; i++) {
        $('#usart_name').append(new Option(content[i], content[i]));
    }
    layui.form.render("select");
}


//用户点击html中的打开串口或关闭串口按钮 来进行串口的打开与关闭
// 调用python中的函数
async function js_open_port(res){  
    var label = $("#open_usart_btn").html();
    if (label == "打开串口") {
        console.log("111")
        var label = $("#open_usart_btn").text("关闭串口");
        //把res传递给python
        await eel.py_open_port(res)();
    } else if (label == "关闭串口") {
        console.log("222")
        var label = $("#open_usart_btn").text("打开串口");
        await eel.py_close_port()();
    }
}

//用户点击html中的搜索串口按钮
// 调用python中的函数
async function js_search_port(){  
    await js_get_all_port()
}
