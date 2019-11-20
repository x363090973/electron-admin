
const ENV = process.env.TEST_ENV 
var package_config = require("package.json");

/**
 * app配置属性
 */
const appConfig = {
    /**程序名称 */
    name: package_config.name,
    /**程序版本号 */
    version: package_config.version,
    objProcessname: package_config.build['productName'],
    /**程序启动后高度 */
    openHeight: 100,
    /**程序启动后宽度 */
    openWidth: 100,
};






export default {
  appConfig,   
};
