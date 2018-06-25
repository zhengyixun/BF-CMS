<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="商品名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="form.region" placeholder="请选择所属分类">
        <el-option label="炭烧积木" value="jimu"></el-option>
        <el-option label="幼儿干预" value="ganyu"></el-option>
        <el-option label="竹炭纤维" value="zhutan"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="缩略图">
      <img src="../img/a.jpeg" alt="no img" class="imgs_">
    </el-form-item>
    <el-form-item label="市场价">
      <el-input v-model="form.price" placeholder="请输入商品市场价格">></el-input>
    </el-form-item>
    <el-form-item label="活动价">
      <el-input v-model="form.price_" placeholder="请输入商品活动价格">></el-input>
    </el-form-item>
    <el-form-item label="商品描述">
      <div class="ueditor">
        <!--百度编辑器-->
        <div id="editor" type="text/plain" style="width: 100%;height: 300px"></div>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即录入</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import "@/assets/UE/ueditor.config.js";
  import "@/assets/UE/ueditor.all.js";
  import "@/assets/UE/lang/zh-cn/zh-cn.js";
  import "@/assets/UE/themes/default/css/ueditor.min.css";

  export default {
    data() {
      return {
        editor:'',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          price:"",
          price_:"",   //活动价格
          edits:''
        }
      }
    },
    methods: {
      onSubmit() {
       var edit = UE.getEditor('editor').getContent();
       this.edits = edit;
       console.log(this.edits)
      }
    },
    mounted() {
      // 实例化editor编辑器
      this.editor = UE.getEditor('editor');
    },
  }
</script>

<style scoped>
  .ueditor{
    min-height: 300px;
  }
  .imgs_{
    width: 50px;height: 50px;
  }
</style>
