import React from "react";
import { useParams } from "react-router";
import ShowAllGifs from "../components/ShowAllGifs";
import useGif from "../hooks/useGif";
import Spinner from "../components/spinner/Spinner";

export const GifSearchPage = (params) => {
  const { keyword } = useParams();
  const { gifs, loading } = useGif(keyword);

  return (
    <div>
      <h2>{decodeURI(keyword)}</h2>
      {loading ? <Spinner /> : <ShowAllGifs gifs={gifs} />}
    </div>
  );
};
