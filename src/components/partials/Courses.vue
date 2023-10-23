<script>
import Swiper from './sections/Swiper.vue';

export default {
  name:"Courses",
  components:{
    Swiper
  }
}
</script>

<template>
  <div>
    <p>Join MaxCoach at best</p>
    <h1><strong>Latest Online</strong> <span>Courses</span></h1>
    <div class="row">
      <Swiper />
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
}
</style>