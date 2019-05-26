<template>
  <div>
    <div v-for="item in personList" style="float: left;width: 20%;margin-left: 5%;text-align:center">
      <Icon type="ios-contact-outline" size="100" style="float: left;margin-left: 5%;margin-top: 5%;color:#008de1"></Icon>
      <p style="float: left;margin-left: 50%;margin-right: 50%;font-size: 18px;font-weight: bold" @click="jump(item.name)">{{item.name}}</p>
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
  p{
    cursor: pointer;
  }
  p:hover{
    color:#006bc7;
  }
</style>
