import { api } from "../../api/apiSlice";

const booksAPi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => ({ url: `books` }),
      providesTags: ["books"],
    }),
    postBook: build.mutation({
      query: (data) => ({
        url: `books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    addReview: build.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["single"],
    }),
    singleBook: build.query({
      query: (id) => ({ url: `books/${id}` }),
      providesTags: ["single"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBookMutation,
  useAddReviewMutation,
  useSingleBookQuery,
} = booksAPi;
