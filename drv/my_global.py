#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2021 2021-01-25 12:05 kalipy <kalipy@debian>
#
# Distributed under terms of the MIT license.
import threading

def init():
    global g_serial
    g_serial = "this is g_serial init value"
    global g_mutex
    g_mutex = threading.Lock()
 
def g_set_serial(serial):
    # 在函数内部使用外部全局变量，要用global说明
    global g_serial
    g_serial = serial
 
def g_get_serial():
    # 在函数内部使用外部全局变量，要用global说明
    global g_serial
    return g_serial

def g_get_mutex():
    # 在函数内部使用外部全局变量，要用global说明
    global g_mutex
    return g_mutex
