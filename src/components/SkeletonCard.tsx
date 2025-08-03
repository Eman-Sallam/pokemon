const SkeletonCard = () => {
  return (
    <div className='card bg-base-100 w-full shadow-sm hover:shadow-xl transition p-4'>
      <div className='flex w-full flex-col gap-4 animate-pulse  items-center'>
        <div className='skeleton h-44 w-full rounded-md'></div>
        <div className='skeleton h-4 w-1/3 rounded'></div>
        <div className='skeleton h-4 w-full rounded'></div>
      </div>
    </div>
  );
};
export default SkeletonCard;
