import type { PokemonAbility, PokemonStat } from '../../types/pokemonDetails';

type Props = {
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  base_experience: number;
};

const PokemonDetailRight = ({ stats, abilities, base_experience }: Props) => (
  <div>
    <h3 className='font-bold text-lg mb-3'>Base Stats</h3>
    <ul
      className='space-y-2 mb-6'
      role='list'
      aria-label='Pokémon base statistics'
    >
      {stats.map((s) => (
        <li key={s.stat.name} role='listitem'>
          <div className='flex justify-between text-sm'>
            <span className='capitalize'>{s.stat.name}</span>
            <span aria-label={`${s.stat.name} value: ${s.base_stat}`}>
              {s.base_stat}
            </span>
          </div>
          <progress
            className='progress progress-neutral w-full'
            value={s.base_stat}
            max={250}
            aria-label={`${s.stat.name}: ${s.base_stat} out of 250`}
            aria-valuenow={s.base_stat}
            aria-valuemin={0}
            aria-valuemax={250}
          />
        </li>
      ))}
    </ul>

    <h3 className='font-bold text-lg mb-3'>Abilities</h3>
    <ul className='mb-6 space-y-2' role='list' aria-label='Pokémon abilities'>
      {abilities.map((a) => (
        <li key={a.ability.name} role='listitem'>
          <span
            className={`badge rounded-full capitalize font-semibold ${
              a.is_hidden
                ? 'badge-ghost bg-gray-100'
                : 'badge-outline border-gray-300 '
            }`}
            aria-label={
              a.is_hidden
                ? `${a.ability.name} (hidden ability)`
                : a.ability.name
            }
          >
            {a.ability.name}
          </span>
          {a.is_hidden && (
            <span className='text-xs ml-2 text-mute' aria-hidden='true'>
              (Hidden)
            </span>
          )}
        </li>
      ))}
    </ul>

    <div className='text-sm'>
      <h3 className='font-bold text-lg mb-2'>Base Experience</h3>
      <span
        className='text-sky-500 font-bold text-xl'
        aria-label={`Base experience: ${base_experience} XP`}
      >
        {base_experience} XP
      </span>
    </div>
  </div>
);

export default PokemonDetailRight;
