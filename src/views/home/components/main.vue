<template>
  <div class='main'>
    <div class="title">{{this.currentEquation.name + ':' }}
      <span v-html="this.currentEquation.equation"></span>
    </div>

    <div class="header">
      请选择要计算的目标:
      <el-select
        v-model="swithParam"
        size="small"
        placeholder="请选择要计算的目标"
      >
        <el-option
          v-for="item in this.currentEquation.params"
          :key="item.name"
          :disabled="item.forbidden"
          :label="`${item.name}:${item.describe}`"
          :value="item.name"
        >
        </el-option>
      </el-select>
      <el-button
        type="text"
        style="margin-left:20px"
        @click="resetForm"
      >清空输入</el-button>
      <el-button
        type="text"
        style="margin-left:20px"
        @click="getVlaue"
      >进行计算</el-button>
    </div>
    <div class="content">
      <el-scrollbar
        wrap-class="list"
        view-style="font-weight: bold"
        view-class="view-box"
        :native="false"
      >
        <div class='form'
          v-for="item in this.currentEquation.params"
            :key="item.name">

          <div class='form-item'>
            <div class='form-item-label'  v-html="`${item.describe}(${item.html}) :`"></div>
            
            <el-input
                v-model="form[item.name]"
                clearable
                :disabled="item.name == swithParam"
                size="small"
                style="width:140px"
              ></el-input>
              <span
                style="margin-left:10px"
                :title="item.describe"
              >{{'单位:'+item.unit}}</span>
              <span
                style="margin-left:10px;color:#409EFF"
                v-show="item.name == swithParam"
              >待计算</span>
          </div>
        </div>

        <div >
          {{`${this.swithParam}=${this.describe}=${this.result}`}}
        </div>
      </el-scrollbar>

    </div>
  </div>
</template>

<script>

import { allEquations } from 'src/localData'
import { DataService } from 'src/service'
const { ipcRenderer } = require('electron')

export default {
  data () {
    return {
      allEquations: allEquations,
      swithParam: '',
      form: {},
      result:'',
    }
  },

  components: {},
  
  computed: {
  
    currentEquation () {
      return DataService.currentEquation
    },
    describe(){
      let item = this.currentEquation.params.find(e => e.name === this.swithParam)
      if(item) {
        return item.getDescribe(this.form)
      }else {
         return ''
      }
      
    }
    
  },

  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    currentEquation: function (newQuestion, oldQuestion) {
      newQuestion.params.forEach(e => {
        this.$set(this.form, e.name, 0)
      })
      this.swithParam = newQuestion.params[newQuestion.params.length - 1].name
    }
  },
  mounted () {
    this.swithParam = this.currentEquation.params[this.currentEquation.params.length - 1].name
    this.currentEquation.params.forEach(e => {
      this.$set(this.form, e.name, 0)
    })
    ipcRenderer.on('test', this.callbackA)
  },

  methods: {
    resetForm () {
      for (const key in this.form) {
        this.form[key] = 0
      }
    },
    getVlaue () {
      let item = this.currentEquation.params.find(e => e.name === this.swithParam)
      this.result =  this.form[this.swithParam] = item.getValue(this.form)
    },
    callbackA(event,  message){
      console.log('message',message) // Prints 'whoooooooh!'
      ipcRenderer.removeListener('test',this.callbackA)
    },
  }
}

</script>
<style lang='scss' scoped>
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
