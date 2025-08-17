import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//const BACKEND_URL = "http://localhost:8000";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const api = createApi({
  reducerPath: "api",//store ekaka wage
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}/api/`,

   }),
  endpoints: (builder) => ({

    getAttendance: builder.query({
      query: () => "Atten", 
    }),
     getInformation: builder.query({
      query: () => "Info", 
    }),
    /*getHotelsForSearchQuery: builder.query({
      query: ({query}) => `hotels/search/retrieve?query=${query}`,
    }),

    getHotelById: builder.query({
      query: (id) => `hotels/${id}`,
    }),
    createHotel: builder.mutation({
      query: (hotel) => ({
        url: "hotels",
        method: "POST",
        body: hotel,
      }),
    }),
    deleteHotel: builder.mutation({
      query: (id) => ({
        url:`hotels/${id}`,
        method: "DELETE",
      }),
    }),
    updateHotel: builder.mutation({
      query: ({id,...body}) => ({
        url:`hotels/${id}`,
        method: "PUT",
        body,
      }),
    }),
   createBooking: builder.mutation({
      query: (booking) => ({
        url: "bookings",
        method: "POST",
        body: booking,//body eka danne form wage body ekak thiyenawanm vithary
      }),
    }),getBookings: builder.query({
      query: () => "bookings", 
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `bookings/${id}`,
        method: "DELETE",
      }),
    }),
    getCheckoutSessionStatus: builder.query({
      query: (sessionId) => `payments/session-status?session_id=${sessionId}`,
    }),
  
    getBookingById: builder.query({
      query: (id) => `bookings/${id}`,
    }),
*/
    
      }),
      
    })
  

export const {
   useGetAttendanceQuery,
    useGetInformationQuery,
//    useGetHotelByIdQuery,
//    useDeleteHotelMutation,
//     useCreateHotelMutation,
//      useCreateBookingMutation,
//     useUpdateHotelMutation,
//     useGetBookingsQuery,
//      useGetHotelsForSearchQueryQuery,
//      useDeleteBookingMutation,
//      useGetCheckoutSessionStatusQuery,
//      useGetBookingByIdQuery,
     } =api;