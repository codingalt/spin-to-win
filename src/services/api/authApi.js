import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URI,
    prepareHeaders: async (headers, query) => {
      const authToken = localStorage.getItem(import.meta.env.VITE_TOKEN_KEY);
      headers.set("authorization", `Bearer ${authToken}`);
      headers.set("x-app-type", "Web");
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    validateToken: builder.query({
      query: () => `validateToken`,
      providesTags: ["Auth"],
    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),

    continueWithGoogle: builder.mutation({
      query: ({ token }) => ({
        url: "auth/google/callback",
        method: "POST",
        body: { token: token },
      }),
      invalidatesTags: ["Auth"],
    }),

    loginUser: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLogoutMutation,
  useValidateTokenQuery,
  useRegisterUserMutation,
  useContinueWithGoogleMutation
} = authApi;
