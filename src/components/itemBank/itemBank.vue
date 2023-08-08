<template>
  <div class="itemBank">
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
  <el-collapse-item title="试题资料" name="3">
    <sapn>百度网盘链接为：</sapn><a href="https://pan.baidu.com/s/1OnoJwT9Hf8xhW6fK-Z6vFA">https://pan.baidu.com/s/1OnoJwT9Hf8xhW6fK-Z6vFA</a><br>
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
  name: 'itemBank',
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