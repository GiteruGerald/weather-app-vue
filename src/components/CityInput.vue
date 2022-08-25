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
                    <p class="card-text" v-if="tempData"> Data: {{ tempData}}</p>
                </div>
                </div>
    </div>
    <div class="row">
        <div class="card">
            <div class="card-header">Here are the Results</div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Temperature</th>
                            <th scope="col">Wind Speed</th>
                            <th scope="col">Cloud Cover</th>
                            <th scope="col">Humidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-active" v-for="tempData in tempData">
                                <th scope="row">Active</th>
                                <td>{{ tempData }}</td>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
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

    export default {
       
        setup(){
            let latitude = ref('')
            let longitude = ref('')
            let tempData = ref('')
            let getWeather = async () => {
                
                const response = await axios.get('http://localhost:8080/v1/forecast',{
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
                    tempData.value = response.data.hourly.temperature_2m.slice(6, 19);
                    console.log(tempData);
                }).catch((err)=>{
                    console.log(err);
                })  
            }

            return{ latitude, longitude, getWeather, tempData}
        }
    }
    
</script>

<style lang="scss" scoped>

</style>