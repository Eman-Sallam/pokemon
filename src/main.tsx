import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaginationListView from './pages/PaginationListView.tsx';
import LoadMoreListView from './pages/LoadMoreListView.tsx';
import PokemonDetail from './pages/Detail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PaginationListView />,
  },
  {
    path: '/load-more-listing',
    element: <LoadMoreListView />,
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetail />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
