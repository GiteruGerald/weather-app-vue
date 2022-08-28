<template>
   
    <div class="row">
        <!-- Implement background image -->
        <h4>Enter location's coordinates to get data</h4>
        
        <form @submit.prevent="getWeather" >
            <div class="row g-3 align-items-center">
                <div class="col-auto align-items-center row">
                    <label for="Latitude" class="col-form-label">Latitude</label>
                    </div>
                    <div class="col-auto">
                        <input type="text" v-model="latitude" inputmode="numeric" id="inputLatitude6" class="form-control" required>
                    </div>
                    <div class="col-auto align-items-center row">
                        <label for="Longitude" class="col-form-label">Longitude</label>
                    </div>
                    <div class="col-auto">
                        <input type="text" v-model="longitude" inputmode="numeric" id="inputLongitude6" class="form-control" required>
                    </div>
                    
                    <div class="col-auto align-items-center py-2">
                        <button type="submit" class="btn btn-primary">Fetch Results </button>
                    </div>
                    
                    </div>
        </form>    
    </div>
    <div class="row">
        <!-- <h2>OR select CITY</h2> -->
        <!-- Todo:  Use Geocoding API to fetch by City Also -->
          
    </div>
    <div class="row" v-show="store.isLoading">
            <Spinner/>
        </div>
    <div class="row" v-show="!store.isLoading">
        <ResultView/>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import {useWeatherStore} from '../stores/weather-service';
import ResultView from './ResultView.vue';
import Spinner from '@/layouts/Spinner.vue';

    export default {
    setup() {
        let latitude = ref("");
        let longitude = ref("");
        const store = useWeatherStore();
        let getWeather = ()=>{
            store.isLoading = true
            store.fetchweatherData(latitude.value, longitude.value);
        }
       
        return { latitude, longitude, getWeather, store };
    },
    components: { ResultView, Spinner }
}
    
</script>
