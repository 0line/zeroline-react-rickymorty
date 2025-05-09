import { Character, CharacterResponse } from "./character";

export interface CharacterRepository {
    getAll(): Promise<CharacterResponse>;
    getById(id: string): Promise<Character>;
}