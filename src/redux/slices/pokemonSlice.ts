'use client'

import { apiSlice } from "./apiSlice"
import { Pokemon } from "@/types/pokemon"

const pokemonSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPokemon: builder.query<Pokemon | null, string>({
      query: (name) => {
        return `/pokemon/${name}`
      }
    }),
    getEvolutionChain: builder.query<Pokemon | null, number>({
      query: (id) => `/evolution-chain/${id}`
    }),
  })
})

export const {
  useGetPokemonQuery,
  useLazyGetPokemonQuery,
  useLazyGetEvolutionChainQuery,
} = pokemonSlice