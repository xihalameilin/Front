<template>
  <div>
    <Table border  style="width: 100%" :columns="columns" :data="data"></Table>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        keyword:'王',
        columns: [
          {
            title: '姓名',
            key: 'name',
            render: (h, params) => {
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
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
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
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
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
