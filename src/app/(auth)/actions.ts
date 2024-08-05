"use server";

import { createClient } from "~/utils/supabase/server";
import { headers } from "next/headers";
import { LoginInput } from "./login/page";
import { SignupInput } from "./checkout/page";

const supabase = createClient();
const origin = headers().get("origin");

export const signUp = async (data: SignupInput) => {
  "use server";

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }
};

export const signIn = async (data: LoginInput) => {
  "use server";

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  if (error) {
    return {
      error: error.message,
    };
  }
};
