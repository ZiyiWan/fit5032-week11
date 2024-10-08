<template>
  <div v-if="weatherData">
    <h1>Weather in {{ city }}</h1>
    <img :src="iconUrl" alt="Weather Icon" />
    <p>Temperature: {{ temperature }}°C</p>
  </div>
</template>
  
<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

// Follow 10.1.2 to obtain your API key
const apikey = import.meta.env.VITE_OPENWEATHER_KEY;

// Define reactive variables
const city = ref("");
const weatherData = ref(null);

// Computed properties for temperature and weather icon
const temperature = computed(() =>
  weatherData.value ? Math.floor(weatherData.value.main.temp - 273) : null
);

const iconUrl = computed(() =>
  weatherData.value
    ? `http://api.openweathermap.org/img/w/${weatherData.value.weather[0].icon}.png`
    : null
);

// Method to fetch weather data
const fetchWeatherData = async (url) => {
  try {
    const response = await axios.get(url);
    weatherData.value = response.data;
    city.value = response.data.name;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// Method to fetch current location and weather data
const fetchCurrentLocationWeather = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
      await fetchWeatherData(url);
    });
  }
};

// Fetch weather data when the component is mounted
onMounted(() => {
  fetchCurrentLocationWeather();
  console.log(apikey);
});
</script>
  
<style>
/* Add your styles here */
</style>