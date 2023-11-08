import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["likes"],
  endpoints: (builder) => ({
    getProfileImage: builder.query({
      query: (localId) => `profiles/${localId}/profileImage.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profiles/${localId}/profileImage.json`,
        method: "PUT",
        body: { image },
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
    addLike: builder.mutation({
      query: ({ postId, localId }) => ({
        url: `posts/${postId}/likes/${localId}.json`,
        method: "POST",
        body: { like: true },
      }),
      invalidatesTags: ["likes"],
      onError: (error) => {
        console.error("Error al actualizar el like:", error);
      },
    }),
    deleteLike: builder.mutation({
      query: ({ postId, localId }) => ({
        url: `posts/${postId}/likes/${localId}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["likes"],
      onError: (error) => {
        console.error("Error al actualizar el like:", error);
      },
    }),
    postComment: builder.mutation({
      query: ({postId, post}) => ({
        url:`posts/${postId}/comments/${post.id}.json`,
        method:'POST',
        body: post
      })
    })
    ,
    getMessages: builder.query({
      query: () => `messages.json`
    }),
    postMessage: builder.mutation({
      query: (message) => ({
        url: `messages/${message.id}.json`,
        method: "PUT",
        body: message
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
  useGetPublicationsQuery,
  useAddLikeMutation,
  useDeleteLikeMutation,
  usePostCommentMutation,
  useGetMessagesQuery,
  usePostMessageMutation
} = userApi;
