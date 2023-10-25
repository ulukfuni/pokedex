'use client'
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"

import historyReducer from './slices/historySlice'
import { apiSlice } from "./slices/apiSlice"
const rootReducer = combineReducers({
  history: historyReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

