export interface CharacterResponse {
    info?: Info
    results?: Character[];
    statusCode?: number;
    error?: string;
  }
  
  export interface Character {
    id?: number;
    name?: string;
    status?: 'Alive' | 'Dead' | 'unknown';
    species?: string;
    type?: string;
    gender?: 'Male' | 'Female' | 'Genderless' | 'unknown';
    origin?: {
      name?: string;
      url?: string;
    };
    location?: {
      name?: string;
      url?: string;
    };
    image?: string;
    episode?: string[];
    url?: string;
    created?: string; // ISO date string
    statusCode?: number;
    error?: string;
  }
  
  export interface Info {
    count?: number;
    pages?: number;
    next?: string;
    prev?: string;
  }

  export function isValidCharacter(value: string| number) { // Elimina todos los espacios
    if (value === null || value === undefined) {
      return false;
    }
    if(typeof value === 'string') {
      return value.replace(/\s+/g, '').length > 0 && value !== '0'
    }
    if(typeof value === 'number') {
      return value > 0;
    }
  }

  export function CharacterNotValidError(character: string| number): Error {
    return new Error(`This character id: ${character} is not valid`);
  }