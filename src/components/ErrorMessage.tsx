import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const ErrorMessage = ({
  message = 'Error! Something went wrong.',
}: {
  message?: string;
}) => {
  return (
    <>
      <div
        role='alert'
        className='alert alert-error alert-soft alert-vertical sm:alert-horizontal lg:w-1/2 mx-auto my-6'
      >
        <ExclamationTriangleIcon className='stroke-red-700 h-6 w-6 shrink-0' />
        <h3 className='font-bold text-red-700'>{message}!</h3>
        <div>
          <button
            className='btn btn-neutral btn-sm'
            onClick={() => window.location.reload()}
          >
            Please try again
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;
