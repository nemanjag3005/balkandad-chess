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
  return (
    <>
      <Link href={"/"} className="absolute left-6 top-4 shrink-0 lg:left-14">
        <LogoPlain className="h-8 w-8" />
      </Link>
      {children}
    </>
  );
};

export default RootLayout;
