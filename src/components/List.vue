<template>
  <div>
    <div class="shadow" v-for="item in items" style="width:60%;height:15%;border:solid 1px rgba(0,0,0,0.1);float: left;margin-top: 1.5%;margin-left: 6.25%">
      <Icon type="md-heart-outline" title="收藏" size="30" style="float: left;margin-left:2.34%;margin-top: 1.8%;color:#ff5f17;"/>
      <p :title="item.hot" style="float: left;margin-left: -4%;margin-top: 7.18%;font-size: 16px;color: #ff5f17">{{item.hot}}</p>
      <p @click="showDetail(item.id)" class="href" :title="item.title" style="float: left;margin-left: 2.73%;margin-top: 0.9%;width:75%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.title}}</p>
      <p :title="item.content" style="float: left;margin-left: 3%;margin-top: 2%;width:70%;font-size: 16px;color:#657180;overflow:hidden;text-overflow:ellipsis;text-align: left;white-space: nowrap;">{{item.content}}</p>
      <p style="float: left;margin-left:-70%;margin-top: 7%;font-size: 15px;color: #657180">发布人：{{item.author}}</p>
      <p style="float: left;margin-left: 10%;margin-top: 2%;font-size: 15px;color: #657180">发布时间：{{item.start}}</p>
      <Icon title="热度" type="md-eye" size="20" style="float: left;margin-left: 60%;margin-top: -3%;color: #657180"/>
      <p :title="item.hot" style="float: left;margin-left: 65%;margin-top: -3%;font-size: 15px;color: #657180">{{item.hot}}</p>
    </div>
    <div style="width:25%;height:60%;float: left;margin-left: 70%;margin-top: -29%">
      <p title="标签导航" style="float: left;margin-left: 4%;margin-top: 1%;font-size: 18px;font-weight: bold;color: black">标签导航</p>
      <div style="float: left;margin-left: -23%;margin-top: 12%;width:90%;height:2px;background-color: rgba(0,0,0,0.42)"></div>
      <div>
        <p class="title" title="南大讲座" style="float: left;margin-left: 5%;margin-top: 4%;">讲座</p>
        <Tag type="border" color="primary" style="float: left;margin-left: -11%;margin-top: 15%;font-size: 18px">天文</Tag>
        <Tag type="border" color="success" style="float: left;margin-left: 5%;margin-top: 15%;font-size: 18px">数学</Tag>
        <Tag type="border" color="error" style="float: left;margin-left: 6%;margin-top: 15%;font-size: 18px">文学</Tag>
        <Tag type="border" color="warning" style="float: left;margin-left: 6%;margin-top: 15%;font-size: 18px">艺术</Tag>
        <Tag type="border" color="primary" style="float: left;margin-left: 5.5%;margin-top: 4%;font-size: 18px">天文</Tag>
        <Tag type="border" color="success" style="float: left;margin-left: 5%;margin-top: 4%;font-size: 18px">数学</Tag>
        <Tag type="border" color="error" style="float: left;margin-left: 6%;margin-top: 4%;font-size: 18px">文学</Tag>
        <Tag type="border" color="warning" style="float: left;margin-left: 6%;margin-top: 4%;font-size: 18px">艺术</Tag>
      </div>
      <div>
        <p class="title" title="校园活动" style="float: left;margin-left: 5%;margin-top: 4%;">活动</p>
        <Tag type="border" color="primary" style="float: left;margin-left: -11%;margin-top: 15%;font-size: 18px">音乐</Tag>
        <Tag type="border" color="success" style="float: left;margin-left: 5%;margin-top: 15%;font-size: 18px">未知</Tag>
        <Tag type="border" color="error" style="float: left;margin-left: 6%;margin-top: 15%;font-size: 18px">未知</Tag>
        <Tag type="border" color="warning" style="float: left;margin-left: 6%;margin-top: 15%;font-size: 18px">未知</Tag>
      </div>
      <div>
        <p class="title" title="比赛信息" style="float: left;margin-left: 5%;margin-top: 4%;">比赛</p>
        <Tag type="border" color="primary" style="float: left;margin-left: -11%;margin-top: 15%;font-size: 18px">未知</Tag>
        <Tag type="border" color="success" style="float: left;margin-left: 5%;margin-top: 15%;font-size: 18px">未知</Tag>
        <Tag type="border" color="error" style="float: left;margin-left: 6%;margin-top: 15%;font-size: 18px">未知</Tag>
        <Tag type="border" color="warning" style="float: left;margin-left: 6%;margin-top: 15%;font-size: 18px">未知</Tag>
      </div>
    </div>
    <Page @on-change="pageChange" :total="total" :page-size="num" show-elevator style="float: left;margin-left: 16%;margin-top: 6%;font-size: 16px"/>
  </div>
</template>

<script>
  export default {

    created(){
      this.getCount()
      this.getData(0)
    },


    data() {
      return{
        total:0,
        num:5,
        items:[
          {id:'1',favourite:'',title:'',content:'',publisher:'',time:'',hot:''},
          {},
          {},
        ]
      }
    },

    computed:{
      change(str){
        console.log(str)
        return function () {
          if(str.length>15)
            return str.substring(0,15)
          else
            return str
        }
      }
    },
    methods:{
      getData(index){
        var self = this
        this.$http.get("api/getArticles/"+index)
          .then(function (response) {
            self.items = response.data
          })
      },
      getCount(){
        var self = this
        this.$http.get("api/getTotal")
          .then(function (response) {
            self.total = response.data
          })
      },
      jump(id){
        alert("id为"+id+" 这里有待商榷")
        var item = this.items[id]
        this.router.push({
          name:'detail',
          params:{
            id:item.id,


          }
        })
      },
      pageChange(index){
        this.getData(index)

      },
      showDetail(id){
        this.$router.push({
          name:'detail',
          params: {
            id: id,
          },
        })
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
</style>
