<template>
    <div>
      <!--左边的文章详情-->
      <div style="width: 60%;float: left">
        <br>
        <br>
        <p style="font-size: 30px;margin-left: 10%">文章标题</p>
        <p style="font-size: 20px;margin-left: 10%">文章的具体内容</p>
      </div>
      <!--右边的相关内容-->
      <div style="width: 30%;float: right;margin-right: 4%;margin-top: 2%" >
        <div style="background-color: rgb(245,245,245);height: 100px;border: 1px solid #b5b5b5" >
          <img src="../images/people.jpg" style="float: left;margin-left: 15%;margin-top: 5px;width:45px"/>
          <h3 style="float: left;margin-left: 7%;margin-top: 4%;font-size: 20px">发布人的名字</h3>
          <Button type="error" style="float: left;margin-left: 20.5%;margin-top: 5%" @click="addInterset">关注</Button>
        </div>
        <br>

        <div>
          <h2 style="float: left">最新通知:</h2>
          <div style="float:left;margin-left: 0%;margin-top: 2%;width:100%;height: 1px;border:  2px solid rgba(0,0,0,0.42)">
          </div>
          <div v-for="item in articleList" style="float: left;width:100%;border:solid 1px black">
            <h3 @click="jump(item.id)" style="font-size: 20px">{{item.title}}</h3>
            <Icon type="md-eye" size="20"/>
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
    color:#fd4c5b;
  }
</style>
