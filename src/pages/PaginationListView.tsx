import ListingIntro from '../components/ListingIntro';
import PokemonCard from '../components/PokemonCard';

const PaginationListView = () => {
  return (
    <>
      <ListingIntro viewType='pagination' />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'>
        <PokemonCard name={''} image={''} />
        <PokemonCard name={''} image={''} />

        <PokemonCard name={''} image={''} />

        <PokemonCard name={''} image={''} />

        <PokemonCard name={''} image={''} />

        <PokemonCard name={''} image={''} />

        <PokemonCard name={''} image={''} />

        <PokemonCard name={''} image={''} />

        <PokemonCard name={''} image={''} />
      </div>
    </>
  );
};
export default PaginationListView;
