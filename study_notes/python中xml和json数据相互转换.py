#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2021 2021-01-22 11:59 kalipy <kalipy@debian>
#
# Distributed under terms of the MIT license.

# pip install xmltodict

import json
import xmltodict

b = """<?xml version="1.0" encoding="utf-8"?>
        <user_info>
                <id>12</id>
                <name>Tom</name>
                <age>12</age>
                <height>160</height>
                <score>100</score>
                <variance>12</variance>
        </user_info>
    """


# 定义xml转json的函数
def xml_to_json(xml_str):
    # parse是的xml解析器
    xml_parse = xmltodict.parse(xml_str)
    # json库dumps()是将dict转化成json格式,loads()是将json转化成dict格式。
    # dumps()方法的ident=1,格式化json
    json_str = json.dumps(xml_parse, indent=1)
    return json_str

c = {
        "user_info": {
            "id": 12,
            "name": "Tom",
            "age": 12,
            "height": 160,
            "score": 100,
            "variance": 12
        }
    }

# 汉字部分为功能控件(按钮)的名字
a = {
        #添加led控制的控件(按钮)
        "led控制:": {
            #在led控制控件(按钮)下添加二级控件(按钮)
            "led开": {
                #key:value的格式进行配置 例如\r\n{cmd=>"led_act"}\r\n中，key配置为cmd,value配置为led_act
                "cmd": "led_act",
                #key 和value之间的分隔符的格式配置 例如:\r\n{cmd=>"led_act"}\r\n中，分隔符为=>
                "key_value_separator": "=>",
                #参数之间的分隔符的格式配置 例如:\r\n{cmd=>"led_act",led0=>"on"}\r\n中，每一对key_value之间的分隔符为逗号
                "args_separator": ","
            },
            "led关": {
                "cmd": "led_off",
                "key_value_separator": "=>",
                "args_separator": ","
            }
        }
    }


# json转xml函数
def json_to_xml(json_str):
    # xmltodict库的unparse()json转xml
    # 参数pretty 是格式化xml
    xml_str = xmltodict.unparse(json_str, pretty=1)
    return xml_str


#直接从json文件中读取数据返回一个python dict,js调用py_func后，py_func把dict数据传递给前端js后，在html_js中刚好是object类型
component_config = json.load(open('config/component_config.json'));
print(json_to_xml(component_config))

f = open('config/component_config.xml', "r");
component_xml = f.read()
print("---------------------------config_xml_to_json----------------------------------")
print(xml_to_json(component_xml))

print("---------------------------xml_to_json----------------------------------")
print(xml_to_json(b))
print("---------------------------json_to_xml----------------------------------")
print(json_to_xml(c))
print("---------------------------json_to_xml----------------------------------")
print(json_to_xml(a))
