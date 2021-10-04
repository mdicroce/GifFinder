import React, { useContext } from "react";
import { useParams } from "react-router";
import { GifContext } from "../context/GifsContext";
import ShowGifCard from "../components/ShowGifCard";

export default function GifDetail(props) {
  const { gifId } = useParams();
  const { gifs } = useContext(GifContext);
  const gif = gifs.find((singleGif) => singleGif.id === gifId);

  return (
    <div>
      <ShowGifCard {...gif} />
    </div>
  );
}
