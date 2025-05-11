import { useState, useEffect } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { Input } from '@/components/ui/input';
import { Search, Zap } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [inputValue, setInputValue] = useState(searchQuery);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [inputValue, setSearchQuery]);
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-background'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Zap className="h-6 w-6 text-primary mr-2" />
          <h1 className="text-xl font-bold">Rick & Morty Explorer</h1>
        </div>
        
        <div className="flex-1 max-w-md mx-4 relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search characters..."
            className="w-full pl-9"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        
        <ModeToggle />
      </div>
    </header>
  );
}