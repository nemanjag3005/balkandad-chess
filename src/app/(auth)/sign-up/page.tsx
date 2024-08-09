"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";

import { signUp } from "../actions";
import LogoPlain from "~/components/ui/Logos/LogoPlain";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type SignupInput = z.infer<typeof registerSchema>;

export default function Login() {
  const form = useForm<SignupInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (data: SignupInput) => {
    setSuccess("Check your email for further instructions");
    const result = await signUp(data);
    if (result?.error) {
      setSuccess(null);
      setError(result.error);
    }
  };

  return (
    <div className="flex h-screen flex-col justify-between bg-background">
      <div className="flex flex-grow items-center justify-center">
        <div className="w-full max-w-md p-8">
          <div className="mx-auto mb-8 flex w-fit items-center justify-center bg-black p-2">
            <Link href="/">
              <LogoPlain className="h-8 w-8" />
            </Link>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-2 animate-in"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans font-medium">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input {...field} autoComplete="on" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input type="password" autoComplete="on" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="default" className="my-3 w-full" type="submit">
                Sign up
              </Button>
              {success && (
                <div className="mb-3 mt-1 rounded-md border border-border bg-secondary/50 p-3">
                  <p className="text-center text-sm font-medium text-muted-foreground">
                    {success}
                  </p>
                </div>
              )}
              {error && (
                <div className="mb-3 mt-1 rounded-md border border-destructive bg-destructive/10 p-3">
                  <p className="text-center text-sm font-medium text-destructive">
                    {error}
                  </p>
                </div>
              )}
            </form>
          </Form>
          <div className="mt-4 flex items-center justify-center">
            <Button variant="link" className="text-muted-foreground">
              Forgot password?
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 py-8 font-sans text-sm">
        <p className="py-4 text-center text-sm text-muted-foreground underline">
          <Link href="/login">Already have an account? Sign in</Link>
        </p>
      </div>
    </div>
  );
}