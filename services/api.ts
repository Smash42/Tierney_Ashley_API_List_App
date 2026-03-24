export const fetchCharacters = async (p0?: { query: string }) => {
  const response = await fetch("https://hp-api.onrender.com/api/characters");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};
