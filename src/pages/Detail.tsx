/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowLeftIcon, BoltIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/axios';
import type { PokemonDetailResponse } from '../types/pokemon';
import ruler from '../assets/ruler.svg';
import weightIco from '../assets/weight.svg';
import SkeletonDetails from '../components/SkeletonDetails';

const PokemonDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery<PokemonDetailResponse>({
    queryKey: ['pokemon', id],
    queryFn: async () => {
      const res = await api.get(`/pokemon/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (!data) return null;

  const {
    name,
    types,
    height,
    weight,
    base_experience,
    stats,
    abilities,
    sprites,
  } = data;

  if (isLoading) return <SkeletonDetails />;

  if (isError || !data) {
    return (
      <div className='text-center mt-10 text-error'>
        Error loading Pokémon details. Try again later.
      </div>
    );
  }

  return (
    <>
      <Link to='/' className='btn rounded-md mb-4'>
        <ArrowLeftIcon className='size-4' />
        Back to List
      </Link>

      {/* Pokemon Detail Box */}
      <div className='p-4 max-w-4xl mx-auto'>
        {/* Header */}
        <div className='bg-gradient-to-r to-sky-500 from-indigo-500 p-6 rounded-t-lg text-white text-center'>
          <h1 className='text-2xl font-bold capitalize flex justify-center items-center gap-1 mb-2'>
            <BoltIcon className='size-6' />
            {name}
          </h1>
          <p className='text-sm text-gray-300'>
            #{String(id).padStart(3, '0')}
          </p>
        </div>

        {/* Content */}
        <div className='bg-white rounded-b-xl p-8 grid md:grid-cols-2 gap-12 shadow'>
          {/* Left Side */}
          <div className='flex flex-col items-center'>
            <div className='avatar'>
              <div className='h-72 rounded-full bg-gray-100'>
                <img
                  src={sprites.other['official-artwork'].front_default}
                  alt={name}
                  className='object-contain'
                />
              </div>
            </div>

            <div className='flex gap-2 mt-6'>
              {types.map((t: any) => (
                <span
                  key={t.type.name}
                  className='badge badge-secondary rounded-full capitalize'
                >
                  {t.type.name}
                </span>
              ))}
            </div>

            <div className='mt-6 grid grid-cols-2 gap-6  w-full'>
              <div className='text-center bg-gray-100 p-4 rounded-md'>
                <p className='text-sm text-mute mb-1 flex items-center justify-center gap-1'>
                  <img src={ruler} alt='Height' className='w-5 ' />
                  Height
                </p>
                <p className='font-bold'>{height / 10} m</p>
              </div>
              <div className='text-center bg-gray-100 p-4 rounded-md'>
                <p className='text-sm text-mute mb-1 flex items-center justify-center gap-1'>
                  <img
                    src={weightIco}
                    alt='weight'
                    className='w-5 fill-mute '
                  />
                  Weight
                </p>
                <p className='font-bold'>{weight / 10} kg</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h3 className='font-bold text-lg mb-3'>Base Stats</h3>
            <ul className='space-y-2 mb-6'>
              {stats.map((s: any) => (
                <li key={s.stat.name}>
                  <div className='flex justify-between text-sm'>
                    <span className='capitalize'>{s.stat.name}</span>
                    <span>{s.base_stat}</span>
                  </div>
                  <progress
                    className='progress progress-neutral w-full'
                    value={s.base_stat}
                    max={150}
                  ></progress>
                </li>
              ))}
            </ul>

            <h3 className='font-bold text-lg mb-3'>Abilities</h3>
            <ul className='mb-6 space-y-2'>
              {abilities.map((a: any) => (
                <li key={a.ability.name}>
                  <span
                    className={`badge rounded-full capitalize font-semibold ${
                      a.is_hidden
                        ? 'badge-ghost'
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

            <p className='text-sm'>
              <h3 className='font-bold text-lg mb-2'>Base Experience</h3>
              <span className='text-sky-500 font-bold text-xl'>
                {base_experience} XP
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PokemonDetail;
