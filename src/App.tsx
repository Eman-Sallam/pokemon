import './App.css';
import { Outlet } from 'react-router-dom';
import ScrollToTopButton from './components/shared/ScrollToTopButton';

export default function App() {
  return (
    <div className='container min-h-screen p-6'>
      {/* This renders the main content of the pages */}
      <Outlet />
      <ScrollToTopButton />
    </div>
  );
}
