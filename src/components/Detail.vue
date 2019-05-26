<template>
    <div>
      <!--左边的文章详情-->
      <div style="width: 60%;float: left">
        <br>
        <br>
        <p style="font-size: 30px;margin-left: 10%;text-align: center">文章标题</p>
        <p style="font-size: 20px;margin-left: 10%;width:90%;word-wrap:break-word;text-align: left">文章的具体内容</p>
        <div style="float: left;margin-left: 10%;width:90%">
          <Icon title="热度" type="md-eye" size="40" style="float: left;margin-left: 0%;margin-top: 0%;color: #657180"/>
          <p title="1000" style="float: left;margin-left: 3%;margin-top: 0%;font-size: 25px;color: #657180">1000</p>
          <Icon type="md-heart-outline" title="添加收藏" size="40" style="float: left;margin-left:15%;margin-top: 0%;color:#ff5f17;cursor: pointer"/>
        </div>
        <div v-for="item in tags" style="float: left;margin-left: 10%;">
          <Tag type="border" color="primary" style="float: left;margin-left: 5%;margin-top: 15%;font-size: 18px;width:100%">{{item.tagName}}</Tag>
        </div>
      </div>
      <!--右边的相关内容-->
      <div style="width: 30%;float: right;margin-right: 4%;margin-top: 2%" >
        <div style="background-color: rgb(245,245,245);height: 100px;border: 1px solid #b5b5b5" >
          <img src="../images/people.jpg" style="float: left;margin-left: 7%;margin-top: 10px;width:80px"/>
          <h3 style="float: left;margin-left: 7%;margin-top: 4%;font-size: 20px">发布人的名字</h3>
          <Button type="error" style="float: left;margin-left: 25%;margin-top: 2%" @click="addInterset">关注</Button>
        </div>
        <br>
        <div>
          <h2 style="float: left;margin-left: 35%">最新通知:</h2>
          <div style="float:left;margin-left: 0%;margin-top: 2%;width:100%;">
          </div>
          <div v-for="item in articleList" style="float: left;width:100%;">
            <h3 @click="jump(item.id)" style="float: left;margin-left: 3%;font-size: 20px;width:95%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.title}}</h3>
            <Icon title="热度" type="md-eye" size="20" style="float: left;;margin-top: 2%;margin-left: 35%"/>
            <p title="热度" style="float: left;;margin-top: 2%;margin-left: 3%;font-size: 18px">{{item.count}}</p>
          </div>
        </div>
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
              title:'12年手办官宣',
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
          tags:[
            {tagName:'艺术'},
            {tagName:'艺术'},
            {tagName:'艺术'},
            {tagName:'艺术'},
            {tagName:'艺术'},
            {tagName:'艺术'}
          ]
        }
      },
      methods:{
        jump(id){
          alert(id)
        },
        addInterset(){
          alert('增加关注')
        },
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
