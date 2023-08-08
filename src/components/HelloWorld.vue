<template>
 <el-container>
  <div class=header height:auto>
    <div class="menu" id="menu">
      <div class:head>
        <h1 content-position="left">周伦文的数学课堂</h1>
      </div>
    <div class="menupage">
      <el-row>
        <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @open="handleOpen" @close="handleClose" active-text-color="#67C23A">
          <el-col :span="4"><div><el-menu-item index="/">主页</el-menu-item></div></el-col>
          <el-col :span="4"><div><el-menu-item index="/aboutMe" >个人简介</el-menu-item></div></el-col>
          <el-col :span="4"><div><el-menu-item index="/teach">教学</el-menu-item></div></el-col>
          <el-col :span="4"><div><el-menu-item index="/Info">资料</el-menu-item></div></el-col>
          <el-col :span="4"><div><el-menu-item index="/itemBank">试题库</el-menu-item></div></el-col>
          <el-col :span="4"><div><el-menu-item index="/EduInfo">升学资讯</el-menu-item></div></el-col>
      </el-menu>
      </el-row>
      </div>
    </div>
  </div>
  <el-main>
    <div class='Main'>
      <div class="title">
        <h1 class="h11">
          欢迎来到我的主页
        </h1>
      </div>
    <div class="content">
    <h2>周伦文</h2>
    <span >中山大学</span>
    <el-divider direction="vertical"></el-divider>
    <span>2020级信息与计算科学专业</span>
    <h2>email:zhoulw5@mail2.sysu.edu.cn</h2>
    </div>
  </div>
  </el-main>
  <el-footer>
    <div class='footer'>
      <span class="scroll"></span>
      <el-divider>By lunwenZhou</el-divider>
  </div></el-footer>
</el-container>
</template>
<style>
  .header{
    border-style: solid;
    border-radius: 2px;
    border-color:#a1cc8c;
  }

 .el-footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    height: auto;
    font-weight: bold;
    font-size: 1.1em;
    color: #1c4792;
  }
  .el-main {
    background-color: #fff;
    color: #333;

  }
  body > .el-container {
    margin-bottom: 100%;
  }
  h1{
    text-align:center;
  }
  .h11{
    text-align:left;
  }
  .el-divider__text {
    position: absolute;
    background-color: #FFF;
    padding: 0 20px;
    font-weight: bold;
    font-size: 1.1em;
    color: #1c4792;
}
  </style>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      index: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      var name = ''
      if (key === '1') name = 'index'
      if (key === '2') name = 'aboutMe'
      if (key === '3') name = 'teach'
      if (key === '4') name = 'Info'
      if (key === '5') name = 'itemBank'
      if (key === '6') name = 'EduInfo'
      var targetEle = document.querySelector('.' + name)
      var offsetTop = targetEle.offsetTop
      document.documentElement.scrollTop = offsetTop - 150
    }
  }
}
</script>