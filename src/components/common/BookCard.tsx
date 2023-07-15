import React from "react";

import "./BookCard.css";

function BookCard({ singleBook }: any) {
  return (
    <div className="card-container">
      <img src={singleBook?.image} alt="" width="90%" />
      <h3>{singleBook?.title}</h3>
      <p>{singleBook?.author}</p>

      <p>{singleBook?.genre}</p>
      <p>{singleBook?.publicationDate}</p>
    </div>
  );
}

export default BookCard;
