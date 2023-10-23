<script>
export default {
  name: "Statistics",
  data(){
    return{
      enrolled:"",
      satisfaction:"",
      sessions:""
    }
  },
  methods:{
    enrolledCounter(){
      let count = 2000;
      const interval = setInterval(()=>{
        if(count < 3092) {
          count++;
          this.enrolled = count;
        }else{
          clearInterval(interval);
        }
      },0.5);
    },
    sessionsCounter(){
      let count = 1000;
      const interval = setInterval(()=>{
        if(count < 1926) {
          count++;
          this.sessions = count;
        }else{
          clearInterval(interval);
        }
      },5);
    },
    satisfactionCounter(){
      let count = 0;
      const interval = setInterval(()=>{
        if(count < 100) {
          count++;
          this.satisfaction = count;
        }else{
          clearInterval(interval);
        }
      },50);
    }
  },
  mounted(){
    this.enrolledCounter();
    this.sessionsCounter();
    this.satisfactionCounter();
  }
}
</script>

<template>
  <div class="row">
    <div class="col-4 enroll">
      <div class="counter">
        <span>{{ enrolled }}+</span>
      </div>
      <span class="text">Enrolled Learners</span>
    </div>
    <div class="col sessions">
      <div class="counter">
        <span>{{ sessions }}</span>
      </div>
      <span class="text">Finished sessions</span>
    </div>
    <div class="col-4 satisfaction">
      <div class="counter">
        <span>{{ satisfaction }}%</span>
      </div>
      <span class="text">Satisfaction rate</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;
.row{
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;

  .text{
    text-transform: uppercase;
  }

  .counter{
    span{
      color: $text-color;
      font-size: 3rem;
      font-weight: bold;
    }
  }

  
}
</style>