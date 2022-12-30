interface PokeList {
  name: string;
  url: string;
}

interface PokeDetail {
  abilities: AbilitiesPoke[];
  base_experience: number;
  description: FlavorTextEntries[];
  flavor_text_entries: [];
  forms: PokeList[];
  game_indices: GameIndices[];
  habitat: PokeList;
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[]; 
  name: string;
  order: number;
  past_types: [];
  species: PokeList;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}

interface AbilitiesPoke {
  ability: PokeList;
  is_hidden: boolean;
  slot: number;
}

interface GameIndices{
  game_index: number;
  version: PokeList;
}

interface Moves{
  move: PokeList;
  version_group_details: VersionGroupDetail[]
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: PokeList;
  version_group: PokeList;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: PokeList;
}

interface Types {
  slot: number;
  type: PokeList;
}

interface FlavorTextEntries {
  flavor_text: string;
  language: PokeList;
  version: PokeList;
}

export type {
  PokeDetail,
  PokeList
}