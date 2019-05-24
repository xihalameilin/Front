<template>
  <div>
    <Menu :theme="theme3" active-name="1" style="float: left">
      <MenuGroup title="内容管理">
        <MenuItem name="1">
          <Icon type="md-document" />
          <router-link to="/page21">用户管理</router-link>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="md-chatbubbles" />
          评论管理
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="统计分析">
        <MenuItem name="3">
          <Icon type="md-heart" />
          用户留存
        </MenuItem>
        <MenuItem name="4">
          <Icon type="md-leaf" />
          流失用户
        </MenuItem>
      </MenuGroup>
    </Menu>
    <router-view style="float: left"></router-view>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        theme3: 'light'
      }
    }
  }
</script>
