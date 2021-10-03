export function searchGifService(keyword) {
  const endpoint = `http://api.giphy.com/v1/gifs/search?api_key=${
    import.meta.env.VITE_API_KEY_GIF
  }&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;
  return fetch(endpoint)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      return data.map((image) => {
        return {
          image: image.images.downsized_medium,
          title: image.title,
          id: image.id,
        };
      });
    });
}
