function formatDate(now) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "-" + (month = month < 10 ? ("0" + month) : month) + "-" + (date = date < 10 ? ("0" + date) : date) + " " + (hour = hour < 10 ? ("0" + hour) : hour) + ":" + (minute = minute < 10 ? ("0" + minute) : minute) + ":" + (second = second < 10 ? ("0" + second) : second);
}
var output;
var websocket = null;
function init() {
    output = document.getElementById("output");
    testWebSocket();
}

window.onload=function(){ 
    get_localStorage_data()
    get_localStorage_data_of_send_msg()
} 
var input_select_wsaddrs = []
var input_select_wsmsgs = []
function addsocket() {
    var wsaddr = $("#wsaddr").val();
    if (wsaddr == '') {
        JsonsMessageBox($("#wsaddr"), "请填写Websocket测试地址");
        return false;
    }
    update_localStorage_data()

    StartWebSocket(wsaddr);
}
function my_trim(str){ //删除左右两端的空格
    return (str+"").replace(/(^\s*)|(\s*$)/g, "");
}
function update_localStorage_data() {
    $("#wsaddr").editableSelect('clear')
    
    //update
    if(!input_select_wsaddrs.includes(my_trim($("#wsaddr").val()))) {
        input_select_wsaddrs.push(my_trim($("#wsaddr").val()))
        window.localStorage.setItem("localStorage_input_select_wsaddr", JSON.stringify(input_select_wsaddrs));
        get_localStorage_data()
        console.log("update:", JSON.parse(window.localStorage.getItem("localStorage_input_select_wsaddr")));
    } else {
        get_localStorage_data()
    }
}
function get_localStorage_data() {//mounted时调用
    if (window.localStorage.getItem("localStorage_input_select_wsaddr") != undefined && window.localStorage.getItem("localStorage_input_select_wsaddr").length != 0) {
        let wsaddrs = JSON.parse(window.localStorage.getItem("localStorage_input_select_wsaddr"));

        if (input_select_wsaddrs.length == 0) {
            for (let i=0; i<wsaddrs.length; i++) {
                input_select_wsaddrs.push(wsaddrs[i])
            }
        }

        for (var i=wsaddrs.length-1; i>=0; i--) {
            //作为option加入到select
            //$('#wsaddr').append(`<option value="`+ wsaddrs[i] +`">`+ wsaddrs[i] +`</option>`)
            $("#wsaddr").editableSelect('add', function () {
                                $(this).val(wsaddrs[i]);
                                $(this).text(wsaddrs[i]);
                            });//add绑定添加上value txt
        }
        console.log(JSON.parse(window.localStorage.getItem("localStorage_input_select_wsaddr")));
    }
}

function closesocket() {
    if (websocket) {
        websocket.close();
        websocket = null;
    }
    else {
        layui.layer.msg("Websocket未连接，无需进行断开操作！")
        //writeToScreen("<span style='color:red'>Websocket未连接，无需进行断开操作！</span>");
    }
}

function StartWebSocket(wsUri) {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function (evt) { onOpen(evt) };
    websocket.onclose = function (evt) { onClose(evt) };
    websocket.onmessage = function (evt) { onMessage(evt) };
    websocket.onerror = function (evt) { onError(evt) };
}

function onOpen(evt) {
    layui.layer.msg("连接成功")
    //writeToScreen("<span style='color:red'>连接成功，现在你可以发送信息进行测试了！</span>");
}
function onClose(evt) {
    layui.layer.msg("连接已断开!")
    //writeToScreen("<span style='color:red'>Websocket连接已断开！</span>");
    websocket.close();
    websocket = null;
}
function onMessage(evt) {
    writeToScreen('<span style="color:blue">服务端回应&nbsp;' + formatDate(new Date()) + '</span><br/><span>' + "\r\n" + evt.data + "\r\n" + '</span>');
}
function onError(evt) {
    if (evt.data == undefined) {
        layui.layer.msg("连接被拒绝！")
        //writeToScreen('<span style="color: red;">连接被拒绝！</span>');
        return
    }
    writeToScreen('<span style="color: red;">发生错误:</span> ' + evt.data);
}

