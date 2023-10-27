'use client'

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {
  useLazyGetPokemonQuery,
} from '@/redux/slices/pokemonSlice'
import { addToHistory } from '@/redux/slices/historySlice'
import type { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import PokemonCard from '@/components/PokemonCard'
import Card from '@/components/Card'

const StyledInput = styled.input`
  color: #000000;
  padding: 8px;
  border: 1px solid #000000;
`

const SearchHistoryItem = styled.p`
  cursor: pointer;
  &:hover {
    background-color: #3fe1fb;
  }
`

const SearchButton = styled.button`
  background-color: #3fe1fb;
  padding: 8px;
  &:hover {
    background-color: #ffffff;
    color: #3fe1fb;
  }
`

export default function Home() {
  const dispatch = useDispatch()
  const searchHistory = useSelector((state: RootState) => state.history.searchedPokemon)
  const [inputPokemon, setInputPokemon] = useState<string>('')
  const [fetchPokemon, pokemonQuery] = useLazyGetPokemonQuery()

  useEffect(() => {
    if (pokemonQuery.status === 'fulfilled' && pokemonQuery.isSuccess && !searchHistory.includes(inputPokemon)) {
      dispatch(addToHistory(inputPokemon))
      setInputPokemon('')
    }
  }, [pokemonQuery])

  const handlePokemonInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPokemon(event.target.value)
  }

  const handlePokemonSearch = () => {
    if (inputPokemon !== '') {
      fetchPokemon(inputPokemon)
    }
  }

  const handleHistoryClick = (name:string) => {
    fetchPokemon(name)
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    handlePokemonSearch()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Card>
          <h3>Pokedex</h3>
          <form onSubmit={handleFormSubmit}>
            <StyledInput type='text' value={inputPokemon} onChange={(e) => handlePokemonInput(e)} />
            <SearchButton type="submit">search</SearchButton>
          </form>
          History:
          <div className='grid grid-cols-2 gap-4 overflow-scroll max-h-80'>
            {searchHistory.map((name) => (
              <SearchHistoryItem onClick={() => handleHistoryClick(name)} key={name}>
                {name}
              </SearchHistoryItem>
            ))}
          </div>
        </Card>
        <Card>
          {pokemonQuery.status === 'rejected' && (
            <div>That is not a pokemon</div>
          )}
          {pokemonQuery.isLoading && (
            <div>Loading...</div>
          )}
          {pokemonQuery.isSuccess && !pokemonQuery.isLoading && (
            <PokemonCard data={pokemonQuery.data} />
          )}
        </Card>
      </div>
    </main>
  )
}
