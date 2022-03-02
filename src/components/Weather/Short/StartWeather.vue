<template>
    <div class="table-responsive">
        <table class="table text-center table-borderless caption-top rounded-3" id="weather-table-short">
            <caption>{{caption}}</caption>
            <thead>
                <tr>
                    <th>Weather</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Dewpoint</th>
                    <th>Visibility</th>
                    <th>Cloud Cover</th>
                    <th>Wind Speed</th>
                    <th>Precipititation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><fa icon="sun" class="weather-symbol" id="sun"></fa></td>
                    <td><fa icon="temperature-full" class="weather-symbol" id="temperature"></fa></td>
                    <td><fa icon="droplet" class="weather-symbol" id="humidity"></fa></td>
                    <td><fa icon="temperature-high" class="weather-symbol" id="dewpoint"></fa></td>
                    <td><fa icon="eye" class="weather-symbol" id="visibility"></fa></td>
                    <td><fa icon="cloud-sun" class="weather-symbol" id="cloud-cover"></fa></td>
                    <td><fa icon="wind" class="weather-symbol" id="wind"></fa></td>
                    <td><fa icon="umbrella" class="weather-symbol" id="rain"></fa></td>
                </tr>
                <tr>
                    <td v-for="item in 8" :key="item">{{item}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
                

<script>
export default {
    props: {
        caption: String,
        weatherData: Object
    }
}
</script>

<style scoped>
#weather-table-short {
    background-color:rgb(245, 214, 176);
}

.weather-symbol {
    font-size: 2.5rem;
}

#sun {
    color: orange;
}

#temperature {
    color: tomato;
}

#humidity {
    color: rgb(66, 66, 209);
}

#dewpoint {
    color: rgb(173, 82, 66);
}

#visibility {
    color: rgb(52, 128, 128);
}

#cloud-cover {
    color: rgb(71, 73, 158);
}

#rain {
    color: rgb(58, 58, 128);
}
</style>