    // Todo: Implement Pinia store
import { defineStore } from 'pinia'
import axios from 'axios';
export const useWeatherStore = defineStore({
    id:'weather',
    state:() =>{{
        return{
            weatherData:{}
        }
    }},
    actions:{
        async fetchweatherData(lat, long){
                const response = await axios.get('http://localhost:8080/v1/forecast',{
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
                    //handles success
                    // timeData.value = response.data.hourly.time.slice(6, 19);
                    // tempData.value = response.data.hourly.temperature_2m.slice(6, 19);
                    // relativeData.value = response.data.hourly.relativehumidity_2m.slice(6, 19);
                    // cloudData.value = response.data.hourly.cloudcover_mid.slice(6, 19);
                    // windData.value = response.data.hourly.windspeed_120m.slice(6, 19);
                    
                    console.log(response.data);
                }).catch((err)=>{
                    console.log(err);
                })  
           
        }
    }
});