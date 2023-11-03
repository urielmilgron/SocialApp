import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProfileImage: builder.query({
      query: (localId) => `profiles/${localId}/profileImage.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profiles/${localId}/profileImage.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
    }),
    getProfileName: builder.query({
      query: (localId) => `profiles/${localId}.json`,
    }),
    postProfileName: builder.mutation({
      query: ({ userName, localId }) => ({
        url: `profiles/${localId}.json`,
        method: "PUT",
        body: {
          userName,
        },
      }),
    }),
    postPublication: builder.mutation({
      query: ({...post}) => ({
        url: `posts.json`,
        method: "POST",
        body:post,
      }),
    }),
    getPublications: builder.query({
      query: () => `posts.json`
    })
  }),
});

export const {
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetProfileNameQuery,
  usePostProfileNameMutation,
  usePostPublicationMutation,
  useGetPublicationsQuery
} = userApi;
