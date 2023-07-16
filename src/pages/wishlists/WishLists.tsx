import React from "react";
import { useGetWishlistsQuery } from "../../redux/features/books/booksApi";
import { useAppSelector } from "../../redux/hooks";
import BookCard from "../../components/common/BookCard";

export default function WishLists() {
  const { user } = useAppSelector((state) => state.user);

  const { data } = useGetWishlistsQuery(user?.email);

  if (!user.email) {
  }

  console.log("wishhh", data);

  return (
    <div className="container">
      <div className="all-book-container">
        {data?.data?.wishlist.length < 1 && <p>No data avalaible</p>}
        {data?.data?.wishlist.map((da: any) => {
          return <BookCard singleBook={da} />;
        })}
      </div>
    </div>
  );
}
