import Image from 'next/image';

const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex flex-col items-center '>
        <Image
          src='/pokémonLogo.svg'
          alt='Loading'
          width={100}
          height={100}
          className='animate-pulse'
        />
        <p className='text-sm text-neutral-500 animate-pulse'>
          <span className='loading loading-ring text-primary loading-lg me-2'></span>
          Loading .....
        </p>
      </div>
    </div>
  );
};

export default Spinner;
