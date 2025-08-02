import { BoltIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

type Props = {
  viewType: 'pagination' | 'load-more';
};

const ListingIntro = ({ viewType = 'pagination' }: Props) => {
  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold flex justify-center items-center gap-1 mb-6'>
        <BoltIcon className='size-6 text-yellow-400' />
        Pokédex
      </h1>
      <p className='text-base text-mute mb-5'>
        Discover and explore Pokémon with page controls
      </p>

      <div className='flex justify-center items-center gap-3 mb-5'>
        <Link
          to='/'
          className={`btn rounded-md ${
            viewType === 'pagination' && 'btn-neutral'
          }`}
        >
          Pagination View
        </Link>

        <Link
          to='/load-more-listing'
          className={`btn rounded-md ${
            viewType === 'load-more' && 'btn-neutral'
          }`}
        >
          Load More View
        </Link>
      </div>
    </div>
  );
};

export default ListingIntro;
