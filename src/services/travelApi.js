const BASE_URL =
  'https://api.open-meteo.com/v1/forecast';

export async function getTravelConditions(
  latitude,
  longitude
) {
  const url =
    `${BASE_URL}?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m` +
    `&temperature_unit=fahrenheit` +
    `&wind_speed_unit=mph`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`);
  }

  const data = await response.json();

  return {
    temperature: data.current.temperature_2m,
    apparentTemperature: data.current.apparent_temperature,
    weatherCode: data.current.weather_code,
    windSpeed: data.current.wind_speed_10m,
  };
}
