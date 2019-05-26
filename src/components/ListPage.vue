<template>
  <div style="float: left;margin-left: 0%;width: 75%">
    <div class="shadow" v-for="item in items" style="width:85%;height:15%;border:solid 1px rgba(0,0,0,0.1);float: left;margin-top: 1.5%;margin-left: 6.25%">
      <Icon type="md-heart-outline" title="收藏" size="30" style="float: left;margin-left:2.34%;margin-top: 1.8%;color:#ff5f17;"/>
      <p :title="item.hot" style="float: left;margin-left: -4%;margin-top: 7.18%;font-size: 16px;color: #ff5f17">{{item.hot}}</p>
      <p @click="showDetail(item.id)" class="href" :title="item.title" style="float: left;margin-left: 2.73%;margin-top: 0.9%;width:75%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;">{{item.title}}</p>
      <p title="这是内容" style="float: left;margin-left: 3%;margin-top: 2%;width:70%;font-size: 16px;color:#657180;overflow:hidden;text-overflow:ellipsis;text-align: left;white-space: nowrap;">{{item.content}}</p>
      <p style="float: left;margin-left:-70%;margin-top: 7%;font-size: 15px;color: #657180">发布人：{{item.author}}</p>
      <p style="float: left;margin-left: 10%;margin-top: 2%;font-size: 15px;color: #657180">发布时间：{{item.start}}</p>
      <Icon title="热度" type="md-eye" size="20" style="float: left;margin-left: 55%;margin-top: -3%;color: #657180"/>
      <p :title="item.hot" style="float: left;margin-left: 60%;margin-top: -3%;font-size: 15px;color: #657180">{{item.hot}}</p>
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
        items:[]
      }
    },
    methods:{
      pageChange(index){

      },
      getCount(){
        var userID = this.$getCookie("userID")
        var self = this
        this.$http.get("api/getCollectionCount/"+userID)
          .then(function (response) {
            self.total = response.data
          })

      },
      getData(index){
        var userID = this.$getCookie("userID")
        var self = this
        this.$http.get("api/getCollection/"+userID+"/"+index)
          .then(function (response) {
            self.items = response.data
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
</style>
