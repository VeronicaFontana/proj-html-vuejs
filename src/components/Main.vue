<script>
import TextBox from './partials/sections/TextBox.vue';
import { store } from '../data/store';
import WorkCulture from './partials/WorkCulture.vue';
import Skills from './partials/Skills.vue';
import Transform from './partials/Transform.vue';
import Statistics from './partials/Statistics.vue';
import Blog from './partials/Blog.vue';
import Newsletter from './partials/Newsletter.vue';
import Courses from './partials/Courses.vue';
import Coverflow from './partials/sections/Coverflow.vue';

export default {
  name:"Main",
  data(){
    return{
      store
    }
  },
  components:{
    TextBox,
    WorkCulture,
    Skills,
    Transform,
    Statistics,
    Blog,
    Newsletter,
    Courses,
    Coverflow
  }
}
</script>

<template>
  <main>
    <section class="up">
      <section class="container px-3">
        <div class="component-box">
          <WorkCulture />
        </div>
        <div class="statistics">
          <Statistics />
        </div>
        <div class="component-box">
          <Skills />
        </div>
        <div class="swipe">
          <Courses />
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100" width="100vw" fill="white"><path class="elementor-shape-fill" d="M0 0v100h100V0Q50 200 0 0"/></svg>
    </section>
    <section class="container px-3">
      <div class="component-box">
        <div class="row d-flex align-items-center">
          <div class="col-4">
            <TextBox v-for="(text, index) in store.texts.slice(2, 3)" :key="index" :section="text.section" :title="text.title" :text="text.text" :link="text.link" />
          </div>
          <div class="col-8">
            <Coverflow />
          </div>
        </div>
      </div>
      <div class="component-box">
        <Transform />
      </div>
        <div class="blogs">
          <Blog />
        </div>
      <div class="newsletter">
        <Newsletter />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped> 
@use "../scss/partials/variables" as *;

.up{
  background-image: linear-gradient(white,#F5F5F5);
}
    
.container{
  margin-top: 75px;
  max-width: 980px;

  .component-box{
    height: 450px;
    .row{
      height: 100%;
      position: relative;
      .col-4{
        display: flex;
        align-items: center;
      }
    }
  }
  .statistics{
    height: 250px;
  }
  .swipe{
    height: 550px;
  }
  .blogs{
    padding: 150px 0;
    height: 550px;
  }

  .newsletter{
    margin: 100px 0;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
}

</style>