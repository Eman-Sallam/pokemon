import { keepPreviousData, useQuery } from '@tanstack/react-query';
import api from '../lib/axios';
import type { PokemonListResponse } from '../types/pokemon';

export const usePokemonList = (page: number, limit = 10) => {
  const offset = (page - 1) * limit;

  return useQuery<PokemonListResponse>({
    queryKey: ['pokemonList', page],
    queryFn: async () => {
      const res = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
      return res.data;
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5, // 5 mins
  });
};
