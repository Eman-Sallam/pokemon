import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import NotFoundPage from './pages/NotFound';

const App = lazy(() => import('./App'));
const PaginationListView = lazy(() => import('./pages/PaginationListView'));
const LoadMoreListView = lazy(() => import('./pages/LoadMoreListView'));
const PokemonDetail = lazy(() => import('./pages/PokemonDetail'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PaginationListView /> },
      { path: 'load-more-listing', element: <LoadMoreListView /> },
      { path: 'pokemon/:id', element: <PokemonDetail /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
