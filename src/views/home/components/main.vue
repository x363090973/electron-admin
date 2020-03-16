<template>
  <div style="height:100%">
    <div v-show="currentShowType === 'info'" class="main">
      <div class="title">
        {{ currentMaterial.name }}
      </div>

      <div class="content">
        <el-scrollbar
          wrap-class="list"
          view-style="font-weight: bold"
          view-class="view-box"
          :native="false"
        >
          <div class="image">
            <img :src="currentMaterial.image" alt="" srcset="" />
          </div>
          <div class="form" v-for="(item, index) in currentMaterial.formList" :key="index">
            <div class="form-item">
              <div class="form-item-label" v-html="`${item.name}:`"></div>

              <div v-if="currentMaterial.formList[index].isImg" class="form-item-value">
                <div v-for="(img, index) in currentMaterial.formList[index].value" :key="index">
                  <img :src="img" alt="" style="height:140px" />
                </div>
              </div>
              <div v-if="!currentMaterial.formList[index].isImg" class="form-item-value">
                {{ currentMaterial.formList[index].value }}
              </div>
            </div>
          </div>
          <div class="material-wdx">
            <div class="title">稳定性</div>
            <div
              v-for="(info, index) in currentMaterial.稳定性"
              :key="index"
              class="material-wdx-info"
            >
              {{ `${index + 1}:${info}` }}
            </div>
          </div>
          <div class="material-yyly">
            <div class="title">应用领域</div>
            <div
              v-for="(info, index) in currentMaterial.应用领域"
              :key="index"
              class="material-wdx-info"
            >
              {{ `${index + 1}:${info}` }}
            </div>
          </div>
          <div class="material-bztb">
            <div class="title">表征图谱</div>
            <div class="material-bztb-imgs">
              <div class="img">
                <img
                  v-if="!!currentMaterial.表征图谱.XRD"
                  :src="currentMaterial.表征图谱.XRD"
                  alt=""
                />
                <div>XRD</div>
              </div>
              <div class="img">
                <img
                  v-if="!!currentMaterial.表征图谱.BET"
                  :src="currentMaterial.表征图谱.BET"
                  alt=""
                />
                <div>BET</div>
              </div>
            </div>
          </div>
          <el-button type="danger" v-show="isLocalJson" round @click="deleteData">删除</el-button>
          <el-button type="danger" v-show="!isLocalJson" round disabled>原始数据无法删除</el-button>
        </el-scrollbar>
      </div>
    </div>
    <div v-show="currentShowType === 'edit'" class="main">
      <div class="title">
        添加新材料
      </div>
      <div class="content">
        <el-scrollbar
          wrap-class="list"
          view-style="font-weight: bold"
          view-class="view-box"
          :native="false"
        >
          <div class="form">
            <div class="form-item">
              <div class="form-item-label" v-html="'名称:'"></div>

              <div class="form-item-value">
                <el-input v-model.trim="cacheMaterial.name" placeholder="请输入内容"></el-input>
              </div>
            </div>
            <div class="form-item upload">
              <div class="form-item-label" v-html="'图片:'"></div>

              <div class="form-item-value">
                <div v-show="!cacheMaterial.image" class="box">
                  <i
                    class="icon el-icon-plus"
                    @click="
                      () => {
                        let image = this.uploadImg('image');
                        this.cacheMaterial.image = image;
                      }
                    "
                  ></i>
                </div>
                <div v-show="!!cacheMaterial.image" class="img box">
                  <img
                    :src="cacheMaterial.image + '?' + new Date().getTime()"
                    alt=""
                    srcset=""
                    style="height:200px"
                  />
                  <i
                    class="icon el-icon-delete"
                    @click="deleteImg(cacheMaterial.image, 'image')"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div class="form" v-for="(item, index) in cacheMaterial.formList" :key="index">
            <div class="form-item">
              <div class="form-item-label" v-html="`${item.name}:`"></div>

              <div v-if="cacheMaterial.formList[index].isImg" class="form-item-value">
                <div class="form-item upload">
                  <div class="form-item-value">
                    <div v-show="!cacheMaterial.cache模拟结构" class="box">
                      <i class="icon el-icon-plus" @click="uploadImg_cache"></i>
                    </div>
                    <div v-show="!!cacheMaterial.cache模拟结构" class="img box">
                      <img
                        :src="cacheMaterial.cache模拟结构 + '?' + new Date().getTime()"
                        alt=""
                        srcset=""
                        style="height:200px"
                      />
                      <i class="icon el-icon-delete" @click="deleteImg_cache"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!cacheMaterial.formList[index].isImg" class="form-item-value">
                <el-input
                  v-model="cacheMaterial.formList[index].value"
                  placeholder="请输入内容"
                ></el-input>
              </div>
            </div>
          </div>

          <div class="form">
            <div class="form-item">
              <div class="form-item-label" v-html="'稳定性:'"></div>

              <div class="form-item-value">
                <el-input
                  v-model.trim="cacheMaterial.cache稳定性"
                  placeholder="请输入内容"
                ></el-input>
              </div>
            </div>

            <div class="form-item">
              <div class="form-item-label" v-html="'应用领域:'"></div>

              <div class="form-item-value">
                <el-input
                  v-model.trim="cacheMaterial.cache应用领域"
                  placeholder="请输入内容"
                ></el-input>
              </div>
            </div>

            <div class="form-item upload">
              <div class="form-item-label" v-html="'表征图谱XRD:'"></div>

              <div class="form-item-value">
                <div v-show="!cacheMaterial.cache表征图谱BET" class="box">
                  <i
                    class="icon el-icon-plus"
                    @click="
                      () => {
                        let image = this.uploadImg('cache表征图谱BET');
                        this.cacheMaterial.cache表征图谱BET = image;
                      }
                    "
                  ></i>
                </div>
                <div v-show="!!cacheMaterial.cache表征图谱BET" class="img box">
                  <img
                    :src="cacheMaterial.cache表征图谱BET + '?' + new Date().getTime()"
                    alt=""
                    srcset=""
                    style="height:200px"
                  />
                  <i
                    class="icon el-icon-delete"
                    @click="deleteImg(cacheMaterial.cache表征图谱BET, 'cache表征图谱BET')"
                  ></i>
                </div>
              </div>
            </div>

            <div class="form-item upload">
              <div class="form-item-label" v-html="'表征图谱BET:'"></div>

              <div class="form-item-value">
                <div v-show="!cacheMaterial.cache表征图谱XRD" class="box">
                  <i
                    class="icon el-icon-plus"
                    @click="
                      () => {
                        let image = this.uploadImg('cache表征图谱XRD');
                        this.cacheMaterial.cache表征图谱XRD = image;
                      }
                    "
                  ></i>
                </div>
                <div v-show="!!cacheMaterial.cache表征图谱XRD" class="img box">
                  <img
                    :src="cacheMaterial.cache表征图谱XRD + '?' + new Date().getTime()"
                    alt=""
                    srcset=""
                    style="height:200px"
                  />
                  <i
                    class="icon el-icon-delete"
                    @click="deleteImg(cacheMaterial.cache表征图谱XRD, 'cache表征图谱XRD')"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <el-button type="primary" round @click="save">保存</el-button>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import { materials, BlankMaterial } from "src/localData";
