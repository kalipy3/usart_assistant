/*
 * my_layui.js
 * Copyright (C) 2021 2021-06-04 20:48 kalipy <kalipy@debian>
 *
 * Distributed under terms of the MIT license.
 */
let $;

//一般直接写在一个js文件中
layui.use(['layer', 'form', 'element'], function(){
    var layer = layui.layer
    var form = layui.form;
    var element = layui.element;
    $ = layui.jquery;

    
    //监听清空数据回显区按钮的点击事件
    //$('#clear_usart_btn').on('click', function(){
    //    console.log("清空按钮被点击..")
    //    $("#send_param_key").val("")//数据发送区
    //    $("#res_echo").empty();//数据回显区
    //});
    
   
    //加了editableSelect后无效
    //关闭ws数据输入区input的鼠标右键默认事件
    $('#message').on('contextmenu', function(e) {
        return false;
    });
    //加了editableSelect后无效
    //监听ws数据输入区input的鼠标右击事件
    $('#message').on('mousedown', function(e) {
        if (1 == e.which) {
            console.log("你点了左键");
        } else if (2 == e.which) {
            console.log("你点了滚轮");
        } else if (3 == e.which) {
            $("#message").val("");//websocket数据输入框
        }
    })

    $("#wsaddr").editableSelect({
        effects: 'slide',
        filter: true//输入时带模糊搜索
    })
    $("#message").editableSelect({
        effects: 'slide',
        filter: false
    })
    
    //监听刷新事件
    window.onbeforeunload = function(e) {
        console.log("刷新事件..")
    }

    //全局绑定回车事件
    document.onkeydown = function(e)
    {
        if(!e)
        {
            e = window.event;
        }
        if((e.keyCode || e.which) == 13)
        {
            console.log("回车!!!!!")

            return false;
        }
    }

    //设置页面title为ws
    document.title="websocket测试"
});
