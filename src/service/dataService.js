import makeReactive from "./makeReactive";
const fs = require("fs");
const Path = require("path");
import {
  materials,
  BlankMaterial
} from "src/localData";

class DataService {
  constructor() {
    /**本地自己添加的数据 */
    this.localJson = this.getLocalJson();
    this.initMaterials(materials);
    /**当前显示的公式 */
    this.currentMaterial = materials[0];
    this.currentShowType = "info";
    this.cacheMaterial = new BlankMaterial();
  }

  /**获取本地添加的材料信息 */
  getLocalJson() {

    let filePath = Path.join(__static, `../static/loacol.json`);
    if (!fs.existsSync(filePath)) {
      return [];
    } else {
      try {
        return JSON.parse(fs.readFileSync(filePath));
      } catch (error) {
        return [];
      }
    }
  }
  /**保存材料信息 */
  saveLocalJson() {
    let filePath = Path.join(__static, `../static/loacol.json`);
    fs.writeFileSync(filePath, JSON.stringify(this.localJson));
  }
  deleteData(material) {
    let index = this.localJson.findIndex(e => e.name == material.name);
    let _index = this.materials.findIndex(e => e.name == material.name);
    this.localJson.splice(index, 1);
    this.currentMaterial = this.materials[_index - 1];
    this.saveLocalJson();
  }
  /**将材料数据的图片进行整理 */
  initMaterials(materials) {
    let _materials = [...materials, ...this.localJson];
    _materials.forEach(e => {
      let bicPath = Path.join(__static, `../static/images/${e.name}`);

      if (fs.existsSync(Path.join(bicPath, "./image.png"))) {
        e.image = Path.join(bicPath, "./image.png");
      }
      if (fs.existsSync(Path.join(bicPath, "./xrd.png"))) {
        e.表征图谱.XRD = Path.join(bicPath, "./bet.png");
      }
      if (fs.existsSync(Path.join(bicPath, "./xrd.png"))) {
        e.表征图谱.BET = Path.join(bicPath, "./bet.png");
      }

      e.formList.forEach(e2 => {
        if (e2.isImg) {
          let imgPath = Path.join(__static, `../static/images/${e.name}/${e2.name}`);
          if (fs.existsSync(imgPath)) {
            let paths = fs.readdirSync(imgPath);
            paths = paths.map(e3 => (e3 = imgPath + "\\" + e3));
            e2.value = paths;
          } else {
            e2.value = [];
          }
        }
      });



    });

    this.materials = _materials;
  }
}

let exportModel = new DataService();
exportModel = makeReactive(new DataService());

export default exportModel;
