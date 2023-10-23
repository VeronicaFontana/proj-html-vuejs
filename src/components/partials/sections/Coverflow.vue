<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';
  import { store } from '../../../data/store';
import CoverflowCard from './CoverflowCard.vue';

  export default {
    data(){
      return{
        store
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      CoverflowCard
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
</script>

<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <CoverflowCard v-for="(testimonial, index) in store.testimonials.slice(0,1)" :key="index" :resume="testimonial.resume" :text="testimonial.text" :name="testimonial.name" :role="testimonial.role" :image="testimonial.image" />
    </swiper-slide>
    <swiper-slide>
      <CoverflowCard v-for="(testimonial, index) in store.testimonials.slice(1,2)" :key="index" :resume="testimonial.resume" :text="testimonial.text" :name="testimonial.name" :role="testimonial.role" :image="testimonial.image" />
    </swiper-slide>
    <swiper-slide>
      <CoverflowCard v-for="(testimonial, index) in store.testimonials.slice(2,3)" :key="index" :resume="testimonial.resume" :text="testimonial.text" :name="testimonial.name" :role="testimonial.role" :image="testimonial.image" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 350px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>

