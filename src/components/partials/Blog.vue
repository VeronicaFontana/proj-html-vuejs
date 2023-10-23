<script>
import { store } from '../../data/store';
import CardBlog from './sections/CardBlog.vue';

export default {
  name:"Blog",
  data(){
    return{
      store
    }
  },
  components:{
    CardBlog
  }
}
</script>

<template>
  <div>
    <p>Read for more joyment</p>
    <h1><strong>Latest From</strong> <span>Our Blogs</span></h1>
    <div class="row">
      <CardBlog v-for="(blog, index) in store.blogs" :key="index" :role="blog.role" :name="blog.name" :date="blog.date" :views="blog.views" :image="blog.image" />
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

div{
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