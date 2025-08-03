import { Link } from 'react-router-dom';
import dittoImg from '../assets/ditto-placeholder.png';

const NotFoundPage = () => {
  return (
    <div className='h-[500px] flex flex-col items-center justify-center text-center p-6 bg-white lg:w-1/2 m-auto rounded-lg'>
      <img
        src={dittoImg}
        alt='Lost Ditto'
        className='w-48 h-48 object-contain mb-6 animate-bounce'
      />

      <h1 className='text-5xl font-bold text-gray-800 mb-2'>404</h1>
      <p className='text-lg text-gray-600 mb-6'>
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link to='/' className='btn btn-neutral'>
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
