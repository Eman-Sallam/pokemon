'use client';

import { Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePokemonList } from '@/hooks/usePokemonList';
import { POKEMON_IMAGE_BASE } from '@/constants';
import Link from 'next/link';
import type { PokemonNameAPI } from '@/types/pokemon';
import { getIdFromUrl } from '@/utils/getIdFromUrl';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import ErrorMessage from '@/components/shared/ErrorMessage';
import ListingIntro from '@/components/PokemonListing/ListingIntro';
import Pagination from '@/components/PokemonListing/Pagination';
import PokemonCard from '@/components/PokemonListing/PokemonCard';
import SkeletonCard from '@/components/PokemonListing/SkeletonCard';

const pageSize = 10;
const skeletonCount = pageSize;

const PaginationContent = () => {
  const params = useParams();
  const router = useRouter();
  const pageParam = params?.page as string | undefined;
  const parsedPage = Math.max(parseInt(pageParam || '1', 10) || 1, 1);
  const [page, setPage] = useState<number>(parsedPage);

  useEffect(() => {
    if (page !== parsedPage) {
      setPage(parsedPage);
    }
  }, [page, parsedPage]);

  // With Suspense mode, isLoading will be false when component renders
  // (it would have suspended otherwise), but isFetching can still be true
  const { data, isError, isFetching } = usePokemonList(page, pageSize);

  // With Suspense, data is guaranteed to be defined when component renders
  const pokemonList: PokemonNameAPI[] = data.results || [];
  const totalCount = data.count || 0;
  const totalPages = Math.ceil(totalCount / pageSize);

  // guard invalid page (greater than max)
  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      router.replace('/pagination/1');
    }
  }, [router, page, totalPages]);

  if (isError) {
    return <ErrorMessage message='Error While loading Pokémon List.' />;
  }

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5'>
        {pokemonList.map((pokemon) => {
          const id = getIdFromUrl(pokemon.url);
          const image = `${POKEMON_IMAGE_BASE}/other/official-artwork/${id}.png`;
          return (
            <Link href={`/pokemon/${id}`} key={pokemon.name}>
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
            router.push(`/pagination/${p}`);
          }}
        />
      )}
    </>
  );
};

const PaginationListView = () => {
  return (
    <>
      <ListingIntro viewType='pagination' isLoading={false} />
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5'>
              {Array.from({ length: skeletonCount }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          }
        >
          <PaginationContent />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default PaginationListView;
