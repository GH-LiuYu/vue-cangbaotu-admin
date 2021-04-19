<template>
<div class="content">
  <div class="nav-bar">
   <Navbar></Navbar>
  </div>
  <div class="nav-content">
    <Table></Table>
    <Page class="page"></Page>
  </div>
</div>
</template>
<script>
  import Table from "../../components/Table";
  import Page from "../../components/Page"
  import Navbar from "../../components/Navbar"
  export default {
    components: {Table,Page,Navbar},
  }
</script>

<style lang="scss" scoped>

  .content{
    background-color: white;
    border-radius: 12px 12px 0px 0px;
    .nav-bar{
      line-height: 47px;
      background-color:#6b6471;
      padding-left: 10px;
      padding-bottom: 5px;
      border-radius: 12px 12px 0px 0px;
    }
    .nav-content{
      margin-top: 1px;
      .page{
        padding: 20px;
       /*text-align: center;*/
      }
    }
  }

</style>

