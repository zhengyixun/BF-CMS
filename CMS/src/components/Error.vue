<template>
  <el-alert
    title="警告提示"
    type="Warning"
    description="错误的操作！！！"
    show-icon>
  </el-alert>
</template>

<script>
    export default {
        name: "Error",
        mounted(){
          //返回首页   2秒之后执行
          setTimeout(() => {
            this.$router.push("/");
          }, 2500);

        }
    }
</script>

<style scoped>

</style>
