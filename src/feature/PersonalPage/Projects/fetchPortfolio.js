const API_URL = `https://api.github.com/users/pawelnackowski/repos`;

export const fetchPortfolio = () =>
  fetch(API_URL).then((response) => response.json());