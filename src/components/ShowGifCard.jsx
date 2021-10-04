import {} from "react";
import { Link } from "react-router-dom";

export default function ShowGifCard(props) {
  return (
    <div className="ListOfGifs-item">
      <Link to={`/gif/${props.id}`}>
        <figure>
          <img
            loading="lazy"
            className="gifCardImage"
            src={props.image.url}
            alt={props.title}
          />
          <figcaption>{props.title}</figcaption>
        </figure>
      </Link>
    </div>
  );
}
