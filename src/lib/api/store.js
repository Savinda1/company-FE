import { configureStore } from "@reduxjs/toolkit";//store ekak hadanne meyagen
import { setupListeners } from "@reduxjs/toolkit/query";


import { api } from "./api";

export const store = configureStore({
  reducer: {
  
[api.reducerPath]: api.reducer,

  },
 // devTools: true,
 middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);