'use client'

import { apiSlice } from "./apiSlice"
import { Pokemon } from "@/types/pokemon"

const pokemonSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPokemon: builder.query<Pokemon, string>({
      query: (name) => {
        return `/pokemon/${name}`
      }
    })
  })
})

export const {
  useGetPokemonQuery,
  useLazyGetPokemonQuery,
} = pokemonSlice