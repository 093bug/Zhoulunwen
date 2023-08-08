<template>
    <div class="aboutMe">
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
      <span>学院：数学学院（珠海 )&emsp;&emsp;&emsp;&emsp;&emsp;电话：13002000685</span><br>
      <span>专业成绩：3.9/5.0&emsp;&emsp;&emsp;&emsp;&emsp;专业排名：17/88</span><br>
      <span>外语水平：大学英语六级510分&emsp;&emsp;大学英语四级560分&emsp;&emsp;国际日语能力测试N2&emsp;112分</span>
      </el-card>
      <div class="title">
        <el-divider content-position="left">教育经历</el-divider>
      </div>
      <el-card class="box-card" style="margin-bottom: 0px;">
        <span content-position="left">2014-09&emsp;~&emsp;2017-06&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;广州市玉岩中学</span><br>
        <span>2017年广州市中考755分（满分810分），为广州市玉岩中学2017届最高分，在全市排名前200名</span><br>
        <span>2017-09&emsp;~&emsp;2020-06&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;广州市第二中学</span><br>
        <span>2020年广东省高考652分，在班级排名为第4名。</span>
      </el-card>
      <div class="title">
        <el-divider content-position="left">获奖情况</el-divider>
      </div>
      <el-card class="box-card" style="margin-bottom: 20px;">
        <span>•第14届全国大学生数学竞赛（数学类高年级）&emsp;全国三等奖</span><br>
        <span>•第14届全国大学生数学竞寒（数学A类）广东赛区&emsp;一等奖</span><br>
        <span>•第13届全国大学生数学竞赛（数学A类）广东赛区&emsp;二等奖</span><br>
        <span>•2022年全国大学生数学建模竞赛广东省三等奖</span><br>
        <span>•2021-2022学年中山大学优秀学生奖学金二等奖</span><br>
        <span>•2020-2021学年中山大学优秀学生奖学金三等奖</span>
      </el-card>
      <div class="title">
        <el-divider content-position="left">个人陈述</el-divider>
      </div>
      <el-card class="box-card" style="margin-bottom: 20px;">
        <span>大一大二期间，眾计的家救授课时长超过300小时，涵盖小学数学、小学奥数及初中高中数学课程。本科期间长期关注、研究高考数学的安化与规律，熟悉广州中考以及广东省高考、自主招生的政策。</span><br><br>
        <span class="content1">一、教案体系</span><br>
        <span>&emsp;&emsp;我編写了成体系的牧家，井在大三时梅大一、大二上课时使用到的牧案系統地整理，井蛋新排版。同时编写有学习方法读本，培养学生的学习方法，以期提升学生的整体学习能力。</span><br><br>
        <span class="content2">二、授课形式</span><br>
        <span>&emsp;&emsp;课程材料有多种：</span><br>
        <span>&emsp;&emsp;①家长如果有指定的救材，我将以该救材为主，适当补充一些所需但书上没有的知识;</span><br>
        <span>&emsp;&emsp;②家长有指定的章节与知识，我会自己设计所需的材料;</span><br>
        <span>&emsp;&emsp;③预习或复习，我会根据学生的情况设计所需的材料。</span><br><br>
        <span class="content3">三、课外讨论与资讯</span><br>
        <span>&emsp;&emsp;如果学生平时在学习有疑问，欢迎多和我联系，我将会在有空的时候用语音回答，平时家长想了解招生、考试的政策及资讯、大学专业等时，多与我联系，我将会积极详细地和您说明。</span><br>
        <span>&emsp;&emsp;注：即使课程已经结束，始终欢迎学生和家长联系我，希望能助力学生长期的发展</span>
      </el-card>
      <div class="title">
        <el-divider content-position="center">By lunwenZhou</el-divider>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'aboutMe'
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

  .content1,.content2,.content3{
    font-weight:bold;
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