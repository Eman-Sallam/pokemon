import type { PokemonAbility, PokemonStat } from '../../types/pokemonDetails';

type Props = {
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  base_experience: number;
};

const PokemonDetailRight = ({ stats, abilities, base_experience }: Props) => (
  <div>
    <h3 className='font-bold text-lg mb-3'>Base Stats</h3>
    <ul className='space-y-2 mb-6'>
      {stats.map((s) => (
        <li key={s.stat.name}>
          <div className='flex justify-between text-sm'>
            <span className='capitalize'>{s.stat.name}</span>
            <span>{s.base_stat}</span>
          </div>
          <progress
            className='progress progress-neutral w-full'
            value={s.base_stat}
            max={250}
          />
        </li>
      ))}
    </ul>

    <h3 className='font-bold text-lg mb-3'>Abilities</h3>
    <ul className='mb-6 space-y-2'>
      {abilities.map((a) => (
        <li key={a.ability.name}>
          <span
            className={`badge rounded-full capitalize font-semibold ${
              a.is_hidden
                ? 'badge-ghost bg-gray-100'
                : 'badge-outline border-gray-300 '
            }`}
          >
            {a.ability.name}
          </span>
          {a.is_hidden && (
            <span className='text-xs ml-2 text-mute'>(Hidden)</span>
          )}
        </li>
      ))}
    </ul>

    <div className='text-sm'>
      <h3 className='font-bold text-lg mb-2'>Base Experience</h3>
      <span className='text-sky-500 font-bold text-xl'>
        {base_experience} XP
      </span>
    </div>
  </div>
);

export default PokemonDetailRight;
