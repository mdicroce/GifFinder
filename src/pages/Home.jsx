import React from "react";
import Category from "../components/Category";
import ShowAllGifs from "../components/ShowAllGifs";
import Spinner from "../components/spinner/Spinner";
import LazyTrending from "../components/TrendingSearches";
import useGif from "../hooks/useGif";

export default function Home(props) {
  const { loading, gifs } = useGif();

  return (
    <div>
      <main>
        <h2>Ultimas Búsquedas</h2>
        {loading ? <Spinner /> : <ShowAllGifs gifs={gifs} />}
      </main>
      <aside>
        <LazyTrending />
      </aside>
    </div>
  );
}
