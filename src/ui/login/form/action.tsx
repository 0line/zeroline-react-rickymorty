'use server';

import { ApiLoginRepository } from "@/modules/login/infraestructure/ApiLoginRepository";
import { Login} from "@/modules/login/application/login";
import { User } from "@/modules/login/domain/User";
import { useAuthStore } from '@/ui/shared/store/authStore';


export async function loginAction(_: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const payload = { username, password } satisfies User;
  const repo = new ApiLoginRepository();
  const login = new Login(repo);
  const result = await login.execute(payload);
  const { setToken } = useAuthStore.getState();
  if (result.status === 200) {
    const token = result.data?.token;
        if (token) {
            setToken(token);
        }
    }
  return result;
}