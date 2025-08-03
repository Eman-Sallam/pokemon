import type {
  PokemonAbility,
  PokemonSprites,
  PokemonStat,
  PokemonType,
} from '../../types/pokemonDetails';
import PokemonDetailHeader from './PokemonDetailHeader';
import PokemonDetailLeft from './PokemonDetailLeft';
import PokemonDetailRight from './PokemonDetailRight';

type Props = {
  id: string | undefined;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  height: number;
  weight: number;
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  base_experience: number;
};

const PokemonDetailBox = ({
  id,
  name,
  sprites,
  types,
  height,
  weight,
  stats,
  abilities,
  base_experience,
}: Props) => (
  <div className='max-w-4xl mx-auto'>
    <PokemonDetailHeader id={id} name={name} />

    <div className='bg-white rounded-b-xl p-6 grid md:grid-cols-2 gap-12 shadow'>
      <PokemonDetailLeft
        name={name}
        sprites={sprites}
        types={types}
        height={height}
        weight={weight}
      />
      <PokemonDetailRight
        stats={stats}
        abilities={abilities}
        base_experience={base_experience}
      />
    </div>
  </div>
);

export default PokemonDetailBox;
