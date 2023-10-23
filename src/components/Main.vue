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
    Courses
  }
}
</script>

<template>
  <main>
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
      <div class="component-box">
        <div class="row">
          <div class="col-4">
            <TextBox v-for="(text, index) in store.texts.slice(2, 3)" :key="index" :section="text.section" :title="text.title" :text="text.text" :link="text.link" />
          </div>
          <div class="col-8"></div>
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
    margin-top: 160px;
    height: 550px;
    border: 1px solid orange;
  }
  .newsletter{
    height: 300px;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>