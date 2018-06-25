<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="产品列表" name="2">
      <div class="infos" >
        <span><router-link to="/Main/Table">查看产品信息</router-link></span>
      </div>
    </el-collapse-item>
    <el-collapse-item title="产品录入" name="3">
      <div class="infos">
        <span><router-link to="/Main/Pro">录入产品信息</router-link></span>
      </div>
    </el-collapse-item>
    <el-collapse-item title="查看更多" name="4">
      <div class="infos">
        <span>查看更多...</span>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style>
  *{
    font-size: 16px;
  }
.el-collapse{
  background: none;
}
  .el-collapse-item{
    background: none;
  }
  .el-collapse-item__header{
    font-size: 17px!important;
    font-weight: 400;
  }
  .infos{
    cursor:pointer;
  }
  .infos > span{
    margin-left: 15px;
  }

</style>
