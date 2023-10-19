<script>
export default {
  name:"Main"
}
</script>

<template>
  <main>
    <section class="container">
      <div class="component-box">
        testo - foto  <!-- componente y -->
      </div>
      <div class="statistics">
        statistiche
      </div>
      <div class="component-box">
        foto - testo  <!-- componente x -->
      </div>
      <div class="swipe">
        titolo
        swipe
      </div>
      <div class="component-box">
        testo - foto  <!-- componente y -->
      </div>
      <div class="component-box">
        foto - testo - button <!-- componente x -->
      </div>
      <div class="blogs">
        titolo
        card
      </div>
      <div class="newsletter">
        newsletter
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped> 
@use "../scss/partials/variables" as *;

.container{
  margin-top: 75px;
  max-width: 980px;

  .component-box{
    height: 450px;
    border: 1px solid black;

    }
  .statistics{
    height: 250px;
    border: 1px solid red;
  }
  .swipe{
    height: 550px;
    border: 1px solid green;
  }
  .blogs{
    height: 550px;
    border: 1px solid orange;
  }
  .newsletter{
    height: 300px;
    border: 1px solid blue;
  }
}

</style>