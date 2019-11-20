/**所有类型的储运公式 */
const mymath = require('mathjs')
export const allEquations = [
  {
    type: '油气蒸发损耗计算',
    equations: [
      {
        name: '拱顶罐大呼吸蒸发损耗',
        equation: 'L<sub>dw</sub>=K<sub>t</sub>K<sub>1</sub>V<sub>1</sub>P<sub>y</sub>/(690-4u<sub>y</sub>)K',
        params: [
          {
            name: 'Kt',
            html: 'K<sub>t</sub>',
            describe: "周转系数",
            forbidden:true,
            unit: ''
          },
          {
            name: 'K1',
            html: 'K<sub>1</sub>',
            describe: "油品系数",
            forbidden:true,
            unit: ''
          },
          {
            name: 'V1',
            html: 'V<sub>1</sub>',
            describe: "泵送液体入罐量",
            forbidden:true,
            unit: 'm3'
          },
          {
            name: 'Py',
            html: 'P<sub>y</sub>',
            describe: "油品平均温度下的蒸汽压",
            forbidden:true,
            unit: 'kPa'
          },
          {
            name: 'uy',
            html: 'u<sub>y</sub>',
            describe: "油蒸汽摩尔质量",
            forbidden:true,
            unit: 'Kg/Kmol'
          },
          {
            name: 'K',
            html: 'K',
            describe: "单位换算系数",
            forbidden:true,
            unit: ''
          },{
            name: 'Ldw',
            html: 'L<sub>dw</sub>',
            describe: "拱顶罐大呼吸损耗量",
            unit: '瓦特(W)',
            getValue: ({
              Ldw,
              Kt,
              K1,
              V1,
              Py,
              uy,
              K,
            }) => {
              return mymath.evaluate(` ${Kt}*${K1}*${V1}*${Py}/((690-4${uy})*${K})`)
            },
            getDescribe:({
              Ldw,
              Kt,
              K1,
              V1,
              Py,
              uy,
              K,
            }) => {
              return `Kt*K1*V1*Py/((690-4*uy)*K) =  ${Kt}*${K1}*${V1}*${Py}/((690-4*${uy})*${K})`
            },
          }
          
        ]
      },
      {
        name: '外浮顶罐大呼吸损耗',
        equation: 'L<sub>w</sub>=4Q<sub>1</sub>Cρ/D',
        params: [

          {
            name: 'D',
            html: 'D',
            describe: "油罐直径",
            forbidden:true,
            unit: 'm'
          },
          {
            name: 'C',
            html: 'C',
            describe: "油罐壁黏附系数",
            forbidden:true,
            unit: 'm3/1000 m2'
          },
          {
            name: 'ρ',
            html: 'ρ',
            describe: "油品密度",
            forbidden:true,
            unit: 'Kg/m3'
          },
         
          {
            name: 'Q1',
            html: 'Q<sub>1</sub>',
            describe: "油罐年周转量",
            forbidden:true,
            unit: '103m3/a'
          },{
            name: 'Lw',
            html: 'L<sub>w</sub>',
            describe: "外浮顶罐大呼吸损耗量",
            unit: 'Kg/a',
            getValue: ({
   
              Lw,
              Q1,
              C,
              ρ,
              D,
 
            }) => {
              return mymath.evaluate(`4*${Q1}*${C}*${ρ}/${D}`)
            },
            getDescribe:({
              Lw,
              Q1,
              C,
              ρ,
              D,
            }) => {
              return `4*Q1*Cρ/D =  4*${Q1}*${C}*${ρ}/${D}`
            },
          }
          
        ]
      },
      {
        name: '外浮顶罐小呼吸蒸发损耗量',
      
        equation: 'L<sub>s</sub>=K<sub>1</sub>(F*D+f)PMK<sub>2</sub>',
        params: [

          {
            name: 'K1',
            html: 'K<sub>1</sub>',
            describe: "单位换算系数",
            forbidden:true,
            unit: ''
          },
          {
            name: 'D',
            html: 'D',
            describe: "油罐直径",
            forbidden:true,
            unit: ''
          },
          {
            name: 'P',
            html: 'P',
            describe: "蒸汽压函数",
            forbidden:true,
            unit: ''
          },
          {
            name: 'M',
            html: 'M',
            describe: "油气摩尔质量",
            forbidden:true,
            unit: ''
          },
          {
            name: 'K2',
            html: 'K<sub>2</sub>',
            describe: "油品系数",
            forbidden:true,
            unit: ''
          },
          {
            name: 'f',
            html: 'f',
            describe: "油盘附件总损耗系数",
            forbidden:true,
            unit: ''
          },
          {
            name: 'F',
            html: 'F',
            describe: "密封损耗系数",
            forbidden:true,
            unit: ''
          },
          {
            name: 'Ls',
            html: 'L<sub>s</sub>',
            describe: "外浮顶罐小呼吸蒸发损耗",
            unit: '',
            getValue: ({
           
              Ls,
              K1,
              f,
              F,
              P,
              D,
              M,
              K2,
 
            }) => {
              return mymath.evaluate(`${K1}*(${F}*${D}+${f})*${P}*${M}*${K2} `)
            },
            getDescribe:({
              
              Ls,
              K1,
              f,
              F,
              P,
              D,
              M,
              K2,
            }) => {
              return ` K1*（F*D+f）*P*M*K2 =  ${K1}*（${F}*${D}+${f}）*${P}*${M}*${K2}`
            },
          }
          
        ]
      },
     
  ]
  },
  {
    type: '加热炉换热器计算',
    equations: [
      {
        name: '傅立叶定律',
        equation: 'Φ=(T<sub>1</sub>-T<sub>2</sub>)/(δ/λA)',
        params: [
          {
            name: 'T1',
            html:'T<sub>1</sub>',
            describe: "点1的温度",
            unit: '摄氏度(℃)',
            getValue: ({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return mymath.evaluate(`${T2} + (${δ}*${Φ}/(${λ}*${A}))`)
            },
            getDescribe:({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return `T2 + (δ*Φ/(λ*A)) = ${T2} + (${δ}*${Φ}/(${λ}*${A}))`
            }
          },
          {
            name: 'T2',
            html:'T<sub>2</sub>',
            describe: "点2的温度",
            unit: '摄氏度(℃)',
            getValue: ({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return mymath.evaluate(`${T1} - (${δ}*${Φ}/(${λ}*${A}))`)
            },
            getDescribe:({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return `T1 - (δ*Φ/(λ*A)) = ${T1} - (${δ}*${Φ}/(${λ}*${A}))`
            }
          },
          {
            name: 'δ',
            html:'δ',
            describe: "介质厚度",
            unit: 'm',
            getValue: ({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return mymath.evaluate(`(${T1}-${T2})(${λ}*${A})/(*${Φ})`)
            },
            getDescribe:({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return `(T1-T2)(λ*A)/(*Φ) = (${T1}-${T2})(${λ}*${A})/(*${Φ})`
            }
          },
          {
            name: 'λ',
            html:'λ',
            describe: "导热系数",
            unit: 'W/(m•℃)',
            getValue: ({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return mymath.evaluate(`(δ*Φ)/((T1-T2)*A) = (${δ}*${Φ})/((${T1}-${T2})*${A})`)
            },
            getDescribe:({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return `(δ*Φ)/((T1-T2)*A) = (${δ}*${Φ})/((${T1}-${T2})*${A})`
            }
          },
          {

            name: 'A',
            html:'A',
            describe: "截面积",
            unit: '平方米(m2)',
            getValue: ({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return mymath.evaluate(`(${δ}*${Φ})/((${T1}-${T2})*${λ})`)
            },
            getDescribe:({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return `(δ*Φ)/((T1-T2)*λ) = (${δ}*${Φ})/((${T1}-${T2})*${λ})`
            }
          },
          {
            name: 'Φ',
            html:'Φ',
            describe: "热流量",
            unit: '',
            getValue: ({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return mymath.evaluate(`(${T1}-${T2})/(${δ}/(${λ}*${A}))`)
            },
            getDescribe: ({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return `(T1-T2)/(δ/(λ*A)) = (${T1}-${T2})/(${δ}/(${λ}*${A}))`
            }
          },
        ],

      },
      {
        name: '吸热放热量在线计算',
        equation: 'Q=mc(T<sub>1</sub>-T<sub>2</sub>)',
        params: [
          {
            name: 'm',
            html:'m',
            describe: "质量",
            unit: '千克(kg)',
            getValue: ({
              Q,
              m,
              c,
              T1,
              T2
            }) => {
              return mymath.evaluate(`${Q}/(${c}*(${T1} - ${T2}))`)
            },
            getDescribe:({
              Q,
              m,
              c,
              T1,
              T2
            }) => {
              return `Q/(c*(T1 - T2)) = ${Q}/(${c}*(${T1} - ${T2}))`
            }
          },
          {
            name: 'c',
            html:'c',
            describe: "比热容",
            unit: '(J/(kg*k))',
            getValue: ({
              Q,
              m,
              c,
              T1,
              T2
            }) => {
              return mymath.evaluate(`${Q}/(${m}*(${T1} - ${T2}))`)
            },
            getDescribe:({
              Q,
              m,
              c,
              T1,
              T2
            }) => {
              return `Q/(m*(T1 - T2)) = ${Q}/(${m}*(${T1} - ${T2}))`
            }
          },
          {
            name: 'T1',
            describe: "初始温度",
            html:'T<sub>1</sub>',
            unit: '摄氏度(℃)',
            getValue: ({
              Q,
              m,
              c,
              T1,
              T2
            }) => {
              return mymath.evaluate(`${Q}/(${m}*${c}) + ${T2}`)
            },
            getDescribe:({
              Q,
              m,
              c,
              T1,
              T2
            }) => {
              return `Q/(m*c) + T2 = ${Q}/(${m}*${c}) + ${T2}`
            }
          },
          {
            name: 'T2',
            describe: "终止温度",
            html:'T<sub>2</sub>',
            unit: '摄氏度(℃)',
            getValue: ({
              Q,
              m,
              c,
              T1,
              T2
            }) => {
              return mymath.evaluate(`${T1} - (${Q}/(${m}*${c}))`)
            },
            getDescribe:({
              T1,
              T2,
              δ,
              λ,
              A,
              Φ
            }) => {
              return `T1 - (Q/(m*c)) = ${T1} - (${Q}/(${m}*${c}))`
            }
          },
          {
            name: 'Q',
            describe: "热量",
            html:'Q',
            unit: '焦耳(J)',
            getValue: ({
              Q,
              m,
              c,
              T1,
              T2
            }) => {
              return mymath.evaluate(`${m}*${c}*(${T1}-${T2}))`)
            },
            getDescribe:({
              Q,
              m,
              c,
              T1,
              T2
            }) => {
              return `m*c*(T1-T2)) = ${m}*${c}*(${T1}-${T2}))`
            }
          },
        ]
      },
      {
        name: '热对流基本方程式',
        equation: 'Φ=hA(T-T<sub>W</sub>)',
        params: [{
            name: 'h',
            html:'h',
            describe: "对流传热系数",
            unit: '(W/(m2℃))',
            getValue: ({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return mymath.evaluate(`${Φ}/(${A}*(${T} - ${TW}))`)
            },
            getDescribe:({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return `Φ/(A*(T - TW)) = ${Φ}/(${A}*(${T} - ${TW}))`
            }
          
          },
          {
            name: 'A',
            html:'A',
            describe: "传热面积",
            unit: '平方米(m2)',
            getValue: ({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return mymath.evaluate(`${Φ}/(${h}*(${T} - ${TW}))`)
            },
            getDescribe:({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return `Φ/(h*(T - TW)) = ${Φ}/(${h}*(${T} - ${TW}))`
            }
          },
          {
            name: 'T',
            html:'T',
            describe: "热流体温度",
            unit: '摄氏度(℃)',
            getValue: ({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return mymath.evaluate(`${Φ}/(${h}*${A}) + ${TW}`)
            },
            getDescribe:({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return `Φ/(h*A) + TW = ${Φ}/(${h}*${A}) + ${TW}))`
            }
          },
          {
            name: 'TW',
            html:'T<sub>W</sub>',
            describe: "壁面温度",
            unit: '摄氏度(℃)',
            getValue: ({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return mymath.evaluate(`${T} - (${Φ}/(${h}*${A}))`)
            },
            getDescribe:({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return `T - (Φ/(h*A)) = ${T} - (${Φ}/(${h}*${A}))`
            }

          },
          {
            name: 'Φ',
            html:'Φ',
            describe: "对流传热速率",
            unit: '瓦特(W)',
            getValue: ({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return mymath.evaluate(`${h}*${A}*(${T}-${TW})`)
            },
            getDescribe:({
              Φ,
              h,
              A,
              T,
              TW
            }) => {
              return `h*A*(T-TW) = ${h}*${A}*(${T}-${TW})`
            }

          },
        ]
      },
      {
        name: '加热站燃料油耗量',
        equation: 'g=q/(EηR)',
        params: [{
            name: 'q',
            html:'q',
            describe: "有效热负荷",
            unit: '瓦特(W)',
            getValue: ({
              g,
              q,
              E,
              ηR
            }) => {
              return mymath.evaluate(`${g}*${E}*${ηR}`)
            },
            getDescribe:({
              g,
              q,
              E,
              ηR
            }) => {
              return `g*E*ηR = ${g}*${E}*${ηR}`
            }
          },
          {
            name: 'E',
            html:'E',
            describe: "燃料油热值",
            unit: '(J/kg)',
            getValue: ({
              g,
              q,
              E,
              ηR
            }) => {
              return mymath.evaluate(`${q}/(${g}*${ηR})`)
            },
            getDescribe:({
              g,
              q,
              E,
              ηR
            }) => {
              return `q/(g*ηR)= ${q}/(${g}*${ηR})`
            }
          },
          {
            name: 'ηR',
            html:'ηR',
            describe: "加热油效率",
            unit: '',
            getValue: ({
              g,
              q,
              E,
              ηR
            }) => {
              return mymath.evaluate(`${q}/(${g}*${E})`)
            },
            getDescribe:({
              g,
              q,
              E,
              ηR
            }) => {
              return `q/(g*E)= ${q}/(${g}*${E})`
            }
          },
          {
            name: 'g',
            html:'g',
            describe: "燃料油耗量",
            unit: '（kg/s）',
            getValue: ({
              g,
              q,
              E,
              ηR
            }) => {
              return mymath.evaluate(`${q}/(${ηR}*${E})`)
            },
            getDescribe:({
              g,
              q,
              E,
              ηR
            }) => {
              return `q/(ηR*E) = ${q}/(${ηR}*${E})`
            }

          },

        ]
      }
    ]
  },
  


]


class DataService {


  constructor() {
    /**当前显示的公式 */
    this.T1 = 0
    this.T2 = 0
    this.δ = 0
    this.λ = 0
    this.A = 0
    this.Φ = 0

  }


}
