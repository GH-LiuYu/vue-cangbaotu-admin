<template>
  <div class="nav-content">
    <div>
      <el-button type="success" icon="el-icon-plus"  size="mini" @click="Add()" >增加</el-button>
      <el-button type="warning" icon="el-icon-edit"  size="mini"  @click="Edit()" >编辑</el-button>
      <el-button type="danger" icon="el-icon-delete"  size="mini" @click="Delete()" >删除</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    props:['addRoute','editRoute','deleteRoute'],
    data() {
      return {

      }
    },
    methods: {
        Add:function () {
          let that = this;
          this.$router.push({ path: this.addRoute,query: {name:'4e4'}}).catch(error => {
            console.info(error.message)
          })
        },
        Edit:function () {
          let that = this;
          this.$router.push({ path: this.editRoute,query: {name:'445'}}).catch(error => {
            console.info(error.message)
          })
        },
        Delete:function () {
          let that = this;
          this.$router.push({ path: this.deleteRoute,query: {name:'454'}}).catch(error => {
            console.info(error.message)
          })
        },

    }
  }
</script>

<style lang="scss" scoped>


</style>

