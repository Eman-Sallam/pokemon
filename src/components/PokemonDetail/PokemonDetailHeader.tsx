import { BoltIcon } from '@heroicons/react/24/outline';

type Props = {
  name: string;
  id: string | undefined;
};

const PokemonDetailHeader = ({ name, id }: Props) => (
  <div className='bg-gradient-to-r to-sky-500 from-indigo-500 p-4 lg:p-6 rounded-t-lg text-white text-center'>
    <h1 className='text-lg lg:text-2xl font-bold capitalize flex justify-center items-center gap-1 mb-2'>
      <BoltIcon className='size-6' />
      {name}
    </h1>
    <p className='text-sm text-gray-200'>#{String(id).padStart(3, '0')}</p>
  </div>
);

export default PokemonDetailHeader;
