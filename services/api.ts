// https://dataservice.accuweather.com

//export const HP_CONFIG = {
//BASE_URL: "https://hp-api.onrender.com/api",
//API_KEY: process.env.EXPO_PUBLIC_HP_API_KEY,
//headers: {
// accept: "application/json",
//Authorization: "Bearer ${process.env,EXPO_PUBLIC_HP_API_KEY}",
// find authorization from API credential request

export const fetchCharacters = async (p0?: { query: string }) => {
  // const endpoint = "/characters";
  const response = await fetch("https://hp-api.onrender.com/api/characters");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};
