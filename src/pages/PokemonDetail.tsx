import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/axios';
import PokemonDetailBox from '../components/PokemonDetail/PokemonDetailBox';
import type { PokemonDetailResponse } from '../types/pokemonDetails';
import SkeletonDetails from '../components/PokemonDetail/SkeletonDetails';
import BackButton from '../components/PokemonDetail/BackButton';
import ErrorBoundary from '../components/shared/ErrorBoundary';
import ErrorMessage from '../components/shared/ErrorMessage';
import NotFoundPokemon from '../components/shared/NotFoundPokemon';

const PokemonDetail = () => {
  const { id } = useParams();

  // id should be a number
  const parsedId = Number(id);
  const isValidId = !isNaN(parsedId) && parsedId > 0;

  const { data, isLoading, isFetching, isError } =
    useQuery<PokemonDetailResponse>({
      queryKey: ['pokemon', id],
      queryFn: async () => {
        const res = await api.get(`/pokemon/${id}`);
        return res.data;
      },
      enabled: !!id,
      retry: false, // prevents retrying 404s
    });

  if (!isValidId || isError || !data) {
    return <NotFoundPokemon />;
  }

  if (isLoading || isFetching) return <SkeletonDetails />;

  if (isError) return <ErrorMessage message='Error loading Pokémon Details.' />;

  if (!data) return null;

  const {
    name,
    types,
    height,
    weight,
    base_experience,
    stats,
    abilities,
    sprites,
  } = data;

  return (
    <>
      <BackButton />

      <ErrorBoundary>
        <PokemonDetailBox
          id={id}
          name={name}
          sprites={sprites}
          types={types}
          height={height}
          weight={weight}
          stats={stats}
          abilities={abilities}
          base_experience={base_experience}
        />
      </ErrorBoundary>
    </>
  );
};
export default PokemonDetail;
