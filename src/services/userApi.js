import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl } from "../firebase";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
    }),
    getProfileName: builder.query({
      query: localId => `profileNames/${localId}.json`,
    }),
    postProfileName: builder.mutation({
      query: ({ userName, localId }) => ({
        url: `profileNames/${localId}.json`,
        method: "PUT",
        body: {
          userName: userName,
        },
      }),
    }),
    postPublication: builder.mutation({
        query:({...post}) => ({
        url:'posts.json',
        method:'POST',
        body:post
        })
    })
  }),
});

export const {
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetProfileNameQuery,
  usePostProfileNameMutation,
  usePostPublicationMutation,
} = userApi;
