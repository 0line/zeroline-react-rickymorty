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
      status: 200,
      message: "User Login successfully",
      data: {
          token: "true",
          user: {
              username: "Test123"
          }
      }
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
      status: 500,
      error: 'Error fetching users'
    };  
    (fetch as vi.Mock).mockResolvedValueOnce({ ok: false,  json: async () => fakeResponse}); 

    const repo = new ApiLoginRepository();
    const result = await repo.findByUserAndPassword(fakeUser);
    expect(result.status).toEqual(500);
  }); 
});
