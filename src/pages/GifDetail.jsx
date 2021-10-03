import React from "react";
import { useParams } from "react-router";

export default function GifDetail(props) {
  const { gifId } = useParams();

  return <div>{gifId}</div>;
}
