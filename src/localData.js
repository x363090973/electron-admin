/**所有类型的储运公式 */

export const materials = [

  {
    name: 'PCN-333(AI)',
    imange: '',
    formList: [{
        name: "单位分子式",
        value: ''
      },

      {
        name: "单位分子量",
        value: ''
      },
      {
        name: "孔径",
        value: ''
      },
      {
        name: "孔容",
        value: ''
      },
      {
        name: "比表面",
        value: ''
      },
      {
        name: "模拟结构",
        value: ''
      },
      {
        name: "产品形貌",
        value: ''
      },
      {
        name: "粒径",
        value: ''
      }
    ],
    稳定性: [],
    应用领域: [],
    表征图谱: {
      XRD: '',
      BET: ''
    }
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
