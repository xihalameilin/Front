<template>
    <div>
      <Button type="primary" @click="notify">原始的按钮</Button>
    </div>
</template>

<script>
    export default {
        data() {
          return {}
        },
      methods:{
        notify(){
            alert("notify")
        }
      }
    }
</script>

<style scoped>

</style>
