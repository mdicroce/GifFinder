import React, { useContext, useState, useEffect } from "react";
import { searchGifService } from "../services/searchGif";
import { GifContext } from "../context/GifsContext";

export default function useGif(keyword = null) {
  const { gifs, setGifs } = useContext(GifContext);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    setLoading(true);
    if (!keyword) {
      console.log(keyword);
      keyword = localStorage.getItem("lastKeyword") || "random";
    }
    searchGifService(keyword)
      .then((response) => {
        setGifs(response);
      })
      .then(() => {
        setLoading(false);
        localStorage.setItem("lastKeyword", keyword);
      });
  }, [keyword]);

  return { gifs, loading };
}
