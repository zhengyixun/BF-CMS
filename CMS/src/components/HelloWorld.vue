<template>
  <div class="main-bg">
    <div class="header">
      <router-link class="span" to="/Main">波菲后台管理系统</router-link>
      <router-link class="exit" @click="exit" to="/">安全退出</router-link>
      <span class="user">欢迎您 {{ username }}</span>
    </div>
    <div class="aside">
      <Aside/>
    </div>
    <div class="main">
      <!--表格-->
      <router-view/>
    </div>
  </div>
</template>

<script>
  //引入aside
  import Aside from "@/components/Aside";
  export default {
    data(){
      return {
        username:sessionStorage.getItem("username")
      }
    },
    components:{ Aside },
    name: 'App',
    methods:{
      exit(){
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("userpass");
        console.log("退出成功")
      }
    },
    beforeCreate(){//组件的钩子函数，创建之前
      if(!sessionStorage.getItem("username")||sessionStorage.getItem("username") == null||!sessionStorage.getItem("userpass")||sessionStorage.getItem("userpass") == null){
        console.log("error");
        //非法进入错误提示信息
        this.$router.push("/Error")
      }
    }
  }
</script>

<style scoped>
  body{
    position: relative;
  }
  .main-bg{
    width: 100%;height: 100%;overflow: hidden;
  }
  .header{
    width: 100%;height: 50px;background:#005999;position: absolute;top:0;left: 0;line-height: 50px;
  }
  .header>.span{
    margin-left: 15px;font-size: 23px;font-weight: 700;color: #fff!important;float: left;
  }
  .aside{
    width: 310px;padding: 15px;position: absolute;top:50px;left: 0;bottom:0;background: #fff;
  }
  .main{
    position: absolute;top:50px;bottom: 0;right: 0;left: 310px;background: #E9EEF3;padding: 15px;overflow-y: scroll;
  }
  .exit{
    float: right;margin-right: 15px;color: #fff;font-size: 13px;font-weight: 400;color: #fff!important;
  }
  .user{
    float: right;color: #fff;margin-right: 15px;font-size: 14px!important;
  }
</style>
