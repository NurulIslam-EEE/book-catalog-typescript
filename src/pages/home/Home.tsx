import "./home.css";
import { useAppSelector } from "../../redux/hooks";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";
import Spinner from "react-bootstrap/Spinner";
import BookCard from "../../components/common/BookCard";
import Banner from "../../components/home/Banner";

function Home() {
  const { data, error, isLoading } = useGetBooksQuery(undefined);

  return (
    <div className="container">
      <Banner />
      <h3 className="my-5">Recent Books</h3>
      <div>
        {isLoading ? (
          <div className="container">
            <p className="d-flex justify-content-center align-items-center">
              {" "}
              <Spinner animation="border" variant="warning" />
            </p>
          </div>
        ) : (
          <div className="recent-book">
            {data?.data?.slice(0, 10).map((da: any) => {
              return <BookCard singleBook={da} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
