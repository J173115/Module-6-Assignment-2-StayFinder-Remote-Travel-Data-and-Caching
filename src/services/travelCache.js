import AsyncStorage from
  '@react-native-async-storage/async-storage';

const CACHE_PREFIX =
  'stayfinder-conditions-';

export async function saveTravelCache(
  cityId,
  weather
) {
  const cache = {
    savedAt: Date.now(),
    weather: weather,
  };

  await AsyncStorage.setItem(
    `${CACHE_PREFIX}${cityId}`,
    JSON.stringify(cache)
  );
}


export async function loadTravelCache(
  cityId
) {
  const value = await AsyncStorage.getItem(
    `${CACHE_PREFIX}${cityId}`
  );

  if (value === null) {
    return null;
  }

  return JSON.parse(value);
}

