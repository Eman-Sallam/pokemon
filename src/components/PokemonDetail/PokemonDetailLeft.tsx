'use client';

import Image from 'next/image';
import ruler from '../../assets/ruler.svg';
import weightIco from '../../assets/weight.svg';
import type { PokemonSprites, PokemonType } from '../../types/pokemonDetails';

type Props = {
  sprites: PokemonSprites;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
};

const PokemonDetailLeft = ({ sprites, name, types, height, weight }: Props) => (
  <div className='flex flex-col items-center'>
    <div className='avatar'>
      <div className='h-60 lg:h-72 rounded-full bg-gray-100'>
        <Image
          src={
            sprites?.other?.['official-artwork']?.front_default ||
            '/ditto-placeholder.png'
          }
          alt={`${name} official artwork`}
          width={288}
          height={288}
          className='object-contain transition-all duration-300'
          loading='lazy'
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/ditto-placeholder.png';
          }}
        />
      </div>
    </div>

    <div className='flex gap-2 mt-6' role='list' aria-label='Pokémon types'>
      {types.map((t) => (
        <span
          key={t.type.name}
          className='badge badge-secondary rounded-full capitalize'
          role='listitem'
        >
          {t.type.name}
        </span>
      ))}
    </div>

    <div className='mt-6 grid grid-cols-2 gap-3 lg:gap-6 w-full'>
      <div className='text-center bg-gray-100 p-4 rounded-md'>
        <p className='text-sm text-mute mb-1 flex items-center justify-center gap-1'>
          <Image
            src={ruler.src}
            alt=''
            width={20}
            height={20}
            className='w-5'
            aria-hidden='true'
          />
          Height
        </p>
        <p className='font-bold' aria-label={`Height: ${height / 10} meters`}>
          {height / 10} m
        </p>
      </div>
      <div className='text-center bg-gray-100 p-4 rounded-md'>
        <p className='text-sm text-mute mb-1 flex items-center justify-center gap-1'>
          <Image
            src={weightIco.src}
            alt=''
            width={20}
            height={20}
            className='w-5'
            aria-hidden='true'
          />
          Weight
        </p>
        <p
          className='font-bold'
          aria-label={`Weight: ${weight / 10} kilograms`}
        >
          {weight / 10} kg
        </p>
      </div>
    </div>
  </div>
);

export default PokemonDetailLeft;
