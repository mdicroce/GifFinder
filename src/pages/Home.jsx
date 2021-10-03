import React from "react";
import ShowAllGifs from "../components/ShowAllGifs";
import Spinner from "../components/spinner/Spinner";
import useGif from "../hooks/useGif";

export default function Home(props) {
  const { loading, gifs } = useGif();

  return (
    <div>
      <h2>Ultimas Búsquedas</h2>
      {loading ? <Spinner /> : <ShowAllGifs gifs={gifs} />}
    </div>
  );
}
