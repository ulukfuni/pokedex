import Image from 'next/image'
import { Pokemon } from "@/types/pokemon"
import styled from 'styled-components'

type Props = {
  data: Pokemon | null
}

const Card = styled.div`
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin: 10px 0;
  color: #000000;
`

export default function PokemonCard({data}: Props): JSX.Element {
  return (
    <Card>
      {data && (
        <div className="flex">
          <Image src={data?.sprites.front_default} alt="front sprite" width="100" height="100" />
          <Image src={data?.sprites.back_default} alt="back sprite" width="100" height="100" />
        </div>
      )}
      <p>name: {data?.name}</p>
      <p>order: {data?.order}</p>
      <p>height: {data?.height}</p>
      <p>weight: {data?.weight}</p>
      <p>species: {data?.species?.name}</p>
      <div>Abilities: {data?.abilities.map((ability) => (<p>{ability.ability.name}</p>))}</div>
      <div>Moves: {data?.moves.map((move) => (<p>{move.move.name}</p>))}</div>
    </Card>
  )
}