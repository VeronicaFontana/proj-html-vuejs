<script>
export default {
  name:"Newsletter"
}
</script>

<template>
  <div class="news">
    <h1>Subscribe <span>Newsletters</span></h1>
    <p>Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Enter your email" aria-label="email" aria-describedby="basic-addon2">
      <span class="input-group-text" id="basic-addon2">Subscribe</span>
    </div>
    <img class="round" src="../../../public/maxcoach-shape-02.png" alt="">
    <img class="point" src="../../../public/maxcoach-shape-09.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

.news{
  position: relative;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1{
    span{
      color: $text-color;
    }
  }
  p{
    margin-bottom: 35px;
    color: $role-color;
  }
  .input-group{
    font-size: 0.7rem;
    .input-group-text{
      font-size: 0.7rem;
      color: white;
      background-color: $text-color;
      padding: 10px 20px;
      &:hover{
        cursor: pointer;
        background-color: white;
        color: $text-color;
      }
    }
    .form-control{
      padding: 10px 20px;
      font-size: 0.7rem;
      color: $role-color;
      background-color: $svg-color;
      border: none;
    }
  }
  img{
    position: absolute;
  }
  .round{
    width: 100px;
    left: 125%;
    top: 35%;
  }
  .point{
    width: 150px;
    left: 115%;
    bottom: 30%;
  }
}

</style>