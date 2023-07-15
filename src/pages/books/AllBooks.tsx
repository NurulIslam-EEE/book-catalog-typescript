import React from "react";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";

function AllBooks() {
  const { data } = useGetBooksQuery(undefined);

  console.log("rtk data", data);
  return <div></div>;
}

export default AllBooks;
