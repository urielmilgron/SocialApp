import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['likes'],
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
      query: (post) => ({
        url: `posts/${post.id}.json`,
        method: "PUT",
        body: post,
      }),
    }),
    getPublications: builder.query({
      query: () => `posts.json`,
    }),
    updateLike: builder.mutation({
      query: ({ postId, localId, ...post }) => ({
        url: `posts/${postId}.json`,
        method: "PATCH",
        body: {
          likes: {
            ...(post.likes || {}),
            [localId]: post.likes && localId in post.likes ? "que onda" : true,
          },
        },
      }),
      invalidatesTags: ['likes'],
      onError: (error) => {
        console.error("Error al actualizar el like:", error);
      },
    }),

    addLike: builder.mutation({
      query: ({ postId, localId, ...post }) => ({
        url: `posts/${postId}/likes.json`,
        method: "PUT",
        body: {[localId]:true},
      }),
      invalidatesTags: ['likes'],
      onError: (error) => {
        console.error("Error al actualizar el like:", error);
      },
    }),

    deleteLike: builder.mutation({
      query: ({ postId, localId, ...post }) => ({
        url: `posts/${postId}/likes.json`,
        method: "PUT",
        body: {[localId]:null},
      }),
      invalidatesTags: ['likes'],
      onError: (error) => {
        console.error("Error al actualizar el like:", error);
      },
    }),


    
  }),
});

export const {
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetProfileNameQuery,
  usePostProfileNameMutation,
  usePostPublicationMutation,
  useGetPublicationsQuery,
  useUpdateLikeMutation,
  useAddLikeMutation,
  useDeleteLikeMutation
} = userApi;
