export type Pokemon = {
  abilities: Array<{
    ability: {
      name: string,
      url: string,
    },
    is_hidden: boolean,
    slot: number,
  }>,
  game_indices: Array<{
      game_index: number,
      version: {
          name: string,
          url: string
      }
  }>,
  height: number,
  held_items: Array<{
      item: {
          name: string,
          url: string
      },
      version_details: Array<{
          rarity: number,
          version: {
              name: string,
              url: string
          }
      }>
  }>,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Array<{
      move: {
          name: string,
          url: string
      },
      version_group_details: Array<{
          level_learned_at: number,
          move_learn_method: {
              name: string,
              url: string
          },
          version_group: {
              name: string,
              url: string
          }
      }>
  }>,
  name: string,
  order: number,
  past_abilities: Array<any>,
  past_types: Array<any>,
  species: {
      name: string,
      url: string
  },
  sprites: {
    back_default: string,
    back_female: null | string,
    back_shiny: string,
    back_shiny_female: null | string,
    front_default: string,
    front_female: null | string,
    front_shiny: string,
    front_shiny_female: null | string,
    other: any,
    versions: any
  },
  types: Array<{
    slot: number,
    type: {
      name: string,
      url: string,
    }
  }>,
  weight: number,
}
