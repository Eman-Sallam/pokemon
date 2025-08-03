import placeholderImg from '../../assets/ditto-placeholder.png';
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
        <img
          src={
            sprites?.other?.['official-artwork']?.front_default ||
            placeholderImg
          }
          alt={name}
          className='object-contain transition-all duration-300'
          loading='lazy'
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = placeholderImg;
          }}
        />
      </div>
    </div>

    <div className='flex gap-2 mt-6'>
      {types.map((t) => (
        <span
          key={t.type.name}
          className='badge badge-secondary rounded-full capitalize'
        >
          {t.type.name}
        </span>
      ))}
    </div>

    <div className='mt-6 grid grid-cols-2 gap-3 lg:gap-6 w-full'>
      <div className='text-center bg-gray-100 p-4 rounded-md'>
        <p className='text-sm text-mute mb-1 flex items-center justify-center gap-1'>
          <img src={ruler} alt='Height' className='w-5' />
          Height
        </p>
        <p className='font-bold'>{height / 10} m</p>
      </div>
      <div className='text-center bg-gray-100 p-4 rounded-md'>
        <p className='text-sm text-mute mb-1 flex items-center justify-center gap-1'>
          <img src={weightIco} alt='Weight' className='w-5' />
          Weight
        </p>
        <p className='font-bold'>{weight / 10} kg</p>
      </div>
    </div>
  </div>
);

export default PokemonDetailLeft;
