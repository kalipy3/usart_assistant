
/*
 * kalipy.js
 * Copyright (C) 2021 2021-06-05 16:03 kalipy <kalipy@debian>
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

    //同步延时
    function my_delay(ms) {
        return new Promise(function(resolve, reject) {
            setTimeout(resolve, ms)
        })
    }

    my_delay(3000)
    //设置页面title为ws
    document.title="postwoman测试"
    console.log("6666666666666666666666666666666666666666666666666666666666666666")
    //$("#__layout > div > div > div > aside > nav > a:nth-child(1)").click()
    
    document.querySelector("#__layout > div > div > div > aside > nav.primary-nav > a:nth-child(1)").click()
});
