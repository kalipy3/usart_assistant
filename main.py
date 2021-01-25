#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2021 2021-01-19 11:38 kalipy <kalipy@debian>
#
# Distributed under terms of the MIT license.
import eel
import sys
# 因为要导入其它文件夹下的模块，所以需要使用sys
sys.path.append("drv");
import my_global
import config
import serial_data_send
import serial_data_recv
import serial_port_control

# 定义html文件所在文件夹名称
eel.init('view')

#初始化全局变量
my_global.init()

# 启动的函数调用放在最后,port=0表示使用随机端口,size=(宽,高)
eel.start('index.html', port=0, size=(600,300))
