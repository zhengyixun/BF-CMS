<template>
  <div>
    <!--刷新按钮-->
    <button type="button" class="btn btn-info btn-sm">刷新</button>
    <table class="table table-striped">
      <tr>
        <td>编号</td>
        <td>名称</td>
        <td>分类</td>
        <td>缩略图</td>
        <td>价格</td>
        <td>活动价</td>
        <td>操作</td>
      </tr>
    <tr>
      <td>1</td>
      <td>123</td>
      <td>123</td>
      <td>146664123</td>
      <td>123</td>
      <td>123</td>
      <td>
        <button type="button" class="btn btn-primary btn-sm">编辑</button>
        <button type="button" class="btn btn-default btn-sm">查看</button>
        <button type="button" class="btn btn-danger btn-sm">删除</button>
      </td>
    </tr>
      <tr>
        <td>2</td>
        <td>123</td>
        <td>123</td>
        <td>126453113</td>
        <td>123</td>
        <td>1213511313</td>
        <td>
          <button type="button" class="btn btn-primary btn-sm">编辑</button>
          <button type="button" class="btn btn-default btn-sm">查看</button>
          <button type="button" class="btn btn-danger btn-sm">删除</button>
        </td>
      </tr>
    <tr>
      <td>3</td>
      <td>126543511313543</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>123</td>
      <td>
        <button type="button" class="btn btn-primary btn-sm" @click="see">编辑</button>
        <button type="button" class="btn btn-default btn-sm">查看</button>
        <button type="button" class="btn btn-danger btn-sm" @click="test">删除</button>
      </td>
    </tr>
  </table>
    <!--分页-->
    <Page/>
  </div>
</template>

<script>
  //引入分页
  import Page from "@/components/Page";
  export default {
    components:{ Page },
    methods:{
      test(){
        //使用fetch代替ajax
        fetch("/ajax/quser/loginUser",{
          method:"post",
          headers:{
            "content-type":"application/x-www-form-urlencoded"
          },
          body:"phone=123&pass=000"
        }).then(function(e){
          return e.text()
        }).then(function (e) {
          console.log(e)
        })
      },
      see(){
        console.log("1")
      }
    }
  }
</script>
<style scoped>
  td{
    text-align: center;cursor: pointer;
  }
  .btn-info{
    margin-bottom: 10px;
  }
</style>
