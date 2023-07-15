import { api } from "../../api/apiSlice";

const booksAPi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => ({ url: `book` }),
    }),
  }),
});

export const { useGetBooksQuery } = booksAPi;
