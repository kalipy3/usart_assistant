#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2021 2021-01-25 13:51 kalipy <kalipy@debian>
#
# Distributed under terms of the MIT license.

#----------------------------------------------------------------------------------------------------------
import eel
import json
import serial
from time import sleep
import serial.tools.list_ports
import threading
import my_global
import serial_data_recv 
#----------------------------------------------------------------------------------------------------------

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
    # 请注意:为了不与import serial中的serial命名冲突，这里写作g_serial
    g_serial = serial.Serial(usart_name,baud_rate, timeout=0.5)
    my_global.g_set_serial(g_serial)
    if g_serial.isOpen() :
        print("open serial port success")
        t1 = threading.Thread(target=serial_data_recv.recv_thread_handler)
        t1.start()
    else :
        print("open serial port failed")
#----------------------------------------------------------------------------------------------------------

#----------------------------------------------------------------------------------------------------------
@eel.expose #把py_close_port暴露给js
# 关闭串口
def py_close_port():
    # 请注意:为了不与import serial中的serial命名冲突，这里写作g_serial
    g_serial = my_global.g_get_serial()
    g_mutex = my_global.g_get_mutex()
    g_mutex.acquire()
    g_serial.close()
    g_mutex.release()
    print("port closed")
#----------------------------------------------------------------------------------------------------------
