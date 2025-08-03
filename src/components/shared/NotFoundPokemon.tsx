import { Link } from 'react-router-dom';
import placeholderImg from '../../assets/ditto-placeholder.png';

const NotFoundPokemon = () => (
  <div className='h-[500px] flex flex-col items-center justify-center text-center p-6 bg-white lg:w-1/2 m-auto rounded-lg'>
    <img
      src={placeholderImg}
      alt='Pokémon Not Found'
      className='w-48 h-48 object-contain mb-6 animate-bounce'
    />
    <h2 className='text-3xl font-bold text-gray-800 mb-2'>Pokémon Not Found</h2>
    <p className='text-lg text-gray-600 mb-6'>
      The Pokémon you’re looking for doesn’t exist.
    </p>
    <Link to='/' className='btn btn-neutral'>
      Back to Home
    </Link>
  </div>
);

export default NotFoundPokemon;
