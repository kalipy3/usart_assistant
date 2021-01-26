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
    form.on('submit(send_data_btn)', function(){
        //取出input_container cmd args_separator key_value_separator 
        var input_container=$("#send_param_key").val();
        var cmd_name = $("#send_param_key").attr("name");
        //var args_separator = $("#send_param_key").attr("args_separator");
        //var key_value_separator = $("#send_param_key").attr("key_value_separator");
        
        //用户在串口输入区的input输入框中输入的数据的合法性的前端校验
        //input_data_verify()
        //取出int enum regex
        var int = $("#send_param_key").attr("int");
        //因为enum是js的保留字 所有这里用my_enum
        var my_enum = $("#send_param_key").attr("enum");
        var reg = $("#send_param_key").attr("regex");
        console.log("------执行：")
        console.log("intput_container:", input_container)
        console.log("int:", int)
        console.log("my_enum:", my_enum)
        console.log("reg:", reg)
        if (int != "") {

        } else if (my_enum != "") {

        } else if (reg != "") {
            console.log("reg_type", typeof(reg));
            var reg_obj = new RegExp(reg);
            console.log("reg_obj:",reg_obj); 
            console.log(reg_obj.test(input_container));
            if (!reg_obj.test(input_container)) {

                //向res_echo写入内容
                var oFont1=document.createElement("FONT"); 
                var component_name = $("#send_param_label").text();
                var oText1=document.createTextNode(component_name + '输入的格式有误，请检查，重新输入!!'); 
                oFont1.style.color="red"; 
                $("#res_echo").append(oFont1); 
                oFont1.appendChild(oText1); 
                //追加换行
                var br = document.createElement("br");
                $("#res_echo").append(br);
                $("#res_echo").append(br);

                //var source = $("#res_echo").val();
                //error = source + "\r\n";
                //$("#res_echo").val(error);

                layer.msg("参数输入的格式有误，请检查，重新输入!!");
                return false;
            }
        }



        //保存构造好的将要发送的串口数据
        var str ="";
        //如果input标签是"默认:",即cmd_name是默认的send_param_key
        if (cmd_name == "send_param_key") {
            str = input_container;
        }
        //如果input_container没有填入任何参数
        else if (input_container == "") {
            str = "\r\n{cmd=>" +'"'+ cmd_name +'"' + "}\r\n"
        }
        //如果参数只有一个,即不存在args_separator,如:cmd=>"set_server_ip",ip=>"127.0.0.1"(注意:在不存在args_separator时，set_server_ip的ip必须以_开始，因为ip=>"127.0.0.1"的ip是通过cmd_name的最后一个_字段来确定的),在input只要输入127.0.0.1
        //input_container不包含args_separator
        else if (input_container.indexOf(",") == -1) {
            //则构造字符串的方法为:
            var cmd_name_xx = cmd_name.substring(cmd_name.lastIndexOf("_")+1, cmd_name.length);//提取cmd_name的后_字段
            str = "\r\n{cmd=>" + '"'+ cmd_name +'"'+ "," + cmd_name_xx + "=>" +'"'+ input_container +'"'+ "}\r\n"
        } 
        //如果参数大于2个，即存在args_separator，如:\r\n{cmd=>"led_act",led0=>"on"}\r\n,在input中输入为led0,on
        //则构造字符串的方法为: 
        //input_container包含args_separator
        else if (input_container.indexOf(",") != -1) {
            //则构造字符串的方法为:
            var before = input_container.substring(0, input_container.indexOf(","));//提取args_separator前面的led0
            var after = input_container.substring(input_container.indexOf(",")+1, input_container.length);//提取args_separator后面的on
            str = "\r\n{cmd" + "=>" +'"'+ cmd_name +'"'+ "," + before + "=>" +'"'+ after +'"'+ "}\r\n"
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
        var int = $(this).attr("int");
        //因为enum是js的保留字 所有这里用my_enum
        var my_enum = $(this).attr("enum");
        var regex = $(this).attr("regex");
        console.log(cmd_name)
        console.log("int and my_enum and regex:",int,my_enum, regex)
        //把cmd args_separator key_value_separator设置到串口参数输入区的input输入框的相应属性中去
        $("#send_param_key").attr("name", cmd_name);
        $("#send_param_label").text(value);
        //先清除，再设置，不然int enum regex中，未定义的属性会设置后不会变为空串，还是上次的值
        $("#send_param_key").attr("int", "");
        $("#send_param_key").attr("enum", "");
        $("#send_param_key").attr("regex", "");
        console.log("regex:",$("#send_param_key").attr("regex"))
        console.log("type:",typeof($("#send_param_key").attr("regex")))
        $("#send_param_key").attr("int", int);
        $("#send_param_key").attr("enum", my_enum);
        $("#send_param_key").attr("regex", regex);
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

    //关闭串口数据回显区右键默认事件
    $('.res_echo_layui').on('contextmenu', function(e) {
        return false;
    });
    //监听串口数据回显区的鼠标右击事件
    $('.res_echo_layui').on('mousedown', function(e) {
        if (1 == e.which) {
            console.log("你点了左键");
        } else if (2 == e.which) {
            console.log("你点了滚轮");
        } else if (3 == e.which) {
            console.log("你点了回显区右键");
            $("#res_echo").empty();
        }
    })
    
    //关闭串口数据输入区input的鼠标右键默认事件
    $('#send_param_key').on('contextmenu', function(e) {
        return false;
    });
    //监听串口数据输入区input的鼠标右击事件
    $('#send_param_key').on('mousedown', function(e) {
        if (1 == e.which) {
            console.log("你点了左键");
        } else if (2 == e.which) {
            console.log("你点了滚轮");
        } else if (3 == e.which) {
            console.log("你点了串口数据输入区右键");
            $("#send_param_key").val("")
        }
    })
    
    //监听input参数输入区的"默认:"二字是否被点击,被点击则转为串口助手模式(即发什么就是什么)
    $('#send_param_label').on('click', function() {
        $("#send_param_key").attr("name", "send_param_key");
        $("#send_param_label").text("默认:");
        //清除上次留下的,因为默认是不需要校验的
        $("#send_param_key").attr("int", "");
        $("#send_param_key").attr("enum", "");
        $("#send_param_key").attr("regex", "");
    })

    js_get_all_port();
    js_get_component_config();
});

