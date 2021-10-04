import React from "react";
import { Link } from "react-router-dom";

export default function Category({ name, options }) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <ul className="trendingLinks">
          {options
            ? options.map((actualOption) => {
                return (
                  <li key={actualOption}>
                    <Link className="link" to={`/search/${actualOption}`}>
                      {" "}
                      {actualOption}{" "}
                    </Link>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </div>
  );
}
