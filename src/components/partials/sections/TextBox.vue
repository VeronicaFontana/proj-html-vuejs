<script>
import { store } from '../../../data/store';

export default {
  name:"TextBox",
  props:{
    section: String,
    title: String,
    text: String,
    link: String
  }
}
</script>

<template>
  <div>
    <p class="section">{{ section }}</p>
    <h2>{{ title }}</h2>
    <p class="text">{{ text }}</p>
    <p class="text">{{ link }}</p>
  </div>
</template>

<style lang="scss" scoped>


div{
  .section{
    text-transform: uppercase;
  }
  h2{
    font-weight: bold;
    font-size: 2.3rem;
    margin: 15px 0;
  }
  .text{
    font-size: 0.8rem;
    text-align: justify;
  }
}


</style>