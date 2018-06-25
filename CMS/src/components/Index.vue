<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in arr" :key="item">
      <!--<h3>{{ item }}</h3>-->
      <img :src="item" class="banner" alt="no image">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  import img1 from "@/assets/image/1.jpeg";
  import img2 from "@/assets/image/2.jpeg";
  import img3 from "@/assets/image/3.jpeg";
  import img4 from "@/assets/image/4.jpeg";
  import img5 from "@/assets/image/5.jpeg";
  import img6 from "@/assets/image/6.jpeg";
  export default {
    data(){
      return {
        arr : [
          img1,img2,img3,img4,img5,img6,
        ]
      }
    }
  }

</script>
<style>
  .banner{
    width: 100%;height: 100%;object-fit: cover;
  }
</style>
