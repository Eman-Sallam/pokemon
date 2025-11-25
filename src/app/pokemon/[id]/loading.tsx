import SkeletonDetails from '@/components/PokemonDetail/SkeletonDetails';
import BackButton from '@/components/PokemonDetail/BackButton';

export default function Loading() {
  return (
    <>
      <BackButton />
      <SkeletonDetails />
    </>
  );
}
