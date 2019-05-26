<template>
  <div style="float: left;margin-left: 5%;width:65%;margin-top: 2%">
    <Table border  :columns="columns" :data="data" style="width: 100%"></Table>
  </div>

</template>
<script>
  export default {

    created(){
      this.getMessage();
    },
    data () {
      return {
        columns: [
          {
            title: '活动',
            key: 'name',
            render: (h, params) => {
              var self =this
              return h('div', [
                h('span', {
                  domProps: {
                    innerHTML: params.row.name
                  }
                })
                ],
              );
            }
          },
          {
            title: '具体内容',
            key: 'content'
          },
          {
            title: '开始时间',
            key: 'time',
            sortable:true,
            width: 300,
            align: 'center',
          }
        ],
        message: [
          {
            name: '南大讲座',
            content: "xxx",
            time: '2019-05-28'
          },
          {
            name: '校园活动',
            content: "xxx",
            time: '2019-05-29'
          },
          {
            name: '比赛',
            content: "xxx",
            time: '2019-05-30'
          },
          {
            name: '南大讲座',
            content: "xxx",
            time: '2019-05-31'
          }
        ]
      }
    },
    methods: {
      getMessage(){
        var id = this.$getCookie('userID');
        var self = this
        this.$http.get("api/getMessage"+id).then(function(response){
          self.message = response.data;
        })
      }
    }
  }
</script>
