<template>
  <div class="aside">
    <el-input
      placeholder="搜素名称"
      prefix-icon="el-icon-search"
      v-model="serchStr"
      style="margin-bottom:20px"
    >
    </el-input>
    <el-button type="primary" style="margin-bottom:20px;width:100%">添加资料</el-button>
    <div class="list">
      <div v-for="(item, index) in 20" :class="{ item: true, active: true }" v-bind:key="index">
        {{ item }}
      </div>
    </div>
    <!-- <el-button type="primary" style="margin-bottom:20px;width:100%">导出资料</el-button> -->
  </div>
</template>

<script>
const { ipcRenderer } = require("electron");
import { materials } from "src/localData";
import { DataService } from "src/service";

export default {
  data() {
    return {
      materials: materials,
      serchStr: ""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handleClick(equation) {
      DataService.material = equation;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/styles/variables.scss";
.aside {
  height: 100%;
  .list {
    height: 400px;
    overflow: auto;
    .item {
      cursor: pointer;
      &:hover {
        color: #8dbcfc;
        background-color: #e8f3fe;
      }
    }

    .active {
      color: #1dbcfc;
      background-color: #e8f3fe;
    }
  }
}
</style>
