<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide} from 'swiper/vue';
  // import required modules
  import { Pagination } from 'swiper/modules';

  import SwiperCard from './SwiperCard.vue';
  import { store } from '../../../data/store';

  export default {
    data(){
      return{
        store
      }
    },
    components: {
      Swiper,
      SwiperCard,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>

<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <SwiperCard v-for="(course, index) in store.courses.slice(0,1)" :key="index" :price="course.price" :name="course.name" :lessonNum="course.lessonNum" :studentNum="course.studentNum" :image="course.image" :free="course.free" />
    </swiper-slide>
    <swiper-slide>
      <SwiperCard v-for="(course, index) in store.courses.slice(1,2)" :key="index" :price="course.price" :name="course.name" :lessonNum="course.lessonNum" :studentNum="course.studentNum" :image="course.image" :free="course.free" />
    </swiper-slide>
    <swiper-slide>
      <SwiperCard v-for="(course, index) in store.courses.slice(2,3)" :key="index" :price="course.price" :name="course.name" :lessonNum="course.lessonNum" :studentNum="course.studentNum" :image="course.image" :free="course.free" />
    </swiper-slide>
    <swiper-slide>
      <SwiperCard v-for="(course, index) in store.courses.slice(3,4)" :key="index" :price="course.price" :name="course.name" :lessonNum="course.lessonNum" :studentNum="course.studentNum" :image="course.image" :free="course.free" />
    </swiper-slide>
    <swiper-slide>
      <SwiperCard v-for="(course, index) in store.courses.slice(4,5)" :key="index" :price="course.price" :name="course.name" :lessonNum="course.lessonNum" :studentNum="course.studentNum" :image="course.image" :free="course.free" />
    </swiper-slide>
  </swiper>
</template>



<style lang="scss" scoped>
.swiper{
  width: 100%;
  height: 100%;
  .swiper-slide{
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
