#### 说明

* 一款嵌入式调试助手，支持esp8266,nb-iot等常见串口命令类模块的调试，支持自定义命令和功能(从json文件中配置或可视化编辑),方便嵌入式开发人员进行串口调试
* 支持websocket的调试
* 支持http接口的调试
* 调试信息支持下载为txt文件

### 演示

#### 串口调试模块

左侧菜单项和功能的命令及参数从json配置文件中获取并动态生成:

    more config/component_config.json 
    {
        "终端观察:": {
            "终端ID": {
                "cmd": "id?"
            },
            "链路信息": {
                "cmd": "link?"
            },
            "诊断信号状态": {
                "cmd": "fig?"
            },
            "诊断信息": {
                "cmd": "fault?"
            },
            "诊断结果": {
                "cmd": "diag?"
            },
            "当前时间": {
                "cmd": "time?"
            },
            "异常记录": {
                "cmd": "ab?"
            }
        },
        "控制:": {
            "开启调试信息": {
                "cmd": "debug=>1"
            },
            "关闭调试信息": {
                "cmd": "debug=>0"
            },
            "命令携带参数测试": {
                "cmd": "cmd_name",
                "input_args": "args1/ms, args2/mg"
            }
        },
        "NB-iot:": {
            "单条命令测试:": {
                "模块重启": {
                    "cmd": "AT+NRB"
                },
                "设置为全功率": {
                    "cmd": "AT+CFUN=1"
                },
                "设置为最小功耗": {
                    "cmd": "AT+CFUN=0"
                },
                "查询当前功耗级别": {
                    "cmd": "AT+CFUN?"
                },
                "设置错误指示器": {
                    "cmd": "AT+CMEE=1"
                },
                "失能华为云平台": {
                    "cmd": "AT+QREGSWT=2"
                },
                "附着网络": {
                    "cmd": "AT+CGATT=1"
                },
                "获取附着状态": {
                    "cmd": "AT+CGATT?"
                },
                "清除载波频点号": {
                    "cmd": "AT+NCSEARFCN"
                },
                "设置消息指示器": {
                    "cmd": "AT+NSONMI=2"
                },
                "获取信号质量": {
                    "cmd": "AT+CSQ"
                },
                "获取IMEI": {
                    "cmd": "AT+CGSN=1"
                },
                "获取模块IP": {
                    "cmd": "AT+CGPADDR"
                },
                "创建TCP套接字": {
                    "cmd": "AT+NSOCR=STREAM,6,8888"
                }
            },
            "连接服务器测试:": {
                "TCP连接测试": {
                    "cmd": ""
                },
                "UDP连接测试": {
                    "cmd": "AT+CFUN?##AT+CIMI##AT+CSQ##AT+CEREG
    ?##AT+CGPADDR##AT+NSOCR=DGRAM,17,8888,1"
                }
            },
            "数据收发测试:": {
                "发送测试": {
                    "cmd": "AT+NSOST=1,123.57.44.108,8888,2,ABC
    D"
                },
                "接收测试": {
                    "cmd": "AT+NSORF=1,256"
                }
            }
        }
    }

![Image](./img/image_2021-09-19-14-30-01.png)

左侧菜单项和功能的命令和参数的可视化配置:

![Image](./img/image_2021-09-19-14-08-18.png)

开发板串口回显内容保存下载:

![Image](./img/image_2021-09-19-14-13-49.png)

![Image](./img/image_2021-09-19-14-14-32.png)

#### websocket调试模块

![Image](./img/image_2021-09-19-14-15-52.png)

#### http接口调试模块(用的github上的开源项目)

![Image](./img/image_2021-09-19-14-17-07.png)
