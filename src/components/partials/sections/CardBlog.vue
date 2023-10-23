<script>
export default {
  name:"Card",
  props:{
    role: String,
    name: String,
    date: String,
    views: String,
    image: String
  }
}
</script>

<template>
  <div class="col-4">
    <img :src="image" class="card-img-top" alt="...">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <span>{{ role }}</span>
        <h5 class="card-title">{{ name }}</h5>
        <span><i class="fa-regular fa-calendar"></i> {{ date }}</span>
        <span><i class="fa-regular fa-eye"></i> {{ views }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../scss/partials/variables" as *;

.col-4{
  img{
    border-radius: 5px;
  }
  .card{
    border: none;
    .card-body span:first-of-type{
      color: $role-color;
    }
    .card-body{
      padding-left: 0;
      text-align: left;
      span{
        font-size: .8rem;
        margin-right: 20px;
        color: $role-color;
      }
    }
  }
}

</style>