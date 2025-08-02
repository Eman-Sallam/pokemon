import { Link } from 'react-router-dom';

const PaginationListView = () => {
  return (
    <div>
      <Link to='/' className='btn btn-primary'>
        Pagination View
      </Link>

      <Link to='/load-more-listing' className='btn btn-neutral'>
        Load More View
      </Link>
    </div>
  );
};
export default PaginationListView;
