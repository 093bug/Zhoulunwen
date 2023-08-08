<template>
  <div class="Info">
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
 <!-- <el-collapse v-model="activeNames" @change="handleChange"> -->
  <span>这里暂时没有东西捏 simimasan！！ U3U</span>
  <!-- <el-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item> -->
<!-- </el-collapse> -->
</el-card>
<div class="title">
      <el-divider content-position="center">By lunwenZhou</el-divider>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Info',
  data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
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
</style>