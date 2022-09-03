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
          <el-menu-item index="2" class="menu-item" @click="handle2">
            <el-icon><Select/></el-icon>
            <span>成绩收集</span>
          </el-menu-item>
          <el-menu-item index="3" class="menu-item menu-item-choose" @click="handle3">
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
           <el-main  index="/seach">
            <!-- <table class="table_show">
              <table class="table_show1">录取概率</table>
              <table class="table_show2">推荐高中信息</table>
            </table>
             <table class="table_show">
              <table class="table_show1">录取概率</table>
              <table class="table_show2">推荐高中信息</table>
            </table>
             <table class="table_show">
              <table class="table_show1">录取概率</table>
              <table class="table_show2">推荐高中信息</table> -->
              
		<section class="p-5  text-center text-sm-start ">
			<div class="card text-center">
				<div class="card-header">
					学校1名字
				</div>
				<div class="card-body">
					<img src="" class=" img-responsive"
						width="250" height="200">
					<p class="card-text">环境优美</p>
					<a href="#" class="btn btn-primary">前去了解</a>
				</div>
				<hr>
			</div>
			<div class="card text-center">
				<div class="card-header">
					学校2名字
				</div>
				<div class="card-body">
					<img src="" class=" img-responsive"
						width="250" height="200">
					<p class="card-text">符合你</p>
					<a href="#" class="btn btn-primary ">前去了解</a>
				</div>
				<hr>
			</div>
			<div class="card text-center">
				<div class="card-header">
					学校3名字
				</div>
				<div class="card-body">
					<img src="" class=" img-responsive"
						width="250" height="200">
			  <p class="card-text">顶呱呱</p>
					<a href="#" class="btn btn-primary">前去了解</a>
				</div>
				<hr>
			</div>
		</section>
           
          <router-view></router-view> 
         </el-main>
        </el-container>
      </el-container>
  </div>

</template>

<script >
// @ is an alias to /src
export default{
  name: 'get',
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
