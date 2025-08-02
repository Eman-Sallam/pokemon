import './App.css';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='container min-h-screen py-4'>
      {/* This renders the main content of the pages */}
      <Outlet />
    </div>
  );
}
