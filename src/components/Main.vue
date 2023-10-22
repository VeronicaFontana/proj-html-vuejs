<script>
import TextBox from './partials/TextBox.vue';
import { store } from '../data/store';

export default {
  name:"Main",
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
  <main>
    <section class="container px-3">
      <div class="component-box">
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
      </div>
      <div class="statistics">
        statistiche
      </div>
      <div class="component-box">
        <div class="row">
          <div class="col-8"></div>
          <div class="col-4">
            <TextBox v-for="(text, index) in store.texts.slice(1, 2)" :key="index" :section="text.section" :title="text.title" :text="text.text" :link="text.link" />
          </div>
        </div>
      </div>
      <div class="swipe">
        titolo
        swipe
      </div>
      <div class="component-box">
        <div class="row">
          <div class="col-4">
            <TextBox v-for="(text, index) in store.texts.slice(2, 3)" :key="index" :section="text.section" :title="text.title" :text="text.text" :link="text.link" />
          </div>
          <div class="col-8"></div>
        </div>
      </div>
      <div class="component-box">
        <div class="row">
          <div class="col-8"></div>
          <div class="col-4">
            <TextBox v-for="(text, index) in store.texts.slice(3, 4)" :key="index" :section="text.section" :title="text.title" :text="text.text" :link="text.link" />
          </div>
        </div>
      </div>
      <div class="blogs">
        titolo
        card
      </div>
      <div class="newsletter">
        newsletter
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped> 
@use "../scss/partials/variables" as *;

.container{
  margin-top: 75px;
  max-width: 980px;

  .component-box{
    height: 450px;
    border: 1px solid black;
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
      .work-culture img:nth-child(1){
        width: 450px;
        right: 0;
        top: 50%;
        transform: translate(0,-50%);
      }
      .work-culture img:nth-child(2){
        width: 150px;
        left: 90%;
      }
      .work-culture img:nth-child(3){
        width: 110px;
        bottom: 0;
        right: 4%;
      }
      .work-culture img:nth-child(4){
        width: 130px;
        right: 0;
        top: 15px;
        z-index: -1;
      }
      .work-culture img:nth-child(5){
        top: 54%;
        left: 54%;
        z-index: -1;
      }
    }

    }
  .statistics{
    height: 250px;
    border: 1px solid red;
  }
  .swipe{
    height: 550px;
    border: 1px solid green;
  }
  .blogs{
    height: 550px;
    border: 1px solid orange;
  }
  .newsletter{
    height: 300px;
    border: 1px solid blue;
  }
}

</style>