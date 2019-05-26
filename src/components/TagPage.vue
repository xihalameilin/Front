<template>
    <div>
      <div class="shadow" v-for="item in items" style="width:60%;height:15%;border:solid 1px rgba(0,0,0,0.1);float: left;margin-top: 1.5%;margin-left: 6.25%">
        <Icon type="md-heart-outline" title="收藏" size="30" style="float: left;margin-left:2.34%;margin-top: 1.8%;color:#ff5f17;"/>
        <p title="1000" style="float: left;margin-left: -4%;margin-top: 7.18%;font-size: 16px;color: #ff5f17">1000</p>
        <p @click="showDetail(item.id)" class="href" title="这是标题" style="float: left;margin-left: 2.73%;margin-top: 0.9%;width:75%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;">这是标题啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
        <p title="这是内容" style="float: left;margin-left: 3%;margin-top: 2%;width:70%;font-size: 16px;color:#657180;overflow:hidden;text-overflow:ellipsis;text-align: left;white-space: nowrap;">这是内容啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</p>
        <p style="float: left;margin-left:-70%;margin-top: 7%;font-size: 15px;color: #657180">发布人：lz</p>
        <p style="float: left;margin-left: 10%;margin-top: 2%;font-size: 15px;color: #657180">发布时间：2019-05-26</p>
        <Icon title="热度" type="md-eye" size="20" style="float: left;margin-left: 60%;margin-top: -3%;color: #657180"/>
        <p title="热度" style="float: left;margin-left: 65%;margin-top: -3%;font-size: 15px;color: #657180">10000</p>
      </div>
      <div style="float: left;width:30%;margin-left: 68%;margin-top: -29%;">
        <h2 style="float: left;margin-left: 35%">最新通知:</h2>
        <div style="float:left;margin-left: 0%;margin-top: 2%;width:100%;">
        </div>
        <div v-for="item in articleList" style="float: left;width:100%;">
          <h3 @click="jump(item.id)" style="float: left;margin-left: 3%;font-size: 20px;width:95%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.title}}</h3>
          <Icon title="热度" type="md-eye" size="20" style="float: left;;margin-top: 2%;margin-left: 35%"/>
          <p title="热度" style="float: left;;margin-top: 2%;margin-left: 3%;font-size: 18px">{{item.count}}</p>
        </div>
      </div>
      <Page @on-change="pageChange" :total="100" page-size="10" show-elevator style="float: left;margin-left: 16%;margin-top: 6%;font-size: 16px"/>
    </div>
</template>

<script>
  export default {
    data() {
      return{
        items:[
          {favourite:'',title:'',content:'',publisher:'',time:'',hot:''},
          {},
          {},
        ],
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
      }
    },
    methods:{
      pageChange(index){

      }
    }
  }
</script>

<style scoped>
  .href{
    font-weight:bold;
    font-size: 20px;
    font-family: FangSun;
    color: #464c5b;
    text-decoration:none;
    cursor: pointer;
  }
  .href:hover{
    color: #fd4c5b;
  }
  .shadow{
    box-shadow: #666 1px 4px 10px;
    background: white;
  }
  .shadow:hover{
    background-color: rgba(0, 141, 225, 0.05);
  }
  .title{
    font-size: 18px;
    font-weight: bold;
    color: black;
    cursor: pointer;
  }
  h3{
    cursor: pointer;
  }
  h3:hover{
    color:#fd4c5b;
  }
</style>
