#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2021 2021-01-25 12:55 kalipy <kalipy@debian>
#
# Distributed under terms of the MIT license.

import eel
import my_global

# 向串口发送数据
@eel.expose # 把py_send_data暴露给js
def py_send_data(res_from_js):#res_from_js是js返回过来的参数
    print(res_from_js)
    print(type(res_from_js))
    
    g_serial = my_global.g_get_serial()
    g_serial.write((res_from_js).encode("gbk"))
