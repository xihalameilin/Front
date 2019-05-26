<template>
  <div>
    <div class="shadow" v-for="item in items" style="width:60%;height:15%;border:solid 1px rgba(0,0,0,0.1);float: left;margin-top: 15px;margin-left: 80px">
      <Icon type="md-heart-outline" title="收藏" size="30" style="float: left;margin-left:30px;margin-top: 10px;color:#ff5f17;"/>
      <p title="1000" style="float: left;margin-left: -32px;margin-top: 40px;font-size: 16px;color: #ff5f17">1000</p>
      <p class="href" title="这是标题" style="float: left;margin-left: 35px;margin-top: 5px;">这是标题</p>
      <p title="这是内容" style="float: left;margin-left: -80px;margin-top: 35px;width:600px;font-size: 16px;color:#657180;overflow:hidden;text-overflow:ellipsis;text-align: left">这是内容</p>
      <p style="float: left;margin-left: -600px;margin-top: 62px;font-size: 15px;color: #657180">发布人：lz</p>
      <p style="float: left;margin-left: -500px;margin-top: 62px;font-size: 15px;color: #657180">发布时间：2019-05-26</p>
      <Icon title="热度" type="md-eye" size="20" style="float: left;margin-left: -300px;margin-top: 62px;color: #657180"/>
      <p title="热度" style="float: left;margin-left: -270px;margin-top: 62px;font-size: 15px;color: #657180">10000</p>
    </div>
    <div style="width:25%;height:300px;float: left;margin-left: 900px;margin-top: -288px">
      <p title="标签导航" style="float: left;margin-left: 15px;margin-top: 5px;font-size: 18px;font-weight: bold;color: black">标签导航</p>
      <div style="float: left;margin-left: -70px;margin-top: 33px;width:260px;height:2px;background-color: rgba(0,0,0,0.42)"></div>
      <div>
        <p class="title" title="南大讲座" style="float: left;margin-left: 15px;margin-top: 15px;">讲座</p>
        <Tag type="border" color="primary" style="float: left;margin-left: -35px;margin-top: 50px;font-size: 18px">天文</Tag>
        <Tag type="border" color="success" style="float: left;margin-left: 15px;margin-top: 50px;font-size: 18px">数学</Tag>
        <Tag type="border" color="error" style="float: left;margin-left: 17px;margin-top: 50px;font-size: 18px">文学</Tag>
        <Tag type="border" color="warning" style="float: left;margin-left: 20px;margin-top: 50px;font-size: 18px">艺术</Tag>
        <Tag type="border" color="primary" style="float: left;margin-left: 17px;margin-top: 10px;font-size: 18px">天文</Tag>
        <Tag type="border" color="success" style="float: left;margin-left: 13px;margin-top: 10px;font-size: 18px">数学</Tag>
        <Tag type="border" color="error" style="float: left;margin-left: 19px;margin-top: 10px;font-size: 18px">文学</Tag>
        <Tag type="border" color="warning" style="float: left;margin-left: 20px;margin-top: 10px;font-size: 18px">艺术</Tag>
      </div>
      <div>
        <p class="title" title="校园活动" style="float: left;margin-left: 15px;margin-top: 10px;">活动</p>
        <Tag type="border" color="primary" style="float: left;margin-left: -35px;margin-top: 45px;font-size: 18px">音乐节</Tag>
        <Tag type="border" color="success" style="float: left;margin-left: 15px;margin-top: 45px;font-size: 18px">未知</Tag>
        <Tag type="border" color="error" style="float: left;margin-left: 17px;margin-top: 45px;font-size: 18px">未知</Tag>
        <Tag type="border" color="warning" style="float: left;margin-left: 20px;margin-top: 45px;font-size: 18px">未知</Tag>
      </div>
      <div>
        <p class="title" title="比赛信息" style="float: left;margin-left: 15px;margin-top: 10px;">比赛</p>
        <Tag type="border" color="primary" style="float: left;margin-left: -35px;margin-top: 45px;font-size: 18px">未知</Tag>
        <Tag type="border" color="success" style="float: left;margin-left: 15px;margin-top: 45px;font-size: 18px">未知</Tag>
        <Tag type="border" color="error" style="float: left;margin-left: 17px;margin-top: 45px;font-size: 18px">未知</Tag>
        <Tag type="border" color="warning" style="float: left;margin-left: 20px;margin-top: 45px;font-size: 18px">未知</Tag>
      </div>
    </div>
    <Page @on-change="pageChange" :total="100" page-size="10" show-elevator style="float: left;margin-left: 250px;margin-top: 60px;font-size: 16px"/>
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
            ]
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
</style>
