import Image from 'next/image';
import Link from 'next/link';

const NotFoundPokemon = () => (
  <div className='h-[500px] flex flex-col items-center justify-center text-center p-6 bg-white lg:w-1/2 m-auto rounded-lg'>
    <Image
      src='/ditto-placeholder.png'
      alt='Pokémon Not Found'
      width={192}
      height={192}
      className='w-48 h-48 object-contain mb-6 animate-bounce'
    />
    <h2 className='text-3xl font-bold text-gray-800 mb-2'>Pokémon Not Found</h2>
    <p className='text-lg text-gray-600 mb-6'>
      The Pokémon you're looking for doesn't exist.
    </p>
    <Link href='/pagination/1' className='btn btn-neutral'>
      Back to Home
    </Link>
  </div>
);

export default NotFoundPokemon;
