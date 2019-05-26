<template>
  <div>
    <div v-for="item in personList" style="float: left;width: 20%">
      <Icon type="md-person" size="100"></Icon>
      <h1 @click="jump(item.name)">{{item.name}}</h1>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          personList:[
            {
              name:'刘钦'
            },
            {
              name:'刘志'
            },
            {
              name:'陆梅临'
            },
          ]
        }
      },

      methods:{
        jump(name){
          alert(name)
        }
      }
    }
</script>

<style scoped>
  h1{
    cursor: pointer;
  }
  h1:hover{
    color:red;
  }
</style>
