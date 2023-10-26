'use client'

import { createSlice } from "@reduxjs/toolkit"

type initState = {
  searchedPokemon: string[],
}
const initialState:initState = {
  searchedPokemon: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      state.searchedPokemon = [
        ...state.searchedPokemon,
        action.payload,
      ]
    }
  }
})

export const { addToHistory } = historySlice.actions
export default historySlice.reducer