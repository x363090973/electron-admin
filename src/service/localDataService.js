import makeReactive from "./makeReactive";

const path = require('path')
const fs = require('fs')

class LocalData {

  /**登录信息本地缓存*/
  userCache = {
    lastUser: {
      username: "",
      password: "",
      isMemoried: false,
      type: "ca"
    },
    userList: [],
  }

  /**CA本地数据 */
  ca_config_ini = {
    localData: [],
    email: '',
    yanshi: 0,
    caoshi: 0,
    showSet: ''
  }

  /**SK本地配置数据 */
  sk_config_ini = {
    localData: [],
    email: '',
    yanshi: 0,
    caoshi: 0,

  }
  /**SK本地企业数据 */
  localData_tax = []


  constructor() {
    this.filePath = path.join(process.execPath, '../localdata')
    this.iniPath = path.join(process.execPath, '../localdata/ini.json')
    this.dataPath = path.join(process.execPath, '../localdata/ini_ca.json')
    this.dataPath_tax = path.join(process.execPath, '../localdata/tax_data.json')
    this.dataPath_tax_ini = path.join(process.execPath, '../localdata/tax_ini.json')
    this.getUserCache()
    this.getCa_config_ini()
    this.getLocalData_tax()
    this.getSK_config_ini()
  }
  /**获取用户登录记录 */
  getUserCache() {

    //判断目录是否存在
    if (!fs.existsSync(this.filePath)) {
      fs.mkdirSync(this.filePath)
    }

    try {
      this.userCache = JSON.parse(fs.readFileSync(this.iniPath, 'utf8'))
    } catch (error) {
      //判断配置文件是否存在

      var ini = {
        lastUser: {},
        userList: [],
      }
      fs.writeFileSync(this.iniPath, JSON.stringify(ini))
    }

  }

  /**保存用户登录记录 */
  saveUserCache(userCache) {
    this.userCache = userCache
    fs.writeFileSync(this.iniPath, JSON.stringify(userCache))
  }

  /**读取ca模块的本地配置数据 */
  getCa_config_ini() {
    try {
      this.ca_config_ini = JSON.parse(fs.readFileSync(this.dataPath, 'utf8'))
    } catch (error) {
      //判断配置文件是否存在
      var ini = {
        localData: [],
        email: '',
        yanshi: '',
        caoshi: '',
        showSet: ''
      }
      fs.writeFileSync(this.dataPath, JSON.stringify(ini))
    }
  }

  /**保存ca模块的本地配置数据 */
  saveCa_config_ini(ca_config_ini) {
    this.ca_config_ini = ca_config_ini
    fs.writeFileSync(this.dataPath, JSON.stringify(ca_config_ini))
  }

  //taxdisk模块的本地数据存取
  getLocalData_tax() {
    try {
      const {
        version,
        companyList
      } = JSON.parse(fs.readFileSync(this.dataPath_tax, 'utf8'))
      if (version !== 1) {
        throw new Error('本地版本错误')
      }
      this.localData_tax = companyList

    } catch (error) {
      //判断配置文件是否存在
      var ini = {
        version: 1,
        companyList: []
      }
      fs.writeFileSync(this.dataPath_tax, JSON.stringify(ini))
    }
  }
  /**
   * 保存本地SK盘数据
   * @param {Object} 需要保存的数据
   * @returns {void}
   */
  saveLocalData_tax(data) {
    this.localData_tax = data

    fs.writeFileSync(this.dataPath_tax, JSON.stringify({
      version: 1,
      companyList: data
    }))
  }

  getSK_config_ini() {

    try {
      this.sk_config_ini = JSON.parse(fs.readFileSync(this.dataPath_tax_ini, 'utf8'))
    } catch (error) {
      //判断配置文件是否存在
      var ini = {
        email: '',
        yanshi: '',
        caoshi: '',
      }
      fs.writeFileSync(this.dataPath_tax_ini, JSON.stringify(ini))
    }

  }

  /**
   * 保存SK模式的配置数据
   * @param {Object} 需要保存的数据
   * @returns {void}
   */

  saveSK_config_in(sk_config_ini) {
    this.sk_config_ini = sk_config_ini
    fs.writeFileSync(this.dataPath_tax_ini, JSON.stringify(sk_config_ini))
  }



}

let exportModel = new LocalData()
exportModel = makeReactive(new LocalData())
export default exportModel
