'use client'
import Image from 'next/image'
import React, {useState, useCallback} from 'react'
import { useLazyGetPokemonQuery } from '@/redux/slices/pokemonSlice'
import { addToHistory } from '@/redux/slices/historySlice'

export default function Home() {
  const [inputPokemon, setInputPokemon] = useState<string>('')
  const [fetchPokemon, pokemon] = useLazyGetPokemonQuery()

  const handlePokemonInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setInputPokemon(event.target.value)
  }, [])

  const handlePokemonSearch = () => {
    //todo: add successfully searched pokemon to history
    if (inputPokemon !== '') {
      fetchPokemon(inputPokemon)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Pokedex: {inputPokemon}
        <input type='text' value={inputPokemon} onChange={(e) => handlePokemonInput(e)} />
        <button onClick={handlePokemonSearch}>search</button>
      </div>
    </main>
  )
}
