'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/pagination/1');
    }
  };

  return (
    <button
      onClick={handleBack}
      className='btn rounded-md mb-6'
      aria-label='Go back to Pokémon list'
    >
      <ArrowLeftIcon className='size-4' aria-hidden='true' />
      <span>Back to List</span>
    </button>
  );
};

export default BackButton;
