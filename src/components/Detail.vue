<template>
    <div>
      <!--左边的文章详情-->
      <div style="width: 60%;float: left">
        <br>
        <br>
        <p style="font-size: 60px;margin-left: 10%">文章标题</p>
        <p style="font-size: 50px;margin-left: 10%">文章的具体内容</p>
      </div>
      <!--右边的相关内容-->
      <div style="width: 30%;float: right" >
        <div style="background-color: #fffffa;height: 100px;border: 3px solid #fff0f6" >
          <Icon type="ios-person" size="50" style="float: left;margin-left: 20%"></Icon>
          <h3 style="float: left;margin-top: 4%">UP主的名字</h3>
          <br>
          <Button type="error" style="float: left;margin-top: 10%" @click="addInterset">关注</Button>
        </div>
        <br>

        <div>
          <h2 style="float: left">最新通知:</h2>
          <br>
          <br>
          <div style="width:100%;height: 1px;border:  3px solid #fff0f6">
          </div>
          <div v-for="item in articleList">
            <h3 @click="jump(item.id)">{{item.title}}</h3>
            <Icon type="md-eye" />
            {{item.count}}
          </div>
        </div>


        <p></p>
      </div>

    </div>
</template>

<script>
    export default {

      data(){
        return {
          articleList:[
            {
              id:1,
              title:'十二年手办官宣',
              count:2555
           },
            {
              id:2,
              title:'50年手办官宣',
              count:7825
            },
            {
              id:3,
              title:'70年手办官宣',
              count:60
            }],
        }
      },
      methods:{
        jump(id){
          alert(id)
        },
        addInterset(){
          alert('增加关注')
        }
      },
      computed:{
          height(){
            return window.innerHeight+'px'
        }
      }
    }
</script>

<style scoped>

  h3{
    cursor: pointer;
  }
  h3:hover{
    color:red;
  }
</style>
