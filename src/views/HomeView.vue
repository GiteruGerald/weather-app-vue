<template>
  <div class="home">
    <div class="container">
      <h1>Weather ForeCast</h1>      
      <CityInput/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CityInput from "../components/CityInput.vue";
export default {
  name: 'HomeView',
  components: {
    CityInput,
},

}
</script>
<style>
.container{
  margin-top: 10px;
}
</style>