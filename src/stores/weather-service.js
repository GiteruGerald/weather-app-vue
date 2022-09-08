    // Todo: Implement Pinia store
import { defineStore } from 'pinia'
import axios from 'axios';
export const useWeatherStore = defineStore({
    id:'weather',
    state:() =>{{
        return{
            weatherData:{
                time:'',
                humidity:'',
                temp:'',
                cloud:'',
                wind:'',
            },
            isLoading:false
        }
    }},
    actions:{
        async fetchweatherData(lat, long){
                await axios.get('https://api.open-meteo.com/v1/forecast',{
                    params:{
                        latitude : lat,
                        longitude : long,
                        hourly: [
                                'temperature_2m',
                                'relativehumidity_2m',
                                'cloudcover_mid',
                                'windspeed_120m'
                                ]
                    }
                }
                ).then( (response)=>{
                    this.isLoading = true
                    //handles success
                    this.weatherData.time = response.data.hourly.time.slice(6, 19);
                    this.weatherData.temp  = response.data.hourly.temperature_2m.slice(6, 19);
                    this.weatherData.humidity = response.data.hourly.relativehumidity_2m.slice(6, 19);
                    this.weatherData.cloud = response.data.hourly.cloudcover_mid.slice(6, 19);
                    this.weatherData.wind = response.data.hourly.windspeed_120m.slice(6, 19);
                   
                    this.isLoading = false
                    console.log(this.isLoading);
                }).catch((err)=>{
                    console.log(err);
                })  
           
        }
    }
});