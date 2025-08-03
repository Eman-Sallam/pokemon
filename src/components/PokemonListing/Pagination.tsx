import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getVisiblePages } from '../../utils/getVisiblePages';

type Props = {
  page: number;
  totalPages: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, totalPages, perPage, onPageChange }: Props) => {
  const visiblePages = getVisiblePages(page, totalPages);

  return (
    <div className='flex flex-col items-center gap-3 my-8'>
      <div className='flex flex-wrap items-center gap-2'>
        <button
          className='btn btn-sm bg-white rounded-md gap-1'
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          <ChevronLeftIcon className='size-3.5' />
          <span className='hidden sm:inline'>Previous</span>
        </button>

        {visiblePages.map((p, i) =>
          p === '...' ? (
            <span key={i} className='hidden sm:inline px-2 text-gray-500'>
              …
            </span>
          ) : (
            <button
              key={`${p}-${i}`}
              className={`btn btn-sm rounded-md ${
                page === p ? 'btn-neutral py-4' : 'btn bg-white'
              }${
                typeof p === 'number' &&
                Math.abs(p - page) > 1 &&
                ' hidden sm:inline'
              }`}
              onClick={() => onPageChange(Number(p))}
            >
              {p}
            </button>
          )
        )}

        <button
          className='btn btn-sm bg-white rounded-md gap-1'
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        >
          <span className='hidden sm:inline'>Next</span>
          <ChevronRightIcon className='size-3.5' />
        </button>
      </div>

      <p className='text-sm text-gray-600'>
        Page {page} of {totalPages} ({perPage} Pokémon shown)
      </p>
    </div>
  );
};
export default Pagination;
