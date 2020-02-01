<template>
  <div class="main">
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
        <div class="form" v-for="(item, index) in currentMaterial.formList" :key="index">
          <div class="form-item">
            <div class="form-item-label" v-html="`${item.name}`"></div>

            <el-input
              v-model="currentMaterial.formList[index].value"
              disabled
              size="small"
              style="width:140px"
            ></el-input>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { materials } from "src/localData";
import { DataService } from "src/service";
const { ipcRenderer } = require("electron");

export default {
  data() {
    return {
      materials: materials,
      swithParam: "",
      form: {},
      result: ""
    };
  },

  components: {},

  computed: {
    currentMaterial() {
      return DataService.currentMaterial || { formList: {} };
    }
  },

  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
  },
  mounted() {
    console.log("this.currentMaterial", this.currentMaterial);
  },

  methods: {}
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
  }
  .header {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
  }
  .content {
    overflow: hidden;
    .el-scrollbar {
      height: 410px;
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
          width: 240px;
          text-align: right;
        }
      }
    }
  }
}
</style>
