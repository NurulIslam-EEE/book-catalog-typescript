import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import {
  useAddReviewMutation,
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../../redux/features/books/booksApi";
import { toast } from "react-hot-toast";
import DeleteModal from "./DeleteModal";

function BookDetails() {
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  const [review, setReview] = useState("");

  const handleShow = () => setShow(true);

  const { id } = useParams();

  const { user } = useAppSelector((state) => state.user);

  const [addReview, { error, status, isLoading, isError, isSuccess }] =
    useAddReviewMutation();

  const { data: book } = useSingleBookQuery(id);

  const handleAddReview = async () => {
    if (review === "") {
      return;
    }
    const reviewData = {
      email: user.email,
      review: review,
    };

    const result = await addReview({ id: state?._id, data: reviewData });
    console.log("issssss", result, isError);

    if (isError) {
      return;
    }
    toast.success("Review added successfully");
    setReview("");
  };

  const navigate = useNavigate();

  const handleNavigateToEdit = () => {
    if (book?.data?.addedBy?.email !== user?.email) {
      toast.error("You are nit authorized");
      return;
    }
    navigate("/edit-book", { state: book?.data });
  };
  const handleDelete = () => {};

  // console.log("ggg", id);
  return (
    <div className="container py-5">
      <div className="d-flex">
        <div className="book-img w-25 ">
          <img src={book?.data?.image} alt="" width="100%" />
        </div>
        <div className="description ms-5">
          <h3>{book?.data?.title}</h3>
          <p>{book?.data?.author}</p>
          <p>{book?.data?.genre}</p>
          <p>{book?.data?.publicationDate}</p>
          <div className="review">
            <h3>Reviews</h3>
            {book?.data?.reviews?.length > 0 &&
              book?.data?.reviews?.map((re: any) => {
                return <p>{re?.review}</p>;
              })}
            <input
              type="text"
              placeholder="add review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button onClick={handleAddReview}>Add</button>
          </div>
          <button
            className="edit"
            disabled={book?.data?.addedBy?.email !== user?.email}
            onClick={handleNavigateToEdit}
          >
            Edit
          </button>
          <button
            className="delete"
            disabled={book?.data?.addedBy?.email !== user?.email}
            onClick={handleShow}
          >
            Delete
          </button>
        </div>
      </div>
      <DeleteModal show={show} setShow={setShow} id={book?.data?._id} />
    </div>
  );
}

export default BookDetails;
