<script>
export default {
  name: "Statistics",
  data(){
    return{
      enrolled:""
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
    }
  },
  mounted(){
    this.enrolledCounter();
  }
}
</script>

<template>
  <div class="row">
    <div class="col-5">
      <div class="counter">
      <span>Numero: {{ this.enrolled }}</span>
      </div>
      <span>Enrolled Learners</span>
    </div>
    <div class="col-2">
      <div class="counter">

      </div>
      <span>Finished sessions</span>
    </div>
    <div class="col-5">
      <div class="counter">

      </div>
      <span>Satisfaction rate</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>