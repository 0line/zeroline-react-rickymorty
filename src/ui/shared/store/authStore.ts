import { create } from 'zustand';

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  // Leer y parsear el valor de localStorage como booleano
  token: JSON.parse(localStorage.getItem('token') ?? 'false'),

  setToken: (value) => {
    localStorage.setItem('token', JSON.stringify(value));
    set({ token: value });
  },

  isAuthenticated: () => get().token === 'true',
}));
