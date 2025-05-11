import { CharacterResponse, Character } from "../domain/character";
import { CharacterRepository } from "../domain/CharacterRepository";

const API_URL = 'https://rickandmortyapi.com/api';

export class ApiCharacterRepository implements CharacterRepository {
    
    async getAll(page: number, name: string): Promise<CharacterResponse> {
        let url = `${API_URL}/character?page=${page}`;
        if (name) {
          url += `&name=${name}`;
        }
        const response = await fetch(`${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            return {
                statusCode: 500,
                error: 'Error fetching characters'
            }
        } 
        const data = await response.json();
        return data;
    }

    async getById(id: string): Promise<Character> {
        const response = await fetch(`${API_URL}/character/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            return {
                statusCode: 500,
                error: 'Error fetching character'
            }
        } 
        return await response.json();
    }
}