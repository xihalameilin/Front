<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1" style="margin-left: 20%">
        <Icon type="ios-paper" />
        <router-link to="/page1">内容管理</router-link>
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        <router-link to="/page2">用户管理</router-link>
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />
          统计分析
        </template>
        <MenuGroup title="使用">
          <MenuItem name="3-1">新增和启动</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="4">
        <Icon type="ios-construct" />
        <router-link to="/page3">综合设置</router-link>
      </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        theme1: 'dark'
      }
    }
  }
</script>
