import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import axios from 'axios';
import api from '@/lib/axios';
import PokemonDetailBox from '@/components/PokemonDetail/PokemonDetailBox';
import type { PokemonDetailResponse } from '@/types/pokemonDetails';
import BackButton from '@/components/PokemonDetail/BackButton';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import ErrorMessage from '@/components/shared/ErrorMessage';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getPokemonData(
  id: string
): Promise<PokemonDetailResponse | null> {
  try {
    const res = await api.get<PokemonDetailResponse>(`/pokemon/${id}`);
    return res.data;
  } catch (error) {
    // If 404 or invalid, return null
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error; // Re-throw other errors
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const parsedId = Number(id);
  const isValidId = !isNaN(parsedId) && parsedId > 0;

  if (!isValidId) {
    return {
      title: 'Pokémon Not Found',
    };
  }

  try {
    const data = await getPokemonData(id);
    if (!data) {
      return {
        title: 'Pokémon Not Found',
      };
    }

    return {
      title: `${
        data.name.charAt(0).toUpperCase() + data.name.slice(1)
      } - Pokédex`,
      description: `View details for ${data.name}, including stats, abilities, types, height, and weight.`,
    };
  } catch {
    return {
      title: 'Pokémon Details',
    };
  }
}

export default async function PokemonDetail({ params }: PageProps) {
  const { id } = await params;

  // Validate id
  const parsedId = Number(id);
  const isValidId = !isNaN(parsedId) && parsedId > 0;

  if (!isValidId) {
    notFound();
  }

  try {
    const data = await getPokemonData(id);

    if (!data) {
      notFound();
    }

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
  } catch (error) {
    return <ErrorMessage message='Error loading Pokémon Details.' />;
  }
}
