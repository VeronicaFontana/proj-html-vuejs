<script>
import Swiper from './sections/Swiper.vue';
import { store } from '../../data/store';

export default {
  name:"Courses",
  data(){
    return{
      store
    }
  },
  components:{
    Swiper
  }
}
</script>

<template>
  <div>
    <p>Join MaxCoach at best</p>
    <h1 class="mb-0"><strong>Latest Online</strong> <span>Courses</span></h1>
    <div class="row p-0">
      <Swiper />
    </div>
    <div class="bottom-text">
      <span>Control your professional preference settings to get notified about appropriate courses. <strong>View all courses <i class="fa-solid fa-arrow-right"></i></strong></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

div{
  padding: 60px 0;
  text-align: center;
  p{
    text-transform: uppercase;
    color: $role-color;
  }
  h1{
    margin-bottom: 50px;
    span{
      color: $text-color;
    }
  }
  .bottom-text{
    padding: 20px;
    width: 400px;
    margin: 0 auto;
    span{
      font-size: .8rem;
    }
  }
  
}
</style>