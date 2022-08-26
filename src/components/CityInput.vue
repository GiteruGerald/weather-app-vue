<template>
    <div class="row">
        <!-- Implement background image -->
        <!-- Todo:  Use Geocoding API to fetch by City Also -->
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
        
    </div>
    <div class="row">
        <div class="card" v-if="getWeather !== null ">
            <div class="card-header">Weather Forecast</div>
                <div class="card-body table-data">
                    <table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active" v-for="timeData in timeData">
                                <td>{{ timeData }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table table-success">
                        <thead>
                            <tr>
                            <th scope="col">Temperature</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active" v-for="tempData in tempData">
                                <td>{{ tempData }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table table-info">
                        <thead>
                            <tr>
                            <th scope="row">Wind Speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active" v-for="relativeData in relativeData">
                                <td>{{ relativeData }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table table-warning">
                        <thead>
                            <tr>
                            <th scope="col">Relative Humidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active" v-for="windData in windData">
                                <td>{{ windData }}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <table class="table table-danger">
                        <thead>
                            <tr>
                            <th scope="col">Cloud Cover</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active" v-for="cloudData in cloudData">
                                <td>{{ cloudData }}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from '@vue/reactivity';
import {useWeatherStore} from '../stores/weather-service';

    export default {
       
        setup(){
            let latitude = ref('')
            let longitude = ref('')

            const weather = useWeatherStore()
            let timeData = ref('')
            let tempData = ref('')
            let relativeData = ref('') 
            let cloudData = ref('') 
            let windData = ref('') 

            function getWeather(){
                weather.fetchweatherData(latitude.value, longitude.value)
             }

            // let getWeather = async () => {
                
            //     const response = await axios.get('http://localhost:8080/v1/forecast',{
            //         params:{
            //             latitude : latitude.value,
            //             longitude : longitude.value,
            //             hourly: [
            //                     'temperature_2m',
            //                     'relativehumidity_2m',
            //                     'cloudcover_mid',
            //                     'windspeed_120m'
            //                     ]
            //         }
            //     }
            //     ).then( (response)=>{
            //         //handles success
            //         timeData.value = response.data.hourly.time.slice(6, 19);
            //         tempData.value = response.data.hourly.temperature_2m.slice(6, 19);
            //         relativeData.value = response.data.hourly.relativehumidity_2m.slice(6, 19);
            //         cloudData.value = response.data.hourly.cloudcover_mid.slice(6, 19);
            //         windData.value = response.data.hourly.windspeed_120m.slice(6, 19);
            //         console.log(response.data);
            //     }).catch((err)=>{
            //         console.log(err);
            //     })  
            // }

            return{ latitude, longitude, getWeather, timeData, tempData,relativeData, cloudData, windData}
        }
    }
    
</script>

<style scoped>
.table-data{
    display: flex;
}
</style>