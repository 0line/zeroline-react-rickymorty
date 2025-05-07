'use server';

import { ApiLoginRepository } from "@/modules/login/infraestructure/ApiLoginRepository";
import { Login} from "@/modules/login/application/login";
import { User } from "@/modules/login/domain/User";


export async function loginAction(_: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const payload = { username, password } satisfies User;
  const repo = new ApiLoginRepository();
  const login = new Login(repo);
  const result = await login.execute(payload);
  
  if (result.status === 200) {
    const token = result.data?.token;
        if (token) {
            localStorage.setItem("token", token);
        }
    }
  return result;
}