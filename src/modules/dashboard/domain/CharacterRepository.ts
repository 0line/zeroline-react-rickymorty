import { Character, CharacterResponse } from "./character";

export interface CharacterRepository {
    getAll(page:number, name:string): Promise<CharacterResponse>;
    getById(id: string| number| null| undefined): Promise<Character>;
}