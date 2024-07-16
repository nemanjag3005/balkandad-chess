import React from "react";
import { createClient } from "~/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoPlain from "~/components/ui/Logos/LogoPlain";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }
  return <>{children}</>;
};

export default RootLayout;
