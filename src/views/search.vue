<!-- eslint-disable vue/multi-word-component-names -->
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
        <el-menu-item index="1" class="menu-item menu-item-choose" @click="handle1">
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
          <el-menu-item index="4" class="menu-item" @click="handle4">
            
            <el-icon><Promotion /></el-icon>
            <span>调查问卷</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
            </el-aside>
           <el-main > 
            <input type="text" id="search" v-model="key_word" placeholder="输入相关院校名称" >
            <el-button type="primary" @click="search">搜索</el-button>
            <div id="show">
				    <span id="schoolName">{{schoolName}}</span>
            <span id="photo">{{photo}}</span><br>
            <span id="address">{{address}}</span><br>
            <span id="telephone">{{telephone}}</span><br>
            <span id="website">{{website}}</span><br>
            <span id="mail">{{mail}}</span><br>
            <span id="detailedInfo">{{detailedInfo}}</span>
			
            </div>
          <router-view></router-view> 
          <router-view></router-view> 
         </el-main>
        </el-container>
      </el-container>
  </div>

</template>

<script>
import json from '../assets/school.json' 

  export default {
    name:"search",
    data(){
      return{
    "schoolName":"",
    "photo":"",
    "address": "",
    "telephone":"",
    "website":"",
    "mail": "",
    "detailedInfo": "",
    key_word:""
      }
    },

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
    search(){
      
      let vm=json
      if(this.key_word == "苍南中学"){
      document.getElementById("schoolName").innerHTML="院校名称:"+vm.schoolName
      document.getElementById("photo").innerHTML="学校图片:"+vm.photo
      document.getElementById("address").innerHTML="学校地址:"+vm.address
      document.getElementById("telephone").innerHTML="学校电话："+vm.telephone
      document.getElementById("website").innerHTML="学校官网："+vm.website
      document.getElementById("mail").innerHTML="学校邮箱："+vm.mail
      document.getElementById("detailedInfo").innerHTML="学校信息："+vm.detailedInfo}
      
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
    .my-autocomplete li {
    line-height: normal;
    padding: 7px;
    }
   .my-autocomplete li .name {
    text-overflow: ellipsis;
    overflow: hidden;
   }
   .my-autocomplete li .addr {
   font-size: 12px;
   color: #b4b4b4;
   }
   .my-autocomplete li .highlighted .addr {
   color: #ddd;
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