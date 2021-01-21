#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2021 2021-01-19 11:38 kalipy <kalipy@debian>
#
# Distributed under terms of the MIT license.
import eel
import json
import serial
from time import sleep
import serial.tools.list_ports
import threading

# 定义html文件所在文件夹名称
eel.init('web')



#----------------------------------------------------------------------------------------------------------
g_serial = ""
mutex = threading.Lock()
#----------------------------------------------------------------------------------------------------------
@eel.expose # 把py_send_data暴露给js
def py_send_data(res_from_js):#res_from_js是js返回过来的参数
    print(res_from_js)
    print(type(res_from_js))
    #res_from_js = json.loads(res_from_js)
    #print(res_from_js)
    #print(type(res_from_js))
    #for key in res_from_js :
    #    print(key)
    #    print(res_from_js[key])
    #    print(type(key))
    g_serial.write((res_from_js).encode("gbk"))
#----------------------------------------------------------------------------------------------------------
# 接收一帧数据
def recv(serial):
    while True:
        # 请不要用read_all(),这个函数接收数据还是会断断续续，即不是一个完整的帧数据
        data = serial.readall()
        #sleep(0.5)
        if data == '':
            continue
        else:
            break
    return data
#----------------------------------------------------------------------------------------------------------
def recv_thread_handler(g_serial):
    while True:
        sleep(0.05)
        mutex.acquire()
        if not g_serial.isOpen() :
            break;
        
        print("---------")
        #g_serial.write(("gggggqqqqq_hhhhhhhhh_kkkkkkk_ooooooooo_cccccccccccccc_mmmmmmmm_nnnnnnnnnn").encode("gbk"))

        data =recv(g_serial)
        if data != b'' :
            print("receive:", data.decode("utf-8"))
            #js_return = eel.js_fun(data.decode("gbk"))
            js_return = eel.js_fun(data.decode("utf-8"))
            #js_return = eel.js_fun('python传过去的参数')
            #print("js_fun call ended---------")

        mutex.release()
    
    print("recv_thread_exited with 0")
    mutex.release()
#----------------------------------------------------------------------------------------------------------

# 获取所有串口
@eel.expose # 把py_get_all_port暴露给js
def py_get_all_port():
    ports = []
    port_list = list(serial.tools.list_ports.comports())
    if len(port_list) == 0:
        print('找不到串口')
    else:
        for i in range(0,len(port_list)):
            ports.append(port_list[i].device)

    return ports 


#----------------------------------------------------------------------------------------------------------

# 打开串口
@eel.expose #把py_open_port暴露给js
def py_open_port(res_from_js): #res_from_js是js返回过来的参数
    print(res_from_js)
    #字符串转为dict
    res_from_js = json.loads(res_from_js)
    #取出dict对应key的value
    usart_name = res_from_js['usart_name']
    baud_rate = res_from_js['baud_rate']
    global g_serial
    g_serial = serial.Serial(usart_name,baud_rate, timeout=0.5)
    if g_serial.isOpen() :
        print("open serial port success")
        t1 = threading.Thread(target=recv_thread_handler, args=(g_serial,))
        t1.start()
    else :
        print("open serial port failed")

#----------------------------------------------------------------------------------------------------------

@eel.expose #把py_close_port暴露给js
# 关闭串口
def py_close_port():
    global g_serial
    mutex.acquire()
    g_serial.close()
    mutex.release()
    print("port closed")

#----------------------------------------------------------------------------------------------------------

# 启动的函数调用放在最后,port=0表示使用随机端口,size=(宽,高)
eel.start('index.html', port=0, size=(600,300))
