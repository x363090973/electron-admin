"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        "@": resolve("src"),
        src: resolve("src")
      }
    },
    module: {
      rules: [{
        test: /node_modules[\/\\](iconv-lite)[\/\\].+/,
        resolve: {
          aliasFields: ["main"]
        }
      }]
    },
    //vue调试模式
    devtool: "source-map"
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        // Detail: https://www.electron.build/configuration/configuration
        appId: "com.example.yixingyouqi",
        productName: "易行油气吸附材料检索", //项目名，也是生成的安装文件名，即aDemo.exe
        // "publish": [{
        //   "provider": "github",
        //   owner: 'x363090973', // 拥有者
        //   token: 'ec48a1xxxxxxxxxxxxxxxxxxx9329', // gitToken
        //   releaseType: 'release',
        //   publishAutoUpdate: true // 发布自动更新（需要配置GH_TOKEN）。 默认true
        // }],
        publish: [{
          provider: "generic",
          url: "http://106.15.234.206:1234/assets/electron-quick-start"
        }],
        "win": { //win相关配置
          // "icon": "build/installerHeaderIcon_120.ico", //图标，当前图标在根目录下，注意这里有两个坑
          "target": [{
            "target": "nsis", //利用nsis制作安装程序
            "arch": [
              "ia32" //32位
            ]
          }]
        },
        // mac: {
        //   // mac
        //   icon: "build/mac.icns"
        // },
        nsis: {
          // 是否一键安装，建议为 false，可以让用户点击下一步、下一步、下一步的形式安装程序，如果为true，当用户双击构建好的程序，自动安装程序并打开，即：一键安装（one-click installer）
          oneClick: false,
          // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowElevation: true,
          // 允许修改安装目录，建议为 true，是否允许用户改变安装目录，默认是不允许
          allowToChangeInstallationDirectory: true,
          // 安装图标
          installerIcon: "build/installerIcon_120.ico",
          // 卸载图标
          uninstallerIcon: "build/uninstallerIcon_120.ico",
          // 安装时头部图标
          installerHeaderIcon: "build/installerHeaderIcon_120.ico",
          // 创建桌面图标
          createDesktopShortcut: true,
          // 创建开始菜单图标
          createStartMenuShortcut: true
          // electron中LICENSE.txt所需要的格式，并非是GBK，或者UTF-8，LICENSE.txt写好之后，需要进行转化，转化为ANSI
        }
      }
    }
  }
};