function doSend() {
    var message = $("#message").val();
    if (message == '') {
        JsonsMessageBox($("#message"), "请先填写要测试发送的消息");
        $("#message").focus();
        return false;
    }
    if (typeof websocket === "undefined" || websocket == null) {
        layui.layer.msg("Websocket还没有连接，请先连接!")
        //JsonsMessageBox($("#message"), "Websocket还没有连接或者连接失败，请进行检测");
        return false;
    }
    if (websocket.readyState == 3) {
        JsonsMessageBox($("#message"), "Websocket已经关闭，请重新连接");
        return false;
    }
    
    update_localStorage_data_of_send_msg()
    
    $("#message").val('');
    writeToScreen('<span style="color:green">你发送的信息&nbsp;' + formatDate(new Date()) + '</span><br/>' + "\r\n" +  message + "\r\n");
    websocket.send(message);
}
function update_localStorage_data_of_send_msg() {
    $("#message").editableSelect('clear')
    
    //update
    //if(!input_select_wsmsgs.includes(my_trim($("#message").val()))) {//去重复
    if(1 == 1) {//不去重复
        input_select_wsmsgs.push(my_trim($("#message").val()))
        window.localStorage.setItem("localStorage_input_select_wsaddr_of_send_msg", JSON.stringify(input_select_wsmsgs));
        get_localStorage_data_of_send_msg()
        console.log("update:", JSON.parse(window.localStorage.getItem("localStorage_input_select_wsaddr_of_send_msg")));
    } else {
        get_localStorage_data_of_send_msg()
    }
}
function get_localStorage_data_of_send_msg() {//mounted时调用
    if (window.localStorage.getItem("localStorage_input_select_wsaddr_of_send_msg") != undefined && window.localStorage.getItem("localStorage_input_select_wsaddr_of_send_msg").length != 0) {
        let wsmsgs = JSON.parse(window.localStorage.getItem("localStorage_input_select_wsaddr_of_send_msg"));

        if (input_select_wsmsgs.length == 0) {
            for (let i=0; i<wsmsgs.length; i++) {
                input_select_wsmsgs.push(wsmsgs[i])
            }
        }

        for (var i=wsmsgs.length-1; i>=0; i--) {
            $("#message").editableSelect('add', function () {
                                $(this).val(wsmsgs[i]);
                                $(this).text(wsmsgs[i]);
                            });//add绑定添加上value txt
        }
        console.log(JSON.parse(window.localStorage.getItem("localStorage_input_select_wsaddr_of_send_msg")));
    }
}




function writeToScreen(message) {
    var div = "<div>" + "\r\n" +  message + "</div>";
    var d = $("#output");
    var d = d[0];
    var doScroll = d.scrollTop == d.scrollHeight - d.clientHeight;
    $("#output").append(div);
    if (doScroll) {
        d.scrollTop = d.scrollHeight - d.clientHeight;
    }
    var ele = document.getElementById('output')
    ele.scrollTop = ele.scrollHeight
}
function en(event) {
    var evt = evt ? evt : (window.event ? window.event : null);
    if (evt.keyCode == 13) {
        doSend()
    }
}
function Empty() {
    //$("#wsaddr").val("");//ws输入地址框
    //$("#message").val("");//websocket数据输入框
    $("#output").html("");//数据回显框
}

function download_ws_data() {
    let ws_data = $("#output").text();//数据回显区 text()是剔除html标签获取内容
    console.log("ws_data:", ws_data)
    var blob = new Blob([ws_data], {type: 'text/plain;charset=utf-8'})
    var url = window.URL.createObjectURL(blob)
    var link = document.createElement('a')
    link.href = url
    link.setAttribute('download', "ws_data.txt")
    link.click()
}
