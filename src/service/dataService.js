import makeReactive from "./makeReactive";

import {
  materials
} from 'src/localData'

class DataService {


  constructor() {
    /**当前显示的公式 */
    this.currentMaterial = materials[0]

  }


}



let exportModel = new DataService()
exportModel = makeReactive(new DataService())

export default exportModel;