import { DataService } from "src/service";
import { delFile } from "src/utils/common";
const { ipcRenderer } = require("electron");
const dialog = require("electron").remote.dialog;
const remote = require("electron").remote;
const fs = require("fs");
const Path = require("path");

export default {
  data() {
    return {
      materials: materials,
      swithParam: "",
      form: {},
      result: "",
      disabled: false,
      稳定性: "",
      应用领域: "",
      表征图谱BET: "",
      表征图谱XRD: ""
    };
  },

  components: {},

  computed: {
    currentMaterial() {
      return DataService.currentMaterial || { formList: {} };
    },
    currentShowType() {
      return DataService.currentShowType;
    },
    cacheMaterial() {
      return DataService.cacheMaterial;
    },
    isVaild() {
      return this.cacheMaterial.name !== "";
    },
    isLocalJson() {
      return DataService.localJson.some(e => e.name === DataService.currentMaterial.name);
    }
  },

  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
  },
  mounted() {},

  methods: {
    uploadImg(dest) {
      let imagePath = dialog.showOpenDialog({
        title: "选择图片",
        filters: [{ name: "Images", extensions: ["jpg", "png", "jpeg"] }]
      });
      if (!imagePath) {
        return "";
      }
      let cachePath = Path.join(
        __static,
        `../static/images/cache/${dest}` + Path.extname(imagePath[0])
      );
      if (fs.existsSync(cachePath)) {
        fs.unlinkSync(cachePath);
      }
      fs.copyFileSync(imagePath[0], cachePath);

      return cachePath;
    },
    uploadImg_cache() {
      let imagePath = dialog.showOpenDialog({
        title: "选择图片",
        filters: [{ name: "Images", extensions: ["jpg", "png", "jpeg"] }]
      });

      if (!imagePath) {
        return "";
      }

      let cachePath = Path.join(
        __static,
        `../static/images/cache/模拟结构` + Path.extname(imagePath[0])
      );

      fs.copyFileSync(imagePath[0], cachePath);
      this.cacheMaterial.cache模拟结构 = cachePath;
    },
    deleteImg(path, dest) {
      fs.unlink(path, () => {
        this.cacheMaterial[dest] = "";
      });
    },
    deleteImg_cache() {
      fs.unlink(this.cacheMaterial.cache模拟结构, () => {
        this.cacheMaterial.cache模拟结构 = "";
      });
    },
    save() {
      if (this.cacheMaterial.cache稳定性 != "") {
        this.cacheMaterial.稳定性 = [this.cacheMaterial.cache稳定性];
      }
      if (this.cacheMaterial.cache应用领域 != "") {
        this.cacheMaterial.应用领域 = [this.cacheMaterial.cache应用领域];
      }

      if (DataService.materials.some(e => e.name == this.cacheMaterial.name)) {
        return this.$message.error("已有相同名称材料");
      }

      DataService.localJson.push(this.cacheMaterial);

      //将缓存出的文件路径改为正常路径
      let filePath = Path.join(__static, `../static/images/${this.cacheMaterial.name}`);
      let 模拟Img = Path.join(filePath, "./模拟结构");
      fs.mkdirSync(filePath);
      fs.mkdirSync(模拟Img);
      this.cacheMaterial.formList.forEach(e => {
        if (e.isImg) {
          e.value = Path.join(
            __static,
            `../static/images/${this.cacheMaterial.name}/模拟结构/模拟结构` +
              Path.extname(this.cacheMaterial.cache模拟结构)
          );
        }
      });

      if (this.cacheMaterial.cache表征图谱XRD != "") {
        this.cacheMaterial.表征图谱.XRD = Path.join(
          __static,
          `../static/images/${this.cacheMaterial.name}/xrd` +
            Path.extname(this.cacheMaterial.cache表征图谱XRD)
        );
        fs.copyFileSync(
          this.cacheMaterial.cache表征图谱XRD,
          Path.join(
            __static,
            `../static/images/${this.cacheMaterial.name}/xrd` +
              Path.extname(this.cacheMaterial.cache表征图谱XRD)
          )
        );
      }
      if (this.cacheMaterial.cache表征图谱BET != "") {
        this.cacheMaterial.表征图谱.BET = Path.join(
          __static,
          `../static/images/${this.cacheMaterial.name}/bet` +
            Path.extname(this.cacheMaterial.cache表征图谱BET)
        );
        fs.copyFileSync(
          this.cacheMaterial.cache表征图谱BET,
          Path.join(
            __static,
            `../static/images/${this.cacheMaterial.name}/bet` +
              Path.extname(this.cacheMaterial.表征图谱.BET)
          )
        );
      }
      if (this.cacheMaterial.image != "") {
        fs.copyFileSync(
          this.cacheMaterial.image,
          Path.join(
            __static,
            `../static/images/${this.cacheMaterial.name}/image` +
              Path.extname(this.cacheMaterial.image)
          )
        );
      }

      if (this.cacheMaterial.cache模拟结构 != "") {
        fs.copyFileSync(
          this.cacheMaterial.cache模拟结构,
          Path.join(
            __static,
            `../static/images/${this.cacheMaterial.name}/模拟结构/模拟结构` +
              Path.extname(this.cacheMaterial.cache模拟结构)
          )
        );
      }
      DataService.saveLocalJson();
      DataService.initMaterials(materials);
      this.$message.success("保存成功");
    },
    deleteData() {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delFile(Path.join(__static, `../static/images/${this.currentMaterial.name}`));
          DataService.deleteData(this.currentMaterial);
          DataService.initMaterials(materials);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/styles/variables.scss";
.main {
  height: 100%;
  .title {
    text-align: left;
    color: $blue;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .image {
    img {
      height: 200px;
    }
  }
  .header {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
  }
  .content {
    overflow: hidden;

    .el-scrollbar {
      height: 450px;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
    .formitem {
      display: flex;
    }
    .form {
      &-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        &-label {
          width: 160px;
          margin-right: 30px;
          text-align: right;
        }
      }
    }
    .material-wdx,
    .material-yyly {
      margin-bottom: 20px;
      &-info {
        text-align: left;
      }
    }
    .material-bztb-imgs {
      display: flex;
      img {
        height: 200px;
      }
    }
    .upload {
      .box {
        height: 200px;
        width: 200px;
        border: 1px dashed blue;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          font-size: 30px;
          cursor: pointer;
        }
      }

      .img {
        position: relative;
        .icon {
          font-size: 30px;
          cursor: pointer;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }
    }
  }
}
</style>
