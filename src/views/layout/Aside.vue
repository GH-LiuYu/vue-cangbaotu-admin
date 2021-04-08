<<<<<<< HEAD
<template>
  <div>
    <div :style="{width:isCollapse==true?'54px':''}" class="titlebar">
       <img src="../../assets/logo/logo.svg" :style="{width:isCollapse==true?'54px':'60px',height:isCollapse==true?'54px':'60px'}">
       <span style="align-self: center;margin-left: 5px" v-show="!isCollapse">藏宝图</span>
    </div>
    <el-menu
            :default-active="$route.path"
            router
            :collapse="isCollapse"
            class="el-menu-vertical"
            background-color="rgb(0, 21, 41)"
            text-color="#fff"
            active-text-color="rgb(64, 158, 255)"
    >
      <el-menu-item index="/introduce" class="cbt-menu-item">
        <i class="el-icon-s-home"></i>
        <span>我的主页</span>
      </el-menu-item>
      <el-menu-item index="/excellent" class="cbt-menu-item">
        <i class="el-icon-menu"></i>
        <span>优质资源</span>
      </el-menu-item>
      <el-menu-item index="/documents" class="cbt-menu-item">
        <i class="el-icon-reading"></i>
        <span>文档资源</span>
      </el-menu-item>
      <el-submenu index="2">
        <!-- 插槽 插入一级导航标题 -->
        <template slot="title">
          <i class="el-icon-set-up"></i>
          <span>编程语言</span>
        </template>
        <!-- 二级导航标题 -->
        <el-menu-item-group>
          <el-menu-item index="/dashboard">
            PHP语言
          </el-menu-item>
          <el-menu-item index="/B-Extension/B-Extension">
            GO语言
          </el-menu-item>
          <el-menu-item index="/C-Management/C-Management">
            Python语言
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  props:['isCollapse'],
  components: {},
  data() {
    return {
      logo:'../../assets/logo/logo.svg',

    };
  },
  created() {
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .el-menu-vertical:not(.el-menu--collapse) {
   /*修改侧边栏宽度*/
    width: 200px;
  }
  .el-menu {
    border-right-width: 0;
  }
  .el-main {
    color: #333;
  }
  .titlebar{
    display: flex;
    height: 60px;
    color: #fff;
    justify-content:flex-start;
  }
  .el-menu--collapse {
    width: 54px;
  }
  .cbt-menu-item{
    padding-left:15px!important;
  }
</style>
<style lang="scss">
  .el-submenu__title{
    padding-left:15px!important;
  }


</style>
=======
<template>
  <div>
    <div :style="{width:isCollapse==true?'54px':''}" class="titlebar">
       <img src="../../assets/logo/logo.svg" :style="{width:isCollapse==true?'54px':'60px',height:isCollapse==true?'54px':'60px'}">
       <span style="align-self: center;margin-left: 5px" v-show="!isCollapse">------</span>
    </div>
    <el-menu
            :default-active="$route.path"
            router
            :collapse="isCollapse"
            class="el-menu-vertical"
            background-color="rgb(0, 21, 41)"
            text-color="#fff"
            active-text-color="rgb(64, 158, 255)"
    >
      <el-menu-item index="/introduce" class="cbt-menu-item">
        <i class="el-icon-s-home"></i>
        <span>我的主页</span>
      </el-menu-item>
      <el-submenu index="2">
        <!-- 插槽 插入一级导航标题 -->
        <template slot="title">
          <i class="el-icon-set-up"></i>
          <span>编程语言</span>
        </template>
        <!-- 二级导航标题 -->
        <el-menu-item-group>
          <el-menu-item index="/test">
            测试
          </el-menu-item>
          <el-menu-item index="/dashboard">
            PHP语言
          </el-menu-item>
          <el-menu-item index="/B-Extension/B-Extension">
            GO语言
          </el-menu-item>
          <el-menu-item index="/C-Management/C-Management">
            Python语言
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  props:['isCollapse'],
  components: {},
  data() {
    return {
      logo:'../../assets/logo/logo.svg',

    };
  },
  created() {
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .el-menu-vertical:not(.el-menu--collapse) {
   /*修改侧边栏宽度*/
    width: 200px;
  }
  .el-menu {
    border-right-width: 0;
  }
  .el-main {
    color: #333;
  }
  .titlebar{
    display: flex;
    height: 60px;
    color: #fff;
    justify-content:flex-start;
  }
  .el-menu--collapse {
    width: 54px;
  }
  .cbt-menu-item{
    padding-left:15px!important;
  }
</style>
<style lang="scss">
  .el-submenu__title{
    padding-left:15px!important;
  }


</style>
>>>>>>> 8d0916e99114e7f6536cdcd5c3993252e41c8d9b
