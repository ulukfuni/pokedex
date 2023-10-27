import Image from 'next/image'
import { Pokemon } from "@/types/pokemon"
import Card from './Card'

import { sanitizeName, getTypes } from '@/util'

type Props = {
  data: Pokemon | null
}

export default function PokemonCard({data}: Props): JSX.Element {
  return (
    <div>
      {data && (
        <div className="flex">
          <Image src={data?.sprites.front_default} alt="front sprite" width="100" height="100" />
          <Image src={data?.sprites.back_default} alt="back sprite" width="100" height="100" />
        </div>
      )}
      <p className="capitalize">name: {data?.name}</p>
      <p>Type: {getTypes(data?.types).join(', ')}</p>
      <p>height: {data?.height}</p>
      <p>weight: {data?.weight}</p>
      <p>species: {data?.species?.name}</p>
      <div>Abilities:
        {data?.abilities.map((ability) => (<span className='m-1' key={ability.ability.name}>{sanitizeName(ability.ability.name)}</span>))}
      </div>
      <div>Moves:
        <div className='grid grid-cols-4 gap-4 overflow-scroll max-h-28'>
        {data?.moves.map((move) => (
          <p key={move.move.name}>{sanitizeName(move.move.name)}</p>
        ))}
        </div>
      </div>
      
    </div>
  )
}