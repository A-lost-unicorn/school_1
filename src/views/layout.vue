<template>
<div class="common-layout">
    <el-container>
          <el-header class="common-header flex-float">
          <div class="flex" >
            <img class="logo" src="../assets/logo.png" alt="">
            <h1 class="title">初升高拟推荐志愿填报系统</h1>
          </div>
          <el-button type="danger">退出</el-button>
        </el-header>
      <el-container>         
        <el-aside width="300px" class="common-aside">  
            <el-row class="table_user">
      <el-col :span="16">
        <el-menu
          default-active="2"
          class="menu"
        >
        <el-menu-item index="1" class="menu-item" @click="handle1">
            <el-icon><HomeFilled /></el-icon>
            <span>搜索院校</span>
          </el-menu-item>
          <el-menu-item index="2" class="menu-item" @click="handle2">
            <el-icon><Select/></el-icon>
            <span>成绩收集</span>
          </el-menu-item>
          <el-menu-item index="3" class="menu-item" @click="handle3">
            <el-icon><setting /></el-icon>
            <span>院校推荐</span>
          </el-menu-item>
          <el-menu-item index="4" class="menu-item menu-item-choose" @click="handle4">
            
            <el-icon><Promotion /></el-icon>
            <span>调查问卷</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
            </el-aside>
           <el-main  index="/seach">
              <h2 class="text-center">初升高拟推荐志愿填报系统</h2>
              <div class="text-center">欢迎你</div>
              <img src="../assets/layout.webp" alt="">
          <router-view></router-view> 
         </el-main>
        </el-container>
      </el-container>
  </div>

</template>

<script >
// @ is an alias to /src
export default {
  name: 'layout',
  methods:{
    handle1(){
      this.$router.push('/search')
    },
    handle2(){
      this.$router.push('select')
    },
    handle3(){
      this.$router.push('get')
    },
    handle4(){
      this.$router.push('questionnaire')
    }
}
}


</script>

<style scoped>
    .el-container{
      height: 100vh;
      overflow: hidden;
    }
    .common-header{
     background: rgb(41, 49, 49);
     display: flex;
    }
    .common-aside{
     background: rgb(16, 32, 32);
    }
    .logo{
      width: 80px;
    }
    .title{
      color: aliceblue;
    }
    .table_user{
     width: 450px;
     height: 325px;
    }
    .table_show{
      border-style: solid;
      margin: 40px;
      width: 750px;
      height: 200px;
    }
    .table_show1{
      border-style: solid;
      margin: 7px;
      width: 175px;
      height: 25px;
    }
    .table_show2{
      border-style:solid;
      margin: 7px;
      width: 750px;
      height: 150px;
    }
    .menu{
      background-color: rgb(16, 32, 32);
      text-align: center;
    }
    .menu-item{
      color:white;
      font-size: 15px;
    }

</style>
