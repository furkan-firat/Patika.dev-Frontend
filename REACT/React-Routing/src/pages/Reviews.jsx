import React from "react";
import { useParams } from "react-router-dom";

function Reviews() {
  const { id } = useParams();

  return <div>Reviews Goes Here: {id}</div>;
}

export default Reviews;
