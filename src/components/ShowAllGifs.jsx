import { useState, useEffect } from "react";
import ShowGifCard from "./ShowGifCard";

export default function ShowAllGifs(props) {
  const [showGif, setShowGif] = useState([]);
  useEffect(() => {
    if (props.gifs) {
      setShowGif(
        props.gifs.map((actualGif) => {
          return (
            <ShowGifCard
              key={actualGif.id}
              title={actualGif.title}
              id={actualGif.id}
              image={actualGif.image}
            />
          );
        })
      );
    }
  }, [props.gifs]);
  return (
    <div>
      <div className="ShowAllGifs">{showGif}</div>
    </div>
  );
}
