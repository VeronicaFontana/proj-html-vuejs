<script>
import Navbar from './partials/Navbar.vue';

export default {
  name:"Header",
  components:{
    Navbar
  }
}
</script>

<template>
  <header>
    <section class="top-bar">
      <nav class="container navbar navbar-expand-lg">
        <div class="container-fluid">
          <Navbar />
          <div class="logo col-3 text-center">
            <img src="../../public/dark-logo.png" alt="">
          </div>
          <div class="search d-flex align-items-center justify-content-end  col-4">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-regular fa-circle-user"></i>
            <form class="d-flex" role="search">
              <input type="text" class="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1">
              <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
            </form>
          </div>
        </div>
      </nav>
    </section>

    <section class="jumbotron">
      <div>
        <img src="/public/home-3-hero-bg.jpg" alt="">
      </div>
      <div class="jumbo-text">
        <h3 class="fw-bold">Commence Business</h3>
        <h1>Distant Mentoring Program</h1>
        <button>Download free guidebook <i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <div class="icons d-flex flex-column">
        <i class="fa-solid fa-ruler"></i>
        <i class="fa-solid fa-life-ring"></i>
        <i class="fa-solid fa-book"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped> 
@use "../scss/partials/variables" as *;
.top-bar{
  display: flex;
  height: 80px;
  background-color: $background-top;

  .container{
    max-width: 1230px;

    .logo{
      img{
        width: 50%;
        height: 50%;
      }
    }
    .search{
      .fa-regular{
        padding: 0 20px;
      }
    }  
  }
}

.jumbotron{
  position: relative;
  img{
    width: 100%;
  }
  .jumbo-text{
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    button{
      padding: 15px 35px;
      border-radius: 5px;
      border: none;
      font-size: 0.7rem;
      font-weight: bold;
      color: $text-color;
    }
  }
  .icons{
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    left: 98%;
    top: 15%;

    .fa-ruler, .fa-life-ring, .fa-book{
      margin-bottom: 15px;
    }
  }
}

</style>