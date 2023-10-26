'use client'

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useLazyGetPokemonQuery } from '@/redux/slices/pokemonSlice'
import { addToHistory } from '@/redux/slices/historySlice'
import type { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import PokemonCard from '@/components/PokemonCard'

const StyledInput = styled.input`
  color: #000000;
`

const SearchHistoryListItem = styled.li`
  cursor: pointer;
  &:hover {
    background-color: #784934;
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
        <div>
          <h3>Pokedex</h3>
          History:
          <ul>
            {searchHistory.map((name) => (<SearchHistoryListItem onClick={() => handleHistoryClick(name)} key={name}>{name}</SearchHistoryListItem>))}
          </ul>
        </div>
        <form onSubmit={handleFormSubmit}>
          <StyledInput type='text' value={inputPokemon} onChange={(e) => handlePokemonInput(e)} />
          <button type="submit">search</button>
        </form>
      </div>
      {pokemonQuery.status === 'rejected' && (
        <div>That is not a pokemon</div>
      )}
      {pokemonQuery.isSuccess && (
          <PokemonCard data={pokemonQuery.data} />
        )}
    </main>
  )
}
