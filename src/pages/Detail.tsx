import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { id } = useParams();

  return (
    <>
      <div className='text-xl font-bold'>pokemon Detail View: {id}</div>
    </>
  );
};
export default PokemonDetail;
