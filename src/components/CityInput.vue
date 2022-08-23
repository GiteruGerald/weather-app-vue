<template>
    <div class="row">
        <form>
            <div class="row g-3 align-items-center">
                    <div class="col-auto align-items-center row">
                        <label for="inputPassword6" class="col-form-label">Latitude</label>
                    </div>
                    <div class="col-auto">
                        <input type="text" v-model="latitude" inputmode="numeric" id="inputLatitude6" class="form-control" aria-describedby="LatitudeHelpInline">
                    </div>
                    <div class="col-auto align-items-center row">
                        <label for="inputPassword6" class="col-form-label">Longitude</label>
                    </div>
                    <div class="col-auto">
                        <input type="text" v-model="longitude" inputmode="numeric" id="inputLongitude6" class="form-control" aria-describedby="LongitudeHelpInline">
                    </div>
                    
                    <div class="col-auto align-items-center py-2">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    
                    </div>
        </form>    
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return{
                latitude:'',
                longitude:''
            }
        },
        methods:{
            getWeather
        },
        setup(){
        }
    }
    
</script>

<style lang="scss" scoped>

</style>