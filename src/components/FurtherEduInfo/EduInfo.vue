<template>
  <div class="EduInfo">
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
<el-card class="box-card">
<el-upload
  class="upload-demo"
  action=""
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :on-success="handleSuccess"
  :on-error="handleError"
  :on-change="handelChange"
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList"
>
  <el-button size="small" type="primary">点击上传</el-button>
  <!-- 用于指定上传文件下的文字说明 -->
  <div slot="tip" class="el-upload__tip">
    只能上传jpg/png文件，且不超过500kb
  </div>
</el-upload>
</el-card>
<div class="title">
      <el-divider content-position="center">By lunwenZhou</el-divider>
    </div>
  </div>
</template>
<script>

export default {
  name: 'EduInfo',
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
</style>