<template>
    <div style="margin-left: 20em">
      <div v-for="item in list" style="width: 20em;height: 5em;border: 2px solid red;margin-top: 20px">
        {{item.age+" "+item.name}}
      </div>
    </div>
</template>

<script>
    export default {
      data(){
          return{
            list:[
              {name:'lml',age:5},
              {name:'lz',age:6}
            ]
          }
      }
    }
</script>

<style scoped>

</style>
