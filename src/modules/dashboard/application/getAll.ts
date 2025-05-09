import { CharacterRepository } from "../domain/CharacterRepository";

export function getAllCharacters(
    repository: CharacterRepository){
        return async () => {
            try {
                return await repository.getAll();
            } catch (error) {
                if (error instanceof Error) {
                    return {
                        status: 500,
                        error: error.message
                    };
                }
                return {
                    status: 500,
                    error: 'Internal Server Error'
                };
            }
        }
    }
    
