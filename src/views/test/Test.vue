<template>
  <div>
    test
  </div>
</template>

<script>
import {login} from '@/api/user';
export default {
  name: 'test',
  components: {},
  data() {
    return {
      data:[],
    };
  },
  created() {
   this.logins();
  },
  methods: {
    logins:function () {
      login({test:'555'}).then(response => {
        this.data  = response.data;
        console.log(this.data)
      }).catch(error => {
        console.info(error.message)
      })
    }
  }
}
</script>
<style scoped>
</style>
