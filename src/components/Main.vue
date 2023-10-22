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
          <div class="col-8 skills">
            <img src="/public/stock-full-hd-11-670x450.jpg" alt="">
            <img src="/public/maxcoach-shape-07.png" alt="">
            <img src="/public/icon-youtube-play.png" alt="">
            <img src="/public/maxcoach-shape-05.png" alt="">
            <div class="svg-square">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="202"><path class="elementor-shape-fill" d="M139.374 198.088c16.328 8.906 51.35-1.087 58.304-39.038 7.15-39.022-13.182-40.052-9.633-54.248 14.243-21.15 16.782-48.14 2.028-64.387-36.503-38.024-45.629 7.604-76.048-20.28C101.727 7.837 83.1-6.735 56.23 3.405 18.239 17.74 27.33 47.659 27.33 69.313c0 7.624-24.216 21.957-26.87 41.573-3.346 24.734 12.168 57.29 26.87 68.443 23.322 26.363 59.318 20.28 75.541 11.154 13.931-7.836 25.35 1.52 36.503 7.605z"/></svg>
            </div>
            
          </div>
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
      .skills img:nth-child(1){
        width: 550px;
        top:50%;
        transform: translate(0, -50%);
      }
      .skills img:nth-child(2){
        width: 140px;
        top: 77%;
        left: 45%;
        z-index: -1;
      }
      .skills img:nth-child(3){
        width: 85px;
        top:50%;
        left: 25%;
        transform: translate(0, -50%);
      }
      .skills img:nth-child(4){
        width: 14%;
        right: 93%;
        top: 80px;
        z-index: -1;
      }

      .skills .svg-square{
        width: 100px;
        height: 100px;
        svg{
          position: absolute;
          fill: $svg-color;
          right: 85%;
          bottom: 60%;
          z-index: -2;
        }
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