// tests/ApiLoginRepository.test.ts
import { describe, it, expect, vi, afterEach } from 'vitest';
import { ApiLoginRepository } from '../src/modules/login/infraestructure/ApiLoginRepository';
import { User } from '../src/modules/login/domain/User';

vi.stubGlobal('fetch', vi.fn());


describe('ApiLoginRepository', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('devuelve un usuario exitosamente', async () => {
    const fakeUser = { username: 'Test123', password: 'password@2.' } satisfies User;

    const fakeResponse = {
      username: 'Test123',
      password: 'password@2.',
      token: true
    };
    

    
    (fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => fakeResponse,
    });

    const repo = new ApiLoginRepository();
    const result = await repo.findByUserAndPassword(fakeUser);
      expect(result.status).toEqual(200);
      expect(fetch).toHaveBeenCalledWith("/users.json", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  });

  it('retorna error por las credenciales', async () => {
    const fakeUser = { username: 'Test123', password: 'wrong' };
    const fakeResponse = {
      username: 'Test123',
      password: 'password@2.',
      token: true
    };  
    (fetch as vi.Mock).mockResolvedValueOnce({ ok: true,  json: async () => fakeResponse}); 

    const repo = new ApiLoginRepository();
    const result = await repo.findByUserAndPassword(fakeUser);
    console.log(result.status);
    expect(result.status).toEqual(401);
  }); 
});
