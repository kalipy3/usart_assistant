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
    
    window.cmd_name = ""
    window.args_arr = [] 
    window.args_danwei = [] 

    async function echo_data(){
        //取出input_container 
        var input_container=$("#send_param_key").val();
        var cmd_name_label = $("#send_param_key").attr("name");

        //保存构造好的将要发送的串口数据
        let str ="";
        let cmd_names_arr = []
        cmd_names_arr = cmd_name.split("##")
        console.log("cmd_names_arr:", cmd_names_arr)

        //如果input标签是"默认:",即cmd_name是默认的send_param_key
        if (cmd_name_label == "send_param_key") {
            //str = input_container;
            str = input_container + "\r\n";
        }
        //如果input_container为空，表示该命令没有input_args并且长度等于1，即不存在`##`命令连接符号
        else if (input_container == undefined && cmd_names_arr.length == 1) {
            //str = "\r\n{cmd=>" +'"'+ cmd_name +'"' + "}\r\n"
            str = "\r\n" + cmd_name + "\r\n"
        } else if (input_container == undefined && cmd_names_arr.length > 1) {//存在`##`命令连接符号
            layer.msg("正在测试:" + cmd_name);
            for (let i=0; i<cmd_names_arr.length; i++) {
                //用户按enter回车时，就不要用res_echo写入"正在测试:" + cmd_names_arr[i]了,速度更快
                //layer.msg("正在测试:" + cmd_names_arr[i]);
                //向res_echo写入内容(代替layer.msg("正在测试:" + cmd_names_arr[i]))------------------------
                
                js_send_data(cmd_names_arr[i] + "\r\n");
                //"cmd": "AT+CFUN?##AT+CIMI##AT+CSQ##AT+CEREG?##AT+CGPADDR##AT+NPING=223.5.5.5##AT+NSOCR=DGRAM,17,8888,1"
                if (cmd_names_arr[i].includes("AT+NPING")) {//对响应时间比较长的命令也延时长一点
                    await my_delay(2000)
                } else {
                    await my_delay(200)
                }
            }
            return;
        }
        
        layer.msg(str);

        js_send_data(str);
        return false;
    }

    //同步延时
    function my_delay(ms) {
        return new Promise(function(resolve, reject) {
            setTimeout(resolve, ms)
        })
    }

    async function echo_data_with_input_args(){
        //如果input标签是"默认:",即cmd_name是默认的send_param_key
        if (args_arr.length == 0) {
            //取出input_container 
            var input_container=$("#send_param_key").val();
            var cmd_name_label = $("#send_param_key").attr("name");

            //保存构造好的将要发送的串口数据
            let str ="";
            let cmd_names_arr = []
            cmd_names_arr = cmd_name.split("##")
            console.log("cmd_names_arr:", cmd_names_arr)

            //如果input标签是"默认:",即cmd_name是默认的send_param_key
            if (cmd_name_label == "send_param_key") {
                //str = input_container;
                str = input_container + "\r\n";
            }
            //如果input_container为空，表示该命令没有input_args并且长度等于1，即不存在`##`命令连接符号
            else if (input_container == undefined && cmd_names_arr.length == 1) {
                //str = "\r\n{cmd=>" +'"'+ cmd_name +'"' + "}\r\n"
                str = "\r\n" + cmd_name + "\r\n"
            } else if (input_container == undefined && cmd_names_arr.length > 1) {//存在`##`命令连接符号
                    layer.msg("正在测试:" + cmd_name);
                for (let i=0; i<cmd_names_arr.length; i++) {
                    //layer.msg("正在测试:" + cmd_names_arr[i]);
                    //向res_echo写入内容(代替layer.msg("正在测试:" + cmd_names_arr[i]))------------------------
                    var oFont1=document.createElement("FONT"); 
                    var pre=document.createElement("pre");
                    //被<pre></pre>包围的res_from_py等text中的"\r\n"等特殊字符才会被浏览器识别
                    var oText1=document.createTextNode("正在测试:" + cmd_names_arr[i]); 
                    let toggle = JSON.parse(window.localStorage.getItem('blackground_toggle')).flag
                    if (toggle == true) {
                        oFont1.style.color="white"; 
                    } else {
                        oFont1.style.color="black"; 
                    } 
                    $("#res_echo").append(oFont1); 
                    oFont1.appendChild(pre); 
                    pre.appendChild(oText1); 
                    oFont1.appendChild(pre);
                    var ele = document.getElementById('res_echo_layui');
                    ele.scrollTop = ele.scrollHeight;
                    //向res_echo写入内容完毕------------------------

                    
                    js_send_data(cmd_names_arr[i] + "\r\n");
                    //"cmd": "AT+CFUN?##AT+CIMI##AT+CSQ##AT+CEREG?##AT+CGPADDR##AT+NPING=223.5.5.5##AT+NSOCR=DGRAM,17,8888,1"
                    if (cmd_names_arr[i].includes("AT+NPING")) {//对响应时间比较长的命令也延时长一点
                        await my_delay(2000)
                    } else {
                        //await my_delay(200)
                        await my_delay(2000)//向res_echo写入提示信息`"正在测试:" + cmd_names_arr[i]`时，不能延时200ms这么短时间，不然提示信息会瞬间显示完
                    }
                }
                return;
        }
        
        layer.msg(str);

        js_send_data(str);
        return false;
        }

        //input_args参数校验
        console.log("8888888:", args_arr)
        for (let i=0; i<args_arr.length; i++) {
            if (($("#"+args_arr[i]).val()) == undefined || ($("#"+args_arr[i]).val())=="") {
                layer.msg("错误，请检查命令的参数是否填写正确!");
                return;
            }
        }

        //保存构造好的将要发送的串口数据($.trim($("#"+args_arr[0]).val()))
        let str = "\r\n" + cmd_name + "?" + args_arr[0] + "=" + ($.trim($("#"+args_arr[0]).val()));

        if (args_arr.length == 1) {
            str = "\r\n" + cmd_name + "?" + args_arr[0] + "=" + ($.trim($("#"+args_arr[0]).val())) + "\r\n"
        } else if (args_arr.length > 1) {
            for (let i=1; i<args_arr.length; i++) {
                str += "&" + args_arr[i] + "=" + ($.trim($("#"+args_arr[i]).val()))
            }
            str += "\r\n"
        }

        console.log("------执行：")

        layer.msg(str);

        js_send_data(str);
        return false;
    }
    
    //监听send_data发送数据给串口的提交
    //form.on('submit(send_data_btn)', echo_data_with_input_args());
    $('#send_data_btn').click(function() {
        echo_data_with_input_args()
    })

    //监听打开串口的提交
    form.on('submit(open_usart_btn)', function(data){
        js_open_port(JSON.stringify(data.field));
        return false;
    });
    
    //动态监听菜单项点击事件 button是未来动态加入的按钮
    $('#param_item_list').on('click', "button", function() {
        console.log('click!')
       
        var value = $(this).text()
        $("#send_param_label").text(value);

        //移除上次残留的所有的input_args输入框 起清空作用
        $(".gg").empty();//.gg是参数输入区的class
        cmd_name = ""
        args_arr.length = 0
        args_danwei.length = 0

        //取出cmd input_args
        //let cmd_name = $(this).attr("id");
        cmd_name = $(this).attr("id");
        var input_args = $(this).attr("input_args");
        console.log(cmd_name)
        console.log("input_args:", input_args)

        if (input_args == undefined) {
            echo_data()//不带input_args的//不用回车，直接点击相应菜单项就会发送命令,如果要关闭点击相应菜单项就发送命令的功能，请把这行代码注释掉
            return;
        }
        
        //解析分割input_args提取出args1,args2,...
        //let args_arr = [] 
        if (input_args != undefined) {
            args_arr = input_args.split(",")

            console.log("9999", args_arr)
            //解析分割input_args提取出args1的单位,args2的单位,...
            //以"/"提取出args和单位，split后，偶数项是args,奇数项是单位
            let arg_and_danwei = []
            for (let i=0; i<args_arr.length; i++) {
                arg_and_danwei = args_arr[i].split("/")
                args_arr[i] = arg_and_danwei[0]//参数名
                args_danwei.push(arg_and_danwei[1])//参数的单位
                console.log("参数i:", args_arr[i]);
                console.log("参数单位i:", args_danwei[i]);
            }

            //开始根据input_args的内容动态生成button参数输入框
            let input_args_obj_html = ""
            for (let i=0; i<args_arr.length; i++) {
                //去掉args_arr元素的前后空格
                args_arr[i] = $.trim(args_arr[i])    

                input_args_obj_html += `<div style="display: flex; background: #d2d2d2; margin: 0 0 0 10px;"><span style="padding: 9px 15px;">`+ args_arr[i] +`:</span><input type="text" id="` +args_arr[i]+ `"` + `cmd_name="` + cmd_name + `"` + ` placeholder="请输入参数,单位是`+ args_danwei[i] +  `"` + ` autocomplete="off" class="layui-input"><span style="padding: 9px 3px;">` + args_danwei[i] + `</span></div>`
            }
            $(".gg").append(input_args_obj_html);//.gg是参数输入区的class
            //更新layui,不然动态生成的layui_html标签不起作用
            layui.element.init();
        }
       
        $("#send_param_key").val("")

        //echo_data_with_input_args(cmd_name, args_arr)//不用回车，直接点击相应菜单项就会发送命令,如果要关闭点击相应菜单项就发送命令的功能，请把这行代码注释掉
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
    //$('.res_echo_layui').on('contextmenu', function(e) {
    //    return false;
    //});
    //监听串口数据回显区的鼠标右击事件
    let toggle = 0
    window.localStorage.setItem('blackground_toggle', JSON.stringify({flag: false}))
    $('.res_echo_layui').on('mousedown', function(e) {
        if (1 == e.which) {
            console.log("你点了左键");
        } else if (2 == e.which) {
            console.log("blackground_toggle localStorage:", JSON.parse(window.localStorage.getItem('blackground_toggle')).flag)
            toggle = JSON.parse(window.localStorage.getItem('blackground_toggle')).flag
            console.log("你点了滚轮");
            if (toggle == false) {
                $('#res_echo_layui').css("background","black")
                $('#res_echo').css("background","black")
                $('#res_echo > font').css("color", "white")//上次的会无效，应该是没有重新渲染的原因,所以要用localStorage在生成dom元素的时候也要根据toggle设置颜色
            } else {
                $('#res_echo_layui').css("background","white")
                $('#res_echo').css("background","white")
                //$('#res_echo > font').css("color", "green")//上次的会无效，应该是没有重新渲染的原因,所以要用localStorage在生成dom元素的时候也要根据toggle设置颜色
                $('#res_echo > font').css("color", "black")//上次的会无效，应该是没有重新渲染的原因,所以要用localStorage在生成dom元素的时候也要根据toggle设置颜色
            }
            toggle = !toggle
            window.localStorage.setItem('blackground_toggle', JSON.stringify({flag: toggle}))
        } else if (3 == e.which) {
            //$("#res_echo").empty();
            console.log("你点了回显区右键111");
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
        //移除所有上次残留的input_args输入框 起清空作用
        $(".gg").empty();//.gg是参数输入区的class
        cmd_name = ""
        args_arr.length = 0
        args_danwei.length = 0
        
        $("#send_param_key").attr("name", "send_param_key");
        $("#send_param_label").text("默认:");
        //清除上次留下的,因为默认是不需要校验的
        $("#send_param_key").attr("int", "");
        $("#send_param_key").attr("enum", "");
        $("#send_param_key").attr("regex", "");

        //加上input输入框
        let input_obj_html = `<input type="text" name="send_param_key" id="send_param_key" args_separator="," key_value_separator="=" placeholder="请输入参数,回车执行(若该命令不需要参数，请直接点击执行即可)" autocomplete="off" class="layui-input">`
        $(".gg").append(input_obj_html);//.gg是参数输入区的class
        //更新layui,不然动态生成的layui_html标签不起作用
        layui.element.init();
    })
    
    //监听搜索串口按钮的点击事件
    //$('#search_usart_btn').on('click', function(){
    //    console.log("搜索串口按钮被点击..")
    //    js_search_port();
    //});
    function open_usart_timer() {
        console.log("串口定时刷新已开启")
        timer = setInterval(() => {
            setTimeout(()=>{
                js_search_port();
            },0)
        }, 1000)
    }
    open_usart_timer()
    
    //监听清空数据回显区按钮的点击事件
    $('#clear_usart_btn').on('click', function(){
        console.log("清空按钮被点击..")
        $("#send_param_key").val("")//数据发送区
        $("#res_echo").empty();//数据回显区
    });
    
    function download_usart_data() {
        let usart_data = $("#res_echo").text();//数据回显区 text()是剔除html标签获取内容
        var blob = new Blob([usart_data], {type: 'text/plain;charset=utf-8'})
        var url = window.URL.createObjectURL(blob)
        var link = document.createElement('a')
        link.href = url
        link.setAttribute('download', "usart_data.txt")
        link.click()
    }
   
    //不知道为什么不起作用
    function download_usart_data2() {
        let usart_data = $("#res_echo").text();//数据回显区 text()是剔除html标签获取内容
        var w = window.open(usart_data, "_blank", "width=100,height=100")
        w.document.execCommand("SaveAs")
        w.close()
    }

    //监听保存串口数据按钮的点击事件
    $('#save_usart_data_btn').on('click', function(){
        console.log("保存串口数据按钮被点击..")
        let usart_data = $("#res_echo").text();//数据回显区 text()是剔除html标签获取内容
        console.log("usart_data:", usart_data)
        download_usart_data()
    });
    
    //监听回显背景色切换按钮的点击事件
    $('#set_color_usart_btn').on('click', function(){
        console.log("blackground_toggle localStorage:", JSON.parse(window.localStorage.getItem('blackground_toggle')).flag)
        toggle = JSON.parse(window.localStorage.getItem('blackground_toggle')).flag
        console.log("你点了回显背景色切换按钮");
        if (toggle == false) {
            $('#res_echo_layui').css("background","black")
            $('#res_echo').css("background","black")
            $('#res_echo > font').css("color", "white")//上次的会无效，应该是没有重新渲染的原因,所以要用localStorage在生成dom元素的时候也要根据toggle设置颜色
        } else {
            $('#res_echo_layui').css("background","white")
            $('#res_echo').css("background","white")
            //$('#res_echo > font').css("color", "green")//上次的会无效，应该是没有重新渲染的原因,所以要用localStorage在生成dom元素的时候也要根据toggle设置颜色
            $('#res_echo > font').css("color", "black")//上次的会无效，应该是没有重新渲染的原因,所以要用localStorage在生成dom元素的时候也要根据toggle设置颜色
        }
        toggle = !toggle
        window.localStorage.setItem('blackground_toggle', JSON.stringify({flag: toggle}))
    });

    //监听刷新事件
    window.onbeforeunload = function(e) {
        console.log("刷新事件..")
        var label = $("#open_usart_btn").html();
        if (label == "关闭串口") {
            var label = $("#open_usart_btn").text("打开串口");
            eel.py_close_port()();
        }
    }

    //监听命令配置按钮点击事件
    $('#cmd_config_btn').on('click', async function(){
        console.log("命令配置按钮被点击..")
        
        //弹出一个页面
        let index = layer.open({
            type: 1,
            content: `<div id="jsoneditor" style="width: 800px; height: 800px;"></div>`, //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
            area: ['801px', '843px'],
            cancel: async function(index){//弹窗关闭的回调 
                //if(confirm('确定要关闭么')){ //只有当点击confirm框的确定时，该层才会关闭
                //  layer.close(index)
                //}
                //return false; 
                console.log("命令配置窗口关闭按钮被点击..")
                
                // get json
                const updatedJson = editor.get()
                console.log("修改后的配置json数据:", updatedJson)

                //把updatedJson传递给python
                await eel.py_write_component_config(updatedJson)();
                
                layer.close(index)
                location.reload()//手动触发f5刷新(因为改了配置文件后，要更新左边的命令菜单和菜单项)
            }    
        });
        
        // create the editor
        const container = document.getElementById("jsoneditor")
        const options = {}
        const editor = new JSONEditor(container, options)

        // set json
        let json_obj = await eel.py_read_component_config()();
        
        editor.set(json_obj)
    });

    //监听窗口大小改变事件
    window.onresize = function() {
        
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
            //event
            console.log("回车!!!!!")
            echo_data_with_input_args()

            return false;
        }
    }
    
    //选项卡tab切换的一些事件触发
    element.on('tab(demo)', function(data){
        console.log("选项卡tab切换的一些事件触发", data);
        if (data.index == 0) {
            document.title="串口助手"
        } else if (data.index == 1) {
            document.title="websocket测试"
        } else if (data.index == 2) {
            document.title="postwoman测试"
        }
    });


    js_get_all_port();
    js_get_component_config();

    //设置页面title为串口助手
    document.title="串口助手"
});

