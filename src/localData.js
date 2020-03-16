/**所有类型的储运公式 */
export class BlankMaterial {
  constructor() {
    this.name = "";
    this.image = "";
    this.formList = [{
        name: "单位分子式",
        isImg: false,
        value: ""
      },

      {
        name: "单位分子量",
        isImg: false,
        value: ""
      },
      {
        name: "孔径",
        isImg: false,
        value: ""
      },
      {
        name: "孔容",
        isImg: false,
        value: ""
      },
      {
        name: "比表面",
        isImg: false,
        value: ""
      },
      {
        name: "模拟结构",
        isImg: true,
        value: [""]
      },
      {
        name: "产品形貌",
        isImg: false,
        value: ""
      },
      {
        name: "粒径",
        isImg: false,
        value: ""
      }
    ];
    this.稳定性 = [];
    this.应用领域 = []
    this.表征图谱 = {
      XRD: "",
      BET: ""
    }
    this.cache模拟结构 = "";
    this.cache稳定性 = "";
    this.cache应用领域 = "";
    this.cache稳定性 = "";
    this.cache表征图谱BET = "";
    this.cache表征图谱XRD = "";
  }
}

export const materials = [{
    name: "PCN-333(AI)",
    image: "",
    formList: [{
        name: "单位分子式",
        isImg: false,
        value: "C48H24N6O16Al3"
      },

      {
        name: "单位分子量",
        isImg: false,
        value: "1021.49"
      },
      {
        name: "孔径",
        isImg: false,
        value: "窗口：2.6nm， 3.0nm；孔径： 1.1nm 3.4nm  5.5nm"
      },
      {
        name: "孔容",
        isImg: false,
        value: "3.8 cm3/g"
      },
      {
        name: "比表面",
        isImg: false,
        value: "BET比表面 3500-4000 m2/g "
      },
      {
        name: "模拟结构",
        isImg: true,
        value: ["F:\\lingxi\\electron-version4-tushu\\static\\images\\PCN-333(AI)\\模拟结构\\1.png"]
      },
      {
        name: "产品形貌",
        isImg: false,
        value: "白色粉末 White Powder"
      },
      {
        name: "粒径",
        isImg: false,
        value: "300-600nm"
      }
    ],
    稳定性: [
      "空气中稳定，水溶液和弱酸性-弱碱溶液中稳定（PH 3-10），有机溶剂稳定",
      "高热稳定性、热分解温度大于400℃"
    ],
    应用领域: [
      "良好的孔道可用于气体或污染物吸附 ",
      "超大的微孔孔径3-5nm可用于吸附包埋较大的药物分子或酶"
    ],
    表征图谱: {
      XRD: "F:\\lingxi\\electron-version4-tushu\\static\\images\\PCN-333(AI)\\xrd.png",
      BET: "F:\\lingxi\\electron-version4-tushu\\static\\images\\PCN-333(AI)\\bet.png"
    }
  },
  {
    "name": "PCN-222",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-222\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C96H52N8O32Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "2376.8"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "3.7nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "1.5 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "2000 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-222\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": "暗紫色粉末Dark Purple Powder"
    }, {
      "name": "粒径",
      "isImg": false,
      "value": "500*50nm针状晶粒"
    }],
    "稳定性": ["1)  PCN-222在空气中稳定，在水溶液和酸性条件下稳定 (PH 1-11) 2）高热稳定性、热分解温度约400℃"],
    "应用领域": ["1) PCN-222具有稳定的一维孔道，可负载金属催化剂或储气及吸附材料"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-222\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-222\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  PCN-222在空气中稳定，在水溶液和酸性条件下稳定 (PH 1-11) 2）高热稳定性、热分解温度约400℃",
    "cache应用领域": "1) PCN-222具有稳定的一维孔道，可负载金属催化剂或储气及吸附材料",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "PCN-777x",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-777x\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24H12N3O16Zr3"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "872.03"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "3.8nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "2.8 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "2000 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-777x\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  PCN-777空气中稳定，水溶液和弱酸性-弱碱溶液中稳定（PH 3-11），有机溶剂稳定 2）高热稳定性、热分解温度大于450℃"],
    "应用领域": ["1) PCN-777的刚性结构是良好的催化剂载体，储气材料和吸附材料2) PCN-777拥有3.8nm的孔道，可用于吸附包埋药物分子或较小的酶与多肽。"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-777x\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-777x\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  PCN-777空气中稳定，水溶液和弱酸性-弱碱溶液中稳定（PH 3-11），有机溶剂稳定 2）高热稳定性、热分解温度大于450℃",
    "cache应用领域": "1) PCN-777的刚性结构是良好的催化剂载体，储气材料和吸附材料2) PCN-777拥有3.8nm的孔道，可用于吸附包埋药物分子或较小的酶与多肽。",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "PCN-224",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-224\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C144H72N12O64Zr15"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "4362.5"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.9nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "1.59 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "2600 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-224\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  空气中持久稳定，水溶液和酸性-弱碱溶液中稳定（PH 1-10） 2)  热分解温度约>400℃"],
    "应用领域": [
      "1) PCN-224(Co)对CO2 /环氧丙烷偶联反应表现出高催化活性  2) PCN-224 在室温和100kPa下对C3H8展现出高达8.25mmol/g吸附量 3) PCN-224能够细胞成像并能作为光敏剂对肿瘤进行治疗 4) PCN-224能够对Hg离子和硝基化合物进行传感检测，PCN-224(Pt)能够对氧气传感检测"
    ],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-224\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\PCN-224\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  空气中持久稳定，水溶液和酸性-弱碱溶液中稳定（PH 1-10） 2)  热分解温度约>400℃",
    "cache应用领域": "1) PCN-224(Co)对CO2 /环氧丙烷偶联反应表现出高催化活性  2) PCN-224 在室温和100kPa下对C3H8展现出高达8.25mmol/g吸附量 3) PCN-224能够细胞成像并能作为光敏剂对肿瘤进行治疗 4) PCN-224能够对Hg离子和硝基化合物进行传感检测，PCN-224(Pt)能够对氧气传感检测",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "UIO-66(Zr)-MSA",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)-MSA\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24H24O32S6Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": ""
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "<0.7nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "约0.139 (微孔)"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "510 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)-MSA\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  UIO-66 非常稳定，在水溶液和酸性条件下稳定。耐氟离子。 2）高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 储气材料和吸附材料。裸露的巯基可以用于重金属离子的移除（如汞离子）"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)-MSA\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)-MSA\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  UIO-66 非常稳定，在水溶液和酸性条件下稳定。耐氟离子。 2）高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 储气材料和吸附材料。裸露的巯基可以用于重金属离子的移除（如汞离子）",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "NU-1000(Zr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NU-1000(Zr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C88HO32Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "1639.87"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "3.1 nm和1.3nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.466 (微孔)/1.369 (总孔) cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "2200 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NU-1000(Zr)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": "淡黄色粉末"
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) NU-1000结构 非常稳定，在水溶液和酸性条件下稳定（PH 1-11）；在有机溶剂中稳定 2) 高热稳定性、热分解温度约 500℃热分解温度约 500℃"],
    "应用领域": ["1) 储气材料和吸附材料,较大的孔道有利于吸附较大孔径的分子离子（如重铬酸根等）"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NU-1000(Zr)\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NU-1000(Zr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) NU-1000结构 非常稳定，在水溶液和酸性条件下稳定（PH 1-11）；在有机溶剂中稳定 2) 高热稳定性、热分解温度约 500℃热分解温度约 500℃",
    "cache应用领域": "1) 储气材料和吸附材料,较大的孔道有利于吸附较大孔径的分子离子（如重铬酸根等）",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "UIO-68(Zr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-68(Zr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C120H12O32Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "2512.7"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.77 nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "1.8 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "3500m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-68(Zr)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  UIO-68 非常稳定，在水溶液和酸性条件下较稳定，但长时间放置会缓慢分解 。耐氟离子。 2）高热稳定性、热分解温度大于300℃"],
    "应用领域": ["1) 具有超高比表面，是良好的储气材料和吸附材料  2) UIO-68的刚性结构是 良好的催化剂载体"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-68(Zr)\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-68(Zr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  UIO-68 非常稳定，在水溶液和酸性条件下较稳定，但长时间放置会缓慢分解 。耐氟离子。 2）高热稳定性、热分解温度大于300℃",
    "cache应用领域": "1) 具有超高比表面，是良好的储气材料和吸附材料  2) UIO-68的刚性结构是 良好的催化剂载体",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "UIO-66-(COOH)2",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\image.jpg",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C60H2O56Zr6-12.H"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "2166.9"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.8nm, 1.1nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "BET比表面500m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": []
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  2COOH-UIO-66 性质稳定，在水溶液和酸性条件下稳定。 2）高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) 2COOH-UIO-66支链羧基官能团适合进一步衍生，与氨基酸、多肽、蛋白质键和；或与稀土金属络合作为探针"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66-(COOH)2\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66-(COOH)2\\bet.png"
    },
    "cache模拟结构": "",
    "cache稳定性": "1)  2COOH-UIO-66 性质稳定，在水溶液和酸性条件下稳定。 2）高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) 2COOH-UIO-66支链羧基官能团适合进一步衍生，与氨基酸、多肽、蛋白质键和；或与稀土金属络合作为探针",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "Py-COF",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\Py-COF\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C40H24N2"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "532.66"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.38nm * 1.59nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "BET比表面1200-1300m2/g "
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1200-1300m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\Py-COF\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) Py-COF在空气中稳定，PH 1-14的水溶液中稳定数日晶型无变化 2) 热分解温度大于400度"],
    "应用领域": ["1) 用于气体和污染物吸附 2) 良好的孔道可用于负载其他催化剂 3) 用作太阳能电池器件的空穴传输层"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\Py-COF\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\Py-COF\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) Py-COF在空气中稳定，PH 1-14的水溶液中稳定数日晶型无变化 2) 热分解温度大于400度",
    "cache应用领域": "1) 用于气体和污染物吸附 2) 良好的孔道可用于负载其他催化剂 3) 用作太阳能电池器件的空穴传输层",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "CTF-1",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CTF-1\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C8H10N4.C8H6O2"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "296.32384"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.2nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.4 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "520m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CTF-1\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) CTF 性质极其稳定，是最稳定的COF材料之一。耐水耐酸碱。 2) 热分解温度大于400度"],
    "应用领域": ["1) 用于气体和污染物吸附 2) 良好的孔道可用于负载其他催化剂 3) 良好的光催化水解制氢性能"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CTF-1\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) CTF 性质极其稳定，是最稳定的COF材料之一。耐水耐酸碱。 2) 热分解温度大于400度",
    "cache应用领域": "1) 用于气体和污染物吸附 2) 良好的孔道可用于负载其他催化剂 3) 良好的光催化水解制氢性能",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "Al-Fum",
    "image": "",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C4H2O5Al"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "157.037"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.57*0.6nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.65 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": " 900 m2/g,"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\Al-Fum\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) Al-Fum在空气和水溶液中非常稳定，仅在强碱性条件缓慢分解 2）高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 气体吸附，是工业上实际中试应用于天然气储存的MOF材料 2) 污染物吸附，对氟离子有很好的吸附作用"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\Al-Fum\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\Al-Fum\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) Al-Fum在空气和水溶液中非常稳定，仅在强碱性条件缓慢分解 2）高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 气体吸附，是工业上实际中试应用于天然气储存的MOF材料 2) 污染物吸附，对氟离子有很好的吸附作用",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "TpPa-1",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\TpPa-1\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C9H6O6.C6H8N2"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "318.2"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.8nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.087 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "520m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\TpPa-1\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": "1)  水溶液和酸性环境下稳定，强碱性条件下不稳定"
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": [],
    "应用领域": ["1) 用于气体和污染物吸附 2) 良好的孔道可用于负载其他催化剂"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\TpPa-1\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "",
    "cache应用领域": "1) 用于气体和污染物吸附 2) 良好的孔道可用于负载其他催化剂",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "HCOF-1",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\HCOF-1\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C9H6O6.H4N2"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "242.1"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.18nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "1.1-1.2cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "600m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\HCOF-1\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) 氮气的环境中，300℃以下基本稳定"],
    "应用领域": ["1) 用于气体和污染物吸附 2) 良好的孔道可用于负载其他催化剂"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\HCOF-1\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) 氮气的环境中，300℃以下基本稳定",
    "cache应用领域": "1) 用于气体和污染物吸附 2) 良好的孔道可用于负载其他催化剂",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "COF-LZU-1",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\COF-LZU-1\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C9H6O3.C6H8N2"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "270.2"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.2-1.8 nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "860-1160 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\COF-LZU-1\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) COF-LZU1的骨架在PH4.0-7.0时会破坏；在PH8.5-10.5的环境中能稳定存在，影响很小 2) 热分解温度大于400度"],
    "应用领域": ["1)用于气体和污染物吸附 2)良好的孔道可用于负载其他催化剂"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\COF-LZU-1\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) COF-LZU1的骨架在PH4.0-7.0时会破坏；在PH8.5-10.5的环境中能稳定存在，影响很小 2) 热分解温度大于400度",
    "cache应用领域": "1)用于气体和污染物吸附 2)良好的孔道可用于负载其他催化剂",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "MIL-124(In)",
    "image": "",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C9H3O10In2"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "501.75806"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": ""
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": ""
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": []
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) 1)在空气中稳定，在水中稳定数十日 2）热分解温度约350℃"],
    "应用领域": ["1) 气体吸附与分离（如二氧化碳、乙烯/乙炔等）  2) 配体上枝出的羧酸可用于和各类稀土（如Eu3+或Tb3+）络合，产生荧光变化，用作荧光探针检测各类阳离子。"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-124(In)\\bet.png"
    },
    "cache模拟结构": "",
    "cache稳定性": "1) 1)在空气中稳定，在水中稳定数十日 2）热分解温度约350℃",
    "cache应用领域": "1) 气体吸附与分离（如二氧化碳、乙烯/乙炔等）  2) 配体上枝出的羧酸可用于和各类稀土（如Eu3+或Tb3+）络合，产生荧光变化，用作荧光探针检测各类阳离子。",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "CPL-5",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-5\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24H14N6O8Cu2"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "641.4"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.6nm*0.8nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "500 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-5\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) CPL-5在空气中可稳定数周 2）热分解温度约200℃"],
    "应用领域": ["1) 气体吸附与分离（如二氧化碳、乙烯/乙炔等）  2) 柱撑结构的归整孔道可用于离子通过"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-5\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) CPL-5在空气中可稳定数周 2）热分解温度约200℃",
    "cache应用领域": "1) 气体吸附与分离（如二氧化碳、乙烯/乙炔等）  2) 柱撑结构的归整孔道可用于离子通过",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "CPL-1",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-1\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C16H8N6O8Cu2"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "539.3"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.6nm*0.8nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "400 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-1\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": [],
    "应用领域": [],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-1\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "",
    "cache应用领域": "",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "CPL-2",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-2\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C22H12N6O8Cu2"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "615.45"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.6nm*0.8nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "490 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-2\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) CPL-2在空气和水中可稳定数周 2）热分解温度约200℃"],
    "应用领域": ["1) 气体吸附与分离（如二氧化碳、乙烯/乙炔等）  2) 柱撑结构的归整孔道可用于离子通过"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-2\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\CPL-2\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) CPL-2在空气和水中可稳定数周 2）热分解温度约200℃",
    "cache应用领域": "1) 气体吸附与分离（如二氧化碳、乙烯/乙炔等）  2) 柱撑结构的归整孔道可用于离子通过",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "MIL-101(Cr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24O16Cr3"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "700.2"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.2-1.6nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "2.0-2.4 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "3000-3500 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-101(Cr)在空气中非常稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12 3) 耐受F离子"],
    "应用领域": ["1) 储气材料和吸附材料"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-101(Cr)在空气中非常稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12 3) 耐受F离子",
    "cache应用领域": "1) 储气材料和吸附材料",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "UIO-66-SO3H",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66-SO3H\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C48H3O50S6Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "2120.2"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.8nm, 1.1nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.5 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "385 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66-SO3H\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  UIO-66-SO3H 非常稳定，在水溶液和酸性条件下稳定 。耐氟离子。 2）高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) UIO-66中配体上裸露的磺酸基可作为质子酸催化剂，也可掺杂作为质子膜材料，或作为探针检测各类金属阳离子"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66-SO3H\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66-SO3H\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  UIO-66-SO3H 非常稳定，在水溶液和酸性条件下稳定 。耐氟离子。 2）高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) UIO-66中配体上裸露的磺酸基可作为质子酸催化剂，也可掺杂作为质子膜材料，或作为探针检测各类金属阳离子",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "MIL-101(Cr)-SO3H",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)-SO3H\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24HO25S3Cr3-2.H2O.H+"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "960.45"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.2-1.6nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "2.0 cm3/"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1800-2000 m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)-SO3H\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-101(Cr)-SO3H在空气中非常稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12 3) 耐受F离子"],
    "应用领域": ["1) 储气材料和吸附材料 2) 配体上裸露的磺酸基可进一步衍生；可用于离子探针或离子膜材料"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)-SO3H\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)-SO3H\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-101(Cr)-SO3H在空气中非常稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12 3) 耐受F离子",
    "cache应用领域": "1) 储气材料和吸附材料 2) 配体上裸露的磺酸基可进一步衍生；可用于离子探针或离子膜材料",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "NH2-MIL-101(Fe)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-101(Fe)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24N3O13ClFe3"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "741.25"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "2.9-3.4nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "1.8 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "2300 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-101(Fe)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) NH2-MIL-101(Fe)在空气中较稳定，在水溶液中较为稳定。 2) 高热稳定性、热分解温度大于300℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) 作为路易斯酸催化剂"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-101(Fe)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) NH2-MIL-101(Fe)在空气中较稳定，在水溶液中较为稳定。 2) 高热稳定性、热分解温度大于300℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) 作为路易斯酸催化剂",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "NH2-MIL-101(Cr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-101(Cr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24N3O15FCr3"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "745.2"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "2.9-3.4nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "~2.0 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "3000 m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": []
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) NH2-MIL-101(Cr)在空气中非常稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12"],
    "应用领域": ["1) 储气材料和吸附材料 2) 配体上裸露的磺酸基可进一步衍生；可用于离子探针或离子膜材料"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-101(Cr)\\bet.png"
    },
    "cache模拟结构": "",
    "cache稳定性": "1) NH2-MIL-101(Cr)在空气中非常稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12",
    "cache应用领域": "1) 储气材料和吸附材料 2) 配体上裸露的磺酸基可进一步衍生；可用于离子探针或离子膜材料",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "MIL-88B(Fe)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-88B(Fe)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24H4O13Fe3"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "667.82"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.3nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "1.8 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "N2测BET基本无吸附"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-88B(Fe)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-88B(Fe) 在空气中稳定，在水溶液和酸性条件下较稳定。 2) 高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 储气材料和吸附材料;具有特殊的“呼吸”效应 2) 作为路易斯酸催化剂"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-88B(Fe)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-88B(Fe) 在空气中稳定，在水溶液和酸性条件下较稳定。 2) 高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 储气材料和吸附材料;具有特殊的“呼吸”效应 2) 作为路易斯酸催化剂",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "MIL-53(Fe)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-53(Fe)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C8H4O5Fe"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "235.96"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "2.9-3.4nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "1.8 g/cm3 "
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1300 m2/g,"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-53(Fe)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-53(Fe)在空气中稳定，在水溶液及酸性条件下中稳定  2) 高热稳定性、热分解温度大于300℃"],
    "应用领域": ["1) 气体（如二氧化碳）和污染物吸附  2) 作为路易斯酸催化剂具有良好的催化性能"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-53(Fe)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-53(Fe)在空气中稳定，在水溶液及酸性条件下中稳定  2) 高热稳定性、热分解温度大于300℃",
    "cache应用领域": "1) 气体（如二氧化碳）和污染物吸附  2) 作为路易斯酸催化剂具有良好的催化性能",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "MIL-101(Cr)-SO3H",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)-SO3H\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24HO25S3Cr3-2.H2O.H+"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "960.45626"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "2.9-3.4nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "2.0 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1800-2000 m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-101(Cr)-SO3H\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-101(Cr)-SO3H在空气中非常稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12 3) 耐受F离子"],
    "应用领域": ["1) 储气材料和吸附材料 2) 配体上裸露的磺酸基可进一步衍生；可用于离子探针或离子膜材料"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-14\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-101(Cr)-SO3H在空气中非常稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12 3) 耐受F离子",
    "cache应用领域": "1) 储气材料和吸附材料 2) 配体上裸露的磺酸基可进一步衍生；可用于离子探针或离子膜材料",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "ZIF-14",
    "image": "",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C5H8N2.Zn"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "227.5818"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": ""
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": ""
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": []
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) 非持久稳定MOF材料"],
    "应用领域": ["1) 储气材料和吸附材料  2) 可作为药物载体进行药物吸附和缓释"],
    "表征图谱": {
      "XRD": "",
      "BET": ""
    },
    "cache模拟结构": "",
    "cache稳定性": "1) 非持久稳定MOF材料",
    "cache应用领域": "1) 储气材料和吸附材料  2) 可作为药物载体进行药物吸附和缓释",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "MIL-100(Fe)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-100(Fe)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C18O15FFe3"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "642.717"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "2.5-2.9nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.9 g/cm3 （微孔孔容 0.55g/cm3）"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1900 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-100(Fe)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-100(Fe)在空气中稳定，在水溶液及酸性条件下中稳定  2）高热稳定性、热分解温度大于280℃"],
    "应用领域": ["1) 气体（如二氧化碳）和污染物吸附  2) 作为路易斯酸催化剂具有良好的催化性能"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-100(Fe)\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-100(Fe)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-100(Fe)在空气中稳定，在水溶液及酸性条件下中稳定  2）高热稳定性、热分解温度大于280℃",
    "cache应用领域": "1) 气体（如二氧化碳）和污染物吸附  2) 作为路易斯酸催化剂具有良好的催化性能",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "MIL-125Ti",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-125Ti\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C48H4O36Ti8"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "1539.46"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.6nm*0.8nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1300 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-125Ti\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-125(Ti)在空气中稳定 2）热分解温度约350℃"],
    "应用领域": ["1) 气体吸附与分离 2) 具有一定的光催化性能"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-125Ti\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-125(Ti)在空气中稳定 2）热分解温度约350℃",
    "cache应用领域": "1) 气体吸附与分离 2) 具有一定的光催化性能",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "MIL-100(Cr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-100(Cr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C18O15FCr3.O"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "647.1697"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.55-0.88nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.9 g/cm3"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "2000 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-100(Cr)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-100(Cr)在空气中稳定，在水溶液及酸性条件下中稳定  2）高热稳定性、热分解温度大于300℃"],
    "应用领域": ["1) 气体（如二氧化碳）和污染物吸附  2) 具有合适的窗口尺寸，可以用作药物载体"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-100(Cr)\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-100(Cr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-100(Cr)在空气中稳定，在水溶液及酸性条件下中稳定  2）高热稳定性、热分解温度大于300℃",
    "cache应用领域": "1) 气体（如二氧化碳）和污染物吸附  2) 具有合适的窗口尺寸，可以用作药物载体",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "MIL-53(Cr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-53(Cr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C8H4O5Cr"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "232.110"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.3nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "BET比表面"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-53(Cr)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-53(Cr)在空气中稳定，在水溶液及酸性条件下中稳定  2）高热稳定性、热分解温度大于300℃"],
    "应用领域": ["1) 气体（如二氧化碳）和污染物吸附  2) 作为路易斯酸催化剂具有良好的催化性能"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-53(Cr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-53(Cr)在空气中稳定，在水溶液及酸性条件下中稳定  2）高热稳定性、热分解温度大于300℃",
    "cache应用领域": "1) 气体（如二氧化碳）和污染物吸附  2) 作为路易斯酸催化剂具有良好的催化性能",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "MOF-801(Zr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MOF-801(Zr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24H2O32Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "1349.5"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.48nm; 0.56nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.45 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "950 m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MOF-801(Zr)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MOF-801性质稳定，在水溶液和酸性条件下稳定，耐氟离子。 2) 高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) MOF-801具有良好的吸水性能，可用作干燥剂"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MOF-801(Zr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MOF-801性质稳定，在水溶液和酸性条件下稳定，耐氟离子。 2) 高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) MOF-801具有良好的吸水性能，可用作干燥剂",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "MOF-808(Zr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MOF-808(Zr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24HO32Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "1348.5"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.48nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.84 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1200 m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MOF-808(Zr)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) 在空气性质稳定，在水溶液和酸性条件下稳定，耐氟离子。 2) 高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 储气材料和吸附材料"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MOF-808(Zr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) 在空气性质稳定，在水溶液和酸性条件下稳定，耐氟离子。 2) 高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 储气材料和吸附材料",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "NH2-MIL-101(Al)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-101(Al)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24N3O15Al3Cl"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "960.45626"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.2-1.6nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "~1.0 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "2100 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": []
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) NH2-MIL-101(Al)在空气中稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12"],
    "应用领域": ["1) 储气材料和吸附材料 2) 含Al金属，可作为路易斯酸催化剂应用于催化反应"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-101(Al)\\bet.png"
    },
    "cache模拟结构": "",
    "cache稳定性": "1) NH2-MIL-101(Al)在空气中稳定，可稳定放置数月。热分解温度>300℃。 2) 水溶液中稳定，耐强酸弱碱 PH 1-12",
    "cache应用领域": "1) 储气材料和吸附材料 2) 含Al金属，可作为路易斯酸催化剂应用于催化反应",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "NH2-MIL-53(Al)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-53(Al)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C8H5NO5Al"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "222.11"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.8nm; 1.3nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.5 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "950 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-53(Al)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": [],
    "应用领域": [],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-53(Al)\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-53(Al)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "",
    "cache应用领域": "",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "ZIF-90",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-90\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C4H4N2O.Zn"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "161.48"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "窗口0.35nm; 孔径1.1nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.4 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": ""
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-90\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  空气中稳定，水溶液和碱溶液中稳定；酸性条件下不稳定 2)  热分解温度约300℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) 可作为药物载体进行药物吸附和缓释"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-90\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  空气中稳定，水溶液和碱溶液中稳定；酸性条件下不稳定 2)  热分解温度约300℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) 可作为药物载体进行药物吸附和缓释",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "ZIF-7",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-7\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C7H6N2.Zn.H2O"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "201.54122"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.43nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.18g/cm3 "
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "无N2吸附"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-7\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  在空气和溶液状态下不能持久稳定， 不宜长期存放后使用 2)  结构中含水分子，加热状态下易分解"],
    "应用领域": [],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-7\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  在空气和溶液状态下不能持久稳定， 不宜长期存放后使用 2)  结构中含水分子，加热状态下易分解",
    "cache应用领域": "",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "IRMOF-3",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\IRMOF-3\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24H5N3O13Zn4"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "804.86"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.5nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": ""
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\IRMOF-3\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) 在空气中具有一定的稳定性，可稳定数周。水溶液中逐渐分解 2) 热分解温度大于250℃"],
    "应用领域": ["1) 储气材料和吸附材料；可作为药物载体进行药物吸附和缓释  2) 具有一定的有机反应路易斯酸催化性能(如Knoevenagel缩合)"],
    "表征图谱": {
      "XRD": "",
      "BET": ""
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) 在空气中具有一定的稳定性，可稳定数周。水溶液中逐渐分解 2) 热分解温度大于250℃",
    "cache应用领域": "1) 储气材料和吸附材料；可作为药物载体进行药物吸附和缓释  2) 具有一定的有机反应路易斯酸催化性能(如Knoevenagel缩合)",
    "cache表征图谱BET": "",
    "cache表征图谱XRD": ""
  }, {
    "name": "MOF-5",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MOF-5\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C24H4O13Zn4"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "761.84"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1.5nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "900m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MOF-5\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) 在空气中具有一定的稳定性，可稳定数周。水溶液中逐渐分解 2) 热分解温度大于300℃"],
    "应用领域": ["1) 储气材料和吸附材料；  2) 可作为药物载体进行药物吸附和缓释"],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MOF-5\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) 在空气中具有一定的稳定性，可稳定数周。水溶液中逐渐分解 2) 热分解温度大于300℃",
    "cache应用领域": "1) 储气材料和吸附材料；  2) 可作为药物载体进行药物吸附和缓释",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "MIL-53(Al)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-53(Al)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C8H4O5Al"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "207.09"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.8nm*1.3nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.7 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1100 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-53(Al)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) MIL-53(Al)在空气中较稳定，在水溶液和碱性条件较为稳定  2) 高热稳定性、热分解温度大于400℃"],
    "应用领域": [
      "1) 气体（如二氧化碳）和污染物吸附  2) 作为路易斯酸催化剂 3) 柔性的一维菱形孔道结构，并且客体分子或机械压力能诱导材料结构发生“小孔-大孔-小孔”呼吸效应。"
    ],
    "表征图谱": {
      "XRD": "",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\MIL-53(Al)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) MIL-53(Al)在空气中较稳定，在水溶液和碱性条件较为稳定  2) 高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 气体（如二氧化碳）和污染物吸附  2) 作为路易斯酸催化剂 3) 柔性的一维菱形孔道结构，并且客体分子或机械压力能诱导材料结构发生“小孔-大孔-小孔”呼吸效应。",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": ""
  }, {
    "name": "UIO-66(Zr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C48H4O32Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "1639.87"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.8nm, 1.1nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.5 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1100 m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  UIO-66 非常稳定，在水溶液和酸性条件下稳定。耐氟离子。 2）高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) UIO-66的刚性结构是良好的催化剂载体"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  UIO-66 非常稳定，在水溶液和酸性条件下稳定。耐氟离子。 2）高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) UIO-66的刚性结构是良好的催化剂载体",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "UIO-67(Zr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-67(Zr)\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C84H8O32Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "2076.28"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "1nm-1.3nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "1 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "BET比表面3000 m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-67(Zr)\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  UIO-67 在空气中稳定，在水溶液和酸性条件下稳定数小时。稳定性低于UIO-66。 2）高热稳定性、热分解温度大于300℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) UIO-67的刚性结构是良好的催化剂载体"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-67(Zr)\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-67(Zr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  UIO-67 在空气中稳定，在水溶液和酸性条件下稳定数小时。稳定性低于UIO-66。 2）高热稳定性、热分解温度大于300℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) UIO-67的刚性结构是良好的催化剂载体",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "UIO-66(Zr)-COOH",
    "image": "",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C54H18O44Zr6-6.H"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "1918.90"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.8nm,-1.1nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "600-700m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": []
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  COOH-UIO-66 性质稳定，在水溶液和酸性条件下稳定。 2）高热稳定性、热分解温度大于350℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) COOH-UIO-66支链羧基官能团适合进一步衍生，与氨基酸、多肽、蛋白质键和；或与稀土金属络合作为探针"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)-COOH\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\UIO-66(Zr)-COOH\\bet.png"
    },
    "cache模拟结构": "",
    "cache稳定性": "1)  COOH-UIO-66 性质稳定，在水溶液和酸性条件下稳定。 2）高热稳定性、热分解温度大于350℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) COOH-UIO-66支链羧基官能团适合进一步衍生，与氨基酸、多肽、蛋白质键和；或与稀土金属络合作为探针",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "NH2-MIL-125Ti",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-125Ti\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C48H5N6O36Ti8"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "1624.50"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.6nm*0.8nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": ""
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1200 m2/g"
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-125Ti\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1) NH2-MIL-125(Ti)在空气和水溶液中稳定 2）热分解温度约350℃"],
    "应用领域": ["1) 气体与有机污染物吸附分离  2) NH2-MIL-125(Ti) 具有很好的光催化活性，可以光催化降解CO2和有机物"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-125Ti\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-MIL-125Ti\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1) NH2-MIL-125(Ti)在空气和水溶液中稳定 2）热分解温度约350℃",
    "cache应用领域": "1) 气体与有机污染物吸附分离  2) NH2-MIL-125(Ti) 具有很好的光催化活性，可以光催化降解CO2和有机物",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "ZIF-8",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-8\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C8H10N4Zn"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "227.58"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.34nm-1.1nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.66 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "1500 m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": [
        "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-8\\模拟结构\\模拟结构.png"
      ]
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  空气中持久稳定，水溶液和强碱溶液中稳定；酸性条件下不稳定 2）高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) 可作为药物载体进行药物吸附和缓释"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-8\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\ZIF-8\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  空气中持久稳定，水溶液和强碱溶液中稳定；酸性条件下不稳定 2）高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) 可作为药物载体进行药物吸附和缓释",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }, {
    "name": "NH2-UIO-66(Zr)",
    "image": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\image.png",
    "formList": [{
      "name": "单位分子式",
      "isImg": false,
      "value": "C48H5N6O32Zr6"
    }, {
      "name": "单位分子量",
      "isImg": false,
      "value": "1724.92"
    }, {
      "name": "孔径",
      "isImg": false,
      "value": "0.8nm,-1.1nm"
    }, {
      "name": "孔容",
      "isImg": false,
      "value": "0.5 cm3/g"
    }, {
      "name": "比表面",
      "isImg": false,
      "value": "800 m2/g "
    }, {
      "name": "模拟结构",
      "isImg": true,
      "value": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-UIO-66(Zr)\\模拟结构\\模拟结构.png"
    }, {
      "name": "产品形貌",
      "isImg": false,
      "value": ""
    }, {
      "name": "粒径",
      "isImg": false,
      "value": ""
    }],
    "稳定性": ["1)  NH2-UIO-66 非常稳定，在水溶液和酸性条件下稳定。耐氟离子。 2）高热稳定性、热分解温度大于400℃"],
    "应用领域": ["1) 储气材料和吸附材料  2) NH2-UIO-66的刚性结构是良好的催化剂载体；氨基官能团适合进一步衍生"],
    "表征图谱": {
      "XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-UIO-66(Zr)\\xrd.png",
      "BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\NH2-UIO-66(Zr)\\bet.png"
    },
    "cache模拟结构": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\模拟结构.png",
    "cache稳定性": "1)  NH2-UIO-66 非常稳定，在水溶液和酸性条件下稳定。耐氟离子。 2）高热稳定性、热分解温度大于400℃",
    "cache应用领域": "1) 储气材料和吸附材料  2) NH2-UIO-66的刚性结构是良好的催化剂载体；氨基官能团适合进一步衍生",
    "cache表征图谱BET": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱BET.png",
    "cache表征图谱XRD": "C:\\Users\\Administrator\\Desktop\\新建文件夹 (2)\\resources\\static\\images\\cache\\cache表征图谱XRD.png"
  }
]
