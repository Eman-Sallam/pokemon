const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex flex-col items-center gap-3'>
        <span className='loading loading-ring   text-primary w-14'></span>
        <p className='text-sm text-neutral-500 animate-pulse'>
          Loading Pokémon...
        </p>
      </div>
    </div>
  );
};

export default Spinner;
