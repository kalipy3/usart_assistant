/*
 * main.js
 * Copyright (C) 2021 2021-01-25 15:50 kalipy <kalipy@debian>
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
    form.on('submit(send_data_btn)', function(data){
        //取出input_container cmd args_separator key_value_separator 
        var input_container=$("#send_param_key").val();
        var cmd_name = $("#send_param_key").attr("name");
        var args_separator = $("#send_param_key").attr("args_separator");
        var key_value_separator = $("#send_param_key").attr("key_value_separator");
        //保存构造好的将要发送的串口数据
        var str ="";
        //如果input标签是"默认:",即cmd_name是默认的send_param_key
        if (cmd_name == "send_param_key") {
            str = input_container;
        }
        //如果input_container没有填入任何参数
        else if (input_container == "") {
            str = "\r\n{cmd" +key_value_separator+'"'+ cmd_name +'"' + "}\r\n"
        }
        //如果参数只有一个,即不存在args_separator,如:cmd=>"set_server_ip",ip=>"127.0.0.1"(注意:在不存在args_separator时，set_server_ip的ip必须以_开始，因为ip=>"127.0.0.1"的ip是通过cmd_name的最后一个_字段来确定的),在input只要输入127.0.0.1
        //input_container不包含args_separator
        else if (input_container.indexOf(args_separator) == -1) {
            //则构造字符串的方法为:
            var cmd_name_xx = cmd_name.substring(cmd_name.lastIndexOf("_")+1, cmd_name.length);//提取cmd_name的后_字段
            str = "\r\n{cmd" + key_value_separator +'"'+ cmd_name +'"'+ args_separator + cmd_name_xx + key_value_separator +'"'+ input_container +'"'+ "}\r\n"
        } 
        //如果参数大于2个，即存在args_separator，如:\r\n{cmd=>"led_act",led0=>"on"}\r\n,在input中输入为led0,on
        //则构造字符串的方法为: 
        //input_container包含args_separator
        else if (input_container.indexOf(args_separator) != -1) {
            //则构造字符串的方法为:
            var before = input_container.substring(0, input_container.indexOf(args_separator));//提取args_separator前面的led0
            var after = input_container.substring(input_container.indexOf(args_separator)+1, input_container.length);//提取args_separator后面的on
            str = "\r\n{cmd" + key_value_separator +'"'+ cmd_name +'"'+ args_separator + before + key_value_separator +'"'+ after +'"'+ "}\r\n"
        } 
        layer.msg(str);

        js_send_data(str);
        return false;
    });

    //监听打开串口的提交
    form.on('submit(open_usart_btn)', function(data){
        js_open_port(JSON.stringify(data.field));
        return false;
    });

    //动态监听菜单项点击事件 button是未来动态加入的按钮
    $('#param_item_list').on('click', "button", function() {
        console.log('click!')
        var value = $(this).text()
        //取出cmd args_separator key_value_separator
        var cmd_name = $(this).attr("id");
        var args_separator = $(this).attr("args_separator");
        var key_value_separator = $(this).attr("key_value_separator");
        console.log(cmd_name)
        console.log("args_separator被点击",args_separator)
        console.log("key_value_separator被点击", key_value_separator)
        //把cmd args_separator key_value_separator设置到串口参数输入区的input输入框的相应属性中去
        $("#send_param_key").attr("name", cmd_name);
        $("#send_param_label").text(value);
        $("#send_param_key").attr("args_separator", args_separator);
        $("#send_param_key").attr("key_value_separator", key_value_separator);
    })

    //关闭菜单项鼠标右键默认事件
    $('#param_item_list').on('contextmenu', "button", function(e) {
        return false;
    });
    //动态监听菜单项的鼠标右击事件
    $('#param_item_list').on('mousedown', "button", function(e) {
        if (1 == e.which) {
            console.log("你点了左键");
        } else if (2 == e.which) {
            console.log("你点了滚轮");
        } else if (3 == e.which) {
            console.log("你点了右键");
        }
    })

    //监听input参数输入区的"默认:"二字是否被点击,被点击则转为串口助手模式(即发什么就是什么)
    $('#send_param_label').on('click', function() {
        $("#send_param_key").attr("name", "send_param_key");
        $("#send_param_label").text("默认:");
    })

    js_get_all_port();
    js_get_component_config();
});

