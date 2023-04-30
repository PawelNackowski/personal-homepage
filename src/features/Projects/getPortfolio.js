const API_URL = `https://api.github.com/users/pawelnackowski/repos`;

export const getPortfolio = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};