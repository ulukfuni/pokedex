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
  species: Species,
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
  types: Type[],
  weight: number,
}

export type Type = {
  slot: number,
  type: {
    name: string,
    url: string,
  }
}

export type PokemonEvolution = {
  baby_trigger_item: null;
  chain: Chain;
  id: number;
};

export type Chain = {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: Species;
};

export type EvolutionDetail = {
  gender: null;
  held_item: null;
  item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null;
  min_beauty: null;
  min_happiness: null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  trigger: Trigger;
  turn_upside_down: boolean;
};

export type Species = {
  name: string;
  url: string;
};

export type Trigger = {
  name: string;
  url: string;
};