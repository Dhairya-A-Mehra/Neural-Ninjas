import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = import.meta.env.VITE_APP_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_URI}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.user?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Notification"],
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => "user/notifications",
      providesTags: ["Notification"],
    }),
    markNotificationRead: builder.mutation({
      query: (data) => ({
        url: `user/read-noti?isReadType=${data.type}&id=${data?.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Notification"],
    }),
  }),
});

export const { useGetNotificationsQuery, useMarkNotificationReadMutation } =
  apiSlice;

export default apiSlice;
