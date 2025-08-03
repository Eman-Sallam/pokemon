const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex flex-col items-center '>
        <img src='/pokémonLogo.svg' className='animate-pulse' />
        <p className='text-sm text-neutral-500 animate-pulse'>
          <span className='loading loading-ring text-primary loading-lg me-2'></span>
          Loading .....
        </p>
      </div>
    </div>
  );
};

export default Spinner;
