'use client';
import { cn } from "@/lib/utils"
import { Button } from "@/ui/shared/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/shared/components/card"
import { Input } from "@/ui/shared/components/input"
import { Label } from "@/ui/shared/components/label"
import { ApiLoginRepository } from "@/modules/login/infraestructure/ApiLoginRepository";
import { useActionState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { loginAction } from "./action";
import { useEffect } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [result, formAction] = useActionState(loginAction, null);
  const navigate = useNavigate();

  useEffect(() => {
    if (result?.status === 200) {
      navigate({ to: '/admin/dashboard' });
    }
  }, [result, navigate]);

  


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>

          {result?.error && <p style={{ color: 'red' }}>{result.error}</p>}
          <form action={formAction} id="login-form">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="username"
                  autoCapitalize="none"
                  name="username"
                  placeholder="test"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
