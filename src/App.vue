<template>
  <div id="app">
    <router-view/>
    <Modal v-model="isShow" footer-hide><loading></loading></Modal>

  </div>
</template>

<script>
  import loading from '@/components/Loading'
  export default {
    components:{
      loading
    },
    computed:{
      isShow(){
        return this.$store.getters.isShow;
      }
    },
name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
