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
    updateBook: build.mutation({
      query: ({ id, data }) => ({
        url: `books/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `books/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBookMutation,
  useAddReviewMutation,
  useSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksAPi;
