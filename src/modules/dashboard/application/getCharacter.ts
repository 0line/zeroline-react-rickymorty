import { CharacterRepository } from "../domain/CharacterRepository";

export function getCharacter(
    repository: CharacterRepository){
        return async (id: number|string|null|undefined) => {
            try {
                return await repository.getById(id);
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
    
