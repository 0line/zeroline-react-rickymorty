import { useState, useEffect } from 'react';
import { Character, CharacterResponse, Info } from '@/modules/dashboard/domain/character';
import { ApiCharacterRepository } from '@/modules/dashboard/infraestructure/ApiCharacterRepository';
import { getAllCharacters } from '@/modules/dashboard/application/getAll';
import { set } from 'react-hook-form';

export function useCharacters(page: number = 1, name: string = '') {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info| null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      setError(null);
      const data: CharacterResponse = await getAllCharacters(new ApiCharacterRepository())(page, name);
      const { results, info } = data;
      setCharacters(results || []);
      setInfo(info || null);
    } catch (err) {
      console.error('Error fetching characters:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch characters');
      setCharacters([]);
      setInfo(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, name]);

  return {
    characters,
    info,
    loading,
    error,
    refetch: fetchCharacters
  };
}