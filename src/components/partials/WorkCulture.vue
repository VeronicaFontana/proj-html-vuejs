<script>
import { store } from '../../data/store';
import TextBox from './TextBox.vue';

export default {
  name:"WorkCultureImage",
  data(){
    return{
      store
    }
  },
  components:{
    TextBox
  }
}
</script>

<template>
  <div class="row">
    <div class="col-4">
      <TextBox v-for="(text, index) in store.texts.slice(0, 1)" :key="index" :section="text.section" :title="text.title" :text="text.text" :link="text.link" />
    </div>
    <div class="col-8 work-culture">
      <img src="/public/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="">
      <img src="/public/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg" alt="">
      <img src="/public/maxcoach-shape-02.png" alt="">
      <img src="/public/maxcoach-shape-07.png" alt="">
      <img src="/public/maxcoach-shape-08.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

.row{
  height: 100%;
  position: relative;
  .col-4{
    display: flex;
    align-items: center;
  }
  .col-8 img{
    position: absolute;
    border-radius: 5px;
  }
  img:nth-child(1){
      width: 450px;
      right: 0;
      top: 50%;
      transform: translate(0,-50%);
  }
  img:nth-child(2){
      width: 150px;
      left: 90%;
  }
  img:nth-child(3){
      width: 110px;
      bottom: 0;
      right: 4%;
  }
  img:nth-child(4){
      width: 130px;
      right: 0;
      top: 15px;
      z-index: -1;
  }
  img:nth-child(5){
      top: 54%;
      left: 54%;
      z-index: -1;
  }
  
}
</style>