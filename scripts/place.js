// Set the current year and last modified date in the footer
const lastModified = document.getElementById('lastModified');
lastModified.textContent = document.lastModified;

// OpenWeather API key and city details
const apiKey = "daa4131a57bf92dee75c10dfb3485fea";  
const city = "Austin"; 
const units = "imperial"; // Fahrenheit and mph
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},US&units=${units}&appid=${apiKey}`;

// Function to calculate wind chill
function calculateWindChill(tempF, windSpeedMph) {
  if (tempF <= 50 && windSpeedMph > 3) {
    return (
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(windSpeedMph, 0.16) +
      0.4275 * tempF * Math.pow(windSpeedMph, 0.16)
    ).toFixed(1) + " °F";
  } else {
    return "N/A";
  }
}

// Function to fetch and update weather details
async function updateWeather() {
  try {
      console.log("Fetching weather from:", weatherUrl); // Debugging log
      const response = await fetch(weatherUrl);
      if (!response.ok) throw new Error("Weather data not found");

      const data = await response.json();
      console.log("Weather data received:", data); // Debugging log

      // Extract weather details
      const tempF = data.main.temp.toFixed(1);
      const windSpeedMph = data.wind.speed.toFixed(1);
      const conditions = data.weather[0].description;
      const iconCode = data.weather[0].icon;

      // Update HTML elements
      document.getElementById("temperature").textContent = tempF;
      document.getElementById("windSpeed").textContent = windSpeedMph;
      document.getElementById("conditions").textContent = conditions.charAt(0).toUpperCase() + conditions.slice(1);
      document.getElementById("windchill").textContent = calculateWindChill(tempF, windSpeedMph);
      document.getElementById("weatherIcon").innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="${conditions}" width="50">`;

      console.log("Weather updated successfully!");
  } catch (error) {
      console.error("Error fetching weather data:", error);
      document.getElementById("conditions").textContent = "Weather unavailable";
  }
}


// Call the function to update weather details
updateWeather();

