
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
    //var source = $("#res_echo").val();
    //source = source + res_from_py;
    //console.log(source)
    //$("#res_echo").val(source);
    
    //向res_echo写入内容
    var oFont1=document.createElement("FONT"); 
    var pre=document.createElement("pre");
    //被<pre></pre>包围的res_from_py等text中的"\r\n"等特殊字符才会被浏览器识别
    var oText1=document.createTextNode(res_from_py); 

    let toggle = JSON.parse(window.localStorage.getItem('blackground_toggle')).flag
    if (toggle == true) {
        oFont1.style.color="white"; 
    } else {
        //oFont1.style.color="green"; 
        oFont1.style.color="black"; 
    } 

    $("#res_echo").append(oFont1); 
    oFont1.appendChild(pre); 
    pre.appendChild(oText1); 
    oFont1.appendChild(pre);

    var ele = document.getElementById('res_echo_layui');
    ele.scrollTop = ele.scrollHeight;
}

// 调用python中的函数 把html中串口参数输入区中用户输入的数据发送给串口
async function js_send_data(data){  
    //把传递给python
    await eel.py_send_data(data)();
}

