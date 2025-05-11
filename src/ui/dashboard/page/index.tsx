import { useState } from 'react';
import {CharacterGrid} from '@/ui/dashboard/grid/characterGrid';
import Header from '@/ui/dashboard/layout/header';
import { ScrollArea } from '@/components/scroll-area';
import { Pagination } from '@/components/pagination';
import { useCharacters } from '../hooks/useCharacters';



export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const { 
    characters, 
    loading, 
    error, 
    info, 
    refetch 
  } = useCharacters(page, searchQuery);

  

  return (
        <div className="min-h-screen bg-background flex flex-col">
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main className="flex-1 container mx-auto px-4 py-6">
            <ScrollArea className="h-[calc(100vh-80px)]">
              <CharacterGrid characters={characters} isLoading={loading} />
              {info && info?.pages && info.pages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination
                    totalPages={info.pages}
                    currentPage={page}
                    onPageChange={setPage}
                  />
                </div>
              )}
            </ScrollArea>
          </main>
        </div>
  );
}