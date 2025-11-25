import { BoltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
  viewType: 'pagination' | 'load-more';
  isLoading: boolean;
};

const ListingIntro = ({
  viewType = 'pagination',
  isLoading = false,
}: Props) => {
  return (
    <div className='text-center mb-10'>
      <Link href='/' className='block'>
        <h1 className='text-2xl font-bold flex justify-center items-center gap-1 mb-6 hover:opacity-80 transition-opacity cursor-pointer'>
          <BoltIcon className='size-6 text-yellow-400' aria-hidden='true' />
          Pokédex
        </h1>
      </Link>
      <p className='text-base text-mute mb-5'>
        Discover and explore Pokémon with page controls
      </p>

      <nav
        className='flex justify-center items-center gap-3 mb-5'
        aria-label='View type selection'
      >
        <Link
          href='/pagination/1'
          className={`btn rounded-md  ${
            viewType === 'pagination' ? 'btn-neutral' : ''
          }
          ${isLoading ? 'btn-disabled animate-pulse' : ''}
          `}
          aria-label={
            viewType === 'pagination'
              ? 'Pagination view (current)'
              : 'Switch to pagination view'
          }
          aria-current={viewType === 'pagination' ? 'page' : undefined}
        >
          Pagination View
        </Link>

        <Link
          href='/load-more-listing'
          className={`btn rounded-md ${
            viewType === 'load-more' ? 'btn-neutral' : ''
          }
          ${isLoading ? 'btn-disabled animate-pulse' : ''}
          `}
          aria-label={
            viewType === 'load-more'
              ? 'Load more view (current)'
              : 'Switch to load more view'
          }
          aria-current={viewType === 'load-more' ? 'page' : undefined}
        >
          Load More View
        </Link>
      </nav>
    </div>
  );
};

export default ListingIntro;
