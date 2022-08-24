<template>
    <div class="row">
        <form @submit.prevent="getWeather">
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
        <div class="card border-secondary mb-3" style="max-width: 20rem;">
                <div class="card-header">Input values</div>
                <div class="card-body">
                    <p class="card-text">Latitude:{{ latitude }}</p>
                    <p class="card-text"> Longiude: {{ longitude }}</p>
                </div>
                </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from '@vue/reactivity';

    export default {
       
        setup(){
            let latitude = ref('')
            let longitude = ref('')
            let getWeather = async () => {
                // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
                const response = await axios.get('http://localhost:8080/v1/forecast',
                // ?latitude=${latitude.value}&longitude=${longitude.value}`
                {
                    params:{
                        latitude : latitude.value,
                        longitude : longitude.value,
                        hourly: [
                                'temperature_2m',
                                'relativehumidity_2m',
                                'cloudcover_mid',
                                'windspeed_120m'
                                ]
                    }
                }
                ).then( (response)=>{
                    //handles success
                    console.log(response.data);
                }).catch((err)=>{
                    console.log(err);
                })  
            }

            return{ latitude, longitude, getWeather}
        }
    }
    
</script>

<style lang="scss" scoped>

</style>