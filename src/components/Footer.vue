<script>
export default {
  name:"Footer"
}
</script>

<template>
  <footer>
    <section class="container">
      <div class="row">
        <div class="col-6">
          <span>Address</span>
          <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
          <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
          <p>support@maxcoach.com</p>
          <div class="icons">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div class="col-2">
          <span>Explore</span>
          <ul>
            <li>
              Start here
            </li>
            <li>
              Blog
            </li>
            <li>
              About us
            </li>
          </ul>
        </div>
        <div class="col-2">
          <span class="none">none</span>
          <ul>
            <li>
              Success story
            </li>
            <li>
              Courses
            </li>
            <li>
              Contact us
            </li>
          </ul>
        </div>
        <div class="col-2">
          <span>Information</span>
          <ul>
            <li>
              Membership
            </li>
            <li>
              Purchase guide
            </li>
            <li>
              Privacy policy
            </li>
            <li>
              Terms of service
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-text text-center">
        <span><i class="fa-regular fa-copyright"></i> 2020 Maxcoach All Rights Reserved</span>
      </div>
    </section>
    
  </footer>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

footer{
  padding: 50px 0;
  color: white;
  background-color: $footer-bg;
  .col-6{
    line-height: 30px;
    p{
      margin: 0;
    }
    .icons{
      i{
        margin: 0 10px;
        color: $role-color;
        &:hover{
          cursor: pointer;
          color: $text-color;
        }
      }
    }
  }
  span{
    font-weight: bold;
  }
  p, li{
    color: $role-color;
    font-size: 0.7rem;
  }
  .container{
    max-width: 980px;
    .col-2{
      .none{
        color: $footer-bg;
      }
      ul{
        padding: 0;
        list-style: none;
        line-height: 30px;
        li{
          &:hover{
            cursor: pointer;
            color: $text-color;
          }
        }
      }
    }
  }
  .bottom-text{
    margin-top: 30px;
    color: $role-color;
    font-size: .7rem;
  }
}

</style>