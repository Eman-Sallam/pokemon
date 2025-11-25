import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import api from '../lib/axios';
import type { PokemonListResponse } from '../types/pokemon';

export const useInfinitePokemonList = (limit = 10) =>
  useSuspenseInfiniteQuery<
    PokemonListResponse, // TQueryFnData
    Error, // TError
    PokemonListResponse, // TData
    ['pokemonList', 'infinite'], // TQueryKey
    number // TPageParam
  >({
    queryKey: ['pokemonList', 'infinite'],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      const res = await api.get(`/pokemon?limit=${limit}&offset=${pageParam}`);
      return res.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.length * limit;
      return lastPage.next ? totalLoaded : undefined;
    },
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
  });
