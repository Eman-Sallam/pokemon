import SkeletonCard from '@/components/PokemonListing/SkeletonCard';
import ListingIntro from '@/components/PokemonListing/ListingIntro';

const pageSize = 10;
const skeletonCount = pageSize;

export default function Loading() {
  return (
    <>
      <ListingIntro viewType='pagination' isLoading={true} />
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5'>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </>
  );
}
