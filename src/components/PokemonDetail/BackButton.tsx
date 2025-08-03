import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <button onClick={handleBack} className='btn rounded-md mb-6'>
      <ArrowLeftIcon className='size-4' />
      Back to List
    </button>
  );
};

export default BackButton;
