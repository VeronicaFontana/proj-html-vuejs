<script>
  export default {
    name:"SwiperCard",
    props:{
      price: String,
      name: String,
      lessonNum: Number,
      studentNum: Number,
      image: String,
      free: Boolean
    }
  };
</script>

<template>
    <div class="card" style="width: 18rem;">
      <div class="free" v-if="free">
        <span>FREE</span>
      </div>
      <img :src="image" class="card-img-top" alt="...">
      <div class="card-body">
        <span class="price">{{ price }}</span>
        <h5 class="card-title">{{ name }}</h5>
        <div class="bottom-text">
          <span><i class="fa-regular fa-file-lines"></i> {{ lessonNum }} Lessons</span>
          <span><i class="fa-regular fa-user"></i> {{ studentNum }} Students</span>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/variables" as *;

.card{
  position: relative;
  border: none;
  &:hover{
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.563);
    cursor: pointer;
    h5{
      color: $text-color;
    }
  }
  .free{
    right:0;
    position: absolute;
    background-color: #EE7455;
    width: 40px;
    font-size: .8rem;
    color: white;
    font-weight: bold;
  }
}
.card-body{
  text-align: start;
  h5{
    font-size: 1rem;
  }
  .price{
    color: $text-color;
    font-weight: bold;
  }
  .bottom-text span{
    color: $role-color;
    margin-right: 10px;
    font-size: .8rem;
  }
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>