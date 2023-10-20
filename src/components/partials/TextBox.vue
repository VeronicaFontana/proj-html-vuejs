<script>
import { store } from '../../data/store';

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
    <p>{{ section }}</p>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <p>{{ link }}</p>
  </div>
</template>

<style lang="scss" scoped>

</style>