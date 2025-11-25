'use client';

import Image from 'next/image';
import { useState, memo } from 'react';

type Props = {
  name: string;
  image: string;
  id?: number;
  priority?: boolean;
};

const PokemonCard = ({ name, image, id, priority = false }: Props) => {
  const [imgSrc, setImgSrc] = useState(image);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc('/ditto-placeholder.png');
    }
  };

  return (
    <>
      <div className='card bg-base-100 w-full  h-full shadow-sm hover:shadow-xl transition'>
        <div className='px-4 pt-4'>
          <figure className=' bg-gray-100  rounded-lg'>
            <Image
              src={imgSrc}
              alt={`${name} official artwork`}
              width={200}
              height={176}
              className='rounded-xl h-44 object-contain transition-all duration-300'
              priority={priority}
              loading={priority ? undefined : 'lazy'}
              onError={handleError}
            />
          </figure>
        </div>

        <div className='card-body items-center py-4 gap-0'>
          <h2 className='card-title capitalize text-base lg:text-lg'>{name}</h2>
          <p className='text-mute' aria-label={`Pokémon number ${id}`}>
            #{String(id).padStart(3, '0')}
          </p>
        </div>
      </div>
    </>
  );
};

// Memoize the component to prevent unnecessary re-renders
// Only re-renders when props (name, image, id, priority) change
export default memo(PokemonCard);
