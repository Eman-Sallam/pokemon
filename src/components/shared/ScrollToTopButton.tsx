import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-6 right-6 z-50 btn btn-circle btn-neutral shadow-lg opacity-70 hover:opacity-100 transition-all'
      aria-label='Scroll to top'
    >
      <ChevronDoubleUpIcon className=' h-6 w-6 stroke-2' />
    </button>
  );
};

export default ScrollToTopButton;
