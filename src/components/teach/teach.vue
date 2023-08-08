<template>
    <div class="teach">
      <div class=header height:auto>
    <div class="menu" id="menu">
      <div>
        <h2>周伦文的数学课堂</h2>
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
  <el-card class="box-card" style= "text-align=left">
 <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="课程Sum2301-1（暑期高中数学）" name="1">
    <span>课程讲义</span><br>
    <span>07.24 第1讲 高中数学介绍、初高中衔接、集合.pdf</span><br>
    <span>07.26 第2讲 集合、逻辑用语、不等式、函数概念.pdf</span><br>
    <span>07.28 第3讲 函数概念、指数、对数、幂函数.pdf</span><br>
    <span>07.31 第4讲 基本初等函数.pdf</span><br>
    <span>08.02 第5讲 三角函数.pdf</span><br>
    <span>08.04 第6讲 三角函数、立体几何初步.pdf</span><br>
    <span>08.07 第7讲 立体几何.pdf</span><br>
    <span>其他资料</span><br>
    <span>必修一 进度表.xlsx</span><br>
    <el-divider></el-divider>
    <sapn>百度网盘链接为：</sapn><a href="https://pan.baidu.com/s/1S6FIhg6dbV2_OFujNSbt_w">https://pan.baidu.com/s/1S6FIhg6dbV2_OFujNSbt_w</a><br>
    <span>提取码：1234</span>
  </el-collapse-item>
  <el-collapse-item title="课程Sum2301-2（暑期高中数学）" name="2">
    <sapn>百度网盘链接为：</sapn><a href="https://pan.baidu.com/s/1kGf6KSsOUMBxorllcItZZg">https://pan.baidu.com/s/1kGf6KSsOUMBxorllcItZZg </a><br>
    <span>提取码：1234</span>
  </el-collapse-item>
  <el-collapse-item title="课程Sum2301-3（暑期高中数学）" name="3">
    <sapn>百度网盘链接为：</sapn><a href="https://pan.baidu.com/s/1SVqAP1B88Ler3RWKddiiTw">https://pan.baidu.com/s/1SVqAP1B88Ler3RWKddiiTw </a><br>
    <span>提取码：1234</span>
  </el-collapse-item>
</el-collapse>
  </el-card>
  <div class="title">
        <el-divider content-position="center">By lunwenZhou</el-divider>
      </div>
    </div>
  </template>
  <script>
  
  export default {
    name: 'teach',
  }
  </script>

<style scoped> 
  .header{
    border-style: solid;
    border-radius: 2px;
    border-color:#a1cc8c;
  }

  h2{
    text-align:center;
  }
  .el-divider__text {
    position: absolute;
    background-color: #FFF;
    padding: 0 20px;
    font-weight: bold;
    font-size: 1.1em;
    color: #1c4792;
}

  .el-card{
    border-style: solid;
    border-radius: 2px;
    /* border-color:#a1cc8c; */
}

li {
  text-align:center;
}

/deep/ .el-collapse-item__header{
  font-weight: bold;
  font-size: 16px;
}
</style>