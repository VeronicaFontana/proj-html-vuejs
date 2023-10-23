<script>
export default {
  name:"CoverflowCard",
  props:{
    resume: String,
    text: String,
    name: String,
    role: String,
    image: String
  }
}
</script>

<template>
  <div class="card">
    <p>{{ resume }}</p>
    <p>{{ text }}</p>
    <div class="testimonial">
      <div class="image">
        <img :src="image" alt="">
      </div>
      <div class="text">
        <span>{{ name }}</span><br>
        <span>{{ role }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/variables" as *;
.card{
  max-height: 300px;
  padding: 30px;
  p:first-child{
    font-weight: bold;
  }
  p{
    font-size: .8rem;
  }
  &:hover{
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.563);
    cursor: pointer;
    h5{
      color: $text-color;
    }
  }
  .testimonial{
    display: flex;
    img{
      width: 50px;
      border-radius: 50%;
    }
    .text{
      margin-left: 20px;
      span:first-child{
        font-weight: bold;
      }
      span{
        font-size: .7rem;
      }
    }
  }
}
</style>