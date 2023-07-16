import React from "react";
import { useGetBooksQuery } from "../../redux/features/books/booksApi";
import BookCard from "../../components/common/BookCard";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function AllBooks() {
  const [allData, setAllData] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [filter, setFilter] = React.useState({
    genre: "",
    publicationDate: "",
  });

  const { data, error, isLoading } = useGetBooksQuery(undefined);

  React.useEffect(() => {
    setAllData(data?.data);
  }, []);

  const handleSearch = async () => {
    try {
      const result = await axios.get(
        `https://cooperative-jay-purse.cyclic.app/api/v1/books?searchTerm=${searchText}`
      );
      setAllData(result.data.data);
      console.log("sss", result.data);
    } catch {}
  };

  const handleFilter = async () => {
    let url = `https://cooperative-jay-purse.cyclic.app/api/v1/books`;
    if (filter.publicationDate !== "") {
      url = `https://cooperative-jay-purse.cyclic.app/api/v1/books?publicationDate=${filter.publicationDate}`;
    }
    if (filter.genre !== "") {
      url = `https://cooperative-jay-purse.cyclic.app/api/v1/books?genre=${filter.genre}`;
    }

    if (filter.genre !== "" && filter.publicationDate !== "") {
      url = `https://cooperative-jay-purse.cyclic.app/api/v1/books?genre=${filter.genre}&&publicationDate=${filter.publicationDate}`;
    }
    try {
      const result = await axios.get(url);

      setAllData(result.data.data);
    } catch {}
  };

  console.log("rtk data", searchText, filter);

  if (isLoading) {
    return (
      <div className="container">
        <p className="d-flex justify-content-center align-items-center">
          {" "}
          <Spinner animation="border" variant="warning" />
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="type to Search "
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="d-flex">
        <div className="filter my-2 pe-2">
          <h3>Filter</h3>
          <label htmlFor="">Genre</label> <br />
          <input
            type="text"
            placeholder="type to Search "
            name="genre"
            onChange={(e) =>
              setFilter({ ...filter, [e.target.name]: e.target.value })
            }
          />
          <br />
          <label htmlFor="">Publication Year</label> <br />
          <input
            type="text"
            placeholder="type to Search "
            name="publicationDate"
            onChange={(e) =>
              setFilter({ ...filter, [e.target.name]: e.target.value })
            }
          />
          <br />
          <button className="my-2" onClick={handleFilter}>
            Filter
          </button>
        </div>
        <div className="all-book-container">
          {allData?.map((da: any) => {
            return <BookCard singleBook={da} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
