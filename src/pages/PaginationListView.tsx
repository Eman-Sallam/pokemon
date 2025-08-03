import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  const { page: pageParam } = useParams(); // get param from url
  const navigate = useNavigate(); // allow navigation on invalid
  const parsedPage = Math.max(parseInt(pageParam || '1', 10) || 1, 1); // parse + fallback
  const [page, setPage] = useState<number>(parsedPage); // setState from URL

  useEffect(() => {
    if (page !== parsedPage) {
      setPage(parsedPage);
    }
  }, [page, parsedPage]);

  const { data, isLoading, isError, isFetching } = usePokemonList(
    page,
    pageSize
  );

  const pokemonList: PokemonNameAPI[] = data?.results || [];
  const totalCount = data?.count || 0;
  const totalPages = Math.ceil(totalCount / pageSize);

  // guard invalid page (greater than max)
  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      navigate('/pagination/1', { replace: true });
    }
  }, [navigate, page, totalPages]);

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
                onPageChange={(p) => {
                  setPage(p);
                  navigate(`/pagination/${p}`);
                }}
              />
            )}
          </>
        )}
      </ErrorBoundary>
    </>
  );
};

export default PaginationListView;
