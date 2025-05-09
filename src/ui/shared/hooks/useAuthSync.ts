// hooks/useAuthSync.ts
import { useEffect } from 'react';
import { useAuthStore } from '@/ui/shared/store/authStore';
import { useNavigate } from '@tanstack/react-router';


export const useAuthSync = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate(); 

  useEffect(() => {
    const syncToken = (e: StorageEvent) => {
      if (e.key === 'token' && e.newValue !== 'true') {
        navigate ( {to: '/'})
      }
    };
    window.addEventListener('storage', syncToken);
    return () => window.removeEventListener('storage', syncToken);
  }, [setToken]);
};
