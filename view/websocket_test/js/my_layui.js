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

    //监听send_data发送数据给串口的提交
    //$('#send_data_btn').click(function() {
    //    echo_data_with_input_args()
    //})


    //关闭串口数据回显区右键默认事件
    //$('.res_echo_layui').on('contextmenu', function(e) {
    //    return false;
    //});
    
    
    //监听清空数据回显区按钮的点击事件
    //$('#clear_usart_btn').on('click', function(){
    //    console.log("清空按钮被点击..")
    //    $("#send_param_key").val("")//数据发送区
    //    $("#res_echo").empty();//数据回显区
    //});
    
    //function download_usart_data() {
    //    let usart_data = $("#res_echo").text();//数据回显区 text()是剔除html标签获取内容
    //    var blob = new Blob([usart_data], {type: 'text/plain;charset=utf-8'})
    //    var url = window.URL.createObjectURL(blob)
    //    var link = document.createElement('a')
    //    link.href = url
    //    link.setAttribute('download', "usart_data.txt")
    //    link.click()
    //}
   
    //监听保存websocket回显数据按钮的点击事件
    //$('#save_usart_data_btn').on('click', function(){
    //    console.log("保存串口数据按钮被点击..")
    //    let usart_data = $("#res_echo").text();//数据回显区 text()是剔除html标签获取内容
    //    console.log("usart_data:", usart_data)
    //    download_usart_data()
    //});
    
    //关闭ws数据输入区input的鼠标右键默认事件
    $('#message').on('contextmenu', function(e) {
        return false;
    });
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
