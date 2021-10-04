export function getTrendingTermService() {
  const endpoint = `http://api.giphy.com/v1/trending/searches?api_key=${import.meta.env.VITE_API_KEY_GIF}`;
  return fetch(endpoint)
    .then((res) => res.json())
    .then((response) => {
      return response.data;
    });
}
