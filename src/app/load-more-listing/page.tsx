'use client';

import { POKEMON_IMAGE_BASE } from '@/constants';
import Link from 'next/link';
import { getIdFromUrl } from '@/utils/getIdFromUrl';
import { useInfinitePokemonList } from '@/hooks/useInfinitePokemonList';
import type { PokemonNameAPI } from '@/types/pokemon';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import ErrorMessage from '@/components/shared/ErrorMessage';
import ListingIntro from '@/components/PokemonListing/ListingIntro';
import PokemonCard from '@/components/PokemonListing/PokemonCard';
import SkeletonCard from '@/components/PokemonListing/SkeletonCard';

const pageSize = 10;

const LoadMoreListView = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfinitePokemonList(pageSize);

  const allPokemon: PokemonNameAPI[] =
    data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <>
      <ListingIntro viewType='load-more' isLoading={isLoading} />
      <ErrorBoundary>
        {isLoading ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5'>
            {Array.from({ length: pageSize }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : isError ? (
          <ErrorMessage message='Error While loading Pokémon List.' />
        ) : (
          <>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5'>
              {allPokemon.map((pokemon) => {
                const id = getIdFromUrl(pokemon.url);
                const image = `${POKEMON_IMAGE_BASE}/other/official-artwork/${id}.png`;

                return (
                  <Link href={`/pokemon/${id}`} key={pokemon.name}>
                    <PokemonCard name={pokemon.name} image={image} id={id} />
                  </Link>
                );
              })}
            </div>

            <div className='flex flex-col items-center mt-6'>
              {hasNextPage && !isFetchingNextPage && (
                <button
                  className='btn btn-outline'
                  onClick={() => fetchNextPage()}
                >
                  Load More
                </button>
              )}

              <div className='flex flex-col items-center justify-center mt-6'>
                {isFetchingNextPage && (
                  <div className='flex items-center gap-2  mb-3 text-neutral-500'>
                    <span className='loading loading-spinner loading-md text-primary'></span>
                    Loading more Pokémon...
                  </div>
                )}
                <p className='text-sm text-neutral-500 mt-1'>
                  Showing {allPokemon.length} Pokémon
                </p>
              </div>
            </div>
          </>
        )}
      </ErrorBoundary>
    </>
  );
};

export default LoadMoreListView;
