export default ([
    {
        name: "Display",
        icon: `/reference/matrix.png`,
        color: "#e64c3c",
        description: "บล็อกสั่งงานแอลอีดี 16x8",
        blocks: [
            {
                id: "display_custom",
                name: "display show icon",
                description: "สั่งให้แอลอีดี 16x8 แสดงผลรูปภาพที่กำหนด",
                python: {
                    header: "import display",
                    pattern: "display.raw(data)"
                },
                args: [
                    {
                        name: "data",
                        type: "bytes",
                        description: "ข้อมูลที่ต้องการให้แสดงผล"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลรูปหัวใจบนแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                                <block type="display_custom">
                                    <field name="value">"\\\\x00\\\\x00\\\\x00\\\\x00\\\\x38\\\\x44\\\\x42\\\\x21\\\\x42\\\\x44\\\\x38\\\\x00\\\\x00\\\\x00\\\\x00\\\\x00"</field>
                                </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "display_show",
                name: "display show",
                description: "สั่งให้แอลอีดี 16x8 แสดงผลข้อความ-ตัวเลข 1 ถึง 2 ตัว",
                python: {
                    header: "import display",
                    pattern: "display.show(value)"
                },
                args: [
                    {
                        name: "value",
                        type: "text",
                        description: "ตัวเลข-ข้อความที่ต้องการให้แสดงผล",
                        shadow: "12"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลตัวเลข 55 บนจอแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                            <block type="display_show">
                                <value name="value">
                                    <shadow type="text">
                                        <field name="TEXT">55</field>
                                    </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
                
            },
            {
                id: "display_scroll",
                name: "display scroll",
                description: "สั่งให้แอลอีดี 16x8 แสดงผลข้อความ-ตัวเลขแบบเลื่อน",
                python: {
                    header: "import display",
                    pattern: "display.scroll(value)"
                },
                args: [
                    {
                        name: "value",
                        type: "text",
                        description: "ตัวเลข-ข้อความที่ต้องการให้แสดงผล",
                        shadow: "Hello!"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลข้อความ Hello แบบเลื่อนบนจอแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                            <block type="display_scroll">
                                <value name="value">
                                    <shadow type="text">
                                        <field name="TEXT">Hello!</field>
                                    </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
                
            },
            {
                id: "display_show4x8",
                name: "display show number",
                description: "สั่งให้แอลอีดี 16x8 แสดงผลตัวเลข 1 ถึง 4 ตัว",
                python: {
                    header: "import display",
                    pattern: "display.show4x8(value)"
                },
                args: [
                    {
                        name: "value",
                        type: "number",
                        description: "ตัวเลขที่ต้องการให้แสดงผล",
                        shadow: "1234"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลตัวเลข 9876 บนจอแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                            <block type="display_show4x8">
                                <value name="value">
                                    <shadow type="math_number">
                                        <field name="NUM">9876</field>
                                    </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
                
            },
            {
                id: "display_left_show",
                name: "display left show number",
                description: "สั่งให้แอลอีดี 16x8 แสดงผลตัวเลข 1 ถึง 2 ตัว ที่ด้านซ้าย",
                python: {
                    header: "import display",
                    pattern: "display.left(value)"
                },
                args: [
                    {
                        name: "value",
                        type: "number",
                        description: "ตัวเลขที่ต้องการให้แสดงผล",
                        shadow: "12"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลตัวเลข 12 บนจอแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                            <block type="display_left_show">
                                <value name="value">
                                    <shadow type="math_number">
                                        <field name="NUM">12</field>
                                    </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
                
            },
            {
                id: "display_right_show",
                name: "display right show number",
                description: "สั่งให้แอลอีดี 16x8 แสดงผลตัวเลข 1 ถึง 2 ตัว ที่ด้านขวา",
                python: {
                    header: "import display",
                    pattern: "display.left(value)"
                },
                args: [
                    {
                        name: "value",
                        type: "number",
                        description: "ตัวเลขที่ต้องการให้แสดงผล",
                        shadow: "12"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลตัวเลข 12 บนจอแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                            <block type="display_right_show">
                                <value name="value">
                                    <shadow type="math_number">
                                        <field name="NUM">12</field>
                                    </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
                
            },
            {
                id: "display_plot",
                name: "display plot",
                description: "สั่งให้แอลอีดี 16x8 แสดงผลข้อมูลแบบกราฟ",
                python: {
                    header: "import display",
                    pattern: "display.plot(value)"
                },
                args: [
                    {
                        name: "value",
                        type: "number",
                        description: "ตัวเลขข้อมูลที่ต้องการให้แสดงผล ใส่ได้ 0 ถึง 8",
                        shadow: "0"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลข้อมูล 5 แบบกราฟบนจอแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                            <block type="display_plot">
                                <value name="value">
                                    <shadow type="math_number">
                                        <field name="NUM">5</field>
                                    </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
                
            },
            {
                id: "display_clear",
                name: "display clear",
                description: "ล้างการแสดงผลบนแอลอีดี 16x8",
                python: {
                    header: "import display",
                    pattern: "display.clear()"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลรูปหัวใจกระพริบทุก ๆ 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                                <block type="controls_forever">
                                    <statement name="block">
                                        <block type="display_custom" id="Z8zY^hdQ@q3g{/0z]~*k">
                                            <field name="value">"\\\\x00\\\\x00\\\\x00\\\\x00\\\\x38\\\\x44\\\\x42\\\\x21\\\\x42\\\\x44\\\\x38\\\\x00\\\\x00\\\\x00\\\\x00\\\\x00"</field>
                                            <next>
                                                <block type="controls_wait">
                                                    <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">1</field>
                                                        </shadow>
                                                    </value>
                                                    <next>
                                                        <block type="display_clear">
                                                            <next>
                                                                <block type="controls_wait">
                                                                    <value name="time">
                                                                        <shadow type="math_number">
                                                                            <field name="NUM">1</field>
                                                                        </shadow>
                                                                    </value>
                                                                </block>
                                                            </next>
                                                        </block>
                                                    </next>
                                                </block>
                                            </next>
                                        </block>
                                    </statement>
                                </block>
                            `
                        }
                    }
                ]
            }
        ]
    },
    {
        name: "Input",
        icon: `/reference/filter.png`,
        color: "#fbbd5e",
        description: "รับค่าจากสวิตช์ เซ็นเซอร์ และอุปกรณ์ภายนอก",
        blocks: [
            {
                id: "switch_on_press",
                name: "switch ... on press",
                description: "กำหนดคำสั่งที่จะถูกเรียกเมื่อกดสวิตช์ที่กำหนด",
                python: {
                    header: "import switch",
                    pattern: "switch.press(pin, callback)"
                },
                args: [
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "สวิตช์ที่กำหนดให้โปรแกรมทำงานเมื่อกด",
                        value: [
                            {
                                label: "S1",
                                value: "switch.S1",
                                description: "สวิตช์ S1 บนบอร์ด KidBright32"
                            },
                            {
                                label: "S2",
                                value: "switch.S2",
                                description: "สวิตช์ S2 บนบอร์ด KidBright32"
                            }
                        ]
                    }, 
                    {
                        name: "callback",
                        type: "function",
                        description: "ชื่อฟังก์ชั่นที่ต้องการเรียกให้ทำงานเมื่อกดปล่อยสวิตช์ที่กำหนด"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลรูปหัวใจบนจอแอลอีดี 16x8 เมื่อกดสวิตช์ S1",
                        code: {
                            type: "block",
                            xml: `
                                <block type="switch_on_press">
                                    <field name="pin">S1</field>
                                    <statement name="callback">
                                        <block type="display_custom">
                                            <field name="value">"\\\\x00\\\\x00\\\\x00\\\\x00\\\\x38\\\\x44\\\\x42\\\\x21\\\\x42\\\\x44\\\\x38\\\\x00\\\\x00\\\\x00\\\\x00\\\\x00"</field>
                                        </block>
                                    </statement>
                                </block>
                            `
                        }
                    }
                ]
                
            },
            {
                id: "switch_on_release",
                name: "switch ... on release",
                description: "กำหนดคำสั่งที่จะถูกเรียกเมื่อปล่อยสวิตช์ที่กำหนด",
                python: {
                    header: "import switch",
                    pattern: "switch.release(pin, callback)"
                },
                args: [
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "สวิตช์ที่กำหนดให้โปรแกรมทำงานเมื่อปล่อย",
                        value: [
                            {
                                label: "S1",
                                value: "switch.S1",
                                description: "สวิตช์ S1 บนบอร์ด KidBright32"
                            },
                            {
                                label: "S2",
                                value: "switch.S2",
                                description: "สวิตช์ S2 บนบอร์ด KidBright32"
                            }
                        ]
                    }, 
                    {
                        name: "callback",
                        type: "function",
                        description: "ชื่อฟังก์ชั่นที่ต้องการเรียกให้ทำงานเมื่อกดปล่อยสวิตช์ที่กำหนด"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลรูปหัวใจบนจอแอลอีดี 16x8 เมื่อปล่อยสวิตช์ S1",
                        code: {
                            type: "block",
                            xml: `
                                <block type="switch_on_release">
                                    <field name="pin">S1</field>
                                    <statement name="callback">
                                        <block type="display_custom">
                                            <field name="value">"\\\\x00\\\\x00\\\\x00\\\\x00\\\\x38\\\\x44\\\\x42\\\\x21\\\\x42\\\\x44\\\\x38\\\\x00\\\\x00\\\\x00\\\\x00\\\\x00"</field>
                                        </block>
                                    </statement>
                                </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "switch_is_press",
                name: "switch ... is press ?",
                description: "ตรวจสอบว่าสวิตช์ที่กำหนดถูกกดหรือไม่",
                python: {
                    header: "import switch",
                    pattern: "switch.value(pin) == 1"
                },
                args: [
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "สวิตช์ที่ต้องการตรวจสอบ",
                        value: [
                            {
                                label: "S1",
                                value: "switch.S1",
                                description: "สวิตช์ S1 บนบอร์ด KidBright32"
                            },
                            {
                                label: "S2",
                                value: "switch.S2",
                                description: "สวิตช์ S2 บนบอร์ด KidBright32"
                            }
                        ]
                    }
                ],
                return: {
                    type: "boolean",
                    description: "สถานะของสวิตช์",
                    value: [
                        {
                            label: "True",
                            description: "สวิตช์ที่กำหนดกำลังถูกกด"
                        },
                        {
                            label: "False",
                            description: "สวิตช์ที่กำหนดไม่ถูกกด"
                        }
                    ]
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลรูปหัวใจบนจอแอลอีดี 16x8 เมื่อกดสวิตช์ S1 และล้างการแสดงผลเมื่อปล่อยสวิตช์ หน่วงเวลาทำงาน 0.05 วินาที",
                        code: {
                            type: "block",
                            xml: `
                                <block type="controls_forever">
                                    <statement name="block">
                                        <block type="controls_if">
                                            <mutation else="1"></mutation>
                                            <value name="IF0">
                                                <block type="switch_is_press">
                                                    <field name="n">S1</field>
                                                </block>
                                            </value>
                                            <statement name="DO0">
                                                <block type="display_custom">
                                                    <field name="value">"\\\\x00\\\\x00\\\\x00\\\\x00\\\\x38\\\\x44\\\\x42\\\\x21\\\\x42\\\\x44\\\\x38\\\\x00\\\\x00\\\\x00\\\\x00\\\\x00"</field>
                                                </block>
                                            </statement>
                                            <statement name="ELSE">
                                                <block type="display_clear"></block>
                                            </statement>
                                            <next>
                                                <block type="controls_wait">
                                                    <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">0.05</field>
                                                        </shadow>
                                                    </value>
                                                </block>
                                            </next>
                                        </block>
                                    </statement>
                                </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "switch_is_release",
                name: "switch ... is release ?",
                description: "ตรวจสอบว่าสวิตช์ที่กำหนดปล่อย (ไม่ถูกกด) อยู่หรือไม่",
                python: {
                    header: "import switch",
                    pattern: "switch.value(pin) == 0"
                },
                args: [
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "สวิตช์ที่ต้องการตรวจสอบ",
                        value: [
                            {
                                label: "S1",
                                value: "switch.S1",
                                description: "สวิตช์ S1 บนบอร์ด KidBright32"
                            },
                            {
                                label: "S2",
                                value: "switch.S2",
                                description: "สวิตช์ S2 บนบอร์ด KidBright32"
                            }
                        ]
                    }
                ],
                return: {
                    type: "boolean",
                    description: "สถานะของสวิตช์",
                    value: [
                        {
                            label: "True",
                            description: "สวิตช์ที่กำหนดไม่ถูกกด"
                        },
                        {
                            label: "False",
                            description: "สวิตช์ที่กำหนดกำลังถูกกด"
                        }
                    ]
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลรูปหัวใจบนจอแอลอีดี 16x8 เมื่อปล่อยสวิตช์ S1 และล้างการแสดงผลเมื่อกดสวิตช์ หน่วงเวลาทำงาน 0.05 วินาที",
                        code: {
                            type: "block",
                            xml: `
                                <block type="controls_forever">
                                    <statement name="block">
                                        <block type="controls_if">
                                            <mutation else="1"></mutation>
                                            <value name="IF0">
                                                <block type="switch_is_release">
                                                    <field name="n">S1</field>
                                                </block>
                                            </value>
                                            <statement name="DO0">
                                                <block type="display_custom">
                                                    <field name="value">"\\\\x00\\\\x00\\\\x00\\\\x00\\\\x38\\\\x44\\\\x42\\\\x21\\\\x42\\\\x44\\\\x38\\\\x00\\\\x00\\\\x00\\\\x00\\\\x00"</field>
                                                </block>
                                            </statement>
                                            <statement name="ELSE">
                                                <block type="display_clear"></block>
                                            </statement>
                                            <next>
                                                <block type="controls_wait">
                                                    <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">0.05</field>
                                                        </shadow>
                                                    </value>
                                                </block>
                                            </next>
                                        </block>
                                    </statement>
                                </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "switch_get_value",
                name: "switch ... get value",
                description: "อ่านค่าสถานะปัจจุบันของสวิตช์ที่กำหนด",
                python: {
                    header: "import switch",
                    pattern: "switch.value(pin)"
                },
                args: [
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "สวิตช์ที่ต้องการอ่านค่าสถานะ",
                        value: [
                            {
                                label: "S1",
                                value: "switch.S1",
                                description: "สวิตช์ S1 บนบอร์ด KidBright32"
                            },
                            {
                                label: "S2",
                                value: "switch.S2",
                                description: "สวิตช์ S2 บนบอร์ด KidBright32"
                            }
                        ]
                    }
                ],
                return: {
                    type: "number",
                    description: "สถานะของสวิตช์",
                    value: [
                        {
                            label: "0",
                            description: "สวิตช์ที่กำหนดไม่ถูกกด"
                        },
                        {
                            label: "1",
                            description: "สวิตช์ที่กำหนดกำลังถูกกด"
                        }
                    ]
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าสวิตช์ S1 บนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                                <block type="controls_forever">
                                    <statement name="block">
                                    <block type="display_show">
                                        <value name="value">
                                            <shadow type="text">
                                                <field name="TEXT">12</field>
                                            </shadow>
                                            <block type="switch_get_value">
                                                <field name="n">S1</field>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="controls_wait">
                                                <value name="time">
                                                    <shadow type="math_number">
                                                        <field name="NUM">0.1</field>
                                                    </shadow>
                                                </value>
                                            </block>
                                        </next>
                                    </block>
                                    </statement>
                                </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "sensor_light",
                name: "light level (%)",
                description: "อ่านค่าความเข้มแสงที่วัดได้จากเซ็นเซอร์บนบอร์ด KidBright32",
                python: {
                    header: "import sensor",
                    pattern: "sensor.light()"
                },
                return: {
                    type: "number",
                    description: "ค่าความเข้มแสงที่วัดได้ 0% ถึง 100%",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลความเข้มแสดงที่วัดได้บนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                                <block type="controls_forever">
                                    <statement name="block">
                                        <block type="display_show4x8">
                                            <value name="value">
                                                <shadow type="math_number">
                                                    <field name="NUM">1234</field>
                                                </shadow>
                                                <block type="sensor_light"></block>
                                            </value>
                                            <next>
                                                <block type="controls_wait">
                                                    <value name="time">
                                                    <shadow type="math_number">
                                                        <field name="NUM">0.1</field>
                                                    </shadow>
                                                    </value>
                                                </block>
                                            </next>
                                        </block>
                                    </statement>
                                </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "sensor_temp",
                name: "temperature (°C)",
                description: "อ่านค่าอุณหภูมิที่วัดได้จากเซ็นเซอร์บนบอร์ด KidBright32",
                python: {
                    header: "import sensor",
                    pattern: "sensor.temperature()"
                },
                return: {
                    type: "number",
                    description: "ค่าอุณหภูมิที่วัดได้ในหน่วยองศาเซลเซียส",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าอุณหภูมิที่วัดได้บนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                                <block type="controls_forever">
                                    <statement name="block">
                                        <block type="display_show4x8">
                                            <value name="value">
                                                <shadow type="math_number">
                                                    <field name="NUM">1234</field>
                                                </shadow>
                                                <block type="sensor_temp"></block>
                                            </value>
                                            <next>
                                                <block type="controls_wait">
                                                    <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">0.1</field>
                                                        </shadow>
                                                    </value>
                                                </block>
                                            </next>
                                        </block>
                                    </statement>
                                </block>
                            `
                        }
                    }
                ]
            },

            {
                id: "imu_update",
                name: "IMU update",
                description: "อัพเดทค่าที่วัดได้จากเซ็นเซอร์ IMU (เฉพาะ KidBright32i/KidBright32 V1.6 by Gravitech",
                python: {
                    header: "import imu",
                    pattern: "imu.update()"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงค่าการเอียงบอร์ดแกน pitch บนแอลอีดี 16x8 อัพเดทข้อมูลทุก ๆ 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="imu_update">
                                    <next>
                                    <block type="display_show4x8">
                                        <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="imu_rotation">
                                            <field name="axis">1</field>
                                        </block>
                                        </value>
                                        <next>
                                        <block type="controls_wait">
                                            <value name="time">
                                            <shadow type="math_number">
                                                <field name="NUM">0.1</field>
                                            </shadow>
                                            </value>
                                        </block>
                                        </next>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "imu_is_gesture",
                name: "is ... gesture",
                description: "ตรวจสอบว่ากำลังเกิดเหตุการณ์ที่กำหนดหรือไม่ (เฉพาะ KidBright32i/KidBright32 V1.6 by Gravitech",
                python: {
                    header: "import imu",
                    pattern: "imu.is_gesture(event)"
                },
                args: [
                    {
                        name: "event",
                        type: "dropdown",
                        description: "เหตุการณ์ที่ต้องการตรวจสอบ",
                        value: [
                            {
                                label: "shake",
                                value: "imu.EVENT_SHAKE",
                                description: "เหตุการณ์เขย่าบอร์ด"
                            },
                            {
                                label: "board up",
                                value: "imu.EVENT_BOARD_UP",
                                description: "เหตุการณ์ยกบอร์ดขึ้น"
                            },
                            {
                                label: "board down",
                                value: "imu.EVENT_BOARD_DOWN",
                                description: "เหตุการณ์ยกบอร์ดหันลง"
                            },
                            {
                                label: "screen up",
                                value: "imu.EVENT_SCREEN_UP",
                                description: "เหตุการณ์วางบอร์ดหงาย"
                            },
                            {
                                label: "screen down",
                                value: "imu.EVENT_SCREEN_DOWN",
                                description: "เหตุการณ์คว่ำ"
                            },
                            {
                                label: "tilt left",
                                value: "imu.EVENT_TILT_LEFT",
                                description: "เหตุการณ์เอียงบอร์ดไปทางซ้าย"
                            },
                            {
                                label: "tilt right",
                                value: "imu.EVENT_TILT_RIGHT",
                                description: "เหตุการณ์เอียงบอร์ดไปทางขวา"
                            },
                            {
                                label: "free fall",
                                value: "imu.EVENT_FREE_FALL",
                                description: "เหตุการณ์ตกอย่างอิสระ"
                            },
                            {
                                label: "3g",
                                value: "imu.EVENT_3G",
                                description: "เหตุการณ์ความเร่งสูงกว่า 3G"
                            },
                            {
                                label: "6g",
                                value: "imu.EVENT_6G",
                                description: "เหตุการณ์ความเร่งสูงกว่า 6G"
                            },
                            {
                                label: "8g",
                                value: "imu.EVENT_8G",
                                description: "เหตุการณ์ความเร่งสูงกว่า 8G"
                            },
                        ]
                    }
                ],
                return: {
                    type: "boolean",
                    description: "สถานะของเหตุการณ์ที่ต้องการตรวจสอบ",
                    value: [
                        {
                            label: "True",
                            description: "กำลังเกิดเหตุการณ์ขึ้น"
                        },
                        {
                            label: "False",
                            description: "ไม่เกิดเหตุการณ์"
                        }
                    ]
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลรูปยิ้มบนจอแอลอีดี 16x8 เมื่อเขย่าบอร์ด หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="imu_update">
                                        <next>
                                            <block type="controls_if">
                                                <mutation else="1"></mutation>
                                                <value name="IF0">
                                                    <block type="imu_is_gesture">
                                                        <field name="gesture">EVENT_SHAKE</field>
                                                    </block>
                                                </value>
                                                <statement name="DO0">
                                                    <block type="display_custom">
                                                        <field name="value">"\\\\x00\\\\x00\\\\x00\\\\x06\\\\x01\\\\x71\\\\x71\\\\x01\\\\x01\\\\x71\\\\x71\\\\x01\\\\x06\\\\x00\\\\x00\\\\x00"</field>
                                                    </block>
                                                </statement>
                                                <statement name="ELSE">
                                                    <block type="display_clear"></block>
                                                </statement>
                                                <next>
                                                    <block type="controls_wait">
                                                        <value name="time">
                                                            <shadow type="math_number">
                                                                <field name="NUM">0.1</field>
                                                            </shadow>
                                                        </value>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "imu_acceleration",
                name: "acceleration (mg)",
                description: "อ่านค่าความเร่งที่วัดได้จากเซ็นเซอร์ IMU แกนที่กำหนด (เฉพาะ KidBright32i/KidBright32 V1.6 by Gravitech",
                python: {
                    header: "import imu",
                    pattern: "imu.acc[axis]"
                },
                args: [
                    {
                        name: "axis",
                        type: "dropdown",
                        description: "แกนที่ต้องการอ่านค่า",
                        value: [
                            {
                                label: "x",
                                value: "0",
                                description: "อ่านค่าความเร่งที่แกน x"
                            },
                            {
                                label: "y",
                                value: "1",
                                description: "อ่านค่าความเร่งที่แกน y"
                            },
                            {
                                label: "z",
                                value: "2",
                                description: "อ่านค่าความเร่งที่แกน z"
                            },
                            {
                                label: "strength",
                                value: "3",
                                description: "อ่านค่าความเร่ง strength"
                            }
                        ]
                    }
                ],
                return: {
                    type: "number",
                    description: "ค่าความเร่งที่วัดได้ในหน่วยมิลลิ g",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าความเร่งแกน x ผลบนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="imu_update">
                                    <next>
                                    <block type="display_show4x8">
                                        <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="imu_acceleration">
                                            <field name="axis">0</field>
                                        </block>
                                        </value>
                                        <next>
                                        <block type="controls_wait">
                                            <value name="time">
                                            <shadow type="math_number">
                                                <field name="NUM">0.1</field>
                                            </shadow>
                                            </value>
                                        </block>
                                        </next>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "imu_rotation",
                name: "rotation (°)",
                description: "อ่านค่าการเอียงบอร์ดตามแกนที่กำหนด (เฉพาะ KidBright32i/KidBright32 V1.6 by Gravitech",
                python: {
                    header: "import imu",
                    pattern: "imu.rotation()[axis]"
                },
                args: [
                    {
                        name: "axis",
                        type: "dropdown",
                        description: "แกนที่ต้องการอ่านค่า",
                        value: [
                            {
                                label: "pitch",
                                value: "1",
                                description: "อ่านค่าการเอียงบอร์ดที่แกน pitch"
                            },
                            {
                                label: "roll",
                                value: "0",
                                description: "อ่านค่าการเอียงบอร์ดที่แกน roll"
                            }
                        ]
                    }
                ],
                return: {
                    type: "number",
                    description: "ค่าการเอียงบอร์ดในหน่วยองศา",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าการเอียงบอร์ดแกน pitch ผลบนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="imu_update">
                                    <next>
                                    <block type="display_show4x8">
                                        <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="imu_rotation">
                                            <field name="axis">1</field>
                                        </block>
                                        </value>
                                        <next>
                                        <block type="controls_wait">
                                            <value name="time">
                                            <shadow type="math_number">
                                                <field name="NUM">0.1</field>
                                            </shadow>
                                            </value>
                                        </block>
                                        </next>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "imu_compass_heading",
                name: "compass heading (°)",
                description: "อ่านค่าองศาจากเข็มทิศดิจิทัล (เฉพาะ KidBright32i)",
                python: {
                    header: "import imu",
                    pattern: "imu.heading()"
                },
                return: {
                    type: "number",
                    description: "ทิศทางของบอร์ดในหน่วยองศา",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าจากเข็มทิศดิจิทัลบนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="imu_update">
                                        <next>
                                            <block type="display_show4x8">
                                                <value name="value">
                                                <shadow type="math_number">
                                                    <field name="NUM">1234</field>
                                                </shadow>
                                                <block type="imu_compass_heading"></block>
                                                </value>
                                                <next>
                                                <block type="controls_wait">
                                                    <value name="time">
                                                    <shadow type="math_number">
                                                        <field name="NUM">0.1</field>
                                                    </shadow>
                                                    </value>
                                                </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "imu_magnetic_force",
                name: "magnetic force (uT)",
                description: "อ่านค่าความเข้มสนามแม่เหล็กจากแกนที่กำหนด (เฉพาะ KidBright32i)",
                python: {
                    header: "import imu",
                    pattern: "imu.mag[axis]"
                },
                args: [
                    {
                        name: "axis",
                        type: "dropdown",
                        description: "แกนที่ต้องการอ่านค่า",
                        value: [
                            {
                                label: "x",
                                value: "0",
                                description: "อ่านค่าความเข้มสนามแม่เหล็กที่แกน x"
                            },
                            {
                                label: "y",
                                value: "1",
                                description: "อ่านค่าความเข้มสนามแม่เหล็กที่แกน y"
                            },
                            {
                                label: "z",
                                value: "2",
                                description: "อ่านค่าความเข้มสนามแม่เหล็กที่แกน z"
                            },
                            {
                                label: "strength",
                                value: "3",
                                description: "อ่านค่าความเข้มสนามแม่เหล็ก strength"
                            }
                        ]
                    }
                ],
                return: {
                    type: "number",
                    description: "ความเข้มสนามแม่เหล็กที่วัดได้ในหน่วยไมโครเทสลา (uT)",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าความเข้มสนามแม่เหล็กแกน x บนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="imu_update">
                                        <next>
                                            <block type="display_show4x8">
                                                <value name="value">
                                                    <shadow type="math_number">
                                                        <field name="NUM">1234</field>
                                                    </shadow>
                                                    <block type="imu_magnetic_force">
                                                        <field name="axis">0</field>
                                                    </block>
                                                </value>
                                                <next>
                                                    <block type="controls_wait">
                                                        <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">0.1</field>
                                                        </shadow>
                                                        </value>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "imu_calibrate_compass",
                name: "IMU calibrate compass",
                description: "ปรับจูนเซ็นเซอร์สนามแม่เหล็ก (เฉพาะ KidBright32i)",
                python: {
                    header: "import imu",
                    pattern: "imu.calibrate_compass()"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าจากเข็มทิศดิจิทัลบนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที เข้าโหมดปรับจูนก่อนเริ่มทำงาน",
                        code: {
                            type: "block",
                            xml: `
                            <block type="imu_calibrate_compass">
                                <next>
                                    <block type="controls_forever">
                                        <statement name="block">
                                            <block type="imu_update">
                                                <next>
                                                    <block type="display_show4x8">
                                                        <value name="value">
                                                        <shadow type="math_number">
                                                            <field name="NUM">1234</field>
                                                        </shadow>
                                                        <block type="imu_compass_heading"></block>
                                                        </value>
                                                        <next>
                                                        <block type="controls_wait">
                                                            <value name="time">
                                                            <shadow type="math_number">
                                                                <field name="NUM">0.1</field>
                                                            </shadow>
                                                            </value>
                                                        </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </statement>
                                    </block>
                                </next>
                            </block>
                            `
                        }
                    }
                ]
            },

            {
                id: "pin_digital_read",
                name: "digital read pin",
                description: "อ่านค่าดิจิทัลจากขาที่กำหนด",
                python: {
                    header: "from machine import Pin",
                    pattern: "Pin(pin, Pin.IN).value()"
                },
                args: [
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "ขาที่ต้องการอ่านค่า",
                        value: [
                            {
                                label: "IN1",
                                value: "32"
                            },
                            {
                                label: "IN2",
                                value: "33"
                            },
                            {
                                label: "IN3",
                                value: "34"
                            },
                            {
                                label: "IN4",
                                value: "35"
                            },
                            {
                                label: "23",
                                value: "23"
                            },
                            {
                                label: "29",
                                value: "29"
                            },
                            {
                                label: "18",
                                value: "18"
                            },
                            {
                                label: "VN",
                                value: "39"
                            }
                        ]
                    }
                ],
                return: {
                    type: "number",
                    description: "ค่าดิจิทัลที่อ่านได้",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าดิจิทัลขา IN4 ที่อ่านได้บนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="display_show">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="pin_digital_read">
                                            <field name="pin">35</field>
                                        </block>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">0.1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "pin_analog_read",
                name: "analog read pin",
                description: "อ่านค่าแอนะล็อกจากขาที่กำหนด",
                python: {
                    header: "from machine import Pin\nfrom machine import ADC",
                    function: `def adcRead(analog_pin):
  adc = ADC(Pin(analog_pin))
  adc.atten(ADC.ATTN_11DB)
  adc.width(ADC.WIDTH_12BIT)
  return adc.read()`,
                    pattern: "adcRead(pin)"
                },
                args: [
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "ขาที่ต้องการอ่านค่า",
                        value: [
                            {
                                label: "IN1",
                                value: "32"
                            },
                            {
                                label: "IN2",
                                value: "33"
                            },
                            {
                                label: "IN3",
                                value: "34"
                            },
                            {
                                label: "IN4",
                                value: "35"
                            },
                            {
                                label: "VN",
                                value: "39"
                            }
                        ]
                    }
                ],
                return: {
                    type: "number",
                    description: "ค่าแอนะล็อกที่อ่านได้ 0 ถึง 4095",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าแอนะล็อกขา IN4 ที่อ่านได้บนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="display_show4x8">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="pin_analog_read">
                                            <field name="pin">32</field>
                                        </block>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">0.1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
        ]
    },
    {
        name: "Output",
        icon: `/reference/usb.png`,
        color: "#fbbd5e",
        description: "ส่งเสียง สัญญาณ PWM และสัญญาณดิจิทัล",
        blocks: [
            {
                id: "buzzer_tone",
                name: "buzzer tone",
                description: "สร้างเสียงด้วยความถี่และความยาวที่กำหนด",
                python: {
                    header: "import buzzer",
                    pattern: "buzzer.tone(freq, duration)"
                },
                args: [
                    {
                        name: "freq",
                        type: "number",
                        description: "ความถี่เสียงที่ต้องการสร้าง ในหน่วย Hz",
                        shadow: "2000"
                    },
                    {
                        name: "duration",
                        type: "number",
                        description: "ระยะเวลาสร้างเสียงที่กำหนด ในหน่วยวินาที",
                        shadow: "1"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมสร้างเสียง 2kHz เป็นเวลา 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="buzzer_tone">
                                <value name="freq">
                                    <shadow type="math_number">
                                        <field name="NUM">2000</field>
                                    </shadow>
                                </value>
                                <value name="duration">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "buzzer_notes",
                name: "buzzer notes",
                description: "สร้างเสียงด้วยความถี่และความยาวที่กำหนด",
                python: {
                    header: "import buzzer",
                    pattern: "buzzer.notes(notes, duration)"
                },
                args: [
                    {
                        name: "notes",
                        type: "make_note",
                        description: "โน๊ตเสียง",
                    },
                    {
                        name: "duration",
                        type: "number",
                        description: "ความยาวเสียง",
                        shadow: "1"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมสร้างเสียงเพลง JingaBell",
                        code: {
                            type: "block",
                            xml: `
                            <block type="buzzer_notes">
                                <field name="duration">1 / 2</field>
                                <value name="notes">
                                    <block type="make_note">
                                        <field name="label">Jingle Bells</field>
                                        <field name="notes">E5 E5 E5 SIL E5 E5 E5 SIL E5 G5 C5 D5 E5 SIL F5 F5 SIL F5 F5 SIL F5 E5 E5 E5 E5 SIL E5 D5 D5 E5 D5 G5</field>
                                    </block>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "buzzer_volume",
                name: "buzzer set volume",
                description: "ตั้งค่าความดังเสียง",
                python: {
                    header: "import buzzer",
                    pattern: "buzzer.volume = level"
                },
                args: [
                    {
                        name: "level",
                        type: "number",
                        description: "ความดังของเสียง กำหนดได้ 0% ถึง 100%",
                        shadow: "50"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมตั้งค่าความดังเสียงเป็น 100% ก่อนสร้างเสียงเพลง JingaBell",
                        code: {
                            type: "block",
                            xml: `
                            <block type="buzzer_volume">
                                <value name="level">
                                    <shadow type="math_number">
                                    <field name="NUM">100</field>
                                    </shadow>
                                </value>
                                <next>
                                    <block type="buzzer_notes">
                                        <field name="duration">1 / 2</field>
                                        <value name="notes">
                                            <block type="make_note">
                                                <field name="label">Jingle Bells</field>
                                                <field name="notes">E5 E5 E5 SIL E5 E5 E5 SIL E5 G5 C5 D5 E5 SIL F5 F5 SIL F5 F5 SIL F5 E5 E5 E5 E5 SIL E5 D5 D5 E5 D5 G5</field>
                                            </block>
                                        </value>
                                    </block>
                                </next>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "usb_on",
                name: "USB set ON",
                description: "สั่งให้อุปกรณ์ที่ต่อช่อง USB ทำงาน",
                python: {
                    header: "import usb",
                    pattern: "usb.on()"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมสั่งให้แอลอีดีที่ต่อช่อง USB กระพริบทุก ๆ ครึ่งวินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="usb_on">
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">0.5</field>
                                        </shadow>
                                        </value>
                                        <next>
                                        <block type="usb_off">
                                            <next>
                                            <block type="controls_wait">
                                                <value name="time">
                                                <shadow type="math_number">
                                                    <field name="NUM">0.5</field>
                                                </shadow>
                                                </value>
                                            </block>
                                            </next>
                                        </block>
                                        </next>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "usb_off",
                name: "USB set OFF",
                description: "สั่งให้อุปกรณ์ที่ต่อช่อง USB หยุดทำงาน",
                python: {
                    header: "import usb",
                    pattern: "usb.off()"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมสั่งให้แอลอีดีที่ต่อช่อง USB กระพริบทุก ๆ ครึ่งวินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="usb_on">
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">0.5</field>
                                        </shadow>
                                        </value>
                                        <next>
                                        <block type="usb_off">
                                            <next>
                                            <block type="controls_wait">
                                                <value name="time">
                                                <shadow type="math_number">
                                                    <field name="NUM">0.5</field>
                                                </shadow>
                                                </value>
                                            </block>
                                            </next>
                                        </block>
                                        </next>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "usb_toggle",
                name: "USB set Toggle",
                description: "สั่งให้อุปกรณ์ที่ต่อช่อง USB สลับการทำงาน",
                python: {
                    header: "import usb",
                    pattern: "usb.toggle()"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมสั่งให้แอลอีดีที่ต่อช่อง USB กระพริบทุก ๆ ครึ่งวินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="usb_toggle">
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">0.5</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },

            {
                id: "external_servo",
                name: "servo set angle",
                description: "สั่งให้เซอร์โวมอเตอร์หมุนไปในองศาที่กำหนด",
                python: {
                    header: "import servo",
                    pattern: "servo.angle(pin, angle)"
                },
                args: [
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "ขาที่ต่อเซอร์โวมอเตอร์",
                        value: [
                            {
                                label: "SV1",
                                value: "servo.SV1"
                            },
                            {
                                label: "SV2",
                                value: "servo.SV2"
                            },
                            {
                                label: "OUT1",
                                value: "26"
                            },
                            {
                                label: "OUT2",
                                value: "27"
                            },
                            {
                                label: "23",
                                value: "23"
                            },
                            {
                                label: "19",
                                value: "19"
                            },
                            {
                                label: "18",
                                value: "18"
                            }
                        ]
                    },
                    {
                        name: "angle",
                        type: "number",
                        description: "กำหนดองศาของเซอร์โว",
                        shadow: "90"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมสั่งให้เซอร์โวมอเตอร์ขา SV1 หมุนไป 90 องศา",
                        code: {
                            type: "block",
                            xml: `
                            <block type="external_servo">
                                <field name="ch">SV1</field>
                                <value name="angle">
                                <shadow type="math_number">
                                    <field name="NUM">90</field>
                                </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },

            {
                id: "pin_digital_write",
                name: "digital write",
                description: "สั่งให้ขาที่กำหนดส่งสัญญาณดิจิทัล",
                python: {
                    header: "from machine import Pin",
                    pattern: "Pin(pin, Pin.OUT).value(value)"
                },
                args: [
                    {
                        name: "value",
                        type: "number",
                        description: "ค่าดิจิทัลที่ต้องการส่งออก",
                        value: [
                            {
                                label: "0",
                                description: "ส่งลอจิก 0"
                            },
                            {
                                label: "1",
                                description: "ส่งลอจิก 1",
                            }
                        ],
                        shadow: "1"
                    },
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "ขาที่ต้องการส่งสัญญาณดิจิทัล",
                        value: [
                            {
                                label: "OUT1",
                                value: "26"
                            },
                            {
                                label: "OUT2",
                                value: "27"
                            },
                            {
                                label: "23",
                                value: "23"
                            },
                            {
                                label: "19",
                                value: "19"
                            },
                            {
                                label: "18",
                                value: "18"
                            },
                            {
                                label: "WIFI LED",
                                value: "2"
                            },
                            {
                                label: "IOT LED",
                                value: "12"
                            }
                        ]
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมไฟกระพริบที่ขา OUT1 ทุก ๆ ครึ่งวินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="pin_digital_write">
                                    <field name="pin">26</field>
                                    <value name="value">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                            <shadow type="math_number">
                                                <field name="NUM">0.5</field>
                                            </shadow>
                                        </value>
                                        <next>
                                            <block type="pin_digital_write">
                                                <field name="pin">26</field>
                                                <value name="value">
                                                    <shadow type="math_number">
                                                        <field name="NUM">0</field>
                                                    </shadow>
                                                </value>
                                                <next>
                                                    <block type="controls_wait">
                                                        <value name="time">
                                                            <shadow type="math_number">
                                                                <field name="NUM">0.5</field>
                                                            </shadow>
                                                        </value>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "pin_analog_write",
                name: "analog write",
                description: "สั่งให้ขาที่กำหนดส่งสัญญาณ PWM",
                python: {
                    header: "from machine import Pin\nfrom machine import PWM",
                    pattern: "PWM(Pin(pin), freq=1000, duty=duty)"
                },
                args: [
                    {
                        name: "value",
                        type: "number",
                        description: "ค่าดิวตี้ไซเคิลของสัญญาณ PWM ที่ต้องการส่งออก กำหนดได้ 0 ถึง 1023",
                        shadow: "1023"
                    },
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "ขาที่ต้องการส่งสัญญาณ PWM",
                        value: [
                            {
                                label: "OUT1",
                                value: "26"
                            },
                            {
                                label: "OUT2",
                                value: "27"
                            },
                            {
                                label: "23",
                                value: "23"
                            },
                            {
                                label: "19",
                                value: "19"
                            },
                            {
                                label: "18",
                                value: "18"
                            },
                            {
                                label: "WIFI LED",
                                value: "2"
                            },
                            {
                                label: "IOT LED",
                                value: "12"
                            }
                        ]
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมส่งสัญญาณ PWM ดิวตี้ไซเคิล 50% (50% * 1023 = 512) ",
                        code: {
                            type: "block",
                            xml: `
                            <block type="pin_analog_write">
                                <field name="pin">26</field>
                                <value name="value">
                                <shadow type="math_number">
                                    <field name="NUM">512</field>
                                </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },
        ]
    },
    {
        name: "RTC",
        icon: `/reference/clock.png`,
        color: "#fbbd5e",
        description: "อ่านและบันทึกค่าเวลาลงตัวนับเวลา",
        blocks: [

            {
                id: "external_rtc_set_time",
                name: "RTC set time",
                description: "ตั้งวัน-เวลาให้ตัวนับเวลาบนบอร์ด KidBright32",
                python: {
                    header: "import rtc",
                    pattern: "rtc.datetime((year, month, day, hour, minute, second[, microsecond, tzinfo]))"
                },
                args: [
                    {
                        name: "hour",
                        type: "number",
                        description: "ค่าชั่วโมง 0 ถึง 23",
                        shadow: "16"
                    },
                    {
                        name: "min",
                        type: "number",
                        description: "ค่านาที 0 ถึง 59",
                        shadow: "50"
                    },
                    {
                        name: "sec",
                        type: "number",
                        description: "ค่าวินาที 0 ถึง 59",
                        shadow: "0"
                    },
                    {
                        name: "day",
                        type: "number",
                        description: "ค่าวันที่ 1 ถึง 31",
                        shadow: "22"
                    },
                    {
                        name: "month",
                        type: "number",
                        description: "ค่าเดือน 1 ถึง 12",
                        shadow: "8"
                    },
                    {
                        name: "year",
                        type: "number",
                        description: "ค่าปี 2000 ถึง 2099",
                        shadow: "2020"
                    },
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมตั้งวันเวลาเป็น 15:01 น. 9/11/2020",
                        code: {
                            type: "block",
                            xml: `
                            <block type="external_rtc_set_time">
                                <value name="hour">
                                    <shadow type="math_number">
                                        <field name="NUM">15</field>
                                    </shadow>
                                </value>
                                <value name="min">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                                <value name="sec">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="day">
                                    <shadow type="math_number">
                                        <field name="NUM">9</field>
                                    </shadow>
                                </value>
                                <value name="month">
                                    <shadow type="math_number">
                                        <field name="NUM">11</field>
                                    </shadow>
                                </value>
                                <value name="year">
                                    <shadow type="math_number">
                                        <field name="NUM">2020</field>
                                    </shadow>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },

            {
                id: "external_rtc_get_hour",
                name: "RTC get Hour",
                description: "อ่านค่าชั่วโมงจากตัวนับเวลาบนบอร์ด KidBright32",
                python: {
                    header: "import rtc",
                    pattern: "rtc.datetime()[3]"
                },
                return: {
                    type: "number",
                    description: "ค่าชั่วโมง 0 ถึง 23",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าชั่วโมงบนแอลอีดี 16x8 หน่วงเวลาทำงาน 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="display_show">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="external_rtc_get_hour"></block>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "external_rtc_get_min",
                name: "RTC get Min",
                description: "อ่านค่านาทีจากตัวนับเวลาบนบอร์ด KidBright32",
                python: {
                    header: "import rtc",
                    pattern: "rtc.datetime()[4]"
                },
                return: {
                    type: "number",
                    description: "ค่านาที 0 ถึง 59",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่านาทีบนแอลอีดี 16x8 หน่วงเวลาทำงาน 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="display_show">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="external_rtc_get_min"></block>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "external_rtc_get_sec",
                name: "RTC get Second",
                description: "อ่านค่าวินาทีจากตัวนับเวลาบนบอร์ด KidBright32",
                python: {
                    header: "import rtc",
                    pattern: "rtc.datetime()[5]"
                },
                return: {
                    type: "number",
                    description: "ค่าวินาที 0 ถึง 59",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าวินาทีบนแอลอีดี 16x8 หน่วงเวลาทำงาน 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="display_show">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="external_rtc_get_sec"></block>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "external_rtc_get_microsecond",
                name: "RTC get Microsecond",
                description: "อ่านค่าไมโครวินาทีจากตัวนับเวลาบนบอร์ด KidBright32",
                python: {
                    header: "import rtc",
                    pattern: "rtc.datetime()[5]"
                },
                return: {
                    type: "number",
                    description: "ค่าไมโครวินาที 0 ถึง 59",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าไมโครวินาทีบนแอลอีดี 16x8 หน่วงเวลาทำงาน 0.1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="display_show">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="external_rtc_get_sec"></block>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">0.1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "external_rtc_get_day",
                name: "RTC get Day",
                description: "อ่านค่าวันจากตัวนับเวลาบนบอร์ด KidBright32",
                python: {
                    header: "import rtc",
                    pattern: "rtc.datetime()[2]"
                },
                return: {
                    type: "number",
                    description: "ค่าวันที่ 1 ถึง 31",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลวันบนแอลอีดี 16x8 หน่วงเวลาทำงาน 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="display_show">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="external_rtc_get_day"></block>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "external_rtc_get_month",
                name: "RTC get Month",
                description: "อ่านค่าเดือนจากตัวนับเวลาบนบอร์ด KidBright32",
                python: {
                    header: "import rtc",
                    pattern: "rtc.datetime()[1]"
                },
                return: {
                    type: "number",
                    description: "ค่าเดือน 1 ถึง 12",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลเดือนบนแอลอีดี 16x8 หน่วงเวลาทำงาน 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="display_show">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="external_rtc_get_month"></block>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "external_rtc_get_year",
                name: "RTC get Year",
                description: "อ่านค่าปีจากตัวนับเวลาบนบอร์ด KidBright32",
                python: {
                    header: "import rtc",
                    pattern: "rtc.datetime()[0]"
                },
                return: {
                    type: "number",
                    description: "ค่าปี 2000 ถึง 2099",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลปีบนแอลอีดี 16x8 หน่วงเวลาทำงาน 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="display_show">
                                    <value name="value">
                                        <shadow type="math_number">
                                            <field name="NUM">1234</field>
                                        </shadow>
                                        <block type="external_rtc_get_year"></block>
                                    </value>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
        ]
    },
    {
        name: "Control",
        icon: `/reference/process.png`,
        color: "#fbbd5e",
        description: "เงื่อนไข หน่วงเวลา และสั่งทำซ้ำโปรแกรม",
        blocks: [

            {
                id: "controls_wait",
                name: "wait ... seconds",
                description: "ใช้หยุดการทำงานของโปรแกรมตามเวลาที่กำหนดไว้",
                python: {
                    header: "from time import sleep",
                    pattern: "sleep(time)"
                },
                args: [
                    {
                        name: "time",
                        type: "number",
                        description: "เวลาที่ต้องการให้โปรแกรมหยุดการทำงาน หน่วยวินาที",
                        shadow: "1"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผล Hello, world! ใน Terminal ทุก ๆ 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="print">
                                        <value name="value">
                                            <shadow type="text">
                                                <field name="TEXT">Hello, world!</field>
                                            </shadow>
                                        </value>
                                        <next>
                                            <block type="controls_wait">
                                                <value name="time">
                                                    <shadow type="math_number">
                                                        <field name="NUM">1</field>
                                                    </shadow>
                                                </value>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "controls_forever",
                name: "forever",
                description: "ใช้ทำซ้ำการทำงานของโปรแกรมแบบไม่สิ้นสุด",
                python: {
                    pattern: "while True: "
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผล Hello, world! ใน Terminal ทุก ๆ 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="print">
                                        <value name="value">
                                            <shadow type="text">
                                                <field name="TEXT">Hello, world!</field>
                                            </shadow>
                                        </value>
                                        <next>
                                            <block type="controls_wait">
                                                <value name="time">
                                                    <shadow type="math_number">
                                                        <field name="NUM">1</field>
                                                    </shadow>
                                                </value>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "controls_repeat_ext",
                name: "repeat ... times",
                description: "ใช้ทำซ้ำโปรแกรมตามจำนวนครั้งที่กำหนด",
                python: {
                    pattern: "for count in range(TIMES): "
                },
                args: [
                    {
                        name: "TIMES",
                        type: "number",
                        description: "จำนวนครั้งที่ต้องการให้โปรแกรมทำงานซ้ำ",
                        shadow: "10"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผล Hello, world! ใน Terminal จำนวน 5 ครั้ง",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_repeat_ext">
                                <value name="TIMES">
                                    <shadow type="math_number">
                                        <field name="NUM">5</field>
                                    </shadow>
                                </value>
                                <statement name="DO">
                                    <block type="print">
                                        <value name="value">
                                            <shadow type="text">
                                                <field name="TEXT">Hello, world!</field>
                                            </shadow>
                                        </value>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "controls_if",
                name: "if",
                description: "ใช้ตรวจสอบเงื่อนไขควบคุมเส้นทางการทำงานของโปรแกรม",
                python: {
                    pattern: "if condition: "
                },
                args: [
                    {
                        name: "condition",
                        type: "bool",
                        description: "เงื่อนไข"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลรูปหัวใจบนแอลอีดี 16x8 เมื่อกดสวิตช์ S1",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="controls_if">
                                        <value name="IF0">
                                            <block type="switch_is_press">
                                                <field name="n">S1</field>
                                            </block>
                                        </value>
                                        <statement name="DO0">
                                            <block type="display_custom">
                                                <field name="value">"\\\\x00\\\\x00\\\\x00\\\\x00\\\\x38\\\\x44\\\\x42\\\\x21\\\\x42\\\\x44\\\\x38\\\\x00\\\\x00\\\\x00\\\\x00\\\\x00"</field>
                                            </block>
                                        </statement>
                                        <next>
                                            <block type="controls_wait">
                                                <value name="time">
                                                <shadow type="math_number">
                                                    <field name="NUM">0.1</field>
                                                </shadow>
                                                </value>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "controls_if",
                name: "if else",
                description: "ใช้ตรวจสอบเงื่อนไขควบคุมเส้นทางการทำงานของโปรแกรม",
                python: {
                    pattern: "if condition: \nelse: "
                },
                xml: `
                    <block type="controls_if">
                        <mutation else="1"></mutation>
                    </block>
                `,
                args: [
                    {
                        name: "condition",
                        type: "bool",
                        description: "เงื่อนไข"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลรูปหัวใจบนแอลอีดี 16x8 เมื่อกดสวิตช์ S1 และยกเลิกแสดงผลเมื่อปล่อยสวิตช์",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="controls_if">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                    <block type="switch_is_press">
                                        <field name="n">S1</field>
                                    </block>
                                    </value>
                                    <statement name="DO0">
                                    <block type="display_custom">
                                        <field name="value">"\\\\x00\\\\x00\\\\x00\\\\x00\\\\x38\\\\x44\\\\x42\\\\x21\\\\x42\\\\x44\\\\x38\\\\x00\\\\x00\\\\x00\\\\x00\\\\x00"</field>
                                    </block>
                                    </statement>
                                    <statement name="ELSE">
                                    <block type="display_clear"></block>
                                    </statement>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">0.1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "controls_wait_until",
                name: "wait until",
                description: "ใช้หยุดโปรแกรมจนกว่าเงื่อนไขจะเป็นจริง",
                python: {
                    pattern: "while not condition: pass"
                },
                args: [
                    {
                        name: "condition",
                        type: "bool",
                        description: "เงื่อนไข"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมรอจนกว่าจะกดสวิตช์ S1 จึงจะเริ่มโปรแกรมไฟกระพริบ",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_wait_until">
                                <value name="condition">
                                    <block type="switch_is_press">
                                        <field name="n">S1</field>
                                    </block>
                                </value>
                                <next>
                                    <block type="controls_forever">
                                        <statement name="block">
                                            <block type="pin_digital_write">
                                                <field name="pin">2</field>
                                                <value name="value">
                                                <shadow type="math_number">
                                                    <field name="NUM">1</field>
                                                </shadow>
                                                </value>
                                                <next>
                                                    <block type="controls_wait">
                                                        <value name="time">
                                                            <shadow type="math_number">
                                                                <field name="NUM">0.5</field>
                                                            </shadow>
                                                        </value>
                                                        <next>
                                                            <block type="pin_digital_write">
                                                                <field name="pin">2</field>
                                                                <value name="value">
                                                                    <shadow type="math_number">
                                                                        <field name="NUM">0</field>
                                                                    </shadow>
                                                                </value>
                                                                <next>
                                                                    <block type="controls_wait">
                                                                        <value name="time">
                                                                        <shadow type="math_number">
                                                                            <field name="NUM">0.5</field>
                                                                        </shadow>
                                                                        </value>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </statement>
                                    </block>
                                </next>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "controls_whileUntil",
                name: "repeat",
                description: "ใช้ทำซ้ำโปรแกรมตามเงื่อนไข",
                python: {
                    pattern: "while condition: "
                },
                args: [
                    {
                        name: "condition",
                        type: "bool",
                        description: "เงื่อนไข"
                    }
                ],
                /*examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผล Hello, world! ใน Terminal จำนวน 5 ครั้ง",
                        code: {
                            type: "block",
                            xml: `

                            `
                        }
                    }
                ]*/
            },
        ]
    },
    {
        name: "Operators",
        icon: `/reference/maths.png`,
        color: "#293939",
        description: "เครื่องหมายและการดำเนินการทางคณิตศาสตร์ และลอจิก",
        blocks: [
            {
                id: "math_arithmetic",
                name: "+",
                description: "ใช้บวกเลข",
                python: {
                    pattern: "operand1 + operand2"
                },
                xml: `
                    <block type="math_arithmetic">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <field name="OP">ADD</field>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>
                `,
                args: [
                    {
                        name: "operand1",
                        type: "number"
                    },
                    {
                        name: "operand2",
                        type: "number"
                    }
                ],
                return: {
                    type: "number",
                    description: "ผลลัพธ์ที่ได้จากการคำนวณ",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมบวกเลข 15 และ 30 แสดงผลใน Terminal",
                        code: {
                            type: "block",
                            xml: `
                            <block type="print">
                                <value name="value">
                                <shadow type="text">
                                    <field name="TEXT">Hello, world!</field>
                                </shadow>
                                <block type="math_arithmetic">
                                    <field name="OP">ADD</field>
                                    <value name="A">
                                    <shadow type="math_number">
                                        <field name="NUM">15</field>
                                    </shadow>
                                    </value>
                                    <value name="B">
                                    <shadow type="math_number">
                                        <field name="NUM">30</field>
                                    </shadow>
                                    </value>
                                </block>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "math_arithmetic",
                name: "-",
                description: "ใช้ลบเลข",
                python: {
                    pattern: "operand1 - operand2"
                },
                xml: `
                    <block type="math_arithmetic">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <field name="OP">MINUS</field>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>
                `,
                args: [
                    {
                        name: "operand1",
                        type: "number"
                    },
                    {
                        name: "operand2",
                        type: "number"
                    }
                ],
                return: {
                    type: "number",
                    description: "ผลลัพธ์ที่ได้จากการคำนวณ",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมลบเลข 15 และ 30 แสดงผลใน Terminal",
                        code: {
                            type: "block",
                            xml: `
                            <block type="print">
                                <value name="value">
                                <shadow type="text">
                                    <field name="TEXT">Hello, world!</field>
                                </shadow>
                                <block type="math_arithmetic">
                                    <field name="OP">MINUS</field>
                                    <value name="A">
                                    <shadow type="math_number">
                                        <field name="NUM">15</field>
                                    </shadow>
                                    </value>
                                    <value name="B">
                                    <shadow type="math_number">
                                        <field name="NUM">30</field>
                                    </shadow>
                                    </value>
                                </block>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "math_arithmetic",
                name: "*",
                description: "ใช้คูณเลข",
                python: {
                    pattern: "operand1 * operand2"
                },
                xml: `
                    <block type="math_arithmetic">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <field name="OP">MULTIPLY</field>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>
                `,
                args: [
                    {
                        name: "operand1",
                        type: "number"
                    },
                    {
                        name: "operand2",
                        type: "number"
                    }
                ],
                return: {
                    type: "number",
                    description: "ผลลัพธ์ที่ได้จากการคำนวณ",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมคูณเลข 15 และ 30 แสดงผลใน Terminal",
                        code: {
                            type: "block",
                            xml: `
                            <block type="print">
                                <value name="value">
                                <shadow type="text">
                                    <field name="TEXT">Hello, world!</field>
                                </shadow>
                                <block type="math_arithmetic">
                                    <field name="OP">MULTIPLY</field>
                                    <value name="A">
                                    <shadow type="math_number">
                                        <field name="NUM">15</field>
                                    </shadow>
                                    </value>
                                    <value name="B">
                                    <shadow type="math_number">
                                        <field name="NUM">30</field>
                                    </shadow>
                                    </value>
                                </block>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "math_arithmetic",
                name: "/",
                description: "ใช้หารตัวเลข",
                python: {
                    pattern: "operand1 / operand2"
                },
                xml: `
                    <block type="math_arithmetic">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <field name="OP">DIVIDE</field>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>
                `,
                args: [
                    {
                        name: "operand1",
                        type: "number"
                    },
                    {
                        name: "operand2",
                        type: "number"
                    }
                ],
                return: {
                    type: "number",
                    description: "ผลลัพธ์ที่ได้จากการคำนวณ",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมหารเลข 15 และ 30 แสดงผลใน Terminal",
                        code: {
                            type: "block",
                            xml: `
                            <block type="print">
                                <value name="value">
                                <shadow type="text">
                                    <field name="TEXT">Hello, world!</field>
                                </shadow>
                                <block type="math_arithmetic">
                                    <field name="OP">DIVIDE</field>
                                    <value name="A">
                                    <shadow type="math_number">
                                        <field name="NUM">15</field>
                                    </shadow>
                                    </value>
                                    <value name="B">
                                    <shadow type="math_number">
                                        <field name="NUM">30</field>
                                    </shadow>
                                    </value>
                                </block>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "math_random_int",
                name: "random",
                description: "ใช้สุ่มตัวเลข",
                python: {
                    header: "import random",
                    pattern: "random.randint(FROM, TO)"
                },
                args: [
                    {
                        name: "FROM",
                        type: "number",
                        description: "ตัวเลขต่ำสุดที่สุ่มได้",
                        shadow: "1"
                    },
                    {
                        name: "TO",
                        type: "number",
                        description: "ตัวเลขสูงสุดที่สุ่มได้",
                        shadow: "100"
                    }
                ],
                return: {
                    type: "number",
                    description: "ตัวเลขที่ได้จากการสุ่ม",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมสุ่มเลข 1 ถึง 10 แสดงผลใน Terminal",
                        code: {
                            type: "block",
                            xml: `
                            <block type="print">
                                <value name="value">
                                    <shadow type="text">
                                        <field name="TEXT">Hello, world!</field>
                                    </shadow>
                                    <block type="math_random_int">
                                        <value name="FROM">
                                            <shadow type="math_number">
                                                <field name="NUM">1</field>
                                            </shadow>
                                        </value>
                                        <value name="TO">
                                            <shadow type="math_number">
                                                <field name="NUM">10</field>
                                            </shadow>
                                        </value>
                                    </block>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "math_trig",
                name: "Trigonometry",
                description: "ใช้คำนวณค่าทางตรีโกณมิติ",
                python: {
                    header: "import math",
                    pattern: "math.sin(NUM)"
                },
                args: [
                    {
                        name: "NUM",
                        type: "number",
                        description: "ค่าที่ต้องการคำนวณ",
                        shadow: "45"
                    }
                ],
                return: {
                    type: "number",
                    description: "ค่าที่คำนวณได้",
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมคำนวนค่า sin 30 แสดงผลใน Terminal",
                        code: {
                            type: "block",
                            xml: `
                            <block type="print">
                                <value name="value">
                                    <shadow type="text">
                                        <field name="TEXT">Hello, world!</field>
                                    </shadow>
                                    <block type="math_trig">
                                        <field name="OP">SIN</field>
                                        <value name="NUM">
                                        <shadow type="math_number">
                                            <field name="NUM">30</field>
                                        </shadow>
                                        </value>
                                    </block>
                                </value>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "logic_compare",
                name: ">",
                description: "ใช้เปรียบเทียบตัวเลข A มากกว่า B",
                python: {
                    pattern: "A > B"
                },
                xml: `
                    <block type="logic_compare">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                        <field name="OP">GT</field>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                    </block>
                `,
                args: [
                    {
                        name: "A",
                        type: "number"
                    },
                    {
                        name: "B",
                        type: "number"
                    }
                ],
                return: {
                    type: "boolean",
                    description: "ผลการเปรียบเทียบ",
                    value: [
                        {
                            label: "True",
                            description: "A มากกว่า B จริง"
                        },
                        {
                            label: "False",
                            description: "A น้อยกว่าหรือเท่ากับ B"
                        }
                    ]
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงข้อความ Good แบบเลื่อนบนแอลอีดี 16x8 เมื่อเซ็นเซอร์แสงตรวจจับแสงได้สูงกว่า 80%",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="controls_if">
                                        <value name="IF0">
                                            <block type="logic_compare">
                                                <field name="OP">GT</field>
                                                <value name="A">
                                                <shadow type="math_number">
                                                    <field name="NUM">5</field>
                                                </shadow>
                                                <block type="sensor_light"></block>
                                                </value>
                                                <value name="B">
                                                <shadow type="math_number">
                                                    <field name="NUM">80</field>
                                                </shadow>
                                                </value>
                                            </block>
                                        </value>
                                        <statement name="DO0">
                                            <block type="display_scroll">
                                                <value name="value">
                                                <shadow type="text" id="_ZxvdRvpb1O-iQ/o/(Ik">
                                                    <field name="TEXT">Good</field>
                                                </shadow>
                                                </value>
                                            </block>
                                        </statement>
                                        <next>
                                            <block type="controls_wait" id="(u+xl@PWLyoQ)*F?T#8}">
                                                <value name="time">
                                                <shadow type="math_number" id="Kk{Eb/!f9#5E#kIck%(1">
                                                    <field name="NUM">0.1</field>
                                                </shadow>
                                                </value>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "logic_compare",
                name: "<",
                description: "ใช้เปรียบเทียบตัวเลข A น้อยกว่า B",
                python: {
                    pattern: "A < B"
                },
                xml: `
                    <block type="logic_compare">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                        <field name="OP">LT</field>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                    </block>
                `,
                args: [
                    {
                        name: "A",
                        type: "number"
                    },
                    {
                        name: "B",
                        type: "number"
                    }
                ],
                return: {
                    type: "boolean",
                    description: "ผลการเปรียบเทียบ",
                    value: [
                        {
                            label: "True",
                            description: "A น้อยกว่า B จริง"
                        },
                        {
                            label: "False",
                            description: "A มากกว่าหรือเท่ากับ B"
                        }
                    ]
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงข้อความ Bad แบบเลื่อนบนแอลอีดี 16x8 เมื่อเซ็นเซอร์แสงตรวจจับแสงได้น้อยกว่า 80%",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="controls_if">
                                        <value name="IF0">
                                            <block type="logic_compare">
                                                <field name="OP">LT</field>
                                                <value name="A">
                                                <shadow type="math_number">
                                                    <field name="NUM">5</field>
                                                </shadow>
                                                <block type="sensor_light"></block>
                                                </value>
                                                <value name="B">
                                                <shadow type="math_number">
                                                    <field name="NUM">10</field>
                                                </shadow>
                                                </value>
                                            </block>
                                        </value>
                                        <statement name="DO0">
                                            <block type="display_scroll">
                                                <value name="value">
                                                <shadow type="text" id="_ZxvdRvpb1O-iQ/o/(Ik">
                                                    <field name="TEXT">Bad</field>
                                                </shadow>
                                                </value>
                                            </block>
                                        </statement>
                                        <next>
                                            <block type="controls_wait" id="(u+xl@PWLyoQ)*F?T#8}">
                                                <value name="time">
                                                <shadow type="math_number" id="Kk{Eb/!f9#5E#kIck%(1">
                                                    <field name="NUM">0.1</field>
                                                </shadow>
                                                </value>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "logic_compare",
                name: "==",
                description: "ใช้เปรียบเทียบตัวเลข A เท่ากับ B",
                python: {
                    pattern: "A == B"
                },
                xml: `
                    <block type="logic_compare">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                        <field name="OP">EQ</field>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                    </block>
                `,
                args: [
                    {
                        name: "A",
                        type: "number"
                    },
                    {
                        name: "B",
                        type: "number"
                    }
                ],
                return: {
                    type: "boolean",
                    description: "ผลการเปรียบเทียบ",
                    value: [
                        {
                            label: "True",
                            description: "A เท่ากับ B จริง"
                        },
                        {
                            label: "False",
                            description: "A ไม่เท่ากับ B"
                        }
                    ]
                }
            },
            {
                id: "logic_operation",
                name: "AND / OR",
                description: "ใช้เปรียบเทียบตัวเลข A เท่ากับ B",
                python: {
                    pattern: "A OP B"
                },
                args: [
                    {
                        name: "A",
                        type: "number"
                    },
                    {
                        name: "OP",
                        type: "dropdown",
                        value: [
                            {
                                label: "and"
                            },
                            {
                                label: "or"
                            }
                        ]
                    },
                    {
                        name: "B",
                        type: "number"
                    }
                ],
                return: {
                    type: "boolean",
                    description: "ผลการเปรียบเทียบ",
                    value: [
                        {
                            label: "True",
                            description: "เงื่อนไขที่เปรียบเทียบเป็นจริง"
                        },
                        {
                            label: "False",
                            description: "เงื่อนไขที่เปรียบเทียบเป็นเท็จ"
                        }
                    ]
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงข้อความ OK แบบเลื่อนบนแอลอีดี 16x8 เมื่อเซ็นเซอร์แสงตรวจจับแสงได้ในช่วง 20% ถึง 80%",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                <block type="controls_if">
                                    <value name="IF0">
                                    <block type="logic_operation">
                                        <field name="OP">AND</field>
                                        <value name="A">
                                        <block type="logic_compare">
                                            <field name="OP">GT</field>
                                            <value name="A">
                                            <shadow type="math_number">
                                                <field name="NUM">5</field>
                                            </shadow>
                                            <block type="sensor_light"></block>
                                            </value>
                                            <value name="B">
                                            <shadow type="math_number">
                                                <field name="NUM">20</field>
                                            </shadow>
                                            </value>
                                        </block>
                                        </value>
                                        <value name="B">
                                        <block type="logic_compare">
                                            <field name="OP">LT</field>
                                            <value name="A">
                                            <shadow type="math_number">
                                                <field name="NUM">5</field>
                                            </shadow>
                                            <block type="sensor_light"></block>
                                            </value>
                                            <value name="B">
                                            <shadow type="math_number">
                                                <field name="NUM">80</field>
                                            </shadow>
                                            </value>
                                        </block>
                                        </value>
                                    </block>
                                    </value>
                                    <statement name="DO0">
                                    <block type="display_scroll">
                                        <value name="value">
                                        <shadow type="text">
                                            <field name="TEXT">OK</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </statement>
                                    <next>
                                    <block type="controls_wait">
                                        <value name="time">
                                        <shadow type="math_number">
                                            <field name="NUM">0.1</field>
                                        </shadow>
                                        </value>
                                    </block>
                                    </next>
                                </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "logic_negate",
                name: "Not",
                description: "ใช้กลับค่าลอจิก",
                python: {
                    pattern: "not BOOL"
                },
                args: [
                    {
                        name: "BOOL",
                        type: "bool"
                    }
                ],
                return: {
                    type: "boolean",
                    description: "ค่าลอจิกที่กลับกับค่า BOOL"
                }
            },

            {
                id: "text",
                name: "Text",
                description: "ใช้ใส่ข้อความ",
                python: {
                    pattern: "'TEXT'"
                },
                args: [
                    {
                        name: "TEXT"
                    }
                ],
                return: {
                    type: "text",
                    description: "ข้อความ"
                }
            },
            {
                id: "text_join",
                name: "create text with",
                description: "ใช้ต่อข้อความ",
                python: {
                    pattern: "A + B + ..."
                },
                args: [
                    {
                        name: "A",
                        type: "text"
                    },
                    {
                        name: "B",
                        type: "text"
                    },
                    {
                        name: "...",
                        type: "text"
                    }
                ],
                return: {
                    type: "text",
                    description: "ข้อความที่ต่อกันแล้ว"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงข้อความ Light: ต่อกับค่าที่วัดได้จากเซ็นเซอร์แสง แสดงผลใน Terminal",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="print" >
                                        <value name="value">
                                            <shadow type="text">
                                                <field name="TEXT">Hello, world!</field>
                                            </shadow>
                                            <block type="text_join">
                                                <mutation items="2"></mutation>
                                                <value name="ADD0">
                                                    <block type="text">
                                                        <field name="TEXT">Light: </field>
                                                    </block>
                                                </value>
                                                <value name="ADD1">
                                                    <block type="sensor_light"></block>
                                                </value>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="controls_wait">
                                                <value name="time">
                                                    <shadow type="math_number">
                                                        <field name="NUM">0.1</field>
                                                    </shadow>
                                                </value>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
        ]
    },
    {
        name: "Variables",
        icon: `/reference/relativity.png`,
        color: "#ac5e2e",
        description: "ตัวแปร",
        blocks: [ 
            {
                id: "variables_set",
                name: "set",
                description: "ใส่ค่าลงในตัวแปรที่กำหนด",
                python: {
                    pattern: "VARIABLE = VALUE"
                },
                args: [
                    {
                        name: "VARIABLE",
                        type: "text",
                        description: "ชื่อตัวแปร"
                    },
                    {
                        name: "VALUE",
                        type: "number",
                        description: "ค่าที่ต้องการเก็บลงตัวแปร",
                        shadow: "1"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมนับจำนวนครั้งการกดสวิตช์ S1 แสดงผลบนแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                            <variables>
                                <variable>a</variable>
                            </variables>
                            <block type="variables_set">
                                <field name="VAR">a</field>
                                <value name="VALUE">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <next>
                                <block type="switch_on_press">
                                    <field name="pin">S1</field>
                                    <statement name="callback">
                                        <block type="math_change">
                                            <field name="VAR">a</field>
                                            <value name="DELTA">
                                            <shadow type="math_number">
                                                <field name="NUM">1</field>
                                            </shadow>
                                            </value>
                                        </block>
                                    </statement>
                                    <next>
                                        <block type="controls_forever">
                                            <statement name="block">
                                            <block type="display_show">
                                                <value name="value">
                                                    <shadow type="text">
                                                        <field name="TEXT">12</field>
                                                    </shadow>
                                                    <block type="variables_get">
                                                        <field name="VAR">a</field>
                                                    </block>
                                                </value>
                                                <next>
                                                    <block type="controls_wait">
                                                        <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">0.1</field>
                                                        </shadow>
                                                        </value>
                                                    </block>
                                                </next>
                                            </block>
                                            </statement>
                                        </block>
                                    </next>
                                </block>
                                </next>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "math_change",
                name: "change",
                description: "บวกค่าในตัวแปรเพิ่มตามจำนวนที่กำหนด",
                python: {
                    pattern: "VARIABLE = VARIABLE + DELTA"
                },
                args: [
                    {
                        name: "VARIABLE",
                        type: "text",
                        description: "ชื่อตัวแปร"
                    },
                    {
                        name: "DELTA",
                        type: "number",
                        description: "ค่าที่ต้องการบวกเพิ่ม",
                        shadow: "1"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมนับจำนวนครั้งการกดสวิตช์ S1 แสดงผลบนแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                            <variables>
                                <variable>a</variable>
                            </variables>
                            <block type="variables_set">
                                <field name="VAR">a</field>
                                <value name="VALUE">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <next>
                                <block type="switch_on_press">
                                    <field name="pin">S1</field>
                                    <statement name="callback">
                                        <block type="math_change">
                                            <field name="VAR">a</field>
                                            <value name="DELTA">
                                            <shadow type="math_number">
                                                <field name="NUM">1</field>
                                            </shadow>
                                            </value>
                                        </block>
                                    </statement>
                                    <next>
                                        <block type="controls_forever">
                                            <statement name="block">
                                            <block type="display_show">
                                                <value name="value">
                                                    <shadow type="text">
                                                        <field name="TEXT">12</field>
                                                    </shadow>
                                                    <block type="variables_get">
                                                        <field name="VAR">a</field>
                                                    </block>
                                                </value>
                                                <next>
                                                    <block type="controls_wait">
                                                        <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">0.1</field>
                                                        </shadow>
                                                        </value>
                                                    </block>
                                                </next>
                                            </block>
                                            </statement>
                                        </block>
                                    </next>
                                </block>
                                </next>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "variables_get",
                name: "get",
                description: "อ่านค่าในตัวแปร",
                python: {
                    pattern: "VARIABLE"
                },
                args: [
                    {
                        name: "VARIABLE",
                        type: "text",
                        description: "ชื่อตัวแปร"
                    }
                ],
                return: {
                    type: "number",
                    description: "ค่าที่ถูกเก็บไว้ในตัวแปร"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมนับจำนวนครั้งการกดสวิตช์ S1 แสดงผลบนแอลอีดี 16x8",
                        code: {
                            type: "block",
                            xml: `
                            <variables>
                                <variable>a</variable>
                            </variables>
                            <block type="variables_set">
                                <field name="VAR">a</field>
                                <value name="VALUE">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <next>
                                <block type="switch_on_press">
                                    <field name="pin">S1</field>
                                    <statement name="callback">
                                        <block type="math_change">
                                            <field name="VAR">a</field>
                                            <value name="DELTA">
                                            <shadow type="math_number">
                                                <field name="NUM">1</field>
                                            </shadow>
                                            </value>
                                        </block>
                                    </statement>
                                    <next>
                                        <block type="controls_forever">
                                            <statement name="block">
                                            <block type="display_show">
                                                <value name="value">
                                                    <shadow type="text">
                                                        <field name="TEXT">12</field>
                                                    </shadow>
                                                    <block type="variables_get">
                                                        <field name="VAR">a</field>
                                                    </block>
                                                </value>
                                                <next>
                                                    <block type="controls_wait">
                                                        <value name="time">
                                                        <shadow type="math_number">
                                                            <field name="NUM">0.1</field>
                                                        </shadow>
                                                        </value>
                                                    </block>
                                                </next>
                                            </block>
                                            </statement>
                                        </block>
                                    </next>
                                </block>
                                </next>
                            </block>
                            `
                        }
                    }
                ]
            },
        ]
    },
    {
        name: "Function",
        icon: `/reference/jigsaw.png`,
        color: "#17A589",
        description: "ฟังก์ชั่น",
        blocks: [
            {
                id: "procedures_defnoreturn",
                name: "Define Function No Return",
                description: "สร้างฟังก์ชั่นแบบไม่ส่งค่ากลับ",
                python: {
                    pattern: "def NAME(): "
                },
                xml: `
                <block type="procedures_defnoreturn">
                    <field name="NAME">do something</field>
                    <comment pinned="false" h="80" w="160">Describe this function...</comment>
                </block>`,
                args: [
                    {
                        name: "NAME",
                        type: "text",
                        description: "ชื่อฟังกชั่น"
                    }
                ],
            },
            {
                id: "procedures_defreturn",
                name: "Define Function with Return",
                description: "สร้างฟังก์ชั่นแบบส่งค่ากลับ",
                python: {
                    pattern: "def NAME(): return VALUE"
                },
                xml: `
                <block type="procedures_defreturn">
                    <field name="NAME">do something2</field>
                    <comment pinned="false" h="80" w="160">Describe this function...</comment>
                </block>`,
                args: [
                    {
                        name: "NAME",
                        type: "text",
                        description: "ชื่อฟังกชั่น"
                    },
                    {
                        name: "VALUE",
                        type: "text",
                        description: "ค่าที่ส่งกลับ"
                    }
                ],
            },
            {
                id: "procedures_ifreturn",
                name: "If Return",
                description: "ส่งค่ากลับออกจากฟังก์ชั่น",
                python: {
                    pattern: "if condition: return VALUE"
                },
                xml: `
                <block type="procedures_ifreturn">
                    <mutation value="1"></mutation>
                </block>`,
                args: [
                    {
                        name: "condition",
                        type: "boll",
                        description: "เงื่อนไขการส่งค่ากลับ"
                    },
                    {
                        name: "VALUE",
                        type: "text",
                        description: "ค่าที่ส่งกลับ"
                    }
                ],
            },
            {
                id: "procedures_callnoreturn",
                name: "Call Function",
                description: "เรียกใช้ฟังก์ชั่นที่สร้างไว้",
                python: {
                    pattern: "NAME()"
                },
                xml: `
                <block type="procedures_callnoreturn">
                    <mutation name="do something"></mutation>
                </block>`,
            },
        ]
    },
    {
        name: "Advanced",
        icon: `/reference/expert.png`,
        color: "#8E44AD",
        description: "ขั้นสูง",
        blocks: [
            {
                id: "print",
                name: "Print",
                description: "ส่งข้อความ-ตัวเลข-วัตถุ ไปแสดงผลใน Terminal",
                python: {
                    pattern: "print(value)"
                },
                args: [
                    {
                        name: "value",
                        type: "text",
                        description: "ข้อความ-ตัวเลข-วัตถุ ที่ต้องการให้แสดงผล",
                        shadow: "Hello, world!"
                    }
                ],
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผล Hello, world! ใน Terminal จำนวน 5 ครั้ง",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_repeat_ext">
                                <value name="TIMES">
                                    <shadow type="math_number">
                                        <field name="NUM">5</field>
                                    </shadow>
                                </value>
                                <statement name="DO">
                                    <block type="print">
                                        <value name="value">
                                            <shadow type="text">
                                                <field name="TEXT">Hello, world!</field>
                                            </shadow>
                                        </value>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },

            {
                id: "dht_read",
                name: "DHT11/DHT22",
                description: "อ่านค่าอุณหภูมิและความชื้นจากเซ็นเซอร์ DHT11/DHT22",
                python: {
                    header: "import dht",
                    function: `def DHT_Read(type, pin):
  try:
    if type == 11:
      d = dht.DHT11(Pin(pin))
    elif type == 22:
      d = dht.DHT22(Pin(pin))
    else:
      return [ -999, -999 ]
    d.measure()
    return [ d.temperature(), d.humidity() ]
  except:
    print("DHT read error")
    return [ -999, -999 ]`,
                    pattern: "DHT_Read(type, pin)[value]"
                },
                args: [
                    {
                        name: "type",
                        type: "dropdown",
                        description: "ชนิดของเซ็นเซอร์",
                        value: [
                            {
                                label: "DHT11",
                                value: "11"
                            },
                            {
                                label: "DHT22",
                                value: "22"
                            }
                        ]
                    },
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "ขาที่ต่อกับเซ็นเซอร์",
                        value: [
                            {
                                label: "OUT1",
                                value: "26"
                            },
                            {
                                label: "OUT2",
                                value: "27"
                            },
                            {
                                label: "23",
                                value: "23"
                            },
                            {
                                label: "19",
                                value: "19"
                            },
                            {
                                label: "18",
                                value: "18"
                            }
                        ]
                    },
                    {
                        name: "value",
                        type: "dropdown",
                        description: "ค่าที่ต้องการอ่าน",
                        value: [
                            {
                                label: "temperature",
                                value: "0",
                                description: "อ่านค่าอุณหภูมิในหน่วองศาเซลเซียส",
                            },
                            {
                                label: "humidity",
                                value: "1",
                                description: "อ่านค่าความชื้นในหน่ว %RH",
                            }
                        ]
                    },
                ],
                return: {
                    type: "number",
                    description: "ค่าอุณหภูมิ/ความชื้นที่อ่านได้จากเซ็นเซอร์"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าอุณหภูมิที่วัดได้จาก DHT11 บนแอลอีดี 16x8 หน่วงเวลาทำงาน 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="display_show">
                                        <value name="value">
                                        <shadow type="text">
                                            <field name="TEXT">12</field>
                                        </shadow>
                                        <block type="dht_read">
                                            <field name="type">11</field>
                                            <field name="pin">26</field>
                                            <field name="valueIndex">0</field>
                                        </block>
                                        </value>
                                        <next>
                                        <block type="controls_wait">
                                            <value name="time">
                                            <shadow type="math_number">
                                                <field name="NUM">1</field>
                                            </shadow>
                                            </value>
                                        </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            {
                id: "ds18x20_read",
                name: "DS18x20",
                description: "อ่านค่าอุณหภูมิจากเซ็นเซอร์ DS18B20",
                python: {
                    header: "import onewire\nimport ds18x20",
                    function: `def DS18x20_Read(pin):
  ds = ds18x20.DS18X20(onewire.OneWire(Pin(pin)))
  roms = ds.scan()
  try:
    ds.convert_temp()
  except:
    return 0
  sleep(0.75)
  for rom in roms:
    return ds.read_temp(rom)
  return 0`,
                    pattern: "DS18x20_Read(pin)"
                },
                args: [
                    {
                        name: "pin",
                        type: "dropdown",
                        description: "ขาที่ต่อกับเซ็นเซอร์",
                        value: [
                            {
                                label: "OUT1",
                                value: "26"
                            },
                            {
                                label: "OUT2",
                                value: "27"
                            },
                            {
                                label: "23",
                                value: "23"
                            },
                            {
                                label: "19",
                                value: "19"
                            },
                            {
                                label: "18",
                                value: "18"
                            }
                        ]
                    }
                ],
                return: {
                    type: "number",
                    description: "ค่าอุณหภูมิที่อ่านได้จากเซ็นเซอร์"
                },
                examples: [
                    {
                        name: "ตัวอย่างโปรแกรมแสดงผลค่าอุณหภูมิที่วัดได้จาก DS18B20 บนแอลอีดี 16x8 หน่วงเวลาทำงาน 1 วินาที",
                        code: {
                            type: "block",
                            xml: `
                            <block type="controls_forever">
                                <statement name="block">
                                    <block type="display_show">
                                        <value name="value">
                                        <shadow type="text">
                                            <field name="TEXT">12</field>
                                        </shadow>
                                        <block type="ds18x20_read">
                                            <field name="pin">26</field>
                                        </block>
                                        </value>
                                        <next>
                                        <block type="controls_wait">
                                            <value name="time">
                                            <shadow type="math_number">
                                                <field name="NUM">1</field>
                                            </shadow>
                                            </value>
                                        </block>
                                        </next>
                                    </block>
                                </statement>
                            </block>
                            `
                        }
                    }
                ]
            },
            

            {
                id: "light_sleep",
                name: "light sleep",
                description: "สั่งให้บอร์ด KidBright32 หยุดการทำงานตามเวลาที่กำหนดเพื่อประหยัดพลังงาน",
                python: {
                    header: "import machine",
                    pattern: "machine.lightsleep(time * 1000)"
                },
                args: [
                    {
                        name: "time",
                        type: "number",
                        description: "เวลาที่ต้องการให้ KidBright32 หยุดทำงาน หน่วยวินาที",
                        shadow: "10"
                    }
                ]
            },
            {
                id: "deep_sleep",
                name: "deep sleep",
                description: "สั่งให้บอร์ด KidBright32 หยุดการทำงานตามเวลาที่กำหนดเพื่อประหยัดพลังงาน",
                python: {
                    header: "import machine",
                    pattern: "machine.deepsleep(time * 1000)"
                },
                args: [
                    {
                        name: "time",
                        type: "number",
                        description: "เวลาที่ต้องการให้ KidBright32 หยุดทำงาน หน่วยวินาที",
                        shadow: "10"
                    }
                ]
            },
            {
                id: "is_woke_from_deep_sleep",
                name: "is woke from deep sleep",
                description: "ใช้ตรวจสอบว่าบอร์ด KidBright32 กลับมาทำงานเพราะออกจาก Deep Sleep หรือไม่",
                python: {
                    header: "import machine",
                    pattern: "(machine.reset_cause() == machine.DEEPSLEEP_RESET)"
                },
                return: {
                    type: "bool",
                    description: "ผลการตรวจสอบ",
                    value: [
                        {
                            label: "True",
                            description: "บอร์ด KidBright32 ทำงานเพราะออกจาก Deep Sleep"
                        },
                        {
                            label: "True",
                            description: "บอร์ด KidBright32 ทำงานเพราะสาเหตุอื่น"
                        }
                    ]
                }
            },
        ]
    }
]);