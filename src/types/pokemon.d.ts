export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonNameAPI[];
  pages: PokemonListResponse[];
  pageParams: unknown[];
}

export interface PokemonNameAPI {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}
