'use client'

import { apiSlice } from "./apiSlice"
import { Pokemon } from "@/types/pokemon"

const pokemonSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPokemon: builder.query<Pokemon | null, string>({
      query: (name) => `/pokemon/${name}`
    }),
    getEvolutionChain: builder.query<Pokemon | null, number>({
      query: (id) => `/evolution-chain/${id}`
    }),
    getPokemonSpecies: builder.query({
      query: (name) => `/pokemon-species/${name}`
    }),
    getMove: builder.query({
      query: (name) => `/move/${name}`
    }),
    getAbility: builder.query({
      query: (name) => `/ability/${name}`
    }),
  })
})

export const {
  useGetPokemonQuery,
  useLazyGetPokemonQuery,
  useLazyGetEvolutionChainQuery,
  useLazyGetPokemonSpeciesQuery,
} = pokemonSlice