import React from "react";

import "./BookCard.css";
import { useNavigate } from "react-router-dom";

function BookCard({ singleBook }: any) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${singleBook.title}`, { state: singleBook });
  };
  return (
    <div className="card-container" onClick={handleNavigate}>
      <img src={singleBook?.image} alt="" width="90%" />
      <h3 className="my-2">{singleBook?.title}</h3>
      <p>{singleBook?.author}</p>

      <p>{singleBook?.genre}</p>
      <p>{singleBook?.publicationDate}</p>
    </div>
  );
}

export default BookCard;
