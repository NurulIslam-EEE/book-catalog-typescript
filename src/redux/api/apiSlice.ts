import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cooperative-jay-purse.cyclic.app/api/v1",
  }),
  tagTypes: ["books", "single"],
  endpoints: () => ({}),
});
