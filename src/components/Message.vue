<template>
  <div>
    <Table border  :columns="columns" :data="data" style="width: 120em"></Table>
  </div>

</template>
<script>
  export default {

    created(){

    },
    data () {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name',
            render: (h, params) => {
              var self =this
              return h('div', [
                  h('Icon', {
                    props: {
                      type: 'ios-person'
                    }
                  }),
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
            title: '操作',
            key: 'action',
            width: 300,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginLeft: '5px',

                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '进入店铺'),

                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginLeft: '5px',

                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '进入店铺'),

              ]);
            }
          }
        ],
        data: [
          {
            name: '王小明',
            content: "讲座开始了",
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            content:  "活动开始了",
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            content:  "结束了",
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            content:  "年级大会",
            address: '深圳市南山区深南大道'
          }
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
        })
      },
      remove (index) {
        this.data.splice(index, 1);
      }
    }
  }
</script>
