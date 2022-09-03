<template>
  <div class="common-layout">
    <el-container>
          <el-header class="common-header flex-float">
          <div class="flex" >
            <img class="logo" src="../assets/logo.png" alt="">
            <h1 class="title">初升高拟推荐志愿填报系统</h1>
          </div>
          <el-button type="danger" @click="exit">退出</el-button>
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
          <el-menu-item index="2" class="menu-item  menu-item-choose" @click="handle2">
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
            <div class="container overflow-hidden">
            <div class="row gy-5">
              <div class="col-12">
                <div class="p-3 border bg-light">
                  <h3>一模</h3>
                  <div class="container overflow-hidden">
                    <div class="row gy-3">
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="语文成绩">
                      </div>
                      <div class="col-4">
                        <input class=" bg-light" type="text" placeholder="英语成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="思政成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="数学成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="科学成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="体育成绩">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="p-3 border bg-light"> <h3>二模</h3>
                  <div class="container overflow-hidden">
                    <div class="row gy-3">
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="语文成绩">
                      </div>
                      <div class="col-4">
                        <input class=" bg-light" type="text" placeholder="英语成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="思政成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="数学成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="科学成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="体育成绩">
                      </div>
                    </div>
                  </div></div>
              </div>
              <div class="col-12">
                <div class="p-3 border bg-light"> <h3>三模</h3>
                  <div class="container overflow-hidden">
                    <div class="row gy-3">
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="语文成绩">
                      </div>
                      <div class="col-4">
                        <input class=" bg-light" type="text" placeholder="英语成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="思政成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="数学成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="科学成绩">
                      </div>
                      <div class="col-4">
                        <input class="  bg-light" type="text" placeholder="体育成绩">
                      </div>
                    </div>
                  </div></div>
              </div>
             
            </div>
          </div>
          <div class="btn">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">继续</el-button>
              <el-button type="danger" @click="handle2">终止</el-button>
            </el-form-item>
          </div>

          <router-view></router-view>
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
      onSubmit(){
        this.$router.push('select2')
      },
      exit(){
        this.$router.push('layout')
      },
    
  },
  // {appContext} = getCurrentInstance
  mounted(){
    // console.log(this);
  }
   
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
    .table_show{
      border-style: solid;
      margin: 40px;
      width: 800px;
      height: 200px;
    }
    .table_show1{
      border-style: solid;
      margin:7px 0px 0px 350px;
      width: 85px;
      height: 45px;
      font-size: 35px;
      text-align: center;
    }
    .table_show2{
      float: left;
      border-style:solid;
      margin:15px  60px 0px 100px;
      width: 75px;
      height: 30px;
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
    .enu-item-choose{
      color: rgb(123, 123, 189);
    }
    .menu-item-choose{
      color: rgb(123, 123, 189);
    }
 
</style>