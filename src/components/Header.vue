<template>
  <div class="layout-ceiling">
    <div style="width:30%;float: left;margin-left: 38%;margin-top: 1.5%">
      <h1 style="color:white;font-size: 30px;float: left;margin-left: 1%">南京大学日常活动查询系统</h1>
    </div>
    <div style="width:25%;float: left;float: left;margin-left: 40%;margin-top: 5px">
      <Input size="large" search enter-button placeholder="Enter something..." style="width:100%;float: left;margin-top: 2%;font-size: 20px;" v-model="keyword" @on-enter="jumpToInfo" @on-search="jumpToInfo" />
    </div>
    <!--<div class="layout-ceiling-main" style="margin-left: 13%;float: left;" >-->
      <!--<a @click="loginAppear" style="font-size: 20px">登录</a>-->
    <!--</div>-->

    <!--<div @click="jumptoMessage" class="message-con" style="float: left;margin-top: 5px">-->
      <!--<Tooltip content='无未读消息' placement="bottom">-->
        <!--<Badge :count="messageCount" dot>-->
          <!--<Icon type="ios-bell" :size="22" color="white"></Icon>-->
        <!--</Badge>-->
      <!--</Tooltip>-->
    <!--</div>-->

    <div style="float: left;margin-left: 25%;margin-top: 3%" >
      <Dropdown @on-click="jumpToPersonal">
        <!--<Avatar size="large"  shape="circle" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />-->
        <!--<Icon type="arrow-down-b" color="white"></Icon>-->
        <a href="javascript:void(0)" style="color: white;font-size: 16px;width: 5px;font-weight: bold" @click="loginAppear">
          {{content}}
          <Icon type="ios-arrow-down" v-show="flag"></Icon>
        </a>
        <DropdownMenu slot="list" style="z-index: 20" v-show="flag">
          <DropdownItem name="per" >个人中心</DropdownItem>
        </DropdownMenu>

      </Dropdown>
    </div>

    <!--登录-->
      <Modal v-model="loginShow" footer-hide>
        <Form  ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
          <FormItem label="用户名：" prop="userID" style="margin-left: 10%;margin-top: 5%;">
            <i-input type="text" v-model="formCustom.userID" style="width: 250px" >
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
          </FormItem>
          <FormItem label="密码：" prop="password" style="margin-left: 10%;margin-top: 5%;">
            <i-input type="password" v-model="formCustom.password" style="width: 250px">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input>
          </FormItem>


          <FormItem >
            <Button type="primary" @click="handleSubmit('formCustom')" style="float: left;margin-left: 11.5%;margin-top: 4%" >登录</Button>
            <Button type="primary" @click="registerAppear" style="float: left;margin-left: 10%;margin-top: 4%" >注册</Button>
            <Button  @click="handleReset('formCustom')" style="float: left;margin-left: 10%;margin-top: 4%">重置</Button>
          </FormItem>
        </Form>
      </Modal>

    <Modal v-model="registerShow" footer-hide>
      <Form  ref="registerformCustom" :model="registerformCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="用户名：" prop="registeruserID" style="float: left;margin-left: 10%;margin-top: 2%">
          <i-input  type="text" v-model="registerformCustom.registeruserID" style="width: 250px" >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem label="密码：" prop="registerPassword" style="float: left;margin-left: 10%;margin-top: 2%">
          <i-input type="password" v-model="registerformCustom.registerPassword" style="width: 250px">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem label="密码确认：" prop="registerPasswordComfirm" style="float: left;margin-left: 10%;margin-top: 2%">
          <i-input type="password" v-model="registerformCustom.registerPasswordComfirm" style="width: 250px">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem >
          <Button type="primary" @click="handleSubmit('registerformCustom')" style="float: left;margin-left: -61%;margin-top: 20%" >注册</Button>
          <Button  @click="handleReset('registerformCustom')" style="float: left;margin-left: -14%;margin-top: 20%">重置</Button>
        </FormItem>
      </Form>
    </Modal>

  </div>
</template>

<script>
  export default {
    data(){
      const validateID = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }
        else {
          callback();
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {
          callback();
        }
      };
      const validateRegisterUserID = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }  else {
          callback()
        }
      };

      const validateRegisterPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {
          callback();
        }
      };
      const validateRegisterPasswordComfirm = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        }
        else if(value!=this.registerformCustom.registerPassword){
          callback(new Error('密码不匹配'));
        } else{
          callback();
        }
      };
      return{
        keyword:'',
        flag:false,
        loginShow:false,
        registerShow:false,
        content:'未登录',
        formCustom: {
          userID: '',
          password: '',
        },
        registerformCustom:{
          registeruserID:'',
          registerPassword:'',
          registerPasswordComfirm:'',
        },
        ruleCustom: {
          userID: [
            {validator: validateID, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],
          registeruserID:[
            {validator:validateRegisterUserID,trigger:'blur'}
          ],
          registerPassword:[
            {validator:validateRegisterPassword,trigger:'blur'}
          ],

          registerPasswordComfirm:[
            {validator:validateRegisterPasswordComfirm,trigger:'blur'}
          ],
        }
      }
    },
    methods:{
      jumpToInfo(){
        alert("跳去搜索结果页，参数为keyword"+this.keyword)
      },

      login(){
        this.flag=true
        this.loginShow=false
        this.content = 'userID'
      },
      jumpToPersonal(content){
          // 跳转去个人中心
        alert("跳转去个人中心")

      },

      loginAppear(){
        this.loginShow=true
      },
      loginDisappear(){
        this.loginShow=false
      },

      registerAppear(){
        this.registerShow=true
      },
      registerDisappear(){
        this.registerShow=false
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            //this.$Message.success('Success!');
            if(name==='formCustom')
              this.login()
            else
              this.register()
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },




    }
  }
</script>

<style scoped>
  .bg{
    background-image: url('../images/njuLogo.png');
    background-size: cover;
    border: 1px solid white;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-ceiling{
    /*background: white;*/
    padding: 10px 0;
    overflow: hidden;
    height: 150px;
    width: 100%;
    background-image: url('../images/njuLogo.png');
    background-size: cover;
    border: 1px solid white;

  }
  .layout-ceiling-main{
    float: right;
    margin-right: 15px;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
</style>
