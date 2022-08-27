<template>
<!-- <Suspense> -->

    <div class="card">
                <div class="card-header">Weather Forecast</div>
                    <div class="card-body table-data" >
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                <th scope="col">Time (iso8601)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-active" v-for="time in store.weatherData.time" :key="store.weatherData.time">
                                    <td>{{ time }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-success">
                            <thead>
                                <tr>
                                <th scope="col">Temperature (°C)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-active" v-for="temp in store.weatherData.temp" :key="store.weatherData.time">
                                    <td>{{ temp }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-info">
                            <thead>
                                <tr>
                                <th scope="row">Wind Speed (km/h)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-active" v-for="wind in store.weatherData.wind" :key="store.weatherData.time">
                                    <td>{{ wind }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-warning">
                            <thead>
                                <tr>
                                <th scope="col">Relative Humidity (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-active" v-for="humidity in store.weatherData.humidity" :key="store.weatherData.time">
                                    <td>{{ humidity }}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                        <table class="table table-danger">
                            <thead>
                                <tr>
                                <th scope="col">Cloud Cover (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-active" v-for="cloud in store.weatherData.cloud" :key="store.weatherData.time">
                                    <td>{{ cloud }}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
        </div>

</template>

<script>
import {useWeatherStore} from '../stores/weather-service';
import Spinner from '@/layouts/Spinner.vue';
export default {
    setup() {
        const store = useWeatherStore();
        return { store };
    },
    components: { Spinner }
}
</script>

<style scoped>
.table-data{
    display: flex;
}
</style>