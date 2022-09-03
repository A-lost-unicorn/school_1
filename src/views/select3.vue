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
          <el-menu-item index="2" class="menu-item menu-item-choose" @click="handle2">
            <el-icon><Select/></el-icon>
            <span>成绩收集</span>
          </el-menu-item>
          <el-menu-item index="3" class="menu-item" @click="handle3">
            <el-icon><setting /></el-icon>
            <span>院校推荐</span>
          </el-menu-item>
          <el-menu-item index="4" class="menu-item" @click="handle4">
            
            <el-icon><Promotion /></el-icon>
            <span>调查问卷</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
            </el-aside>
           <el-main >
            <h2 class="text-center">性格调查</h2>
           <textarea class="form-control"  rows="3" placeholder="输入对自己性格信息"></textarea>
            <div class="btn">
              <el-form-item>
             <el-button type="primary" @click="onSubmit">继续</el-button>
            <el-button type="danger" @click="handle2">终止</el-button>
             </el-form-item>
            </div>
             
          <router-view ></router-view> 
         </el-main>
        </el-container>
      </el-container>
  </div>

</template>

<script > 
  export default{
    name:"select",
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
    },
    exit(){
      this.$router.push('layout')
    },
    quit(){
        this.$router.push('layout')
      }
  },
   
  }
 

</script>

<style>
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
    .table_show21{
      border-style: solid;
      margin:7px 0px 0px 380px;
      width: 200px;
      height: 50px;
      font-size: 30px;
      text-align: center;
    }
    .table_show22{
      float: left;
      border-style:solid;
      margin:15px  60px 0px 100px;
      width: 750px;
      height: 300px;
      text-align: center;
    }
    .btn{
      margin:0px 0px 0px 575px;
    }
    .menu{
      background-color: rgb(16, 32, 32);
      text-align: center;
    }
    .menu-item{
      color:white;
      font-size: 15px;
    }
    .menu-item-choose{
      color: rgb(123, 123, 189);
    }
 
</style>