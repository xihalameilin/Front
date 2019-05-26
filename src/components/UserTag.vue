<template>
  <div>
    <Menu :theme="light" active-name="1" style="float: left;width:25%">
      <MenuGroup title="个人管理">
        <MenuItem name="1">
          <Icon type="md-heart" />
          <router-link to="/collection">我的收藏</router-link>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-add-circle" />
          <router-link to="/concern">我的订阅</router-link>
        </MenuItem>
        <MenuItem name="3">
          <Icon type="md-information-circle" />
          <router-link to="/message">我的消息</router-link>
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
        theme3: 'dark'
      }
    }
  }
</script>
