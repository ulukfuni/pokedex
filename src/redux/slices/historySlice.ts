'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchedPokemon: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      state.searchedPokemon = [
        // ...state.searchedPokemon,
        // action.payload,
      ]
    }
  }
})

export const { addToHistory } = historySlice.actions
export default historySlice.reducer