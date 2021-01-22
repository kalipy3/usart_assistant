#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2021 2021-01-22 13:16 kalipy <kalipy@debian>
#
# Distributed under terms of the MIT license.
import json;
# json库dumps()是将dict转化成json格式,loads()是将json转化成dict格式。

# dict
data1 = {
           'name' : 'jack',
            'age' : 20,
            'like': ('sing','dance','swim'),
            'score': {'chinese':80,'math':60,'english':99},
            'love': None
}

#把python数据data1写入json文件中
json.dump(data1, open('jack.json', "w"));

#直接从json文件中读取数据返回一个python dict,js调用py_func后，py_func把dict数据传递给前端js后，在html_js中刚好是object类型
data2 = json.load(open('usart_config.json'));
print(data2);
print(type(data2));

#data3 = json.dumps(data2);
#print(data3);
#print(type(data3));
