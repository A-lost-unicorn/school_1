<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
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
        <el-main>
          <div style="margin: 20px" />
          <!-- <el-form style="max-width: 460px">
            <el-form-item label="竞赛信息：">
              <el-input v-model="Chinese" />
            </el-form-item>
            <el-form-item label="学科能力：">
              <el-input v-model="English" />
            </el-form-item>
            <el-form-item label="性格调查：">
              <el-input v-model="science" />
            </el-form-item>
            <el-form-item label="中考信息：">
              <el-input v-model="politics" />
            </el-form-item>
            <el-form-item label="高考信息：">
              <el-input v-model="PE" />
            </el-form-item> -->
          <form>
            <span class="mb-3">
              <div class="row">
                <br>中考信息:
                <div class="col">
                  <label class="form-label">语文</label>
                  <input type="text" class="form-control" id="Chineseinput">
                </div>
                <div class="col">
                  <label class="form-label">数学</label>
                  <input type="text" class="form-control" id="Mathinput">
                </div>
                <div class="col">
                  <label class="form-label">英语</label>
                  <input type="text" class="form-control" id="Englishinput">
                </div>
                <div class="col">
                  <label class="form-label">科学</label>
                  <input type="text" class="form-control" id="Scientinput">
                </div>
                <div class="col">
                  <label class="form-label">思政</label>
                  <input type="text" class="form-control" id="Politicalinput">
                </div>
              </div>

              <div class="row">
                <br>高考信息:
                <div class="col">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="wenzhong">
                    <label class="form-check-label" for="wenzhong">
                      文综
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="lizhong" checked>
                    <label class="form-check-label" for="lizhong">
                      理综
                    </label>
                  </div>
                </div>
                <div class="col">
                  <label class="form-label">高考成绩</label>
                  <input type="text" class="form-control" id="gkgrade">
                </div>
              </div>
            </span>
            <span class="mb-3">
              <label class="form-label">学科能力：</label>
              <textarea class="form-control" id="xuekenenli" rows="3"></textarea>
            </span>
            <span class="mb-3">
              <label class="form-label">能力测评：</label>
              <textarea class="form-control" id="nenlicepin" rows="3"></textarea>
            </span>
            <span class="mb-3">
              <label class="form-label">性格调查：</label>
              <textarea class="form-control" id="xingediaocha" rows="3"></textarea>
            </span>


            <!-- <el-form-item>
                <el-button type="submit" >继续</el-button>
              </el-form-item> -->
            <span class="mt-3">
              <button type="submit" class="btn btn-primary" @click="subfun()">提交</button>
            </span>
          </form>
          <!-- </el-form> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script >
// @ is an alias to /src
export default {
  name: 'questionnaire',
  data() {
    return {
      Chinese: "",
      English: "",
      science: "",
      politics: "",
      PE: ""
    }
  },
  methods: {
    handle1() {
      this.$router.push('/search')
    },
    handle2() {
      this.$router.push('select')
    },
    handle3() {
      this.$router.push('get')
    },
    handle4() {
      this.$router.push('questionnaire')
    },
    exit(){
      this.$router.push('layout')
    },
    subfun() {
      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://baidu.com');
      xhr.send();
    }
  }
}


</script>

<style scoped>
.el-container {
  height: 100vh;
  overflow: hidden;
}

.common-header {
  background: rgb(41, 49, 49);
  display: flex;
}

.common-aside {
  background: rgb(16, 32, 32);
}

.logo {
  width: 80px;
}

.title {
  color: aliceblue;
}

.table_user{
     width: 450px;
     height: 325px;
    }

.table_show {
  border-style: solid;
  margin: 40px;
  width: 750px;
  height: 200px;
}

.table_show1 {
  border-style: solid;
  margin: 7px;
  width: 175px;
  height: 25px;
}

.table_show2 {
  border-style: solid;
  margin: 7px;
  width: 750px;
  height: 150px;
}

.btn {
  margin: 0px 0px 0px 375px;
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
