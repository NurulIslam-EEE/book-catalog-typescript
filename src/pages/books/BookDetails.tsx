import React from "react";
import { useLocation } from "react-router-dom";

function BookDetails() {
  const { state } = useLocation();

  console.log("", state);
  return (
    <div className="container">
      <div className="d-flex">
        <div className="book-img w-25 ">
          <img src={state?.image} alt="" width="100%" />
        </div>
        <div className="description ms-5">
          <h3>{state?.title}</h3>
          <p>{state?.author}</p>
          <p>{state?.genre}</p>
          <p>{state?.publicationDate}</p>
        </div>
      </div>
      <div className="review"></div>
    </div>
  );
}

export default BookDetails;
