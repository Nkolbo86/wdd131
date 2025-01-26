// Set the current year and last modified date in the footer
const lastModified = document.getElementById('lastModified');
lastModified.textContent = document.lastModified;

// Calculate wind chill
function calculateWindChill(tempF, windSpeedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(windSpeedMph, 0.16) +
    0.4275 * tempF * Math.pow(windSpeedMph, 0.16)
  ).toFixed(1);
}

// Static values for temperature (°F) and wind speed (mph)
const tempF = 72; // Fahrenheit
const windSpeedMph = 10; // Miles per hour
const windChill = document.getElementById('windchill');

// Check if conditions are viable for wind chill calculation
if (tempF <= 50 && windSpeedMph > 3) {
  windChill.textContent = `${calculateWindChill(tempF, windSpeedMph)} °F`;
} else {
  windChill.textContent = 'N/A';
}
