
import { CharacterRepository } from "../domain/CharacterRepository";

export function getAllCharacters(
    repository: CharacterRepository){
        return async (page: number, name: string) => {
            try {
                return await repository.getAll(page, name);
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
    
