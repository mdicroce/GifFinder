import React, { useState, useEffect } from "react";
import { searchGifService } from "../services/searchGif";

export default function useGif(keyword = null) {
  const [gifs, setGifs] = useState([]);
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
