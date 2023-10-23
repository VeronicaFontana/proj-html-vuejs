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
    <div class="col-5">
      <div class="counter">
        <span>{{ enrolled }}</span>
      </div>
      <span>Enrolled Learners</span>
    </div>
    <div class="col-2">
      <div class="counter">
        <span>{{ sessions }}</span>
      </div>
      <span>Finished sessions</span>
    </div>
    <div class="col-5">
      <div class="counter">
        <span>{{ satisfaction }}</span>
      </div>
      <span>Satisfaction rate</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>