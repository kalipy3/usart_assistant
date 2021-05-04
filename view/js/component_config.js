
/*
 * component_config.js
 * Copyright (C) 2021 2021-01-25 16:16 kalipy <kalipy@debian>
 *
 * Distributed under terms of the MIT license.
 */
// 调用python中的函数
// 获取菜单功能控件的配置(即component_config.json文件的内容) 
async function js_get_component_config(){  
    let component_obj= await eel.py_read_component_config()();
    console.log(component_obj)
    console.log(typeof(component_obj))

    //解析配置文件
    var component_obj_html="";
    for (var key1 in component_obj) {
        if (key1.charAt(key1.length-1) == ":")
            //console.log("a----------------------", key1)
            component_obj_html += `<li class="layui-nav-item layui-nav-item"><a href="javascript:;">`+key1+`</a><dl class="layui-nav-child">`
        else
            console.log("aaaaaaaaaaaaaaaaaa")
        console.log("level1的功能控件数量为:", Object.keys(component_obj).length)//获取对象长度
        console.log("level1的功能控件名为:", key1)
        let obj = component_obj[key1];
        console.log("111", obj[Object.keys(obj)[0]])
        if (typeof(obj[Object.keys(obj)[0]]) == "object") {
            console.log("level1的下面还有下一层,下一层为:", obj)
            console.log("level2的功能控件数量为:", Object.keys(obj).length)//获取对象长度
            let obj2;
            for (var key2 in obj) {
                if (key2.charAt(key2.length-1) == ":")
                    //console.log("b----------------------", key2)
                    component_obj_html += `<li class="layui-nav-item layui-nav-item"><a href="javascript:;">`+key2+`</a><dl class="layui-nav-child">`
                else
                    console.log("bbbbbbbbbbbbbbbbbb")
                console.log("level2的功能控件名为:", key2)
                obj2 = obj[key2];
                console.log("222", obj2[Object.keys(obj2)[0]])
                if (typeof(obj2[Object.keys(obj2)[0]]) == "object") {
                    console.log("level2的下面还有下一层,下一层为:", obj2)
                    console.log("level3的功能控件数量为:", Object.keys(obj2).length)//获取对象长度
                    let obj3;
                    for (var key3 in obj2) {
                        if (key3.charAt(key3.length-1) == ":")
                            //console.log("c----------------------", key3)
                            component_obj_html += `<li class="layui-nav-item layui-nav-item"><a href="javascript:;">`+key3+`</a><dl class="layui-nav-child">`
                        else
                            console.log("cccccccccc")
                        console.log("level3的功能控件名为:", key3)
                        obj3 = obj2[key3];
                        console.log("3333", obj3[Object.keys(obj3)[0]])
                        if (typeof(obj3[Object.keys(obj3)[0]]) == "object") {
                            console.log("level3的下面还有下一层,下一层为:", obj3)
                            console.log("level4的功能控件数量为:", Object.keys(obj3).length)//获取对象长度
                            let obj4;
                            for (var key4 in obj3) {
                                if (key4.charAt(key4.length-1) == ":")
                                    //console.log("d----------------------", key4)
                                    component_obj_html += `<li class="layui-nav-item layui-nav-item"><a href="javascript:;">`+key4+`</a><dl class="layui-nav-child">`
                                else
                                    console.log("ddddddddddd")
                                console.log("level4的功能控件名为:", key4)
                                obj4 = obj3[key4];
                                console.log("4444", obj4[Object.keys(obj4)[0]])
                                if (typeof(obj4[Object.keys(obj4)[0]]) == "object") {
                                    console.log("level4的下面还有下一层,下一层为:", obj4)
                                } 
                                if (key4.charAt(key4.length-1) == ":")
                                    //console.log("d----------------------endxxxxxxx", key4)
                                    component_obj_html += `</dl></li>`
                                else
                                    //console.log("ddddddddddd----ending")
                                    component_obj_html += `<dd><button id="` +obj4[Object.keys(obj4)[0]]+ `"` + `args_separator="` +obj4[Object.keys(obj4)[2]]+ `"` + Object.keys(obj4)[1] + `="` + obj4[Object.keys(obj4)[1]]+ `"` +  `class="layui-btn" lay-submit style="background:#141519">`+key4+`</button></dd>`
                            }
                        } 
                        if (key3.charAt(key3.length-1) == ":") 
                            //console.log("c----------------------endxxxxxxxxxxx", key3)
                            component_obj_html += `</dl></li>`
                        else
                            //console.log("cccccccccc-----ending")
                            component_obj_html += `<dd><button id="` +obj3[Object.keys(obj3)[0]]+ `"` + `args_separator="` +obj3[Object.keys(obj3)[2]]+ `"` + Object.keys(obj3)[1] + `="` + obj3[Object.keys(obj3)[1]]+ `"` +  `class="layui-btn" lay-submit style="background:#1c1e24">`+key3+`</button></dd>`
                    }
                }
                if (key2.charAt(key2.length-1) == ":")
                    //console.log("b----------------------", key2)
                    component_obj_html += `</dl></li>`
                else
                    //console.log("bbbbbbbbbbbbbbbbbb----ending")
                    component_obj_html += `<dd><button id="` +obj2[Object.keys(obj2)[0]]+ `"` + `args_separator="` +obj2[Object.keys(obj2)[2]]+ `"` + Object.keys(obj2)[1] + `="` + obj2[Object.keys(obj2)[1]]+ `"` +  `class="layui-btn" lay-submit style="background:#282b33">`+key2+`</button></dd>`
            }
        }
        if (key1.charAt(key1.length-1) == ":")
            //console.log("a----------------------", key1)
            component_obj_html += `</dl></li>`
        else
            //console.log("aaaaaaaaaaaaaaaaaa___endimg")
            component_obj_html += `<dd><button id="` +obj1[Object.keys(obj1)[0]]+ `"` + `args_separator="` +obj1[Object.keys(obj1)[2]]+ `"` + Object.keys(obj1)[1] + `="` + obj1[Object.keys(obj1)[1]]+ `"` +  `class="layui-btn" lay-submit style="background:#1c1e24">`+key1+`</button></dd>`
    }
    
    $(".bbb").append(component_obj_html);
    //更新layui,不然动态生成的layui_html标签不起作用
    layui.element.init();
}
