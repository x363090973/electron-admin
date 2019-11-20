<template>
  <div class='aside'>
    <el-menu default-active="2"
             class="el-menu-vertical-demo">
      <el-submenu v-for="item in allEquations"
                  :key="item.type"
                  :index="item.type">
        <template slot="title">
          <span style="font-wight:bolder">{{item.type}}</span>
        </template>
        <el-menu-item v-for="equation in item.equations"
                      :key="equation.name"
                      @click.native="handleClick(equation)"
                      :index="equation.name">
          {{equation.name}}
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>

const { ipcRenderer } = require('electron')
import { allEquations } from 'src/localData'
import { DataService } from 'src/service'

export default {
  data () {
    return {
      allEquations: allEquations
    }
  },

  components: {},

  computed: {},

  mounted () {

  },

  methods: {

    handleClick (equation) {

      DataService.currentEquation = equation
    }

  }
}

</script>
<style lang='scss' scoped>
@import "src/styles/variables.scss";
.aside {
  height: 100%;
  
}
</style>
