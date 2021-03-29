<template>
  <div>
  <el-container>
    <el-aside width="auto">
      <Aside :isCollapse="isCollapse"></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <div class="box_bgd" @click="sw">
          <!-- 点击展开收起导航和切换对应图标 -->
          <i class="el-icon-s-fold" v-show="block"></i>
          <i class="el-icon-s-unfold" v-show="toggle"></i>
          <Header></Header>
        </div>
      </el-header>
      <el-main ref="homePage" class="backtop">
        <transition name="fade" mode="out-in">
<!--          想要动画生效，下面必须加key-->
            <router-view  :key="key"></router-view>
        </transition>
        <el-backtop target=".backtop" :visibility-height=200></el-backtop>
      </el-main>
<!--        <el-footer>-->
<!--            <Footer></Footer>-->
<!--        </el-footer>-->
    </el-container>
  </el-container>
  </div>
</template>
<script>
  import Aside from "./Aside";
  import Footer from "./Footer";
  import Header from "./Header";
  // import BackTop from "@/components/BackTop"
  export default {
    name: "Main",
    components: {Aside,Footer,Header},
    data() {
      return {
        isCollapse: false, //导航栏默认为展开
        toggle: false, //第二个图标默认隐藏
        block: true, //默认显示第一个图标

        clientHeight:'',
      };
    },
    mounted(){
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    },
    computed: {
      key() {
        return this.$route.fullPath;
      },
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    methods: {
      // 动态控制展开与收起和切换对应图标
      sw() {
        this.isCollapse = !this.isCollapse;
        this.toggle = !this.toggle;
        this.block = !this.block;
      },
      changeFixed(clientHeight){ //动态修改样式
        this.$refs.homePage.$el.style.height = clientHeight-100+'px';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .el-header {
    color: #333;
    line-height: 60px;
    height: 100%;
    padding: 0 !important;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    text-align: center;
  }

  .el-aside {
    background-color: rgb(0, 21, 41);
    color: #333;
    height: 100vh;
    left: 0;
    top: 0;
    bottom: 0;
    display: block;
  }

  .el-main{
  }
  .el-footer {
      background-color: #b3c0d1;
      color: #333;
      line-height: 60px;
      height: 100vh;
      padding: 0;
      text-align: center;
  }
  .box_bgd {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 54px;
  }
  .box_bgd i {
    font-size: 20px;
  }
  .box_bgd:hover {
    background-color: rgb(203, 215, 230);
  }
  .fade-leave-active,
  .fade-enter-active {
    transition: all 1s;
  }

  .fade-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
