<template>
  <div style="font-family: Arial; padding: 10px; border: 1px solid #ccc; width: 250px;">
    <h3>Weather</h3>
    <p>{{ location }}</p>
    <p>Temperature: {{ temp }}</p>
    <p>Condition: {{ condition }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const location = ref("Loading...");
const temp = ref("");
const condition = ref("");

onMounted(async () => {
  try {
    // Step 1: Get IP-based location
    const ipRes = await fetch("https://ipapi.co/json/");
    const ipData = await ipRes.json();
    const { city, region, country_name, latitude, longitude } = ipData;

    location.value = `${city}, ${region}, ${country_name}`;

    // Step 2: Fetch weather data
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your key
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    );
    const weatherData = await weatherRes.json();

    temp.value = `${weatherData.main.temp}°C`;
    condition.value = weatherData.weather[0].description;
  } catch (error) {
    console.error(error);
    location.value = "Unable to load weather data.";
  }
});
</script>
