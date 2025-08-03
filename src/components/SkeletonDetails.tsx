const SkeletonDetails = () => {
  return (
    <div className='max-w-4xl mx-auto p-4 animate-pulse'>
      <div className='h-8 w-40 bg-base-300 rounded mb-4' />
      <div className='bg-gradient-to-r to-sky-500 from-indigo-500 h-28 rounded-t-lg mb-0' />
      <div className='bg-white p-6 rounded-b-xl shadow grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='flex flex-col items-center gap-4'>
          <div className='bg-base-200 h-48 w-48 rounded-full' />
          <div className='flex gap-2'>
            <div className='badge bg-base-200 w-12 h-5'></div>
            <div className='badge bg-base-200 w-12 h-5'></div>
          </div>
          <div className='flex justify-around w-full mt-4'>
            <div className='h-5 w-16 bg-base-200 rounded'></div>
            <div className='h-5 w-16 bg-base-200 rounded'></div>
          </div>
        </div>
        <div className='space-y-3'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <div className='h-4 w-32 bg-base-200 rounded mb-1'></div>
              <div className='h-2 w-full bg-base-200 rounded'></div>
            </div>
          ))}
          <div className='h-4 w-24 bg-base-200 rounded mt-4'></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetails;
