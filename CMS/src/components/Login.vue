<template>
  <form class="form-horizontal bg-form">
    <div class="form-group">
      <label for="inputEmail3" class="col-sm-2 control-label">账号</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="username">
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="userpass">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10 ">
        <button type="submit" class="btn btn-default" @click="login0()">立即进入</button>
      </div>
    </div>
  </form>
</template>

<script>
  //引入md5加密
  import md5 from 'js-md5';
    export default {
      name: "Login",
      data(){
        return{
          username:'',
          userpass:''
        }
      },
      methods:{
          login0(){
            if(this.username == "admin"&&this.userpass == "123456"){
              this.$router.push("/Main");
              sessionStorage.setItem("username",this.username);
              sessionStorage.setItem("userpass",md5(this.userpass));
            }else{
              console.log("登陆失败")
            }
          }
      }
    }
</script>

<style scoped>
  .bg-form{
    width: 500px;height: 350px;position: fixed;top:0;bottom: 0;left: 0;right: 0;margin: auto;border: 1px solid #ccc;padding-left: 60px;padding-top: 50px;
  }
  .btn-default{
    color: #fff;background: #409EFF;
  }
</style>
