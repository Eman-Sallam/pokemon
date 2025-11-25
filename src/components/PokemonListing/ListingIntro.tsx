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
      <h1 className='text-2xl font-bold flex justify-center items-center gap-1 mb-6'>
        <BoltIcon className='size-6 text-yellow-400' />
        Pokédex
      </h1>
      <p className='text-base text-mute mb-5'>
        Discover and explore Pokémon with page controls
      </p>

      <div className='flex justify-center items-center gap-3 mb-5'>
        <Link
          href='/pagination/1'
          className={`btn rounded-md  ${
            viewType === 'pagination' ? 'btn-neutral' : ''
          }
          ${isLoading ? 'btn-disabled animate-pulse' : ''}
          `}
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
        >
          Load More View
        </Link>
      </div>
    </div>
  );
};

export default ListingIntro;
