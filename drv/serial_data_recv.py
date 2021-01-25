#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2021 2021-01-25 13:43 kalipy <kalipy@debian>
#
# Distributed under terms of the MIT license.

#----------------------------------------------------------------------------------------------------------
import eel
import json
import serial
from time import sleep
import threading
import my_global
#----------------------------------------------------------------------------------------------------------

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

#----------------------------------------------------------------------------------------------------------
# 串口数据接收线程的处理方法
def recv_thread_handler():
    while True:
        # 在线程内部使用while，必须使用sleep,不然其它线程可能会永远得不到调度(这个是python的线程的机制造成的)
        sleep(0.05)
        mutex = my_global.g_get_mutex()
        mutex.acquire()
        g_serial = my_global.g_get_serial()
        if not g_serial.isOpen() :
            break;
        
        data =recv(g_serial)
        if data != b'' :
            print("receive:", data.decode("utf-8"))
            #js_fun('python传过去的参数')
            eel.js_fun(data.decode("utf-8"))

        mutex.release()
    
    print("recv_thread_exited with 0")
    mutex.release()
#----------------------------------------------------------------------------------------------------------
