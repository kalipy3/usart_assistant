#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2021 2021-01-25 14:23 kalipy <kalipy@debian>
#
# Distributed under terms of the MIT license.

#----------------------------------------------------------------------------------------------------------
import eel
import json
import xmltodict
#----------------------------------------------------------------------------------------------------------

#----------------------------------------------------------------------------------------------------------
# 定义xml转json的函数
def xml_to_json(xml_str):
    # parse是的xml解析器
    xml_parse = xmltodict.parse(xml_str)
    # json库dumps()是将dict转化成json格式,loads()是将json转化成dict格式。
    # dumps()方法的ident=1,格式化json
    json_str = json.dumps(xml_parse, indent=1)
    return json_str
#----------------------------------------------------------------------------------------------------------

#----------------------------------------------------------------------------------------------------------
# 读取component_config.json中的功能控件配置
@eel.expose #把py_read_component_config暴露给js
def py_read_component_config():
    try:
        #直接从json文件中读取数据返回一个python dict,js调用py_func后，py_func把dict数据传递给前端js后，在html_js中刚好是object类型
        component_config_json = json.load(open('config/component_config.json'));#这里json路径是相对于main.py的
    except FileNotFoundError:
        print('component_config.json未找到，将使用component_config.xml文件')
        f = open('config/component_config.xml', "r");
        component_xml = f.read()
        component_config_json = xml_to_json(component_xml)
        f.close()
        #eval str转为dict
        component_config_json = eval(component_config_json)
        return component_config_json 

    print('component_config.json已存在，将默认使用component_config.json文件')
    return component_config_json
#----------------------------------------------------------------------------------------------------------

#----------------------------------------------------------------------------------------------------------
# 写component_config.json中的功能控件配置
@eel.expose #把py_write_component_config暴露给js
def py_write_component_config(res_from_js):
    print(res_from_js)
    with open('config/component_config.json', 'w') as fp:
        fp.write(json.dumps(res_from_js,indent=4,ensure_ascii=False))
#----------------------------------------------------------------------------------------------------------
