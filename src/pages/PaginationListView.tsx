import { useState } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import { POKEMON_IMAGE_BASE } from '../constants';
import { Link } from 'react-router-dom';
import type { PokemonNameAPI } from '../types/pokemon';
import { getIdFromUrl } from '../utils/getIdFromUrl';
import ErrorBoundary from '../components/shared/ErrorBoundary';
import ErrorMessage from '../components/shared/ErrorMessage';
import ListingIntro from '../components/PokemonListing/ListingIntro';
import Pagination from '../components/PokemonListing/Pagination';
import PokemonCard from '../components/PokemonListing/PokemonCard';
import SkeletonCard from '../components/PokemonListing/SkeletonCard';

const pageSize = 10;
const skeletonCount = pageSize;

const PaginationListView = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError, isFetching } = usePokemonList(
    page,
    pageSize
  );

  const pokemonList: PokemonNameAPI[] = data?.results || [];
  const totalCount = data?.count || 0;
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <>
      <ListingIntro viewType='pagination' isLoading={isLoading} />

      <ErrorBoundary>
        {isLoading ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5'>
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : isError ? (
          <ErrorMessage message='Error While loading Pokémon List.' />
        ) : (
          <>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5'>
              {pokemonList.map((pokemon) => {
                const id = getIdFromUrl(pokemon.url);
                const image = `${POKEMON_IMAGE_BASE}/other/official-artwork/${id}.png`;
                return (
                  <Link to={`/pokemon/${id}`} key={pokemon.name}>
                    <PokemonCard name={pokemon.name} image={image} id={id} />
                  </Link>
                );
              })}
            </div>

            {isFetching ? (
              <p className='text-center text-sm mt-2'>
                <span className='loading loading-spinner loading-md me-2'></span>
                Fetching next page…
              </p>
            ) : (
              <Pagination
                page={page}
                totalPages={totalPages}
                perPage={pageSize}
                onPageChange={(p) => setPage(p)}
              />
            )}
          </>
        )}
      </ErrorBoundary>
    </>
  );
};
export default PaginationListView;
