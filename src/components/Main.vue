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
    <section class="container">
      <div class="component-box">
        <div class="row">
          <div class="col-5">
            <TextBox v-for="(text, index) in store.texts.slice(0, 1)" :key="index" :section="text.section" :title="text.title" :text="text.text" :link="text.link" />
          </div>
          <div class="col-7"></div>
        </div>
      </div>
      <div class="statistics">
        statistiche
      </div>
      <div class="component-box">
        <div class="row">
          <div class="col-7"></div>
          <div class="col-5">
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
          <div class="col-5">
            <TextBox v-for="(text, index) in store.texts.slice(2, 3)" :key="index" :section="text.section" :title="text.title" :text="text.text" :link="text.link" />
          </div>
          <div class="col-7"></div>
        </div>
      </div>
      <div class="component-box">
        <div class="row">
          <div class="col-7"></div>
          <div class="col-5">
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