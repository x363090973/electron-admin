import makeReactive from "./makeReactive";

import {
  allEquations
} from 'src/localData'

class DataService {


  constructor() {
    /**当前显示的公式 */
    this.currentEquation = allEquations[0].equations[0]

  }


}



let exportModel = new DataService()
exportModel = makeReactive(new DataService())

export default exportModel;
