import { api } from "../../api/apiSlice";

const booksAPi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => ({ url: `book` }),
      providesTags: ["books"],
    }),
    postBook: build.mutation({
      query: (data) => ({
        url: `book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBooksQuery, usePostBookMutation } = booksAPi;
