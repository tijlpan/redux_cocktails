import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1",
  }),
  endpoints: (builder) => ({
    getAllCocktailsByInput: builder.query({
      query: (str) => ({ url: `/search.php?s=${str}` }),
    }),
    getCocktailById: builder.query({
      query: (id) => ({ url: `/lookup.php?i=${id}` }),
    }),
  }),
});

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// getAllCocktailsByInput(str) => useGetAllCocktailsByInputQuery(str) => data, isLoading, isError
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
// getCocktailById(id) => useGetCocktailByIdQuery(id) => data, isLoading, isError

export default api;

export const { useGetAllCocktailsByInputQuery, useGetCocktailByIdQuery } = api;