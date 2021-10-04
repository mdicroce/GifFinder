import { useState, useEffect, useRef } from "react";
import Category from "./Category";
import { getTrendingTermService } from "../services/getTrendingTermService";

function TrendingSearches() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrendingTermService().then((response) => {
      setTrendings(response);
    });
  }, []);

  return <Category name="Trending topics" options={trendings} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return <div ref={ref}>{show ? <TrendingSearches /> : null}</div>;
}
