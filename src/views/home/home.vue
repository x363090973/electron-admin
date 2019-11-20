<template>
  <el-container class="homePage">
    <el-header style="height:40px">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="260px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

import Header from './components/header.vue';
import Aside from './components/aside.vue';
import Main from './components/main.vue';

export default {
  name: 'home',
  components: {
    Header,
    Aside,
    Main
  },
};
</script>

<style lang="scss">
.homePage {
  height: 100%;
}
</style>

