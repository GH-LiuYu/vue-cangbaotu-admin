<template>
  <div class="h-content">
    <div>
    </div>
    <div class="h-login">登录</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {

    };
  },
  methods: {
    switchNav:function () {

    }
  }
}
</script>
<style scoped>
.h-content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  width: 100%;
}
  .h-login{
    padding-right: 30px;
  }
</style>
