import { createBrowserRouter } from 'react-router-dom';
import PaginationListView from './pages/PaginationListView.tsx';
import LoadMoreListView from './pages/LoadMoreListView.tsx';
import PokemonDetail from './pages/Detail.tsx';
import App from './App.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PaginationListView /> },
      { path: 'load-more-listing', element: <LoadMoreListView /> },
      { path: 'pokemon/:id', element: <PokemonDetail /> },
    ],
  },
]);
