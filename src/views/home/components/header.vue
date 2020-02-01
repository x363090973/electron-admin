<template>
  <div class="header">
    <div class="logo">
      <span>易行油气储运材料检索录</span>
    </div>
    <div class="control">
      <svg class="icon" aria-hidden="true" @click="minimizeWindows">
        <use xlink:href="#icon-jian"></use>
      </svg>

      <svg class="icon" aria-hidden="true" @click="closeWindow">
        <use xlink:href="#icon-RectangleCopy"></use>
      </svg>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = require("electron");
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    minimizeWindows() {
      console.log("zuixiaohua ");
      ipcRenderer.send("HIDE_WINDOW");
    },
    closeWindow() {
      this.$confirm("确定要关闭？")
        .then(async () => {
          const loading = this.$loading({
            lock: true,
            text: `正在关闭中`,
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          ipcRenderer.send("CLOSE_WINDOW");
        })
        .catch(() => {});
    },
    openDevtools() {
      ipcRenderer.send("OPEN_DEVTOOLS");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/styles/variables.scss";
.header {
  background-color: $menuText;
  height: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-app-region: drag;
  .logo {
    -webkit-app-region: no-drag;
    text-align: left;
    span {
      color: $menuActiveText;
    }
  }
  .control {
    -webkit-app-region: no-drag;
    .icon {
      width: 2em;
      height: 2em;
      vertical-align: -0.15em;
      fill: block;
      overflow: hidden;
      margin-left: 10px;
      &:hover {
        cursor: pointer;
        fill: red;
      }
    }
  }
}
</style>
